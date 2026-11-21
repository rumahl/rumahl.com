import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{Cn as n,En as r,In as i,Ln as a,R as o,Tn as s,Vn as c,Xn as l,n as u,o as d,wn as f,zn as p}from"./iframe-ey0lnv34.js";var m,h,g,_,v;function y(){return(y=e((()=>{u(),l(),m=t(),h={title:`Components/Group`,component:n,args:{children:null},parameters:{layout:`centered`,docs:{description:{component:`The native row-grouping container (settings, preferences, app panes).

- \`GroupContainer\` holds \`GroupRow\`s (label + control/value).
- \`GroupLinkContainer\` holds drill-in \`GroupLink\` rows.

## Rules
- The group is a subtle **\`--row\` surface**, not a glass card — it sits on the
  window / content surface.
- **One topic per group**; keep rows scannable (short title, optional muted
  subtitle).
- Values are muted and end-aligned; controls sit on the end.`}}}},g={render:()=>(0,m.jsx)(`div`,{style:{width:560},children:(0,m.jsxs)(n,{children:[(0,m.jsx)(r,{title:`Dark mode`,description:`Use a darker colour scheme.`,children:(0,m.jsx)(o,{label:`Dark mode`,defaultChecked:!0})}),(0,m.jsx)(r,{title:`Theme`,value:`Default`}),(0,m.jsx)(r,{title:`Update`,value:(0,m.jsx)(d,{tone:`success`,children:`Up to date`})})]})})},_={render:()=>(0,m.jsx)(`div`,{style:{width:560},children:(0,m.jsxs)(s,{children:[(0,m.jsx)(f,{icon:(0,m.jsx)(i,{}),title:`Personalization`,subtitle:`Theme, wallpaper and accent colour`,href:`#personalization`}),(0,m.jsx)(f,{icon:(0,m.jsx)(p,{}),title:`Workspace`,subtitle:`Apps and layout`,href:`#workspace`}),(0,m.jsx)(f,{icon:(0,m.jsx)(c,{}),title:`Website`,subtitle:`rumahl.dev`,external:!0,href:`https://rumahl.dev`}),(0,m.jsx)(f,{icon:(0,m.jsx)(a,{}),title:`Source`,subtitle:`github.com/rumahl/rumahl`,external:!0,href:`https://github.com/rumahl/rumahl`})]})})},v=[`Container`,`LinkContainer`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 560
  }}>
      <GroupContainer>
        <GroupRow title="Dark mode" description="Use a darker colour scheme.">
          <RumahlSwitch label="Dark mode" defaultChecked />
        </GroupRow>
        <GroupRow title="Theme" value="Default" />
        <GroupRow title="Update" value={<RumahlBadge tone="success">Up to date</RumahlBadge>} />
      </GroupContainer>
    </div>
}`,...g.parameters?.docs?.source},description:{story:`Labeled rows with a control or a read-only value on the right.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 560
  }}>
      <GroupLinkContainer>
        <GroupLink icon={<DesktopIcon />} title="Personalization" subtitle="Theme, wallpaper and accent colour" href="#personalization" />
        <GroupLink icon={<GridIcon />} title="Workspace" subtitle="Apps and layout" href="#workspace" />
        <GroupLink icon={<InfoIcon />} title="Website" subtitle="rumahl.dev" external href="https://rumahl.dev" />
        <GroupLink icon={<DocumentIcon />} title="Source" subtitle="github.com/rumahl/rumahl" external href="https://github.com/rumahl/rumahl" />
      </GroupLinkContainer>
    </div>
}`,..._.parameters?.docs?.source},description:{story:`Drill-in links: a chevron for internal, a glyph for external.`,..._.parameters?.docs?.description}}}})))()}y();export{g as Container,_ as LinkContainer,v as __namedExportsOrder,h as default};