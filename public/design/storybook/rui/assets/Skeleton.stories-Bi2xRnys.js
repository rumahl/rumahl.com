import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{Mt as n,n as r}from"./iframe-ey0lnv34.js";var i,a,o,s,c,l,u;function d(){return(d=e((()=>{r(),i=t(),a={title:`Components/Skeleton`,component:n,args:{variant:`rect`,width:200,height:80},argTypes:{variant:{control:`inline-radio`,options:[`rect`,`text`,`circle`]},width:{control:`text`},height:{control:`text`},lines:{control:{type:`number`}}},parameters:{docs:{description:{component:`Loading placeholders that mirror the shape of the content to come
(rect / circle / text, or \`lines\` for a paragraph).

## Rules
- **Match the real layout** so the page doesn't jump when content arrives.
- Skeletons for known layouts; a Spinner for unknown waits.
- The shimmer honours reduced motion.`}}}},o={},s={args:{variant:`circle`,width:56,height:56}},c={args:{variant:`text`,lines:4}},l={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:12,width:300},children:[(0,i.jsx)(n,{variant:`circle`,width:48,height:48}),(0,i.jsxs)(`div`,{style:{flex:1},children:[(0,i.jsx)(n,{variant:`text`,width:`60%`}),(0,i.jsx)(`div`,{style:{height:8}}),(0,i.jsx)(n,{variant:`text`,lines:3})]})]})},u=[`Default`,`Circle`,`Paragraph`,`Card`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "circle",
    width: 56,
    height: 56
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "text",
    lines: 4
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12,
    width: 300
  }}>
      <Skeleton variant="circle" width={48} height={48} />
      <div style={{
      flex: 1
    }}>
        <Skeleton variant="text" width="60%" />
        <div style={{
        height: 8
      }} />
        <Skeleton variant="text" lines={3} />
      </div>
    </div>
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as Card,s as Circle,o as Default,c as Paragraph,u as __namedExportsOrder,a as default};