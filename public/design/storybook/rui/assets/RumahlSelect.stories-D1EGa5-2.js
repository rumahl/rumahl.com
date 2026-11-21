import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{O as r,n as i}from"./iframe-ey0lnv34.js";import{n as a,t as o}from"./_argtypes-9JdYHY1M.js";var s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{s=t(),i(),o(),c=n(),l=[{value:`light`,label:`Light`},{value:`dark`,label:`Dark`},{value:`auto`,label:`Automatic`},{value:`high`,label:`High contrast`,warning:`May reduce battery life`}],u={title:`Components/Select`,component:r,args:{label:`Appearance`,options:l,value:`light`,onChange:()=>{},size:`md`},parameters:{docs:{description:{component:"Chooses one option from a list. Opens an anchored glass menu (see **Menu**),\nstyled like the OS.\n\n- `status`, `disabled`, `size`, `color` / `backgroundColor`.\n- The selected item is accent-tinted.\n\n## Rules\n- Use a **Select for 4+ options**; use a ButtonGroup / segmented control for 2–4.\n- **Always provide a `label`** and keep options short.\n- **Don't hide essential actions** in a Select — it is for choosing a value."}}},argTypes:{...a,size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`,`xl`]},disabled:{control:`boolean`},status:{control:`inline-radio`,options:[`neutral`,`error`,`success`]},color:{control:`color`},backgroundColor:{control:`color`}}},d=`import { useState } from "react";
import { RumahlSelect } from "@rumahl/ui/components";

const OPTIONS = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "auto", label: "Automatic" }
];

function Story() {
  const [value, setValue] = useState("light");

  return (
    <RumahlSelect
      label="Appearance"
      options={OPTIONS}
      value={value}
      onChange={setValue}
    />
  );
}`,f={parameters:{docs:{source:{language:`tsx`,code:d}}},render:()=>{let[e,t]=(0,s.useState)(`light`);return(0,c.jsx)(r,{label:`Appearance`,options:l,value:e,onChange:t})}},p={render:()=>{let[e,t]=(0,s.useState)(`light`);return(0,c.jsx)(r,{label:`Appearance`,options:l,value:e,onChange:t,error:`Choose a valid option`})}},m={render:()=>(0,c.jsx)(r,{label:`Appearance`,options:l,value:`dark`,onChange:()=>{},disabled:!0})},h={render:()=>(0,c.jsx)(`div`,{style:{display:`grid`,gap:14,maxWidth:320},children:[`xs`,`sm`,`md`,`lg`,`xl`].map(e=>(0,c.jsx)(r,{label:`Size ${e}`,options:l,value:`light`,onChange:()=>{},size:e},e))})},g=Array.from({length:18},(e,t)=>({value:`option-${t}`,label:`Option ${t+1}`})),_={render:()=>{let[e,t]=(0,s.useState)(`option-0`);return(0,c.jsx)(`div`,{style:{width:320},children:(0,c.jsx)(r,{label:`Many options`,options:g,value:e,onChange:t})})}},v=[`Default`,`WithError`,`Disabled`,`Sizes`,`LongList`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        language: "tsx",
        code: DEFAULT_CODE
      }
    }
  },
  render: () => {
    const [value, setValue] = useState("light");
    return <RumahlSelect label="Appearance" options={OPTIONS} value={value} onChange={setValue} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("light");
    return <RumahlSelect label="Appearance" options={OPTIONS} value={value} onChange={setValue} error="Choose a valid option" />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <RumahlSelect label="Appearance" options={OPTIONS} value="dark" onChange={() => {}} disabled />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 14,
    maxWidth: 320
  }}>
      {(["xs", "sm", "md", "lg", "xl"] as const).map(size => <RumahlSelect key={size} label={\`Size \${size}\`} options={OPTIONS} value="light" onChange={() => {}} size={size} />)}
    </div>
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("option-0");
    return <div style={{
      width: 320
    }}>
        <RumahlSelect label="Many options" options={MANY} value={value} onChange={setValue} />
      </div>;
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{f as Default,m as Disabled,_ as LongList,h as Sizes,p as WithError,v as __namedExportsOrder,u as default};