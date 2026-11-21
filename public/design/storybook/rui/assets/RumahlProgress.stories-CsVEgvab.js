import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{H as n,V as r,n as i}from"./iframe-ey0lnv34.js";var a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{i(),a=t(),o={title:`Components/Progress`,component:r,args:{label:`Storage`,value:42,size:`md`},argTypes:{size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`,`xl`]},color:{control:`color`}},parameters:{docs:{description:{component:`A determinate progress bar (or indeterminate for unknown duration).

## Rules
- Show progress for **known-duration** work; a Spinner for unknown waits.
- Always label it and expose the value; never rely on colour alone.`}}}},s={},c={args:{value:100}},l={args:{value:150}},u={render:()=>(0,a.jsx)(r,{label:`Loading`})},d={render:()=>(0,a.jsx)(n,{label:`Loading`})},f={render:()=>(0,a.jsx)(`div`,{style:{display:`grid`,gap:16,width:320},children:[`xs`,`sm`,`md`,`lg`,`xl`].map(e=>(0,a.jsx)(r,{size:e,label:`Size ${e}`,value:64},e))})},p=[`Determinate`,`Full`,`Overflow`,`Indeterminate`,`Spinner`,`Sizes`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 150
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <RumahlProgress label="Loading" />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <RumahlSpinner label="Loading" />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 16,
    width: 320
  }}>
      {(["xs", "sm", "md", "lg", "xl"] as const).map(size => <RumahlProgress key={size} size={size} label={\`Size \${size}\`} value={64} />)}
    </div>
}`,...f.parameters?.docs?.source}}}})))()}m();export{s as Determinate,c as Full,u as Indeterminate,l as Overflow,f as Sizes,d as Spinner,p as __namedExportsOrder,o as default};