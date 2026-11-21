import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{Jt as n,f as r,n as i,o as a,qt as o}from"./iframe-ey0lnv34.js";import{n as s,t as c}from"./_argtypes-9JdYHY1M.js";var l,u,d,f,p;function m(){return(m=e((()=>{i(),c(),l=t(),u={title:`Components/List`,argTypes:s,parameters:{layout:`centered`,docs:{description:{component:`A vertical list of items with leading / trailing slots.

## Rules
- \`ListItem\`: leading (icon/avatar), title, subtitle, trailing (badge/action).
- One primary line per row; secondary info is muted.
- Rows are tappable only when they lead somewhere — show a chevron then.`}}}},d={render:()=>(0,l.jsx)(`div`,{style:{width:360},children:(0,l.jsxs)(o,{children:[(0,l.jsx)(n,{title:`Alex Morgan`,subtitle:`alex@rumahl.dev`,leading:(0,l.jsx)(r,{name:`Alex Morgan`,size:`sm`}),trailing:(0,l.jsx)(a,{tone:`success`,children:`Active`})}),(0,l.jsx)(n,{title:`Sam Rivera`,subtitle:`sam@rumahl.dev`,leading:(0,l.jsx)(r,{name:`Sam Rivera`,size:`sm`})}),(0,l.jsx)(n,{title:`Storage`,subtitle:`128 GB of 512 GB used`,trailing:(0,l.jsx)(a,{tone:`warning`,children:`75%`})})]})})},f={render:()=>(0,l.jsx)(`div`,{style:{width:360},children:(0,l.jsxs)(o,{children:[(0,l.jsx)(n,{interactive:!0,title:`Display`,subtitle:`Resolution, scaling and brightness`,onClick:()=>{}}),(0,l.jsx)(n,{interactive:!0,title:`Sound`,subtitle:`Output device and volume`,onClick:()=>{}})]})})},p=[`Default`,`Interactive`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360
  }}>
      <List>
        <ListItem title="Alex Morgan" subtitle="alex@rumahl.dev" leading={<RumahlAvatar name="Alex Morgan" size="sm" />} trailing={<RumahlBadge tone="success">Active</RumahlBadge>} />
        <ListItem title="Sam Rivera" subtitle="sam@rumahl.dev" leading={<RumahlAvatar name="Sam Rivera" size="sm" />} />
        <ListItem title="Storage" subtitle="128 GB of 512 GB used" trailing={<RumahlBadge tone="warning">75%</RumahlBadge>} />
      </List>
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360
  }}>
      <List>
        <ListItem interactive title="Display" subtitle="Resolution, scaling and brightness" onClick={() => {}} />
        <ListItem interactive title="Sound" subtitle="Output device and volume" onClick={() => {}} />
      </List>
    </div>
}`,...f.parameters?.docs?.source}}}})))()}m();export{d as Default,f as Interactive,p as __namedExportsOrder,u as default};