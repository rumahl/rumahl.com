import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{W as n,n as r}from"./iframe-ey0lnv34.js";var i,a,o,s,c,l,u;function d(){return(d=e((()=>{r(),i=t(),a={title:`Components/Mark`,component:n,parameters:{docs:{description:{component:`The rumahl brand mark.

- \`variant="solid"\` (default) — filled with \`currentColor\`.
- \`variant="glass"\` — cut into the surface (debossed) with a tinted fill,
  matching the recessed glass controls.
- \`variant="engraved"\` — the mark itself with **no fill colour**: only the cut
  edge, so the surface shows through.

## Rules
- Use it as-is; keep clear space around it.
- Don't recolour beyond the token, or distort its proportions.
- Use the \`glass\` variant only **on a glass surface**, never floating over an
  image.`}}}},o={render:()=>(0,i.jsx)(n,{style:{width:40,height:72}})},s={render:()=>(0,i.jsx)(n,{style:{width:40,height:72,color:`#22c7a9`}})},c={render:()=>(0,i.jsx)(`div`,{style:{display:`flex`,alignItems:`flex-end`,gap:16},children:[16,28,48,80].map(e=>(0,i.jsx)(n,{style:{width:e*.53,height:e}},e))})},l={name:`Cut into glass`,render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:28},children:[(0,i.jsx)(n,{variant:`glass`,style:{width:40,height:76}}),(0,i.jsx)(n,{variant:`glass`,style:{width:40,height:76,color:`#22c7a9`}}),(0,i.jsx)(n,{variant:`engraved`,style:{width:40,height:76}}),(0,i.jsx)(n,{variant:`engraved`,style:{width:26,height:50,color:`#22c7a9`}})]})},u=[`Default`,`Tinted`,`Sizes`,`CutIntoGlass`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <RumahlMark style={{
    width: 40,
    height: 72
  }} />
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <RumahlMark style={{
    width: 40,
    height: 72,
    color: "#22c7a9"
  }} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "flex-end",
    gap: 16
  }}>
      {[16, 28, 48, 80].map(size => <RumahlMark key={size} style={{
      width: size * 0.53,
      height: size
    }} />)}
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Cut into glass",
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: 28
  }}>
      <RumahlMark variant="glass" style={{
      width: 40,
      height: 76
    }} />
      <RumahlMark variant="glass" style={{
      width: 40,
      height: 76,
      color: "#22c7a9"
    }} />
      <RumahlMark variant="engraved" style={{
      width: 40,
      height: 76
    }} />
      <RumahlMark variant="engraved" style={{
      width: 26,
      height: 50,
      color: "#22c7a9"
    }} />
    </div>
}`,...l.parameters?.docs?.source},description:{story:'`variant="glass"` — the mark looks cut into the recessed glass surface.',...l.parameters?.docs?.description}}}})))()}d();export{l as CutIntoGlass,o as Default,c as Sizes,s as Tinted,u as __namedExportsOrder,a as default};