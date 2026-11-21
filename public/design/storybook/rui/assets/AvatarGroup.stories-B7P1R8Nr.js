import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{Dt as n,f as r,n as i}from"./iframe-ey0lnv34.js";import{n as a,t as o}from"./_argtypes-9JdYHY1M.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{i(),o(),s=t(),c=[`Alex Morgan`,`Sam Rivera`,`Jo Chen`,`Pat Kim`,`Dana Roy`],l={title:`Components/AvatarGroup`,component:n,args:{max:3,children:null},argTypes:{...a,max:{control:{type:`number`}}},parameters:{docs:{description:{component:`Overlapping avatars with a \`+N\` overflow.

## Rules
- \`max\` caps the visible avatars; the rest are counted.
- Order by relevance (owner first).
- Pair with a label or tooltip so the members are identifiable.`}}}},u={render:e=>(0,s.jsx)(n,{...e,children:c.map(e=>(0,s.jsx)(r,{name:e,size:`md`},e))})},d={render:()=>(0,s.jsx)(`div`,{style:{display:`grid`,gap:16},children:[`sm`,`md`,`lg`].map(e=>(0,s.jsx)(n,{max:3,children:c.map(t=>(0,s.jsx)(r,{name:t,size:e},t))},e))})},f=[`Default`,`Sizes`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <AvatarGroup {...args}>
      {NAMES.map(name => <RumahlAvatar key={name} name={name} size="md" />)}
    </AvatarGroup>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 16
  }}>
      {(["sm", "md", "lg"] as const).map(size => <AvatarGroup key={size} max={3}>
          {NAMES.map(name => <RumahlAvatar key={name} name={name} size={size} />)}
        </AvatarGroup>)}
    </div>
}`,...d.parameters?.docs?.source}}}})))()}p();export{u as Default,d as Sizes,f as __namedExportsOrder,l as default};