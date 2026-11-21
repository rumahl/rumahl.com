import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{N as r,O as i,R as a,St as o,n as s,o as c,s as l}from"./iframe-ey0lnv34.js";function u(){let[e,t]=(0,d.useState)(`auto`),[n,s]=(0,d.useState)(!0);return(0,f.jsxs)(`div`,{style:{display:`grid`,gap:18,width:460},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,gap:10,flexWrap:`wrap`},children:[(0,f.jsx)(o,{variant:`secondary`,children:`Secondary`}),(0,f.jsx)(o,{variant:`primary`,children:`Primary`}),(0,f.jsx)(o,{variant:`danger`,children:`Danger`}),(0,f.jsx)(o,{variant:`ghost`,children:`Ghost`})]}),(0,f.jsx)(r,{placeholder:`Text field`,defaultValue:`Input`}),(0,f.jsx)(i,{label:`Select`,value:e,onChange:t,options:[{value:`auto`,label:`Automatic`},{value:`light`,label:`Light`},{value:`dark`,label:`Dark`}]}),(0,f.jsx)(a,{label:`Switch`,checked:n,onChange:e=>s(e.target.checked)}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,f.jsx)(c,{tone:`success`,children:`Success`}),(0,f.jsx)(c,{tone:`warning`,children:`Warning`})]}),(0,f.jsx)(l,{title:`Notice`,tone:`info`,children:`A notice uses the same material as the controls.`})]})}var d,f,p,m,h;function g(){return(g=e((()=>{d=t(),s(),f=n(),p={title:`Foundations/Materials`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`Glass = recessed glass, Solid = flat, Floating = liquid glass over content. Switch the Material toolbar to compare. Inputs and buttons share the same recipe; only the tint (colour) and the material differ.`}}}},m={render:()=>(0,f.jsx)(u,{}),parameters:{docs:{source:{language:`tsx`,code:`import { useState } from "react";
import {
  Button,
  RumahlBadge,
  RumahlInput,
  RumahlNotice,
  RumahlSelect,
  RumahlSwitch
} from "@rumahl/ui/components";

export function Example() {
  const [value, setValue] = useState("auto");
  const [on, setOn] = useState(true);
  return (
    <div style={{ display: "grid", gap: 18, width: 460 }}>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Button variant="secondary">Secondary</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="ghost">Ghost</Button>
      </div>

      <RumahlInput placeholder="Text field" defaultValue="Input" />

      <RumahlSelect
        label="Select"
        value={value}
        onChange={setValue}
        options={[
          { value: "auto", label: "Automatic" },
          { value: "light", label: "Light" },
          { value: "dark", label: "Dark" }
        ]}
      />

      <RumahlSwitch label="Switch" checked={on} onChange={(event) => setOn(event.target.checked)} />

      <div style={{ display: "flex", gap: 8 }}>
        <RumahlBadge tone="success">Success</RumahlBadge>
        <RumahlBadge tone="warning">Warning</RumahlBadge>
      </div>

      <RumahlNotice title="Notice" tone="info">
        A notice uses the same material as the controls.
      </RumahlNotice>
    </div>
  );
}`}}}},h=[`Overview`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Kit />,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        code: \`import { useState } from "react";
import {
  Button,
  RumahlBadge,
  RumahlInput,
  RumahlNotice,
  RumahlSelect,
  RumahlSwitch
} from "@rumahl/ui/components";

export function Example() {
  const [value, setValue] = useState("auto");
  const [on, setOn] = useState(true);
  return (
    <div style={{ display: "grid", gap: 18, width: 460 }}>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Button variant="secondary">Secondary</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="ghost">Ghost</Button>
      </div>

      <RumahlInput placeholder="Text field" defaultValue="Input" />

      <RumahlSelect
        label="Select"
        value={value}
        onChange={setValue}
        options={[
          { value: "auto", label: "Automatic" },
          { value: "light", label: "Light" },
          { value: "dark", label: "Dark" }
        ]}
      />

      <RumahlSwitch label="Switch" checked={on} onChange={(event) => setOn(event.target.checked)} />

      <div style={{ display: "flex", gap: 8 }}>
        <RumahlBadge tone="success">Success</RumahlBadge>
        <RumahlBadge tone="warning">Warning</RumahlBadge>
      </div>

      <RumahlNotice title="Notice" tone="info">
        A notice uses the same material as the controls.
      </RumahlNotice>
    </div>
  );
}\`
      }
    }
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{m as Overview,h as __namedExportsOrder,p as default};