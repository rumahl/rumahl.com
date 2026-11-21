import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{Cn as n,En as r,Pn as i,R as a,X as o,Xn as s,ct as c,n as l,on as u,ot as d}from"./iframe-ey0lnv34.js";var f,p,m,h;function g(){return(g=e((()=>{l(),s(),f=t(),p={title:`Layout/Mobile/Settings`,parameters:{layout:`fullscreen`,docs:{description:{component:`# Mobile settings (hybrid)

A template/inspiration for a phone settings screen: a nav title and grouped
rows inside a \`PhoneFrame\`. Same components as the desktop, arranged for a
small viewport.`}}}},m={render:()=>(0,f.jsx)(`div`,{style:{minHeight:700,display:`grid`,placeItems:`center`,padding:24,background:`var(--rumahl-ui-color-canvas-background)`},children:(0,f.jsx)(u,{status:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`span`,{children:`9:41`}),(0,f.jsx)(`span`,{style:{letterSpacing:1,opacity:.7},children:`••• ▮`})]}),children:(0,f.jsxs)(`div`,{style:{padding:`0 18px 24px`,display:`grid`,gap:14},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`6px 0`},children:[(0,f.jsx)(o,{shape:`circle`,variant:`ghost`,label:`Back`,children:(0,f.jsx)(i,{})}),(0,f.jsx)(c,{weight:`semibold`,children:`Settings`}),(0,f.jsx)(`span`,{style:{width:30}})]}),(0,f.jsx)(d,{level:6,tone:`muted`,children:`Appearance`}),(0,f.jsxs)(n,{children:[(0,f.jsx)(r,{title:`Dark mode`,children:(0,f.jsx)(a,{label:`Dark mode`,defaultChecked:!0})}),(0,f.jsx)(r,{title:`Theme`,value:`Default`})]}),(0,f.jsx)(d,{level:6,tone:`muted`,style:{marginTop:2},children:`Device`}),(0,f.jsxs)(n,{children:[(0,f.jsx)(r,{title:`Name`,value:`Alex's phone`}),(0,f.jsx)(r,{title:`Storage`,value:`128 / 512 GB`}),(0,f.jsx)(r,{title:`Notifications`,children:(0,f.jsx)(a,{label:`Notifications`})})]})]})})})},h=[`Default`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    minHeight: 700,
    display: "grid",
    placeItems: "center",
    padding: 24,
    background: "var(--rumahl-ui-color-canvas-background)"
  }}>
      <PhoneFrame status={<>
            <span>9:41</span>
            <span style={{
        letterSpacing: 1,
        opacity: 0.7
      }}>••• ▮</span>
          </>}>
        <div style={{
        padding: "0 18px 24px",
        display: "grid",
        gap: 14
      }}>
          <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "6px 0"
        }}>
            <IconButton shape="circle" variant="ghost" label="Back">
              <ArrowLeftIcon />
            </IconButton>
            <Text weight="semibold">Settings</Text>
            <span style={{
            width: 30
          }} />
          </div>

          <Heading level={6} tone="muted">Appearance</Heading>
          <GroupContainer>
            <GroupRow title="Dark mode">
              <RumahlSwitch label="Dark mode" defaultChecked />
            </GroupRow>
            <GroupRow title="Theme" value="Default" />
          </GroupContainer>

          <Heading level={6} tone="muted" style={{
          marginTop: 2
        }}>Device</Heading>
          <GroupContainer>
            <GroupRow title="Name" value="Alex's phone" />
            <GroupRow title="Storage" value="128 / 512 GB" />
            <GroupRow title="Notifications">
              <RumahlSwitch label="Notifications" />
            </GroupRow>
          </GroupContainer>
        </div>
      </PhoneFrame>
    </div>
}`,...m.parameters?.docs?.source}}}})))()}g();export{m as Default,h as __namedExportsOrder,p as default};