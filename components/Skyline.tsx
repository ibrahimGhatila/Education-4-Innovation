type SkylineProps = {
  className?: string;
};

/**
 * Decorative world-city skyline silhouette with recognizable landmarks
 * (Golden Gate, Big Ben, London Eye, Empire State, CN Tower, Duomo,
 * Istanbul mosque + minarets, Burj Khalifa, Brandenburg Gate, Berlin TV
 * Tower, Amsterdam gables). Color follows currentColor via the gradient.
 */
export default function Skyline({ className = "" }: SkylineProps) {
  return (
    <svg
      viewBox="0 0 1440 300"
      fill="none"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="skyFill" x1="0" y1="60" x2="0" y2="300" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.16" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.03" />
        </linearGradient>
      </defs>

      <g fill="url(#skyFill)">
        {/* base building ridge */}
        <path d="M0 300 V210 H46 V178 H96 V216 H150 V158 H206 V196 H252 V172 H300 V210 H360 V182 H410 V214 H470 V190 H520 V206 H586 V176 H650 V208 H712 V184 H772 V206 H840 V174 H900 V210 H958 V184 H1018 V214 H1074 V178 H1132 V208 H1190 V176 H1248 V210 H1308 V186 H1366 V214 H1440 V300 Z" />

        {/* Golden Gate Bridge — towers */}
        <path d="M104 300 V92 h16 v208 Z M276 300 V92 h16 v208 Z" />
        {/* Statue of Liberty — pedestal + figure */}
        <path d="M360 300 v-70 h26 v70 Z M369 230 l4 -54 8 0 4 54 Z" />
        <circle cx="373" cy="166" r="7" />
        {/* Big Ben */}
        <path d="M430 300 V126 h30 v174 Z M430 126 l15 -34 15 34 Z" />
        {/* Empire State — stepped tower */}
        <path d="M634 300 V150 h44 v150 Z M648 150 v-34 h16 v34 Z" />
        {/* Duomo di Milano — gothic spires */}
        <path d="M852 300 V176 h84 v124 Z M860 176 l8 -34 8 34 Z M884 176 l10 -54 10 54 Z M912 176 l8 -34 8 34 Z" />
        {/* Istanbul mosque — dome + base */}
        <path d="M984 300 v-96 h72 v96 Z" />
        <path d="M984 204 a36 30 0 0 1 72 0 Z" />
        {/* Brandenburg Gate — colonnade */}
        <path d="M1196 300 V168 h84 v132 Z M1196 168 h84 v-12 h-84 Z" />
        {/* Amsterdam stepped gable houses */}
        <path d="M1352 300 v-78 h30 v78 Z M1352 222 h10 v-10 h10 v-10 h10 v20 Z M1386 300 v-66 h28 v66 Z M1386 234 h9 v-9 h10 v-9 h9 v18 Z" />
      </g>

      {/* fine details: cables, antennas, wheel, minarets, spire tips */}
      <g stroke="currentColor" strokeOpacity="0.14" strokeWidth="2" fill="none">
        {/* Golden Gate suspension cables + deck */}
        <path d="M20 196 Q70 120 112 96 Q200 200 284 96 Q332 124 360 178" />
        <line x1="20" y1="196" x2="360" y2="196" />
        {/* Statue torch */}
        <line x1="381" y1="190" x2="392" y2="170" />
        {/* London Eye ferris wheel */}
        <circle cx="540" cy="150" r="40" />
        <circle cx="540" cy="150" r="6" fill="currentColor" fillOpacity="0.12" />
        <path d="M540 110 V190 M500 150 H580 M512 122 L568 178 M568 122 L512 178" />
        <line x1="520" y1="184" x2="528" y2="300" />
        <line x1="560" y1="184" x2="552" y2="300" />
        {/* Empire State antenna */}
        <line x1="656" y1="116" x2="656" y2="74" />
        {/* CN Tower */}
        <line x1="772" y1="300" x2="772" y2="98" />
        <line x1="772" y1="98" x2="772" y2="56" />
        <ellipse cx="772" cy="106" rx="13" ry="7" fill="currentColor" fillOpacity="0.1" />
        {/* Istanbul minarets */}
        <line x1="980" y1="300" x2="980" y2="120" />
        <line x1="1060" y1="300" x2="1060" y2="120" />
        <path d="M976 120 l4 -12 4 12 Z" fill="currentColor" fillOpacity="0.12" stroke="none" />
        <path d="M1056 120 l4 -12 4 12 Z" fill="currentColor" fillOpacity="0.12" stroke="none" />
        {/* Burj Khalifa — tall tapering spire */}
        <path d="M1110 300 L1126 60 L1142 300 Z" fill="currentColor" fillOpacity="0.1" stroke="none" />
        <line x1="1126" y1="60" x2="1126" y2="30" />
        {/* Berlin TV Tower */}
        <line x1="1322" y1="300" x2="1322" y2="92" />
        <circle cx="1322" cy="112" r="12" fill="currentColor" fillOpacity="0.1" />
        <line x1="1322" y1="92" x2="1322" y2="62" />
      </g>
    </svg>
  );
}
