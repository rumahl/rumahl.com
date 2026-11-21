import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{At as r,St as i,kt as a,n as o}from"./iframe-ey0lnv34.js";import{n as s,t as c}from"./_argtypes-9JdYHY1M.js";var l,u,d,f,p,m,h;function g(){return(g=e((()=>{l=t(),o(),c(),u=n(),d={title:`Components/Toast`,component:a,args:{title:`Update available`,message:`A new version is ready to install.`,tone:`info`},argTypes:{...s,tone:{control:`inline-radio`,options:[`info`,`success`,`warning`,`danger`]},title:{control:`text`},message:{control:`text`}},parameters:{windowSurface:!1,docs:{description:{component:`A transient, non-blocking notification that stacks in a corner.

## Rules
- Toasts are for **transient** events; persistent messages are Notices.
- One line of consequence plus an optional action; they auto-dismiss.
- Never gate a required action on a toast.`}}}},f={render:e=>(0,u.jsx)(a,{...e,onClose:()=>{}})},p={render:()=>(0,u.jsx)(`div`,{style:{display:`grid`,gap:10},children:[`info`,`success`,`warning`,`danger`].map(e=>(0,u.jsx)(a,{tone:e,title:e,message:`A ${e} notification.`},e))})},m={render:()=>{let[e,t]=(0,l.useState)([]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{onClick:()=>t(e=>[...e,{id:String(Date.now()),title:`Saved`,message:`Your changes were saved.`,tone:`success`}]),children:`Show toast`}),(0,u.jsx)(r,{toasts:e,onClose:e=>t(t=>t.filter(t=>t.id!==e))})]})}},h=[`Default`,`Tones`,`Stack`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Toast {...args} onClose={() => {}} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 10
  }}>
      {(["info", "success", "warning", "danger"] as const).map(tone => <Toast key={tone} tone={tone} title={tone} message={\`A \${tone} notification.\`} />)}
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [toasts, setToasts] = useState<ToastData[]>([]);
    return <>
        <Button onClick={() => setToasts(current => [...current, {
        id: String(Date.now()),
        title: "Saved",
        message: "Your changes were saved.",
        tone: "success"
      }])}>
          Show toast
        </Button>
        <ToastStack toasts={toasts} onClose={id => setToasts(current => current.filter(toast => toast.id !== id))} />
      </>;
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{f as Default,m as Stack,p as Tones,h as __namedExportsOrder,d as default};