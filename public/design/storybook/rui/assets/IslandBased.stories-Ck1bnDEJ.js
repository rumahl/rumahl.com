import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{Cn as n,En as r,Jt as i,V as a,ct as o,en as s,n as c,o as l,qt as u,tn as d}from"./iframe-ey0lnv34.js";var f,p,m,h;function g(){return(g=e((()=>{c(),f=t(),p={title:`Layout/App/Island dashboard`,parameters:{layout:`fullscreen`,docs:{description:{component:`# Island-based app layout

A template/inspiration for a dashboard: a few floating “islands” (widgets)
for the key numbers, with the main content sitting directly on the work
surface. Material marks the islands; everything else is plain.`}}}},m={render:()=>(0,f.jsxs)(`div`,{style:{height:520,padding:28,overflow:`auto`},children:[(0,f.jsx)(s,{title:`Overview`,description:`Material islands for the key numbers; the rest lives on the surface.`}),(0,f.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(200px, 1fr))`,gap:16,margin:`8px 0 26px`},children:[(0,f.jsxs)(n,{children:[(0,f.jsx)(r,{title:`Deploys`,value:`128`}),(0,f.jsx)(`div`,{style:{padding:`0 16px 16px`},children:(0,f.jsx)(a,{size:`sm`,label:`Deploys`,value:72})})]}),(0,f.jsxs)(n,{children:[(0,f.jsx)(r,{title:`Open issues`,value:(0,f.jsx)(l,{tone:`warning`,children:`7`})}),(0,f.jsx)(r,{title:`Closed this week`,value:`23`})]}),(0,f.jsxs)(n,{children:[(0,f.jsx)(r,{title:`Uptime`,value:(0,f.jsx)(l,{tone:`success`,children:`99.98%`})}),(0,f.jsx)(r,{title:`Response`,value:`180 ms`})]})]}),(0,f.jsx)(d,{title:`Recent activity`,children:(0,f.jsxs)(u,{children:[(0,f.jsx)(i,{title:`Deployed api@2.4.0`,subtitle:`5 minutes ago`}),(0,f.jsx)(i,{title:`Opened issue #412: retry on timeout`,subtitle:`1 hour ago`}),(0,f.jsx)(i,{title:`Merged “split layout template”`,subtitle:`Yesterday`})]})}),(0,f.jsx)(o,{tone:`muted`,size:`sm`,style:{display:`block`,marginTop:18},children:`Islands can be rearranged or dropped freely — they are just grouped components.`})]})},h=[`Default`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 520,
    padding: 28,
    overflow: "auto"
  }}>
      <PageHeader title="Overview" description="Material islands for the key numbers; the rest lives on the surface." />

      <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: 16,
      margin: "8px 0 26px"
    }}>
        <GroupContainer>
          <GroupRow title="Deploys" value="128" />
          <div style={{
          padding: "0 16px 16px"
        }}>
            <RumahlProgress size="sm" label="Deploys" value={72} />
          </div>
        </GroupContainer>
        <GroupContainer>
          <GroupRow title="Open issues" value={<RumahlBadge tone="warning">7</RumahlBadge>} />
          <GroupRow title="Closed this week" value="23" />
        </GroupContainer>
        <GroupContainer>
          <GroupRow title="Uptime" value={<RumahlBadge tone="success">99.98%</RumahlBadge>} />
          <GroupRow title="Response" value="180 ms" />
        </GroupContainer>
      </div>

      <PageSection title="Recent activity">
        <List>
          <ListItem title="Deployed api@2.4.0" subtitle="5 minutes ago" />
          <ListItem title="Opened issue #412: retry on timeout" subtitle="1 hour ago" />
          <ListItem title="Merged “split layout template”" subtitle="Yesterday" />
        </List>
      </PageSection>

      <Text tone="muted" size="sm" style={{
      display: "block",
      marginTop: 18
    }}>
        Islands can be rearranged or dropped freely — they are just grouped components.
      </Text>
    </div>
}`,...m.parameters?.docs?.source}}}})))()}g();export{m as Default,h as __namedExportsOrder,p as default};