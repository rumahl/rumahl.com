import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{N as r,O as i,R as a,St as o,j as s,n as c}from"./iframe-ey0lnv34.js";function l(){let[e,t]=(0,u.useState)(``),[n,c]=(0,u.useState)(`eu`),[l,f]=(0,u.useState)(!1),[p,m]=(0,u.useState)(!1),h=p&&!e.trim()?`Please enter a name`:void 0;return(0,d.jsxs)(`form`,{style:{display:`grid`,gap:18,width:420},onSubmit:e=>{e.preventDefault(),m(!0)},children:[(0,d.jsxs)(s,{label:`Device`,description:`How this device is identified.`,children:[(0,d.jsx)(r,{placeholder:`Device name`,value:e,...h?{error:h}:{},onChange:e=>t(e.target.value)}),(0,d.jsx)(i,{label:`Region`,value:n,onChange:c,options:[{value:`eu`,label:`Europe`},{value:`us`,label:`United States`},{value:`apac`,label:`Asia Pacific`}]}),(0,d.jsx)(a,{label:`Share anonymous telemetry`,checked:l,onChange:e=>f(e.target.checked)})]}),(0,d.jsxs)(`div`,{style:{display:`flex`,gap:10},children:[(0,d.jsx)(o,{variant:`primary`,type:`submit`,children:`Save`}),(0,d.jsx)(o,{type:`reset`,children:`Reset`})]})]})}var u,d,f,p,m;function h(){return(h=e((()=>{u=t(),c(),d=n(),f={title:`Patterns/Forms`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`# Forms

Compose a settings form from fields. Each field owns its label and its
validation feedback; the form only wires state and submit. Validation is shown
with \`error\` (border + ring + message), never by tinting the inset.

## Do
- **Label every field** (\`RumahlFieldGroup\` + the field's \`label\`) — a
  placeholder is not a label.
- **Validate on submit or blur**, not on every keystroke, and put the message
  next to the field via \`error\`.
- **One primary action** (Save); Reset / Cancel stay secondary.
- **Group related fields** with \`RumahlFieldGroup\`; keep the form short.

## Don't
- Don't signal an error with colour alone — pair it with text.
- Don't disable the submit button to "prevent" errors; show them instead.
- Don't use a placeholder as the only label.`}}}},p={render:()=>(0,d.jsx)(l,{}),parameters:{docs:{source:{language:`tsx`,code:`import { useState } from "react";
import {
  Button,
  RumahlFieldGroup,
  RumahlInput,
  RumahlSelect,
  RumahlSwitch
} from "@rumahl/ui/components";

export function DeviceSettings() {
  const [name, setName] = useState("");
  const [region, setRegion] = useState("eu");
  const [telemetry, setTelemetry] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const nameError = submitted && !name.trim() ? "Please enter a name" : undefined;
  return (
    <form
      style={{ display: "grid", gap: 18, width: 420 }}
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <RumahlFieldGroup label="Device" description="How this device is identified.">
        <RumahlInput
          placeholder="Device name"
          value={name}
          error={nameError}
          onChange={(event) => setName(event.target.value)}
        />
        <RumahlSelect
          label="Region"
          value={region}
          onChange={setRegion}
          options={[
            { value: "eu", label: "Europe" },
            { value: "us", label: "United States" },
            { value: "apac", label: "Asia Pacific" }
          ]}
        />
        <RumahlSwitch
          label="Share anonymous telemetry"
          checked={telemetry}
          onChange={(event) => setTelemetry(event.target.checked)}
        />
      </RumahlFieldGroup>
      <div style={{ display: "flex", gap: 10 }}>
        <Button variant="primary" type="submit">Save</Button>
        <Button type="reset">Reset</Button>
      </div>
    </form>
  );
}`}}}},m=[`Settings`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsForm />,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        code: \`import { useState } from "react";
import {
  Button,
  RumahlFieldGroup,
  RumahlInput,
  RumahlSelect,
  RumahlSwitch
} from "@rumahl/ui/components";

export function DeviceSettings() {
  const [name, setName] = useState("");
  const [region, setRegion] = useState("eu");
  const [telemetry, setTelemetry] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const nameError = submitted && !name.trim() ? "Please enter a name" : undefined;
  return (
    <form
      style={{ display: "grid", gap: 18, width: 420 }}
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <RumahlFieldGroup label="Device" description="How this device is identified.">
        <RumahlInput
          placeholder="Device name"
          value={name}
          error={nameError}
          onChange={(event) => setName(event.target.value)}
        />
        <RumahlSelect
          label="Region"
          value={region}
          onChange={setRegion}
          options={[
            { value: "eu", label: "Europe" },
            { value: "us", label: "United States" },
            { value: "apac", label: "Asia Pacific" }
          ]}
        />
        <RumahlSwitch
          label="Share anonymous telemetry"
          checked={telemetry}
          onChange={(event) => setTelemetry(event.target.checked)}
        />
      </RumahlFieldGroup>
      <div style={{ display: "flex", gap: 10 }}>
        <Button variant="primary" type="submit">Save</Button>
        <Button type="reset">Reset</Button>
      </div>
    </form>
  );
}\`
      }
    }
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as Settings,m as __namedExportsOrder,f as default};