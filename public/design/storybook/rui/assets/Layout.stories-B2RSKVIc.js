import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{Cn as n,En as r,R as i,St as a,en as o,n as s,r as c,tn as l}from"./iframe-ey0lnv34.js";var u,d,f,p,m;function h(){return(h=e((()=>{s(),u=t(),d={title:`Patterns/Layout`,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:"# Layout\n\nPage structure: **one heading** (`PageHeader`), grouped sections\n(`PageSection` + `GroupContainer`/`GroupRow`) and an empty state\n(`RumahlEmptyState`) when there is nothing to show.\n\n## Do\n- **One `PageHeader` per page**, with the page's actions beside it.\n- Section the page with `PageSection` titles and grouped rows — not with boxes.\n- **Give every list an empty state**: explain what goes here and offer the action.\n\n## Don't\n- Don't put material on the content — material is for chrome (sidebar, frame).\n- Don't nest cards in cards; the group surface is the only box.\n- Don't invent section boxes — use the `PageSection` title + a group."}}}},f={render:()=>(0,u.jsx)(`div`,{style:{padding:28,maxWidth:720},children:(0,u.jsxs)(o,{title:`Network`,description:`Connections, addresses and sharing.`,children:[(0,u.jsx)(l,{title:`Interfaces`,children:(0,u.jsx)(n,{children:(0,u.jsx)(r,{title:`Automatic (DHCP)`,children:(0,u.jsx)(i,{label:`Automatic (DHCP)`,defaultChecked:!0})})})}),(0,u.jsx)(l,{title:`Sharing`,children:(0,u.jsx)(n,{children:(0,u.jsx)(r,{title:`Share this device's files`,children:(0,u.jsx)(i,{label:`Share this device's files`})})})})]})})},p={render:()=>(0,u.jsx)(`div`,{style:{padding:28,maxWidth:720},children:(0,u.jsx)(o,{title:`Apps`,description:`Applications installed on this device.`,children:(0,u.jsx)(c,{eyebrow:`No apps yet`,title:`Nothing installed`,action:(0,u.jsxs)(`div`,{style:{display:`flex`,gap:10},children:[(0,u.jsx)(a,{variant:`primary`,children:`Open the app store`}),(0,u.jsx)(a,{children:`Install from file…`})]}),children:`Apps you install will appear here, alongside the built-in ones.`})})})},m=[`Page`,`Empty`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 28,
    maxWidth: 720
  }}>
      <PageHeader title="Network" description="Connections, addresses and sharing.">
        <PageSection title="Interfaces">
          <GroupContainer>
            <GroupRow title="Automatic (DHCP)">
              <RumahlSwitch label="Automatic (DHCP)" defaultChecked />
            </GroupRow>
          </GroupContainer>
        </PageSection>
        <PageSection title="Sharing">
          <GroupContainer>
            <GroupRow title="Share this device's files">
              <RumahlSwitch label="Share this device's files" />
            </GroupRow>
          </GroupContainer>
        </PageSection>
      </PageHeader>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 28,
    maxWidth: 720
  }}>
      <PageHeader title="Apps" description="Applications installed on this device.">
        <RumahlEmptyState eyebrow="No apps yet" title="Nothing installed" action={<div style={{
        display: "flex",
        gap: 10
      }}>
              <Button variant="primary">Open the app store</Button>
              <Button>Install from file…</Button>
            </div>}>
          Apps you install will appear here, alongside the built-in ones.
        </RumahlEmptyState>
      </PageHeader>
    </div>
}`,...p.parameters?.docs?.source},description:{story:`When a page has no content yet, the *page body* is the empty state — keep the
heading and put the explanation + action where the content would be.`,...p.parameters?.docs?.description}}}})))()}h();export{p as Empty,f as Page,m as __namedExportsOrder,d as default};