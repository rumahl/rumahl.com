import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Xt as t,n}from"./iframe-ey0lnv34.js";import{n as r,t as i}from"./_argtypes-9JdYHY1M.js";var a,o,s,c;function l(){return(l=e((()=>{n(),i(),a={title:`Components/Accordion`,component:t,args:{items:[{id:`general`,title:`General`,content:`General preferences live here. Change them any time.`},{id:`network`,title:`Network`,content:`Network and connectivity options.`},{id:`about`,title:`About`,content:`Version and legal information.`}],defaultOpen:[`general`]},argTypes:{...r,multiple:{control:`boolean`},color:{control:`color`}},parameters:{docs:{description:{component:`Progressive disclosure: a stack of collapsible sections.

- \`multiple\` — allow several sections open at once.
- \`defaultOpen\` — ids open on first render; \`color\` tints the active header.

## Rules
- One idea per section; the header is the label, the body the detail.
- Use it for secondary detail — **not** for primary navigation.
- Don't bury required content in a collapsed section without a cue.`}}}},o={},s={args:{multiple:!0,defaultOpen:[`general`,`network`]}},c=[`Single`,`Multiple`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true,
    defaultOpen: ["general", "network"]
  }
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as Multiple,o as Single,c as __namedExportsOrder,a as default};