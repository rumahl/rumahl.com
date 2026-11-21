import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{Cn as n,En as r,Jt as i,ct as a,en as o,f as s,n as c,o as l,ot as u,qt as d}from"./iframe-ey0lnv34.js";var f,p,m,h,g;function _(){return(_=e((()=>{c(),f=t(),p={title:`Layout/App/Split inspector`,parameters:{layout:`fullscreen`,docs:{description:{component:`# Split-inspector app layout

A template/inspiration for master–detail (mail, files, people): a list, a
content column and an inspector, separated by hairlines. The content sits on
the work surface; material is used for the controls inside.`}}}},m=[{id:`a`,from:`Alex Morgan`,subject:`Quarterly plan`,time:`09:24`},{id:`b`,from:`Sam Rivera`,subject:`Design review notes`,time:`08:10`},{id:`c`,from:`Jo Chen`,subject:`Deploy checklist`,time:`Mon`},{id:`d`,from:`Dana Roy`,subject:`Welcome aboard`,time:`Mon`}],h={render:()=>(0,f.jsxs)(`div`,{style:{height:520,display:`grid`,gridTemplateColumns:`280px minmax(0, 1fr) 260px`},children:[(0,f.jsx)(`div`,{style:{overflow:`auto`,borderRight:`1px solid var(--surface-edge)`},children:(0,f.jsx)(d,{children:m.map(e=>(0,f.jsx)(i,{interactive:!0,leading:(0,f.jsx)(s,{name:e.from,size:`sm`}),title:e.from,subtitle:e.subject,trailing:(0,f.jsx)(a,{tone:`muted`,size:`sm`,as:`span`,children:e.time})},e.id))})}),(0,f.jsxs)(`div`,{style:{overflow:`auto`,padding:`26px 30px`},children:[(0,f.jsx)(o,{title:`Quarterly plan`,description:`From Alex Morgan · alex@rumahl.dev`}),(0,f.jsx)(a,{as:`p`,style:{maxWidth:560,lineHeight:1.65},children:`Here is the plan for the next quarter. We keep the scope tight and ship the layout templates first, then refine the controls. Reply with your notes and I will fold them into the roadmap.`}),(0,f.jsx)(a,{as:`p`,tone:`muted`,style:{maxWidth:560,marginTop:16,lineHeight:1.65},children:`Everything in this view is composed from rumahl/ui components; the columns are just plain surface with hairline dividers.`})]}),(0,f.jsxs)(`div`,{style:{overflow:`auto`,padding:18,borderLeft:`1px solid var(--surface-edge)`},children:[(0,f.jsx)(u,{level:6,style:{marginBottom:10},children:`Inspector`}),(0,f.jsxs)(n,{children:[(0,f.jsx)(r,{title:`Priority`,value:(0,f.jsx)(l,{tone:`warning`,children:`High`})}),(0,f.jsx)(r,{title:`Labels`,value:`Roadmap`}),(0,f.jsx)(r,{title:`Due`,value:`Fri`})]})]})]})},g=[`Default`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 520,
    display: "grid",
    gridTemplateColumns: "280px minmax(0, 1fr) 260px"
  }}>
      <div style={{
      overflow: "auto",
      borderRight: "1px solid var(--surface-edge)"
    }}>
        <List>
          {MAIL.map(mail => <ListItem key={mail.id} interactive leading={<RumahlAvatar name={mail.from} size="sm" />} title={mail.from} subtitle={mail.subject} trailing={<Text tone="muted" size="sm" as="span">{mail.time}</Text>} />)}
        </List>
      </div>

      <div style={{
      overflow: "auto",
      padding: "26px 30px"
    }}>
        <PageHeader title="Quarterly plan" description="From Alex Morgan · alex@rumahl.dev" />
        <Text as="p" style={{
        maxWidth: 560,
        lineHeight: 1.65
      }}>
          Here is the plan for the next quarter. We keep the scope tight and ship the
          layout templates first, then refine the controls. Reply with your notes and
          I will fold them into the roadmap.
        </Text>
        <Text as="p" tone="muted" style={{
        maxWidth: 560,
        marginTop: 16,
        lineHeight: 1.65
      }}>
          Everything in this view is composed from rumahl/ui components; the columns are
          just plain surface with hairline dividers.
        </Text>
      </div>

      <div style={{
      overflow: "auto",
      padding: 18,
      borderLeft: "1px solid var(--surface-edge)"
    }}>
        <Heading level={6} style={{
        marginBottom: 10
      }}>
          Inspector
        </Heading>
        <GroupContainer>
          <GroupRow title="Priority" value={<RumahlBadge tone="warning">High</RumahlBadge>} />
          <GroupRow title="Labels" value="Roadmap" />
          <GroupRow title="Due" value="Fri" />
        </GroupContainer>
      </div>
    </div>
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as Default,g as __namedExportsOrder,p as default};