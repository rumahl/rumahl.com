import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Gn as r,X as i,Xn as a,n as o}from"./iframe-ey0lnv34.js";import{n as s,t as c}from"./_argtypes-9JdYHY1M.js";var l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{o(),a(),c(),l=n(),u=t(),d={title:`Primitives/IconButton`,component:i,args:{label:`Settings`,size:`md`,shape:`square`,variant:`secondary`,children:(0,l.jsx)(r,{})},argTypes:{...s,label:{control:`text`},size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`,`xl`]},shape:{control:`inline-radio`,options:[`square`,`circle`]},variant:{control:`inline-radio`,options:[`secondary`,`primary`,`ghost`]},disabled:{control:`boolean`},loading:{control:`boolean`},active:{control:`boolean`},title:{control:`text`},children:{control:!1},color:{control:`color`},backgroundColor:{control:`color`}},parameters:{docs:{description:{component:'A labelled, icon-only action.\n\n## Rules\n- **Always provide `label`** (the accessible name); `title` is the tooltip.\n- One icon, one meaning. `shape="circle"` for floating / status; `square` otherwise.\n- `variant` secondary / primary / ghost; `floating` over a picture.'}}}},f={},p={args:{shape:`circle`}},m={args:{variant:`primary`}},h={render:e=>(0,l.jsx)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[`xs`,`sm`,`md`,`lg`,`xl`].map(t=>(0,u.createElement)(i,{...e,key:t,size:t}))})},g={args:{loading:!0}},_={args:{active:!0}},v={args:{title:`Open settings`}},y={render:e=>(0,l.jsx)(i,{...e,as:`a`,href:`#settings`,label:`Settings`})},b=[`Default`,`Circle`,`Primary`,`Sizes`,`Loading`,`Active`,`WithTooltip`,`AsLink`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    shape: "circle"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: 12,
    alignItems: "center"
  }}>
      {(["xs", "sm", "md", "lg", "xl"] as const).map(size => <IconButton {...args} key={size} size={size} />)}
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    active: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Open settings"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <IconButton {...args} as="a" href="#settings" label="Settings" />
}`,...y.parameters?.docs?.source}}}})))()}x();export{_ as Active,y as AsLink,p as Circle,f as Default,g as Loading,m as Primary,h as Sizes,v as WithTooltip,b as __namedExportsOrder,d as default};