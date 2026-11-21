import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{b as r,n as i,x as a}from"./iframe-ey0lnv34.js";var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{o=t(),i(),s=n(),c=[`xs`,`sm`,`md`,`lg`,`xl`],l={title:`Components/Calendar`,args:{size:`md`},argTypes:{size:{control:`inline-radio`,options:c}},parameters:{docs:{description:{component:`A date picker calendar.

## Rules
- One month at a time; **today** and the **selected** day are visually distinct.
- Pair with a labelled field; never signal the selection by colour alone.`}}}},u={render:e=>{let[t,n]=(0,o.useState)(`2026-10-14`);return(0,s.jsx)(r,{value:t,onChange:n,size:e.size})}},d={render:e=>{let[t,n]=(0,o.useState)(`2026-10-14`);return(0,s.jsx)(a,{label:`Scheduled date`,value:t,onChange:n,size:e.size})}},f={render:e=>{let[t,n]=(0,o.useState)(`2026-10-14`);return(0,s.jsx)(a,{label:`Within a range`,min:`2026-10-01`,max:`2026-10-31`,value:t,onChange:n,size:e.size})}},p={render:()=>(0,s.jsx)(`div`,{style:{display:`grid`,gap:16},children:c.map(e=>(0,s.jsx)(a,{label:`Size ${e}`,value:`2026-10-14`,onChange:()=>{},size:e},e))})},m=[`Calendar`,`DatePicker`,`Bounded`,`Sizes`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("2026-10-14");
    return <RumahlCalendar value={value} onChange={setValue} size={args.size} />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("2026-10-14");
    return <RumahlDatePicker label="Scheduled date" value={value} onChange={setValue} size={args.size} />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("2026-10-14");
    return <RumahlDatePicker label="Within a range" min="2026-10-01" max="2026-10-31" value={value} onChange={setValue} size={args.size} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 16
  }}>
      {SIZE_OPTIONS.map(size => <RumahlDatePicker key={size} label={\`Size \${size}\`} value="2026-10-14" onChange={() => {}} size={size} />)}
    </div>
}`,...p.parameters?.docs?.source}}}})))()}h();export{f as Bounded,u as Calendar,d as DatePicker,p as Sizes,m as __namedExportsOrder,l as default};