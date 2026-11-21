import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{f as r,g as i,h as a,m as o,n as s,p as c}from"./iframe-ey0lnv34.js";var l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{l=t(),s(),u=n(),d=[{id:`alex`,name:`Alex Morgan`,detail:`alex@rumahl.dev`},{id:`sam`,name:`Sam Rivera`,detail:`sam@rumahl.dev`}],f=[`xs`,`sm`,`md`,`lg`,`xl`],p={title:`Components/Profile`,args:{size:`md`},argTypes:{size:{control:`inline-radio`,options:f}},parameters:{docs:{description:{component:`The signed-in identity (avatar + name + meta).

## Rules
- Shows the **active** account; size follows its container.
- The account switcher lives in menus, not inline.`}}}},m={render:e=>(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,u.jsx)(r,{name:`Alex Morgan`,size:e.size}),(0,u.jsx)(r,{name:`Alex Morgan`,size:e.size,status:`online`}),(0,u.jsx)(r,{name:`Sam Rivera`,size:e.size,status:`away`})]})},h={render:()=>(0,u.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:14},children:f.map(e=>(0,u.jsx)(r,{name:`Alex Morgan`,size:e},e))})},g={render:()=>(0,u.jsx)(a,{profile:d[0],status:`Signed in`})},_={render:()=>{let[e,t]=(0,l.useState)(`alex`);return(0,u.jsx)(i,{profiles:d,value:e,onChange:t})}},v={render:()=>(0,u.jsx)(o,{label:`Password`,defaultValue:`hunter2`})},y={render:()=>(0,u.jsx)(c,{name:`Alex Morgan`,onChange:()=>{}})},b=[`Avatar`,`AvatarSizes`,`ProfileCard`,`ProfileSwitch`,`Password`,`AvatarChange`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    alignItems: "center",
    gap: 12
  }}>
      <RumahlAvatar name="Alex Morgan" size={args.size} />
      <RumahlAvatar name="Alex Morgan" size={args.size} status="online" />
      <RumahlAvatar name="Sam Rivera" size={args.size} status="away" />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: 14
  }}>
      {SIZE_OPTIONS.map(size => <RumahlAvatar key={size} name="Alex Morgan" size={size} />)}
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <RumahlProfileCard profile={PROFILES[0]!} status="Signed in" />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("alex");
    return <RumahlProfileSwitch profiles={PROFILES} value={value} onChange={setValue} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <RumahlPassword label="Password" defaultValue="hunter2" />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <RumahlAvatarChange name="Alex Morgan" onChange={() => {}} />
}`,...y.parameters?.docs?.source}}}})))()}x();export{m as Avatar,y as AvatarChange,h as AvatarSizes,v as Password,g as ProfileCard,_ as ProfileSwitch,b as __namedExportsOrder,p as default};