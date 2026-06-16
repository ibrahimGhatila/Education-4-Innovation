type SkylineProps = {
  className?: string;
};

/**
 * World-city skyline silhouette with recognizable landmarks, left→right:
 * Golden Gate Bridge · Statue of Liberty · Empire State · London Eye ·
 * Big Ben · Duomo di Milano · Istanbul mosque + minarets · Galata Tower ·
 * Brandenburg Gate · Burj Khalifa · Berlin TV Tower · Amsterdam gables.
 *
 * A very faint brand-colour shimmer drifts across the silhouette (masked to
 * the city shape) for a subtle, minimal glow.
 */
export default function Skyline({ className = "" }: SkylineProps) {
  return (
    <svg
      viewBox="0 0 1600 300"
      fill="none"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="skyFill" x1="0" y1="70" x2="0" y2="300" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient id="skyFillBack" x1="0" y1="230" x2="0" y2="300" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.015" />
        </linearGradient>

        {/* Drifting brand-colour shimmer bands (kept very faint) */}
        <linearGradient id="skyShimmerA" x1="0" y1="0" x2="700" y2="0" gradientUnits="userSpaceOnUse" spreadMethod="repeat">
          <stop offset="0.00" stopColor="#6F2AA4" stopOpacity="0" />
          <stop offset="0.14" stopColor="#6F2AA4" stopOpacity="0.5" />
          <stop offset="0.28" stopColor="#FB7F0D" stopOpacity="0.5" />
          <stop offset="0.42" stopColor="#7BD32C" stopOpacity="0.45" />
          <stop offset="0.56" stopColor="#6F2AA4" stopOpacity="0" />
          <stop offset="1.00" stopColor="#6F2AA4" stopOpacity="0" />
          <animateTransform attributeName="gradientTransform" type="translate" from="0 0" to="700 0" dur="22s" repeatCount="indefinite" />
        </linearGradient>
        <filter id="skySoft" x="-10%" y="-30%" width="120%" height="160%">
          <feGaussianBlur stdDeviation="7" />
        </filter>

        {/* All building + landmark masses, defined once for reuse */}
        <g id="cityShapes">
          {/* low connector buildings */}
          <path d="M0 300 V252 H58 V300 Z M58 300 V230 H96 V300 Z M340 300 V248 H392 V300 Z M392 300 V224 H432 V300 Z M566 300 V206 H592 V300 Z M598 300 V178 H626 V300 Z M632 300 V236 H662 V300 Z M730 300 V232 H760 V300 Z M800 300 V214 H842 V300 Z M842 300 V244 H878 V300 Z M1002 300 V238 H1040 V300 Z M1214 300 V240 H1250 V300 Z M1382 300 V236 H1410 V300 Z M1440 300 V250 H1462 V300 Z M1572 300 V252 H1600 V300 Z" />

          {/* Golden Gate Bridge towers */}
          <path d="M150 300 V118 H164 V300 Z M300 300 V118 H314 V300 Z" />

          {/* Statue of Liberty */}
          <path d="M442 300 V252 H486 V300 Z M450 252 V234 H478 V252 Z M457 234 L462 178 H466 L471 234 Z M469 188 L482 150 H486 L474 190 Z" />
          <circle cx="464" cy="172" r="6" />
          <path d="M484 150 c4 -8 -1 -12 -3 -16 c-2 4 -7 8 -3 16 Z" />

          {/* Empire State Building */}
          <path d="M500 300 V152 H558 V300 Z M510 152 V124 H548 V152 Z M520 124 V100 H538 V124 Z M527 100 V74 H531 V100 Z" />

          {/* London Eye base platform */}
          <path d="M656 300 V288 H726 V300 Z" />

          {/* Big Ben */}
          <path d="M764 300 V122 H794 V300 Z M762 122 V106 H796 V122 Z M764 106 L779 74 L794 106 Z" />

          {/* Duomo di Milano */}
          <path d="M886 300 V204 H1002 V300 Z M890 204 L896 176 L902 204 Z M906 204 L912 178 L918 204 Z M922 204 L928 172 L934 204 Z M938 204 L950 120 L962 204 Z M966 204 L972 172 L978 204 Z M982 204 L988 178 L994 204 Z" />
          <circle cx="950" cy="116" r="3" />

          {/* Istanbul mosque + minarets */}
          <path d="M1058 300 V216 H1152 V300 Z" />
          <path d="M1060 216 A16 16 0 0 1 1092 216 Z M1118 216 A16 16 0 0 1 1150 216 Z M1076 216 A30 28 0 0 1 1134 216 Z" />
          <path d="M1103 188 V174 H1107 V188 Z M1050 300 V126 H1058 V300 Z M1047 156 H1061 V150 H1047 Z M1050 126 L1054 108 L1058 126 Z M1152 300 V126 H1160 V300 Z M1149 156 H1163 V150 H1149 Z M1152 126 L1156 108 L1160 126 Z" />
          <circle cx="1105" cy="171" r="3" />

          {/* Galata Tower */}
          <path d="M1180 300 V178 H1202 V300 Z M1177 178 L1191 150 L1205 178 Z M1176 174 H1206 V169 H1176 Z" />

          {/* Brandenburg Gate */}
          <path d="M1256 300 V176 H1330 V300 Z M1252 176 H1334 V162 H1252 Z M1282 162 V150 H1304 V162 Z" />

          {/* Burj Khalifa */}
          <path d="M1344 300 L1352 120 L1357 78 L1361 44 L1365 78 L1370 120 L1378 300 Z" />

          {/* Berlin TV Tower */}
          <path d="M1424 300 V128 H1432 V300 Z M1426 106 V70 H1430 V106 Z" />
          <circle cx="1428" cy="118" r="12" />

          {/* Amsterdam canal houses */}
          <path d="M1466 300 V238 H1492 V300 Z M1466 238 Q1479 216 1492 238 Z M1494 300 V230 H1518 V300 Z M1494 230 H1502 V222 H1510 V214 H1518 V230 Z M1520 300 V242 H1544 V300 Z M1520 242 L1532 224 L1544 242 Z M1546 300 V234 H1572 V300 Z M1546 234 Q1559 214 1572 234 Z" />
        </g>

        <mask id="cityMask">
          <use href="#cityShapes" fill="#ffffff" />
        </mask>
      </defs>

      {/* Distant back ridge for depth */}
      <path
        fill="url(#skyFillBack)"
        d="M0 300 V262 H120 V248 H240 V268 H360 V256 H520 V244 H660 V262 H820 V250 H980 V266 H1140 V252 H1300 V262 H1440 V250 H1600 V300 Z"
      />

      {/* Main silhouette */}
      <use href="#cityShapes" fill="url(#skyFill)" />

      {/* Extremely faint brand-colour shimmer, clipped to the skyline */}
      <g mask="url(#cityMask)" opacity="0.2" filter="url(#skySoft)">
        <rect x="0" y="0" width="1600" height="300" fill="url(#skyShimmerA)" />
      </g>

      {/* Fine details: cables, antennas, wheel, finials */}
      <g stroke="currentColor" strokeOpacity="0.16" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Golden Gate */}
        <line x1="28" y1="236" x2="352" y2="236" />
        <line x1="150" y1="150" x2="164" y2="150" />
        <line x1="150" y1="188" x2="164" y2="188" />
        <line x1="300" y1="150" x2="314" y2="150" />
        <line x1="300" y1="188" x2="314" y2="188" />
        <path d="M30 210 Q95 150 157 118 Q232 198 307 118 Q372 152 352 210" />
        <line x1="190" y1="152" x2="190" y2="236" />
        <line x1="222" y1="176" x2="222" y2="236" />
        <line x1="252" y1="184" x2="252" y2="236" />
        <line x1="282" y1="160" x2="282" y2="236" />
        {/* Statue crown */}
        <path d="M458 169 l-4 -6 M462 166 l-1 -7 M466 166 l1 -7 M470 169 l4 -6" />
        {/* Empire antenna */}
        <line x1="529" y1="74" x2="529" y2="46" />
        {/* London Eye */}
        <circle cx="691" cy="150" r="46" />
        <circle cx="691" cy="150" r="39" />
        <circle cx="691" cy="150" r="3.5" fill="currentColor" />
        <path d="M691 150 L691 104 M691 150 L691 196 M691 150 L645 150 M691 150 L737 150 M691 150 L659 118 M691 150 L723 118 M691 150 L659 182 M691 150 L723 182" />
        <path d="M672 186 L691 150 L710 186" />
        <line x1="672" y1="186" x2="668" y2="288" />
        <line x1="710" y1="186" x2="714" y2="288" />
        {/* Big Ben */}
        <circle cx="779" cy="150" r="8.5" />
        <line x1="779" y1="74" x2="779" y2="62" />
        {/* Minaret finials */}
        <line x1="1054" y1="108" x2="1054" y2="98" />
        <line x1="1156" y1="108" x2="1156" y2="98" />
        {/* Brandenburg columns */}
        <path d="M1266 300 V178 M1280 300 V178 M1294 300 V178 M1308 300 V178 M1322 300 V178" />
        {/* Burj antenna */}
        <line x1="1361" y1="44" x2="1361" y2="20" />
        {/* Berlin antenna */}
        <line x1="1428" y1="70" x2="1428" y2="44" />
      </g>
    </svg>
  );
}
