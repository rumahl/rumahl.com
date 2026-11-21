import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{a as n,n as r}from"./hooks-Dn8gpBYX.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{N as a,ct as o,n as s}from"./iframe-ey0lnv34.js";var c,l,u,d,f;function p(){return(p=e((()=>{c=t(),r(),s(),l=i(),u={title:`Hooks/useDebounce`,parameters:{layout:`centered`}},d={render:()=>{let[e,t]=(0,c.useState)(``),r=n(e,500);return(0,l.jsxs)(`div`,{style:{display:`grid`,gap:8,width:320},children:[(0,l.jsx)(a,{placeholder:`Type…`,value:e,onChange:e=>t(e.target.value)}),(0,l.jsxs)(o,{children:[`live: `,e||`—`]}),(0,l.jsxs)(o,{tone:`accent`,children:[`debounced (500ms): `,r||`—`]})]})}},f=[`Default`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    const debounced = useDebounce(value, 500);
    return <div style={{
      display: "grid",
      gap: 8,
      width: 320
    }}>
        <RumahlInput placeholder="Type…" value={value} onChange={event => setValue(event.target.value)} />
        <Text>live: {value || "—"}</Text>
        <Text tone="accent">debounced (500ms): {debounced || "—"}</Text>
      </div>;
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as Default,f as __namedExportsOrder,u as default};