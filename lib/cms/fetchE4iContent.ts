import { defaultE4iContent, type E4iContent, type NavLink, type SocialLink } from "./e4iContent";

const SITE_CODE = "educationforinnovation";

type SectionRow = {
  section_type: string;
  sort_order: number;
  data_json: Record<string, unknown>;
};

type MenuRow = {
  location: string;
  menu_items?: Array<{
    label: string;
    url: string | null;
    sort_order: number;
    is_visible: boolean;
  }>;
};

function env() {
  return {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function mergeRecord<T extends object>(base: T, patch: unknown): T {
  if (!isRecord(patch)) return base;
  return { ...base, ...patch } as T;
}

function cleanLinks(rows: unknown, fallback: NavLink[]): NavLink[] {
  if (!Array.isArray(rows)) return fallback;
  const links = rows
    .map((row) => {
      if (!isRecord(row)) return null;
      const label = typeof row.label === "string" ? row.label : "";
      const href = typeof row.href === "string" ? row.href : typeof row.url === "string" ? row.url : "";
      return label && href ? { label, href } : null;
    })
    .filter(Boolean) as NavLink[];
  return links.length ? links : fallback;
}

function cleanSocial(rows: unknown, fallback: SocialLink[]): SocialLink[] {
  if (!Array.isArray(rows)) return fallback;
  const links = rows
    .map((row) => {
      if (!isRecord(row)) return null;
      const name = typeof row.name === "string" ? row.name : typeof row.label === "string" ? row.label : "";
      const url = typeof row.url === "string" ? row.url : typeof row.href === "string" ? row.href : "";
      return name && url ? { name, url } : null;
    })
    .filter(Boolean) as SocialLink[];
  return links.length ? links : fallback;
}

function cleanArray<T>(rows: unknown, fallback: T[]): T[] {
  return Array.isArray(rows) && rows.length ? (rows as T[]) : fallback;
}

async function restGet<T>(path: string): Promise<T | null> {
  const { url, anonKey } = env();
  if (!url || !anonKey) return null;

  const response = await fetch(`${url}/rest/v1/${path}`, {
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
    },
  });

  if (!response.ok) return null;
  return (await response.json()) as T;
}

function applySections(content: E4iContent, sections: SectionRow[]): E4iContent {
  const byType = new Map(sections.map((section) => [section.section_type, section.data_json]));

  const nav = mergeRecord(content.nav, byType.get("e4i_nav"));
  const hero = mergeRecord(content.hero, byType.get("e4i_hero"));
  const mission = mergeRecord(content.mission, byType.get("e4i_mission"));
  const programs = mergeRecord(content.programs, byType.get("e4i_programs"));
  const projects = mergeRecord(content.projects, byType.get("e4i_projects"));
  const presence = mergeRecord(content.presence, byType.get("e4i_presence"));
  const partners = mergeRecord(content.partners, byType.get("e4i_partners"));
  const blog = mergeRecord(content.blog, byType.get("e4i_blog"));
  const contact = mergeRecord(content.contact, byType.get("e4i_contact"));
  const footer = mergeRecord(content.footer, byType.get("e4i_footer"));

  return {
    ...content,
    nav: {
      ...nav,
      links: cleanLinks(nav.links, content.nav.links),
    },
    hero: {
      ...hero,
      stats: cleanArray(hero.stats, content.hero.stats),
    },
    mission: {
      ...mission,
      values: cleanArray(mission.values, content.mission.values),
    },
    programs: {
      ...programs,
      items: cleanArray(programs.items, content.programs.items),
    },
    projects: {
      ...projects,
      items: cleanArray(projects.items, content.projects.items),
    },
    presence: {
      ...presence,
      cities: cleanArray(presence.cities, content.presence.cities),
    },
    partners: {
      ...partners,
      items: cleanArray(partners.items, content.partners.items),
    },
    blog: {
      ...blog,
      posts: cleanArray(blog.posts, content.blog.posts),
    },
    contact: {
      ...contact,
      cards: cleanArray(contact.cards, content.contact.cards),
    },
    footer: {
      ...footer,
      links: cleanLinks(footer.links, content.footer.links),
      socials: cleanSocial(footer.socials, content.footer.socials),
    },
  };
}

function applyMenus(content: E4iContent, menus: MenuRow[]): E4iContent {
  const header = menus.find((menu) => menu.location === "header");
  const footer = menus.find((menu) => menu.location === "footer");

  const toLinks = (menu: MenuRow | undefined, fallback: NavLink[]) => {
    const rows = (menu?.menu_items ?? [])
      .filter((item) => item.is_visible)
      .sort((a, b) => a.sort_order - b.sort_order)
      .map((item) => ({ label: item.label, href: item.url ?? "#" }));
    return rows.length ? rows : fallback;
  };

  return {
    ...content,
    nav: {
      ...content.nav,
      links: toLinks(header, content.nav.links),
    },
    footer: {
      ...content.footer,
      links: toLinks(footer, content.footer.links),
    },
  };
}

export async function fetchE4iContent(): Promise<E4iContent> {
  let content = defaultE4iContent;
  const sites = await restGet<Array<{ id: string }>>(
    `sites?select=id&code=eq.${SITE_CODE}&is_active=eq.true&limit=1`
  );
  const siteId = sites?.[0]?.id;
  if (!siteId) return content;

  const pages = await restGet<Array<{ id: string }>>(
    `pages?select=id&site_id=eq.${siteId}&slug=eq.home&status=eq.active&limit=1`
  );
  const pageId = pages?.[0]?.id;
  if (pageId) {
    const sections = await restGet<SectionRow[]>(
      `page_sections?select=section_type,sort_order,data_json&page_id=eq.${pageId}&order=sort_order.asc`
    );
    if (sections?.length) content = applySections(content, sections);
  }

  const menus = await restGet<MenuRow[]>(
    `menus?select=location,menu_items(label,url,sort_order,is_visible)&site_id=eq.${siteId}&is_active=eq.true`
  );
  if (menus?.length) content = applyMenus(content, menus);

  return content;
}
