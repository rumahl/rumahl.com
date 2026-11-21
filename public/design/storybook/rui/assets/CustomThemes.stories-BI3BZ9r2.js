import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{dr as n,lr as r,sr as i,ur as a}from"./iframe-ey0lnv34.js";function o(){let{theme:e}=r();return(0,s.jsxs)(`div`,{style:{display:`grid`,gap:8,fontSize:13},children:[(0,s.jsxs)(`div`,{children:[`Active: `,(0,s.jsx)(`strong`,{children:e.name}),` `,(0,s.jsx)(`code`,{children:e.id})]}),(0,s.jsxs)(`div`,{style:{color:`var(--rumahl-ui-color-text-muted)`},children:[`Registered themes: `,n().map(e=>`${e.name} (${e.id})`).join(`, `)]}),(0,s.jsxs)(`div`,{style:{color:`var(--rumahl-ui-color-text-muted)`},children:[`Modes: `,e.modes.join(`, `),` · material: `,e.material??`glass`]})]})}var s,c,l,u;function d(){return(d=e((()=>{i(),a(),s=t(),c={title:`Guides/Custom Themes`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`A complete custom-theme walkthrough: authoring, dark/light, validation, registration and resolution.`}}}},l={name:`Registry`,render:()=>(0,s.jsx)(o,{}),parameters:{docs:{source:{language:`tsx`,code:`import { defineTheme, registerTheme, listThemes } from "@rumahl/ui/sdk";

registerTheme(
  defineTheme({
    id: "com.example.ocean",
    name: "Ocean",
    tokens: {
      "color.accent": "#0b6ea8",
      "color.canvas.background": "#071a24",
      "color.panel.background": "#0d2733"
    },
    modes: ["light", "dark"]
  })
);

listThemes(); // -> [{ id: "com.example.ocean", name: "Ocean" }, …]`}}}},u=[`Registry_`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Registry",
  render: () => <Registry />,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        code: \`import { defineTheme, registerTheme, listThemes } from "@rumahl/ui/sdk";

registerTheme(
  defineTheme({
    id: "com.example.ocean",
    name: "Ocean",
    tokens: {
      "color.accent": "#0b6ea8",
      "color.canvas.background": "#071a24",
      "color.panel.background": "#0d2733"
    },
    modes: ["light", "dark"]
  })
);

listThemes(); // -> [{ id: "com.example.ocean", name: "Ocean" }, …]\`
      }
    }
  }
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as Registry_,u as __namedExportsOrder,c as default};