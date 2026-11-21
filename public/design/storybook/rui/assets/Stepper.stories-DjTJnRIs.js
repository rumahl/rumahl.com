import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{l as r,n as i}from"./iframe-ey0lnv34.js";var a,o,s,c,l;function u(){return(u=e((()=>{a=t(),i(),o=n(),s={title:`Components/Stepper`,component:r,args:{label:`Volume`,decreaseLabel:`Decrease`,increaseLabel:`Increase`,value:3,onChange:()=>{},min:0,max:10},argTypes:{size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`,`xl`]}},parameters:{layout:`centered`,docs:{description:{component:`A numeric stepper with +/− controls (a labelled counter).

## Rules
- **Bounded values only**; label it and clamp at the bounds.
- For free-form numbers use an Input.`}}}},c={render:e=>{let[t,n]=(0,a.useState)(3);return(0,o.jsx)(r,{...e,value:t,onChange:n})}},l=[`Default`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(3);
    return <RumahlStepper {...args} value={value} onChange={setValue} />;
  }
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as Default,l as __namedExportsOrder,s as default};