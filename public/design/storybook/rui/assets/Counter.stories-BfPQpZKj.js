import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{It as r,n as i}from"./iframe-ey0lnv34.js";import{n as a,t as o}from"./_argtypes-9JdYHY1M.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{s=t(),i(),o(),c=n(),l={title:`Components/Counter`,component:r,args:{value:3,onChange:()=>{},min:0,max:10,step:1,label:`Quantity`,size:`md`},argTypes:{...a,value:{control:{type:`number`}},min:{control:{type:`number`}},max:{control:{type:`number`}},step:{control:{type:`number`}},size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`,`xl`]},disabled:{control:`boolean`},color:{control:`color`}},parameters:{docs:{description:{component:`A numeric stepper for small, bounded integer values.

## Rules
- For **small, bounded** numbers (quantity, count); free-form numbers use an Input.
- Always provide a \`label\`.
- Clamp or disable at the bounds rather than letting the value leave the range.`}}}},u={render:e=>{let[t,n]=(0,s.useState)(3);return(0,c.jsx)(r,{...e,value:t,onChange:n})}},d={render:()=>{let[e,t]=(0,s.useState)(3);return(0,c.jsx)(`div`,{style:{display:`flex`,gap:14,alignItems:`center`},children:[`xs`,`sm`,`md`,`lg`,`xl`].map(n=>(0,c.jsx)(r,{label:`Quantity`,value:e,onChange:t,min:0,max:10,size:n},n))})}},f=[`Default`,`Sizes`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(3);
    return <Counter {...args} value={value} onChange={setValue} />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(3);
    return <div style={{
      display: "flex",
      gap: 14,
      alignItems: "center"
    }}>
        {(["xs", "sm", "md", "lg", "xl"] as const).map(size => <Counter key={size} label="Quantity" value={value} onChange={setValue} min={0} max={10} size={size} />)}
      </div>;
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{u as Default,d as Sizes,f as __namedExportsOrder,l as default};