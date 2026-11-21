import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{ct as r,n as i}from"./iframe-ey0lnv34.js";var a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{i(),a=t(),o=n(),s=[`xs`,`sm`,`md`,`lg`,`xl`],c={title:`Primitives/Text`,component:r,args:{children:`The quick brown fox jumps over the lazy dog`,size:`md`,tone:`default`},argTypes:{size:{control:`inline-radio`,options:s},tone:{control:`inline-radio`,options:[`default`,`muted`,`accent`,`success`,`warning`,`danger`]},weight:{control:`inline-radio`,options:[`regular`,`medium`,`semibold`,`bold`]},truncate:{control:`boolean`},children:{control:`text`}},parameters:{docs:{description:{component:`Body / label text with size, weight, tone and optional truncation.

## Rules
- Use \`tone="muted"\` for secondary text — **never** reduced opacity.
- \`truncate\` only when the full text is available elsewhere.`}}}},l={},u={render:e=>(0,o.jsx)(`div`,{style:{display:`grid`,gap:8},children:s.map(t=>(0,a.createElement)(r,{...e,key:t,size:t},t,` — `,e.children))})},d={render:()=>(0,o.jsx)(`div`,{style:{display:`grid`,gap:6},children:[`default`,`muted`,`accent`,`success`,`warning`,`danger`].map(e=>(0,o.jsx)(r,{tone:e,children:e},e))})},f={render:()=>(0,o.jsx)(`div`,{style:{width:180},children:(0,o.jsx)(r,{truncate:!0,children:`The quick brown fox jumps over the lazy dog`})})},p=[`Default`,`Sizes`,`Tones`,`Truncate`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "grid",
    gap: 8
  }}>
      {SIZE.map(size => <Text {...args} key={size} size={size}>
          {size} — {args.children}
        </Text>)}
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 6
  }}>
      {(["default", "muted", "accent", "success", "warning", "danger"] as const).map(tone => <Text key={tone} tone={tone}>{tone}</Text>)}
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 180
  }}>
      <Text truncate>The quick brown fox jumps over the lazy dog</Text>
    </div>
}`,...f.parameters?.docs?.source}}}})))()}m();export{l as Default,u as Sizes,d as Tones,f as Truncate,p as __namedExportsOrder,c as default};