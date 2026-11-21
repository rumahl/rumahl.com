import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{i as n,n as r}from"./hooks-Dn8gpBYX.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{St as a,ct as o,ft as s,n as c}from"./iframe-ey0lnv34.js";var l,u,d,f,p;function m(){return(m=e((()=>{l=t(),r(),c(),u=i(),d={title:`Hooks/useClickOutside`,parameters:{layout:`centered`}},f={render:()=>{let[e,t]=(0,l.useState)(!1),r=(0,l.useRef)(null);return n(r,()=>t(!1),e),(0,u.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,u.jsx)(a,{onClick:()=>t(!0),children:`Open panel`}),e?(0,u.jsx)(s,{ref:r,p:4,radius:`12px`,border:!0,background:`var(--rumahl-ui-color-surface-strong)`,children:(0,u.jsx)(o,{children:`Click anywhere outside this box to close it.`})}):null]})}},p=[`Default`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    useClickOutside(ref, () => setOpen(false), open);
    return <div style={{
      display: "grid",
      gap: 12
    }}>
        <Button onClick={() => setOpen(true)}>Open panel</Button>
        {open ? <Box ref={ref} p={4} radius="12px" border background="var(--rumahl-ui-color-surface-strong)">
            <Text>Click anywhere outside this box to close it.</Text>
          </Box> : null}
      </div>;
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as Default,p as __namedExportsOrder,d as default};