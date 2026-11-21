import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,v as i}from"./iframe-ey0lnv34.js";var a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{a=t(),r(),o=n(),s=t(),c={title:`Components/Color picker`,component:i,args:{label:`Accent colour`,size:`md`},argTypes:{size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`,`xl`]},label:{control:`text`}},parameters:{docs:{description:{component:`A labelled colour chooser with swatches.

## Rules
- Always labelled and showing the current value.
- Offer **curated swatches first**, custom second.`}}}},l={render:e=>{let[t,n]=(0,a.useState)(`#0B84FF`);return(0,o.jsx)(i,{...e,value:t,onChange:n})}},u={render:e=>{let[t,n]=(0,a.useState)(`#22C7A9`);return(0,o.jsx)(i,{...e,label:`Highlight`,value:t,onChange:n,presets:[{value:`#22C7A9`,label:`Mint`},{value:`#F45B85`,label:`Rose`},{value:`#0B84FF`,label:`Blue`}]})}},d={render:e=>(0,o.jsx)(`div`,{style:{display:`grid`,gap:14,width:280},children:[`xs`,`sm`,`md`,`lg`,`xl`].map(t=>(0,s.createElement)(i,{...e,key:t,size:t,label:`Size ${t}`,defaultValue:`#0B84FF`}))})},f=[`Default`,`WithNamedPresets`,`Sizes`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("#0B84FF");
    return <RumahlColorPicker {...args} value={value} onChange={setValue} />;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("#22C7A9");
    return <RumahlColorPicker {...args} label="Highlight" value={value} onChange={setValue} presets={[{
      value: "#22C7A9",
      label: "Mint"
    }, {
      value: "#F45B85",
      label: "Rose"
    }, {
      value: "#0B84FF",
      label: "Blue"
    }]} />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "grid",
    gap: 14,
    width: 280
  }}>
      {(["xs", "sm", "md", "lg", "xl"] as const).map(size => <RumahlColorPicker {...args} key={size} size={size} label={\`Size \${size}\`} defaultValue="#0B84FF" />)}
    </div>
}`,...d.parameters?.docs?.source}}}})))()}p();export{l as Default,d as Sizes,u as WithNamedPresets,f as __namedExportsOrder,c as default};