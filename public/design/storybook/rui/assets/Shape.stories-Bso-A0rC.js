import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{lr as n,sr as r}from"./iframe-ey0lnv34.js";function i(){let{tokens:e}=n(),t=t=>e[t];return(0,a.jsxs)(`div`,{style:{display:`grid`,gap:28,padding:24},children:[(0,a.jsxs)(`section`,{children:[(0,a.jsx)(`h2`,{style:{fontSize:14},children:`Radius`}),(0,a.jsx)(`div`,{style:{display:`flex`,gap:16,flexWrap:`wrap`},children:s.map(e=>(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`div`,{style:{width:96,height:72,borderRadius:t(e),background:`var(--rumahl-ui-color-surface-strong)`,boxShadow:`var(--control-inset, 0 1px 3px #0003)`}}),(0,a.jsx)(`div`,{style:{fontSize:11,marginTop:6},children:e}),(0,a.jsx)(`div`,{style:{fontSize:11,color:`var(--rumahl-ui-color-text-muted)`},children:t(e)})]},e))})]}),(0,a.jsxs)(`section`,{children:[(0,a.jsx)(`h2`,{style:{fontSize:14},children:`Icon sizes`}),(0,a.jsx)(`div`,{style:{display:`flex`,gap:16,alignItems:`flex-end`,flexWrap:`wrap`},children:c.map(e=>(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`div`,{style:{width:t(e),height:t(e),borderRadius:`30%`,background:`linear-gradient(150deg, #4f8f78, #28694c)`}}),(0,a.jsx)(`div`,{style:{fontSize:11,marginTop:6},children:e}),(0,a.jsx)(`div`,{style:{fontSize:11,color:`var(--rumahl-ui-color-text-muted)`},children:t(e)})]},e))})]})]})}var a,o,s,c,l,u;function d(){return(d=e((()=>{r(),a=t(),o={title:`Foundations/Shape`,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`# Shape

Radius and size roles. Themes set the corner radius and icon sizes through
these tokens, so the whole shell follows without per-component changes.

Radius roles: \`--rumahl-ui-shape-radius-window\` (windows), \`…-dock\`
(dock / floating islands), \`…-icon\` (app tiles), plus the smaller control
radii derived from the size scale.

## Rules

- **Use the tokens, never a literal px** — a theme can round or square the
  whole UI in one place.
- **Round belongs to islands.** A single control / status item is a pill or
  circle; large surfaces (windows, panels) use the window radius.
- **Icon containers match the icon size token** so glyphs stay optically
  centred.`}}}},s=[`shape.radius.window`,`shape.radius.dock`,`shape.radius.icon`],c=[`shape.icon.size`,`shape.icon.size.large`],l={render:()=>(0,a.jsx)(i,{}),parameters:{docs:{source:{code:`/* Shape tokens — a theme can round or square the whole UI in one place. */
--rumahl-ui-shape-radius-window: 12px;  /* windows, panels */
--rumahl-ui-shape-radius-dock: 24px;    /* dock / floating islands */
--rumahl-ui-shape-radius-icon: 15px;    /* app tiles */`}}}},u=[`RadiusAndSize`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen />,
  parameters: {
    docs: {
      source: {
        code: \`/* Shape tokens — a theme can round or square the whole UI in one place. */
--rumahl-ui-shape-radius-window: 12px;  /* windows, panels */
--rumahl-ui-shape-radius-dock: 24px;    /* dock / floating islands */
--rumahl-ui-shape-radius-icon: 15px;    /* app tiles */\`
      }
    }
  }
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as RadiusAndSize,u as __namedExportsOrder,o as default};