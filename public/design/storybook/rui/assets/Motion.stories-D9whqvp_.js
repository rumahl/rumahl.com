import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{lr as n,sr as r}from"./iframe-ey0lnv34.js";function i(){let{tokens:e}=n(),t=t=>e[t];return(0,a.jsxs)(`div`,{style:{display:`grid`,gap:24,padding:24,maxWidth:640},children:[(0,a.jsx)(`dl`,{style:{display:`grid`,gridTemplateColumns:`auto 1fr`,gap:`8px 16px`,fontSize:12,margin:0},children:s.map(e=>(0,a.jsxs)(`div`,{style:{display:`contents`},children:[(0,a.jsx)(`dt`,{style:{color:`var(--rumahl-ui-color-text-muted)`},children:e}),(0,a.jsx)(`dd`,{style:{margin:0},children:t(e)})]},e))}),(0,a.jsx)(`div`,{style:{height:12,borderRadius:999,background:`var(--rumahl-ui-color-accent)`,width:40,boxShadow:`0 6px 18px -6px var(--rumahl-ui-color-accent)`,animation:`rumahl-motion-demo ${t(`motion.duration`)} ${t(`motion.easing.spring`)} infinite alternate`}}),(0,a.jsx)(`p`,{style:{fontSize:12,color:`var(--rumahl-ui-color-text-muted)`},children:`The bar animates with the theme's duration and spring easing.`}),(0,a.jsx)(`style`,{children:`@keyframes rumahl-motion-demo { to { width: 320px; } }`})]})}var a,o,s,c,l;function u(){return(u=e((()=>{r(),a=t(),o={title:`Foundations/Motion`,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`# Motion

Motion roles. Durations and the spring easing are tokens so a theme (or a
reduced-motion preference) can tune or disable animation consistently.

- \`--rumahl-ui-motion-duration-fast\` (~120ms) — hover / focus colour changes
- the spring easing drives scale / slide (windows, popovers, menus)

## Rules

- **Animate state, not decoration** — hover, press, enter, exit. No looping
  animation in UI chrome.
- **Colour and opacity first.** Reach for transform/scale only for spatial
  changes (a window opening, a menu appearing).
- **Always honour \`prefers-reduced-motion: reduce\`** — transitions collapse to
  none; never gate meaning on an animation completing.
- **Keep it quick.** Fast feedback (≤120ms) for state; ~200–280ms for
  spatial entry.`}}}},s=[`motion.duration.fast`,`motion.duration`,`motion.easing.spring`],c={render:()=>(0,a.jsx)(i,{}),parameters:{docs:{source:{code:`/* Motion tokens — collapse under prefers-reduced-motion. */
--rumahl-ui-motion-duration-fast: 120ms;  /* hover / focus colour */
--rumahl-ui-motion-duration: 200ms;       /* state change */`}}}},l=[`Duration`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen />,
  parameters: {
    docs: {
      source: {
        code: \`/* Motion tokens — collapse under prefers-reduced-motion. */
--rumahl-ui-motion-duration-fast: 120ms;  /* hover / focus colour */
--rumahl-ui-motion-duration: 200ms;       /* state change */\`
      }
    }
  }
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as Duration,l as __namedExportsOrder,o as default};