import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{C as r,St as i,n as a,w as o}from"./iframe-ey0lnv34.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{s=t(),a(),c=n(),l={title:`Components/Dialog`,component:r,args:{open:!0,onClose:()=>{},onConfirm:()=>{},title:`Delete backup?`,description:`This cannot be undone.`,confirmLabel:`Delete`,cancelLabel:`Cancel`,destructive:!0},argTypes:{title:{control:`text`},description:{control:`text`},confirmLabel:{control:`text`},cancelLabel:{control:`text`},destructive:{control:`boolean`}},parameters:{docs:{description:{component:`A modal focused on a single decision.

## Rules
- **One decision per dialog** — the title states it, the actions are explicit.
- \`destructive\` styles the confirm action as danger (for deletions).
- Always provide a cancel / Escape path and trap focus.`}}}},u={render:e=>{let[t,n]=(0,s.useState)(!0);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{onClick:()=>n(!0),children:`Open alert`}),(0,c.jsx)(r,{...e,open:t,onClose:()=>n(!1),onConfirm:()=>n(!1)})]})}},d={render:()=>{let[e,t]=(0,s.useState)(!0);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{onClick:()=>t(!0),children:`Open window`}),(0,c.jsx)(o,{open:e,onClose:()=>t(!1),title:`System settings`,application:`Settings`,description:`Changes apply immediately.`,closeLabel:`Close`,actions:(0,c.jsx)(i,{variant:`primary`,onClick:()=>t(!1),children:`Save`}),children:(0,c.jsx)(`p`,{children:`Modal body content.`})})]})}},f=[`Alert`,`Window`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return <>
        <Button onClick={() => setOpen(true)}>Open alert</Button>
        <RumahlDialog {...args} open={open} onClose={() => setOpen(false)} onConfirm={() => setOpen(false)} />
      </>;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <>
        <Button onClick={() => setOpen(true)}>Open window</Button>
        <RumahlModal open={open} onClose={() => setOpen(false)} title="System settings" application="Settings" description="Changes apply immediately." closeLabel="Close" actions={<Button variant="primary" onClick={() => setOpen(false)}>Save</Button>}>
          <p>Modal body content.</p>
        </RumahlModal>
      </>;
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{u as Alert,d as Window,f as __namedExportsOrder,l as default};