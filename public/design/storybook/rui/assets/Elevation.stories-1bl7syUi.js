import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";var n,r,i,a,o;function s(){return(s=e((()=>{n=t(),r={title:`Foundations/Elevation`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`# Elevation

Depth comes from a few shared recipes (CSS custom properties) rather than
one-off shadows, so glass, floating and solid materials stay consistent.

- \`--control-inset\` — recessed controls (inputs, buttons at rest)
- \`--control-button-shadow\` — raised surfaces (active toggles, thumbs)
- \`--surface-elevation\` — floating overlays (glass material)
- \`--control-popup-shadow\` — popovers and menus

Switch the Material toolbar to see the same elevation on different materials.`}}}},i=[{name:`--control-inset`,css:`var(--control-inset)`},{name:`--control-button-shadow`,css:`var(--control-button-shadow)`},{name:`--control-popup-shadow`,css:`var(--control-popup-shadow)`}],a={render:()=>(0,n.jsx)(`div`,{style:{display:`flex`,gap:28,flexWrap:`wrap`,padding:40},children:i.map(e=>(0,n.jsxs)(`div`,{style:{display:`grid`,gap:10,width:160},children:[(0,n.jsx)(`div`,{style:{height:88,borderRadius:14,background:`var(--rumahl-ui-color-surface-strong)`,boxShadow:e.css}}),(0,n.jsx)(`div`,{style:{fontSize:11},children:e.name})]},e.name))})},o=[`Recipes`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 28,
    flexWrap: "wrap",
    padding: 40
  }}>
      {RECIPES.map(recipe => <div key={recipe.name} style={{
      display: "grid",
      gap: 10,
      width: 160
    }}>
          <div style={{
        height: 88,
        borderRadius: 14,
        background: "var(--rumahl-ui-color-surface-strong)",
        boxShadow: recipe.css
      }} />
          <div style={{
        fontSize: 11
      }}>{recipe.name}</div>
        </div>)}
    </div>
}`,...a.parameters?.docs?.source}}}})))()}s();export{a as Recipes,o as __namedExportsOrder,r as default};