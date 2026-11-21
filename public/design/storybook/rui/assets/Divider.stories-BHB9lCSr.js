import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{ct as n,n as r,nt as i,ut as a}from"./iframe-ey0lnv34.js";var o,s,c,l,u;function d(){return(d=e((()=>{r(),o=t(),s={title:`Primitives/Divider`,component:i,args:{orientation:`horizontal`},argTypes:{orientation:{control:`inline-radio`,options:[`horizontal`,`vertical`]}},parameters:{docs:{description:{component:`A hairline separator (horizontal or vertical).

## Rules
- Use to separate **groups**, not as decoration.
- Prefer \`gap\` / grouping over dividers when you can.`}}}},c={render:e=>(0,o.jsxs)(`div`,{style:{width:260},children:[(0,o.jsx)(n,{children:`Above`}),(0,o.jsx)(i,{...e,style:{margin:`8px 0`}}),(0,o.jsx)(n,{children:`Below`})]})},l={render:()=>(0,o.jsxs)(a,{align:`center`,gap:3,style:{height:32},children:[(0,o.jsx)(n,{children:`Left`}),(0,o.jsx)(i,{orientation:`vertical`}),(0,o.jsx)(n,{children:`Right`})]})},u=[`Default`,`Vertical`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 260
  }}>
      <Text>Above</Text>
      <Divider {...args} style={{
      margin: "8px 0"
    }} />
      <Text>Below</Text>
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Flex align="center" gap={3} style={{
    height: 32
  }}>
      <Text>Left</Text>
      <Divider orientation="vertical" />
      <Text>Right</Text>
    </Flex>
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as Default,l as Vertical,u as __namedExportsOrder,s as default};