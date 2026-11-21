import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";var n,r,i,a,o;function s(){return(s=e((()=>{n=t(),r={title:`Foundations/Spacing`,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`# Spacing

One 4px base scale powers layout (\`Box\`/\`Flex\` \`p\`/\`m\`/\`gap\` props) and the
shared control size scale (\`data-size\` → \`--control-h/-pad-x/-pad-y\`).

| Step | px | Typical use |
|---|---|---|
| 1 | 4 | tight icon gaps |
| 2 | 8 | inline gaps |
| 3 | 12 | control padding |
| 4 | 16 | card padding |
| 6 | 24 | section padding |
| 8 | 32 | page gutters |

## Control size scale

| \`size\` | control height |
|---|---|
| xs | 26px |
| sm | 30px |
| md | 36px (default) |
| lg | 44px |
| xl | 52px |`}}}},i=[1,2,3,4,6,8],a={render:()=>(0,n.jsx)(`div`,{style:{display:`grid`,gap:14,padding:24},children:i.map(e=>(0,n.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,n.jsxs)(`span`,{style:{width:48,fontSize:11,color:`var(--rumahl-ui-color-text-muted)`},children:[e,` · `,e*4,`px`]}),(0,n.jsx)(`span`,{style:{width:e*4*4,height:16,borderRadius:4,background:`var(--rumahl-ui-color-accent)`}})]},e))})},o=[`SpacingScale`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 14,
    padding: 24
  }}>
      {SPACES.map(step => <div key={step} style={{
      display: "flex",
      alignItems: "center",
      gap: 12
    }}>
          <span style={{
        width: 48,
        fontSize: 11,
        color: "var(--rumahl-ui-color-text-muted)"
      }}>
            {step} · {step * 4}px
          </span>
          <span style={{
        width: step * 4 * 4,
        height: 16,
        borderRadius: 4,
        background: "var(--rumahl-ui-color-accent)"
      }} />
        </div>)}
    </div>
}`,...a.parameters?.docs?.source}}}})))()}s();export{a as SpacingScale,o as __namedExportsOrder,r as default};