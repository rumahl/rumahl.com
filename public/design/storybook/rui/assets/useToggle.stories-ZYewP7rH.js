import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{m as t,n}from"./hooks-Dn8gpBYX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{R as i,St as a,ct as o,n as s}from"./iframe-ey0lnv34.js";var c,l,u,d;function f(){return(f=e((()=>{n(),s(),c=r(),l={title:`Hooks/useToggle`,parameters:{layout:`centered`}},u={render:()=>{let[e,n]=t();return(0,c.jsxs)(`div`,{style:{display:`grid`,gap:12,justifyItems:`start`},children:[(0,c.jsx)(i,{label:`Value: ${e}`,checked:e,onChange:()=>n()}),(0,c.jsx)(a,{onClick:()=>n(),children:`Toggle`}),(0,c.jsx)(a,{onClick:()=>n(!0),children:`Force on`}),(0,c.jsx)(o,{tone:`muted`,children:"Stable toggler: `toggle()`, `toggle(true)`, `toggle(false)`."})]})}},d=[`Default`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [on, toggle] = useToggle();
    return <div style={{
      display: "grid",
      gap: 12,
      justifyItems: "start"
    }}>
        <RumahlSwitch label={\`Value: \${on}\`} checked={on} onChange={() => toggle()} />
        <Button onClick={() => toggle()}>Toggle</Button>
        <Button onClick={() => toggle(true)}>Force on</Button>
        <Text tone="muted">Stable toggler: \`toggle()\`, \`toggle(true)\`, \`toggle(false)\`.</Text>
      </div>;
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as Default,d as __namedExportsOrder,l as default};