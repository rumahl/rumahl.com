export function DeviceArt({kind}: {kind: 'sbc' | 'minipc' | 'server'}) {
  if (kind === 'sbc') {
    return (
      <svg viewBox="0 0 220 150" role="img" aria-hidden="true">
        <rect x="18" y="18" width="184" height="114" rx="12" fill="currentColor" opacity="0.14" />
        <rect x="18" y="18" width="184" height="114" rx="12" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="2" />
        <rect x="84" y="58" width="62" height="46" rx="7" fill="currentColor" opacity="0.3" />
        <rect x="96" y="70" width="38" height="22" rx="4" fill="currentColor" opacity="0.55" />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <circle key={'a' + i} cx={40 + i * 12} cy="34" r="2.6" fill="currentColor" opacity="0.5" />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <circle key={'b' + i} cx={40 + i * 12} cy="116" r="2.6" fill="currentColor" opacity="0.5" />
        ))}
        <rect x="26" y="66" width="34" height="14" rx="3" fill="currentColor" opacity="0.45" />
        <rect x="26" y="86" width="34" height="14" rx="3" fill="currentColor" opacity="0.45" />
        <rect x="160" y="70" width="34" height="22" rx="4" fill="currentColor" opacity="0.45" />
      </svg>
    );
  }
  if (kind === 'minipc') {
    return (
      <svg viewBox="0 0 220 150" role="img" aria-hidden="true">
        <rect x="34" y="40" width="152" height="76" rx="16" fill="currentColor" opacity="0.16" />
        <rect x="34" y="40" width="152" height="76" rx="16" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="2" />
        <rect x="34" y="40" width="152" height="26" rx="16" fill="currentColor" opacity="0.12" />
        <circle cx="52" cy="98" r="4" fill="currentColor" opacity="0.6" />
        {[0, 1, 2].map((i) => (
          <rect key={i} x={70 + i * 22} y="92" width="16" height="12" rx="3" fill="currentColor" opacity="0.4" />
        ))}
        <rect x="150" y="92" width="24" height="12" rx="3" fill="currentColor" opacity="0.4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 220 150" role="img" aria-hidden="true">
      <rect x="60" y="12" width="100" height="126" rx="12" fill="currentColor" opacity="0.16" />
      <rect x="60" y="12" width="100" height="126" rx="12" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="2" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={72} y={24 + i * 28} width="76" height="20" rx="4" fill="currentColor" opacity="0.32" />
          <circle cx="82" cy={34 + i * 28} r="3" fill="currentColor" opacity="0.7" />
        </g>
      ))}
    </svg>
  );
}
