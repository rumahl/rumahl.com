import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{d as n,n as r}from"./hooks-Dn8gpBYX.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{St as a,ct as o,n as s}from"./iframe-ey0lnv34.js";var c,l,u,d,f;function p(){return(p=e((()=>{c=t(),r(),s(),l=i(),u={title:`Hooks/usePrevious`,parameters:{layout:`centered`}},d={render:()=>{let[e,t]=(0,c.useState)(0),r=n(e);return(0,l.jsxs)(`div`,{style:{display:`grid`,gap:10,justifyItems:`start`},children:[(0,l.jsxs)(o,{children:[`current: `,e]}),(0,l.jsxs)(o,{tone:`muted`,children:[`previous: `,r??`—`]}),(0,l.jsx)(a,{onClick:()=>t(e=>e+1),children:`Increment`})]})}},f=[`Default`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [count, setCount] = useState(0);
    const previous = usePrevious(count);
    return <div style={{
      display: "grid",
      gap: 10,
      justifyItems: "start"
    }}>
        <Text>current: {count}</Text>
        <Text tone="muted">previous: {previous ?? "—"}</Text>
        <Button onClick={() => setCount(value => value + 1)}>Increment</Button>
      </div>;
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as Default,f as __namedExportsOrder,u as default};