import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{n,p as r}from"./hooks-Dn8gpBYX.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{St as a,ct as o,n as s}from"./iframe-ey0lnv34.js";var c,l,u,d,f;function p(){return(p=e((()=>{c=t(),n(),s(),l=i(),u={title:`Hooks/useTimeout`,parameters:{layout:`centered`}},d={render:()=>{let[e,t]=(0,c.useState)(!1);return r(()=>t(!1),e?2e3:null),(0,l.jsxs)(`div`,{style:{display:`grid`,gap:10,justifyItems:`start`},children:[(0,l.jsx)(o,{children:e?`Disarms in 2s…`:`Idle`}),(0,l.jsx)(a,{onClick:()=>t(!0),children:`Arm`})]})}},f=[`Default`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [armed, setArmed] = useState(false);
    useTimeout(() => setArmed(false), armed ? 2000 : null);
    return <div style={{
      display: "grid",
      gap: 10,
      justifyItems: "start"
    }}>
        <Text>{armed ? "Disarms in 2s…" : "Idle"}</Text>
        <Button onClick={() => setArmed(true)}>Arm</Button>
      </div>;
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as Default,f as __namedExportsOrder,u as default};