import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{N as n,St as r,dr as i,lr as a,n as o,sr as s,ur as c}from"./iframe-ey0lnv34.js";function l(){let{theme:e,tokens:t}=a();return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:16,width:460},children:[(0,u.jsxs)(`div`,{style:{fontSize:12,color:`var(--rumahl-ui-color-text-muted)`},children:[`Active theme: `,(0,u.jsx)(`strong`,{children:e.name}),` · registered: `,i().map(e=>e.name).join(`, `)]}),(0,u.jsxs)(`div`,{style:{display:`flex`,gap:10,flexWrap:`wrap`},children:[(0,u.jsx)(r,{variant:`primary`,children:`Primary`}),(0,u.jsx)(r,{children:`Secondary`}),(0,u.jsx)(n,{placeholder:`Input`})]}),(0,u.jsx)(`dl`,{style:{display:`grid`,gridTemplateColumns:`auto 1fr`,gap:`6px 16px`,fontSize:12,margin:0},children:[`color.accent`,`color.canvas.background`,`color.panel.background`,`color.text.primary`,`shape.radius.window`,`material.opacity`].map(e=>(0,u.jsxs)(`div`,{style:{display:`contents`},children:[(0,u.jsx)(`dt`,{style:{color:`var(--rumahl-ui-color-text-muted)`},children:e}),(0,u.jsx)(`dd`,{style:{margin:0},children:t[e]})]},e))})]})}var u,d,f,p;function m(){return(m=e((()=>{s(),o(),c(),u=t(),d={title:`Guides/Theming`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"How tokens, materials and `defineTheme` work — the foundation for custom themes built on rumahl/ui."}}}},f={render:()=>(0,u.jsx)(l,{}),parameters:{docs:{source:{language:`tsx`,code:`import { useTheme } from "@rumahl/ui";

export function Palette() {
  const { theme, tokens } = useTheme();
  const keys = [
    "color.accent",
    "color.canvas.background",
    "color.panel.background",
    "color.text.primary",
    "shape.radius.window",
    "material.opacity"
  ];
  return (
    <div style={{ display: "grid", gap: 12, width: 460 }}>
      {keys.map((key) => (
        <div key={key} style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              width: 22,
              height: 22,
              borderRadius: 6,
              background: tokens[key as keyof typeof tokens] as string
            }}
          />
          <code style={{ flex: 1 }}>{key}</code>
          <span style={{ color: "var(--rumahl-ui-color-text-muted)" }}>
            {tokens[key as keyof typeof tokens]}
          </span>
        </div>
      ))}
    </div>
  );
}`}}}},p=[`LiveTokens`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Live />,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        code: \`import { useTheme } from "@rumahl/ui";

export function Palette() {
  const { theme, tokens } = useTheme();
  const keys = [
    "color.accent",
    "color.canvas.background",
    "color.panel.background",
    "color.text.primary",
    "shape.radius.window",
    "material.opacity"
  ];
  return (
    <div style={{ display: "grid", gap: 12, width: 460 }}>
      {keys.map((key) => (
        <div key={key} style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              width: 22,
              height: 22,
              borderRadius: 6,
              background: tokens[key as keyof typeof tokens] as string
            }}
          />
          <code style={{ flex: 1 }}>{key}</code>
          <span style={{ color: "var(--rumahl-ui-color-text-muted)" }}>
            {tokens[key as keyof typeof tokens]}
          </span>
        </div>
      ))}
    </div>
  );
}\`
      }
    }
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as LiveTokens,p as __namedExportsOrder,d as default};