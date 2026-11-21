import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{C as r,St as i,V as a,n as o,o as s,s as c}from"./iframe-ey0lnv34.js";function l(){let[e,t]=(0,u.useState)(!1);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{variant:`danger`,onClick:()=>t(!0),children:`Delete backup`}),(0,d.jsx)(r,{open:e,onClose:()=>t(!1),onConfirm:()=>t(!1),title:`Delete this backup?`,description:`This cannot be undone.`,confirmLabel:`Delete`,cancelLabel:`Cancel`,destructive:!0})]})}var u,d,f,p,m,h;function g(){return(g=e((()=>{u=t(),o(),d=n(),f={title:`Patterns/Feedback`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`# Feedback

Communicate state with badges (inline status), notices (callouts), progress
(ongoing work) and a dialog (blocking confirmation).

## Do
- Pick the **lightest** surface for the urgency: Badge (inline status) →
  Notice (contextual callout) → Toast (transient event) → Dialog (blocking
  decision).
- Label progress and expose a value; lead a notice with the consequence.
- Use \`destructive\` on the confirming action when it can't be undone.

## Don't
- Don't stack several notices for one message.
- Don't use a Toast for something the user must act on.
- Don't rely on colour alone (badge tone / progress fill) — always add text.`}}}},p={render:()=>(0,d.jsxs)(`div`,{style:{display:`grid`,gap:16,width:460},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,d.jsx)(s,{children:`Neutral`}),(0,d.jsx)(s,{tone:`success`,children:`Up to date`}),(0,d.jsx)(s,{tone:`warning`,children:`Update available`}),(0,d.jsx)(s,{tone:`danger`,children:`Failed`})]}),(0,d.jsx)(c,{title:`Update available`,tone:`info`,children:`A new version is ready to install.`}),(0,d.jsx)(c,{title:`Low storage`,tone:`warning`,children:`Only 3 GB left.`}),(0,d.jsx)(a,{label:`Installing`,value:42})]})},m={render:()=>(0,d.jsx)(l,{}),parameters:{docs:{source:{language:`tsx`,code:`import { useState } from "react";
import { Button, RumahlDialog } from "@rumahl/ui/components";

export function DeleteBackup() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="danger" onClick={() => setOpen(true)}>
        Delete backup
      </Button>
      <RumahlDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => setOpen(false)}
        title="Delete this backup?"
        description="This cannot be undone."
        confirmLabel="Delete"
        cancelLabel="Cancel"
        destructive
      />
    </>
  );
}`}}}},h=[`Status`,`Confirmation`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 16,
    width: 460
  }}>
      <div style={{
      display: "flex",
      gap: 8
    }}>
        <RumahlBadge>Neutral</RumahlBadge>
        <RumahlBadge tone="success">Up to date</RumahlBadge>
        <RumahlBadge tone="warning">Update available</RumahlBadge>
        <RumahlBadge tone="danger">Failed</RumahlBadge>
      </div>
      <RumahlNotice title="Update available" tone="info">
        A new version is ready to install.
      </RumahlNotice>
      <RumahlNotice title="Low storage" tone="warning">Only 3 GB left.</RumahlNotice>
      <RumahlProgress label="Installing" value={42} />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Confirm />,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        code: \`import { useState } from "react";
import { Button, RumahlDialog } from "@rumahl/ui/components";

export function DeleteBackup() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="danger" onClick={() => setOpen(true)}>
        Delete backup
      </Button>
      <RumahlDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => setOpen(false)}
        title="Delete this backup?"
        description="This cannot be undone."
        confirmLabel="Delete"
        cancelLabel="Cancel"
        destructive
      />
    </>
  );
}\`
      }
    }
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{m as Confirmation,p as Status,h as __namedExportsOrder,f as default};