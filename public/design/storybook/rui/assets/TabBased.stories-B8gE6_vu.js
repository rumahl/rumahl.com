import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Cn as r,En as i,Jt as a,R as o,ct as s,en as c,n as l,o as u,ot as d,qt as f,s as p,u as m}from"./iframe-ey0lnv34.js";var h,g,_,v,y,b;function x(){return(x=e((()=>{h=t(),l(),g=n(),_={title:`Layout/App/Tab layout`,parameters:{layout:`fullscreen`,docs:{description:{component:`# Tab-based app layout

A template/inspiration for a document app: one header, sections switched in
place with \`RumahlTabs\`. The document sits directly on the work surface —
material is reserved for navigation and controls.`}}}},v={padding:`20px 0 0`},y={render:()=>{let[e,t]=(0,h.useState)(`document`);return(0,g.jsxs)(`div`,{style:{height:540,display:`flex`,flexDirection:`column`},children:[(0,g.jsx)(`div`,{style:{padding:`22px 30px 0`},children:(0,g.jsx)(c,{title:`Project Alpha`,description:`Tabs switch sections in place; content sits on the surface.`})}),(0,g.jsx)(`div`,{style:{padding:`16px 30px 0`,flex:1,overflow:`auto`},children:(0,g.jsx)(m,{label:`Sections`,value:e,onChange:t,tabs:[{id:`document`,label:`Document`,content:(0,g.jsxs)(`article`,{style:{...v,maxWidth:660,display:`grid`,gap:14},children:[(0,g.jsx)(d,{level:2,children:`Quarterly plan`}),(0,g.jsx)(s,{as:`p`,style:{lineHeight:1.75},children:`We keep the scope tight this quarter: ship the layout templates first, then refine the controls. Every screen below is composed from rumahl/ui components.`}),(0,g.jsx)(s,{as:`p`,tone:`muted`,style:{lineHeight:1.75},children:`The document is plain content on the work surface — no wrapping card, no forced glass.`}),(0,g.jsx)(p,{title:`Decision`,tone:`info`,children:`Templates are inspiration, not a fixed structure.`})]})},{id:`activity`,label:`Activity`,content:(0,g.jsx)(`div`,{style:{...v,maxWidth:560},children:(0,g.jsxs)(f,{children:[(0,g.jsx)(a,{title:`Alex edited the document`,subtitle:`2 hours ago`}),(0,g.jsx)(a,{title:`Sam shared the project`,subtitle:`Yesterday`}),(0,g.jsx)(a,{title:`Deployed to staging`,subtitle:`2 days ago`})]})})},{id:`settings`,label:`Settings`,content:(0,g.jsx)(`div`,{style:{...v,maxWidth:560},children:(0,g.jsxs)(r,{children:[(0,g.jsx)(i,{title:`Comments`,children:(0,g.jsx)(o,{label:`Comments`,defaultChecked:!0})}),(0,g.jsx)(i,{title:`Status`,value:(0,g.jsx)(u,{tone:`success`,children:`Active`})}),(0,g.jsx)(i,{title:`Visibility`,value:`Private`})]})})}]})})]})}},b=[`Default`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [tab, setTab] = useState("document");
    return <div style={{
      height: 540,
      display: "flex",
      flexDirection: "column"
    }}>
        <div style={{
        padding: "22px 30px 0"
      }}>
          <PageHeader title="Project Alpha" description="Tabs switch sections in place; content sits on the surface." />
        </div>
        <div style={{
        padding: "16px 30px 0",
        flex: 1,
        overflow: "auto"
      }}>
          <RumahlTabs label="Sections" value={tab} onChange={setTab} tabs={[{
          id: "document",
          label: "Document",
          content: <article style={{
            ...PANEL,
            maxWidth: 660,
            display: "grid",
            gap: 14
          }}>
                    <Heading level={2}>Quarterly plan</Heading>
                    <Text as="p" style={{
              lineHeight: 1.75
            }}>
                      We keep the scope tight this quarter: ship the layout templates first, then refine the
                      controls. Every screen below is composed from rumahl/ui components.
                    </Text>
                    <Text as="p" tone="muted" style={{
              lineHeight: 1.75
            }}>
                      The document is plain content on the work surface — no wrapping card, no forced glass.
                    </Text>
                    <RumahlNotice title="Decision" tone="info">
                      Templates are inspiration, not a fixed structure.
                    </RumahlNotice>
                  </article>
        }, {
          id: "activity",
          label: "Activity",
          content: <div style={{
            ...PANEL,
            maxWidth: 560
          }}>
                    <List>
                      <ListItem title="Alex edited the document" subtitle="2 hours ago" />
                      <ListItem title="Sam shared the project" subtitle="Yesterday" />
                      <ListItem title="Deployed to staging" subtitle="2 days ago" />
                    </List>
                  </div>
        }, {
          id: "settings",
          label: "Settings",
          content: <div style={{
            ...PANEL,
            maxWidth: 560
          }}>
                    <GroupContainer>
                      <GroupRow title="Comments">
                        <RumahlSwitch label="Comments" defaultChecked />
                      </GroupRow>
                      <GroupRow title="Status" value={<RumahlBadge tone="success">Active</RumahlBadge>} />
                      <GroupRow title="Visibility" value="Private" />
                    </GroupContainer>
                  </div>
        }]} />
        </div>
      </div>;
  }
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as Default,b as __namedExportsOrder,_ as default};