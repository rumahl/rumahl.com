import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{ct as n,ft as r,n as i,ut as a}from"./iframe-ey0lnv34.js";var o,s,c,l;function u(){return(u=e((()=>{i(),o=t(),s={title:`Primitives/Flex`,component:a,args:{direction:`row`,align:`center`,justify:`start`,gap:3},argTypes:{direction:{control:`inline-radio`,options:[`row`,`column`,`row-reverse`,`column-reverse`]},align:{control:`inline-radio`,options:[`start`,`center`,`end`,`stretch`,`baseline`]},justify:{control:`inline-radio`,options:[`start`,`center`,`end`,`between`,`around`,`evenly`]},wrap:{control:`boolean`},inline:{control:`boolean`},gap:{control:{type:`number`}}},parameters:{docs:{description:{component:`The flexbox primitive (direction / align / justify / gap / wrap).

## Rules
- Use \`gap\` (token steps) instead of margins between children.
- \`inline\` shrink-wraps a row; otherwise Flex fills its parent.`}}}},c={render:e=>(0,o.jsx)(a,{...e,children:[1,2,3].map(e=>(0,o.jsx)(r,{p:3,radius:`8px`,background:`var(--rumahl-ui-color-surface-strong)`,border:!0,children:(0,o.jsxs)(n,{children:[`Item `,e]})},e))})},l=[`Default`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Flex {...args}>
      {[1, 2, 3].map(n => <Box key={n} p={3} radius="8px" background="var(--rumahl-ui-color-surface-strong)" border>
          <Text>Item {n}</Text>
        </Box>)}
    </Flex>
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as Default,l as __namedExportsOrder,s as default};