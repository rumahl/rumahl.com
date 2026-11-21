import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{N as n,P as r,St as i,Wn as a,Xn as o,n as s}from"./iframe-ey0lnv34.js";var c,l,u,d,f;function p(){return(p=e((()=>{s(),o(),c=t(),l={title:`Guides/Overrides`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`More props, custom className/style and overrides like glass={false} or floating — an alternative to rebuilding everything in a custom theme.`}}}},u={render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:10,flexWrap:`wrap`,alignItems:`center`},children:[(0,c.jsx)(i,{children:`Default glass`}),(0,c.jsxs)(i,{glass:!1,children:[`glass=`,!1,` (flat)`]}),(0,c.jsx)(i,{variant:`primary`,children:`Primary`}),(0,c.jsx)(i,{variant:`primary`,glass:!1,children:`Primary flat`}),(0,c.jsx)(i,{floating:!0,children:`floating`}),(0,c.jsx)(i,{style:{borderRadius:12,paddingInline:22},className:`my-custom-button`,children:`custom style`})]})},d={render:()=>(0,c.jsxs)(`div`,{style:{display:`grid`,gap:14,width:420},children:[(0,c.jsx)(n,{placeholder:`Default glass`}),(0,c.jsx)(n,{glass:!1,placeholder:`glass={false} (flat)`}),(0,c.jsx)(n,{floating:!0,placeholder:`floating`}),(0,c.jsx)(r,{prefix:(0,c.jsx)(a,{"aria-hidden":`true`}),placeholder:`InputGroup glass`}),(0,c.jsx)(r,{glass:!1,prefix:(0,c.jsx)(a,{"aria-hidden":`true`}),placeholder:`InputGroup flat`}),(0,c.jsx)(r,{floating:!0,prefix:(0,c.jsx)(a,{"aria-hidden":`true`}),placeholder:`InputGroup floating`}),(0,c.jsx)(n,{style:{borderColor:`#e5484d`},placeholder:`custom style`})]})},f=[`Buttons`,`Inputs`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    alignItems: "center"
  }}>
      <Button>Default glass</Button>
      <Button glass={false}>glass={false} (flat)</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="primary" glass={false}>Primary flat</Button>
      <Button floating>floating</Button>
      {/* Custom className / style are just native props. */}
      <Button style={{
      borderRadius: 12,
      paddingInline: 22
    }} className="my-custom-button">
        custom style
      </Button>
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 14,
    width: 420
  }}>
      <RumahlInput placeholder="Default glass" />
      <RumahlInput glass={false} placeholder="glass={false} (flat)" />
      <RumahlInput floating placeholder="floating" />
      <RumahlInputGroup prefix={<SearchIcon aria-hidden="true" />} placeholder="InputGroup glass" />
      <RumahlInputGroup glass={false} prefix={<SearchIcon aria-hidden="true" />} placeholder="InputGroup flat" />
      <RumahlInputGroup floating prefix={<SearchIcon aria-hidden="true" />} placeholder="InputGroup floating" />
      <RumahlInput style={{
      borderColor: "#e5484d"
    }} placeholder="custom style" />
    </div>
}`,...d.parameters?.docs?.source}}}})))()}p();export{u as Buttons,d as Inputs,f as __namedExportsOrder,l as default};