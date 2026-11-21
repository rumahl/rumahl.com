import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{c as r,n as i}from"./iframe-ey0lnv34.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{a=t(),i(),o=n(),s={title:`Components/Search`,component:r,args:{label:`Search apps`,clearLabel:`Clear search`,value:``,onChange:()=>{}},argTypes:{size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`,`xl`]}},parameters:{layout:`centered`,docs:{description:{component:`A labelled search field with a clear affordance.

## Rules
- It is an input — **always label it** (a placeholder is not a label).
- Provide a clear action; debounce live filtering.`}}}},c={render:e=>{let[t,n]=(0,a.useState)(`rumahl`);return(0,o.jsx)(r,{...e,value:t,onChange:n})}},l={render:()=>{let[e,t]=(0,a.useState)(`rumahl`);return(0,o.jsx)(`div`,{style:{display:`grid`,gap:14,width:320},children:[`xs`,`sm`,`md`,`lg`,`xl`].map(n=>(0,o.jsx)(r,{label:`Search (${n})`,clearLabel:`Clear search`,value:e,onChange:t,size:n},n))})}},u=[`Default`,`Sizes`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("rumahl");
    return <RumahlSearch {...args} value={value} onChange={setValue} />;
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("rumahl");
    return <div style={{
      display: "grid",
      gap: 14,
      width: 320
    }}>
        {(["xs", "sm", "md", "lg", "xl"] as const).map(size => <RumahlSearch key={size} label={\`Search (\${size})\`} clearLabel="Clear search" value={value} onChange={setValue} size={size} />)}
      </div>;
  }
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as Default,l as Sizes,u as __namedExportsOrder,s as default};