type SkylineProps = {
  className?: string;
};

/**
 * Layered world-city skyline. Two dense building ridges (far + mid) give
 * depth, with recognizable landmarks rising from the foreground:
 * Golden Gate · Statue of Liberty · Empire State · London Eye · Big Ben ·
 * Duomo di Milano · Istanbul mosque + minarets · Galata Tower ·
 * Brandenburg Gate · Burj Khalifa · Berlin TV Tower · Amsterdam gables.
 *
 * A single, smooth, very faint brand-colour wash (one of each colour, no
 * repeat) drifts gently across the silhouette, masked to the city shape.
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
        <linearGradient id="skyFill" x1="0" y1="60" x2="0" y2="300" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.16" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="skyFillMid" x1="0" y1="180" x2="0" y2="300" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.09" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.03" />
        </linearGradient>
        <linearGradient id="skyFillBack" x1="0" y1="230" x2="0" y2="300" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.015" />
        </linearGradient>

        {/* Single smooth brand wash — one of each colour, no repeat */}
        <linearGradient id="skyShimmer" x1="0" y1="0" x2="1600" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0.00" stopColor="#7BD32C" stopOpacity="0.5" />
          <stop offset="0.34" stopColor="#6F2AA4" stopOpacity="0.55" />
          <stop offset="0.66" stopColor="#8A1E3C" stopOpacity="0.5" />
          <stop offset="1.00" stopColor="#FB7F0D" stopOpacity="0.55" />
          <animateTransform
            attributeName="gradientTransform"
            type="translate"
            values="-90 0; 90 0; -90 0"
            keyTimes="0; 0.5; 1"
            dur="26s"
            repeatCount="indefinite"
          />
        </linearGradient>
        <filter id="skySoft" x="-10%" y="-30%" width="120%" height="160%">
          <feGaussianBlur stdDeviation="8" />
        </filter>

        {/* Far ridge — dense distant buildings */}
        <path
          id="cityBack"
          d="M0 300 V256 H34 V268 H70 V250 H104 V262 H150 V246 H196 V260 H240 V250 H300 V264 H348 V252 H400 V244 H452 V262 H500 V250 H560 V258 H620 V246 H680 V262 H740 V252 H800 V260 H860 V248 H920 V262 H980 V252 H1040 V260 H1100 V246 H1160 V262 H1220 V250 H1280 V260 H1340 V248 H1400 V262 H1460 V252 H1520 V260 H1600 V300 Z"
        />
        {/* Mid ridge — taller, denser buildings */}
        <path
          id="cityMid"
          d="M0 300 V236 H30 V214 H56 V240 H92 V202 H120 V232 H150 V192 H180 V228 H214 V208 H250 V236 H288 V212 H320 V232 H360 V202 H402 V230 H440 V212 H486 V236 H520 V208 H560 V230 H600 V216 H650 V234 H700 V208 H742 V230 H792 V218 H840 V234 H892 V206 H952 V232 H1004 V212 H1050 V232 H1108 V208 H1160 V232 H1212 V214 H1262 V234 H1320 V212 H1372 V232 H1430 V216 H1486 V234 H1540 V220 H1600 V300 Z"
        />

        {/* Foreground buildings + landmarks */}
        <g id="cityFront">
          {/* foreground filler blocks with rooftop bits */}
          <path d="M70 300 V196 H104 V300 Z M98 196 V186 H108 V196 Z M210 300 V168 H236 V300 Z M232 168 V150 H236 V168 Z M610 300 V190 H642 V300 Z M1230 300 V184 H1264 V300 Z M1258 184 V168 H1262 V184 Z M1470 300 V200 H1500 V300 Z" />

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
          <path d="M1330 300 V184 H1404 V300 Z M1326 184 H1408 V170 H1326 Z M1356 170 V158 H1378 V170 Z" />

          {/* Burj Khalifa */}
          <path d="M1418 300 L1426 120 L1431 78 L1435 44 L1439 78 L1444 120 L1452 300 Z" />

          {/* Berlin TV Tower */}
          <path d="M1500 300 V128 H1508 V300 Z M1502 106 V70 H1506 V106 Z" />
          <circle cx="1504" cy="118" r="12" />

          {/* Amsterdam canal houses */}
          <path d="M1538 300 V238 H1562 V300 Z M1538 238 Q1550 218 1562 238 Z M1564 300 V232 H1586 V300 Z M1564 232 L1575 214 L1586 232 Z M1588 300 V240 H1610 V300 Z M1588 240 Q1599 222 1610 240 Z" />
        </g>

        <mask id="cityMask">
          <use href="#cityMid" fill="#ffffff" fillOpacity="0.6" />
          <use href="#cityFront" fill="#ffffff" />
        </mask>
      </defs>

      <use href="#cityBack" fill="url(#skyFillBack)" />
      <use href="#cityMid" fill="url(#skyFillMid)" />
      <use href="#cityFront" fill="url(#skyFill)" />

      {/* Very faint, smooth brand wash, clipped to the city */}
      <g mask="url(#cityMask)" opacity="0.12" filter="url(#skySoft)">
        <rect x="0" y="0" width="1600" height="300" fill="url(#skyShimmer)" />
      </g>

      {/* Fine details: cables, antennas, wheel, finials */}
      <g stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
        <path d="M458 169 l-4 -6 M462 166 l-1 -7 M466 166 l1 -7 M470 169 l4 -6" />
        <line x1="529" y1="74" x2="529" y2="46" />
        <circle cx="691" cy="150" r="46" />
        <circle cx="691" cy="150" r="39" />
        <circle cx="691" cy="150" r="3.5" fill="currentColor" />
        <path d="M691 150 L691 104 M691 150 L691 196 M691 150 L645 150 M691 150 L737 150 M691 150 L659 118 M691 150 L723 118 M691 150 L659 182 M691 150 L723 182" />
        <path d="M672 186 L691 150 L710 186" />
        <line x1="672" y1="186" x2="668" y2="288" />
        <line x1="710" y1="186" x2="714" y2="288" />
        <circle cx="779" cy="150" r="8.5" />
        <line x1="779" y1="74" x2="779" y2="62" />
        <line x1="1054" y1="108" x2="1054" y2="98" />
        <line x1="1156" y1="108" x2="1156" y2="98" />
        <path d="M1336 300 V186 M1350 300 V186 M1364 300 V186 M1378 300 V186 M1392 300 V186" />
        <line x1="1435" y1="44" x2="1435" y2="20" />
        <line x1="1504" y1="70" x2="1504" y2="44" />
      </g>
    </svg>
  );
}
