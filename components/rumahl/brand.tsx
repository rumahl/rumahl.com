const MARK_PATH = 'M22 284 Q18 284 18 280 V171 C18 119 52 85 103 85 H120 Q124 85 124 89 V125 Q124 129 120 129 H107 C79 129 61 146 61 174 V280 Q61 284 57 284 Z';
const WORDMARK_PATH = 'M22 284 Q18 284 18 280 V171 C18 119 52 85 103 85 H120 Q124 85 124 89 V125 Q124 129 120 129 H107 C79 129 61 146 61 174 V280 Q61 284 57 284 Z M153 86 H189 Q193 86 193 90 V196 C193 227 215 246 251 246 C287 246 309 227 309 196 V90 Q309 86 313 86 H348 Q352 86 352 90 V197 C352 252 313 289 251 289 C189 289 149 252 149 197 V90 Q149 86 153 86 Z M380 284 Q376 284 376 280 V169 C376 117 408 81 459 81 C492 81 518 93 534 112 C550 93 575 81 608 81 C658 81 692 117 692 169 V280 Q692 284 688 284 H652 Q648 284 648 280 V168 C648 142 632 125 606 125 C577 125 555 142 555 167 V280 Q555 284 551 284 H516 Q512 284 512 280 V166 C512 142 494 125 468 125 C439 125 420 142 420 166 V280 Q420 284 416 284 Z M825 81 C868 81 899 99 918 130 C929 148 933 166 933 190 V280 Q933 284 929 284 H893 Q889 284 889 280 V269 C874 282 855 289 831 289 C766 289 718 246 718 185 C718 125 764 81 825 81 Z M826 125 C789 125 763 150 763 185 C763 220 789 246 826 246 C863 246 889 221 889 185 C889 150 863 125 826 125 Z M965 18 H1001 Q1005 18 1005 22 V96 C1018 87 1034 82 1052 82 C1108 82 1147 118 1147 171 V280 Q1147 284 1143 284 H1107 Q1103 284 1103 280 V173 C1103 144 1085 127 1055 127 C1025 127 1005 145 1005 175 V280 Q1005 284 1001 284 H965 Q961 284 961 280 V22 Q961 18 965 18 Z M1178 18 H1214 Q1218 18 1218 22 V280 Q1218 284 1214 284 H1178 Q1174 284 1174 280 V22 Q1174 18 1178 18 Z';

export function BrandIcon({className = ''}:{className?:string}) {
  return <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="10 77 122 215"><path d={MARK_PATH} fill="currentColor"/></svg>;
}

export function BrandLogo({className = ''}:{className?:string}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="12 12 1212 283" role="img" aria-label="rumahl" className={className}>
      <path d={WORDMARK_PATH} fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}

/**
 * The r parts across the whole wordmark. Colours exist only in this
 * construction drawing to separate the individual r units:
 * r 1×, u 2× (rotated and joined), m 4×, a 1× on the right, h 1× on the right.
 * The l is not an r part and stays a contour.
 */
const CONSTRUCTION_PARTS = [
  {x: 10, width: 122}, // r
  {x: 141, width: 110}, // u, left r
  {x: 251, width: 111}, // u, right r
  {x: 368, width: 91}, // m, first r
  {x: 459, width: 75}, // m, second r
  {x: 534, width: 74}, // m, third r
  {x: 608, width: 92}, // m, fourth r
  {x: 889, width: 52}, // a, right r
  {x: 1005, width: 150}, // h, right r
] as const;

/**
 * Full-wordmark construction study: the supplied contour with every r part
 * filled in colour. The l remains an outline. This is documentation, not a
 * combined logo or a set of separate logo assets.
 */
export function BrandConstructionMark({className = ''}:{className?:string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="12 12 1212 283"
      role="img"
      aria-label="Construction study of the rumahl wordmark with all r parts highlighted in colour; the l is shown as an outline"
      className={className}
    >
      <defs>
        {CONSTRUCTION_PARTS.map((part, index) => (
          <clipPath id={`brand-r-part-${index}`} key={index}>
            <rect x={part.x} y="0" width={part.width} height="400" />
          </clipPath>
        ))}
      </defs>
      {CONSTRUCTION_PARTS.map((part, index) => (
        <path
          key={index}
          d={WORDMARK_PATH}
          fill={`var(--brand-construction-${index + 1})`}
          fillRule="evenodd"
          clipRule="evenodd"
          clipPath={`url(#brand-r-part-${index})`}
        />
      ))}
      <path
        d={WORDMARK_PATH}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        opacity=".7"
      />
    </svg>
  );
}
