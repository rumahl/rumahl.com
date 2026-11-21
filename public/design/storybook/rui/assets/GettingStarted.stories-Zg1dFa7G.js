import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{N as n,R as r,St as i,lr as a,n as o,sr as s}from"./iframe-ey0lnv34.js";function c(){let{theme:e}=a();return(0,l.jsxs)(`div`,{style:{display:`grid`,gap:14,width:360},children:[(0,l.jsxs)(`strong`,{children:[`Hello from `,e.name]}),(0,l.jsx)(n,{placeholder:`Name`}),(0,l.jsx)(r,{label:`Enable`,defaultChecked:!0}),(0,l.jsx)(i,{variant:`primary`,children:`Save`})]})}var l,u,d,f;function p(){return(p=e((()=>{s(),o(),l=t(),u={title:`Guides/Getting started`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`Installation, styles, providers and first components.`}}}},d={render:()=>(0,l.jsx)(c,{}),parameters:{docs:{source:{language:`tsx`,code:`import { Button, RumahlInput, RumahlSwitch } from "@rumahl/ui/components";

export function App() {
  return (
    <div style={{ display: "grid", gap: 14, width: 360 }}>
      <RumahlInput placeholder="Name" />
      <RumahlSwitch label="Enable" defaultChecked />
      <Button variant="primary">Save</Button>
    </div>
  );
}`}}}},f=[`FirstComponents`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Hello />,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        code: \`import { Button, RumahlInput, RumahlSwitch } from "@rumahl/ui/components";

export function App() {
  return (
    <div style={{ display: "grid", gap: 14, width: 360 }}>
      <RumahlInput placeholder="Name" />
      <RumahlSwitch label="Enable" defaultChecked />
      <Button variant="primary">Save</Button>
    </div>
  );
}\`
      }
    }
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as FirstComponents,f as __namedExportsOrder,u as default};