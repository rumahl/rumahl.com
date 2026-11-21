import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{cn as n,n as r,un as i}from"./iframe-ey0lnv34.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{r(),a=t(),o=[`Files`,`Photos`,`Calendar`,`Notes`,`Mail`,`Music`,`Maps`,`Settings`,`Clock`],s={title:`Components/App grid`,component:n,args:{children:null,columns:3},parameters:{layout:`centered`,docs:{description:{component:`The launcher grid of \`AppTile\`s.

## Rules
- Fixed \`columns\` and a consistent gap.
- Order by relevance; system apps last.`}}}},c={render:()=>(0,a.jsx)(`div`,{style:{width:360},children:(0,a.jsx)(n,{columns:3,children:o.map(e=>(0,a.jsx)(i,{id:e.toLowerCase(),title:e,onClick:()=>{}},e))})})},l={render:()=>(0,a.jsx)(`div`,{style:{width:560},children:(0,a.jsx)(n,{children:o.map(e=>(0,a.jsx)(i,{id:e.toLowerCase(),title:e,onClick:()=>{}},e))})})},u=[`Fixed`,`AutoFill`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360
  }}>
      <AppGrid columns={3}>
        {APPS.map(title => <AppTile key={title} id={title.toLowerCase()} title={title} onClick={() => {}} />)}
      </AppGrid>
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 560
  }}>
      <AppGrid>
        {APPS.map(title => <AppTile key={title} id={title.toLowerCase()} title={title} onClick={() => {}} />)}
      </AppGrid>
    </div>
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as AutoFill,c as Fixed,u as __namedExportsOrder,s as default};