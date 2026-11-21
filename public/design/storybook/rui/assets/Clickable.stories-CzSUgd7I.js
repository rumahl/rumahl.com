import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{K as r,ct as i,n as a}from"./iframe-ey0lnv34.js";var o,s,c,l,u;function d(){return(d=e((()=>{o=t(),a(),s=n(),c={title:`Primitives/Clickable`,component:r,args:{disabled:!1},argTypes:{disabled:{control:`boolean`}},parameters:{docs:{description:{component:`Wraps arbitrary content into a single accessible target.

## Rules
- **One target, one action**; role and keyboard handling are built in.
- \`disabled\` removes it from the tab order.`}}}},l={render:e=>{let[t,n]=(0,o.useState)(0);return(0,s.jsx)(r,{...e,onActivate:()=>n(e=>e+1),style:{padding:12,border:`1px solid var(--control-border)`,display:`inline-block`},children:(0,s.jsxs)(i,{children:[`Activated `,t,` times — click or press Enter/Space`]})})}},u=[`Default`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [count, setCount] = useState(0);
    return <Clickable {...args} onActivate={() => setCount(value => value + 1)} style={{
      padding: 12,
      border: "1px solid var(--control-border)",
      display: "inline-block"
    }}>
        <Text>Activated {count} times — click or press Enter/Space</Text>
      </Clickable>;
  }
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as Default,u as __namedExportsOrder,c as default};