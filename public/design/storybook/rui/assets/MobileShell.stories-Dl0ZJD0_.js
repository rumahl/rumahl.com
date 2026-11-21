import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{Bn as n,Fn as r,Gn as i,Jt as a,Wn as o,X as s,Xn as c,f as l,n as u,o as d,on as f,ot as p,qt as m}from"./iframe-ey0lnv34.js";var h,g,_,v,y;function b(){return(b=e((()=>{u(),c(),h=t(),g={title:`Layout/Mobile/Shell`,parameters:{layout:`fullscreen`,docs:{description:{component:`# Mobile shell (hybrid)

A template/inspiration for a phone surface: a status bar, content and a
bottom tab bar inside a \`PhoneFrame\`. rumahl OS opens on a phone inside the
launcher; a companion mobile app can reuse the same components.`}}}},_=[{id:`home`,icon:(0,h.jsx)(n,{}),label:`Home`},{id:`search`,icon:(0,h.jsx)(o,{}),label:`Search`},{id:`activity`,icon:(0,h.jsx)(r,{}),label:`Activity`},{id:`settings`,icon:(0,h.jsx)(i,{}),label:`Settings`}],v={render:()=>(0,h.jsx)(`div`,{style:{minHeight:700,display:`grid`,placeItems:`center`,padding:24,background:`var(--rumahl-ui-color-canvas-background)`},children:(0,h.jsx)(f,{status:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`span`,{children:`9:41`}),(0,h.jsx)(`span`,{style:{letterSpacing:1,opacity:.7},children:`••• ▮`})]}),footer:(0,h.jsx)(`div`,{style:{display:`flex`,justifyContent:`space-around`,padding:8},children:_.map((e,t)=>(0,h.jsx)(s,{shape:`circle`,variant:t===0?`primary`:`ghost`,label:e.label,children:e.icon},e.id))}),children:(0,h.jsxs)(`div`,{style:{padding:`8px 18px`},children:[(0,h.jsx)(p,{level:3,style:{marginBottom:12},children:`Good morning`}),(0,h.jsxs)(m,{children:[(0,h.jsx)(a,{leading:(0,h.jsx)(l,{name:`Alex Morgan`,size:`sm`}),title:`Alex Morgan`,subtitle:`Signed in`}),(0,h.jsx)(a,{title:`Focus`,subtitle:`On until 12:00`,trailing:(0,h.jsx)(d,{tone:`success`,children:`On`})}),(0,h.jsx)(a,{title:`Backups`,subtitle:`Last run 2 hours ago`,trailing:(0,h.jsx)(d,{children:`OK`})}),(0,h.jsx)(a,{title:`Storage`,subtitle:`128 GB of 512 GB used`})]})]})})})},y=[`Default`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
          </>} footer={<div style={{
      display: "flex",
      justifyContent: "space-around",
      padding: 8
    }}>
            {TABS.map((tab, index) => <IconButton key={tab.id} shape="circle" variant={index === 0 ? "primary" : "ghost"} label={tab.label}>
                {tab.icon}
              </IconButton>)}
          </div>}>
        <div style={{
        padding: "8px 18px"
      }}>
          <Heading level={3} style={{
          marginBottom: 12
        }}>
            Good morning
          </Heading>
          <List>
            <ListItem leading={<RumahlAvatar name="Alex Morgan" size="sm" />} title="Alex Morgan" subtitle="Signed in" />
            <ListItem title="Focus" subtitle="On until 12:00" trailing={<RumahlBadge tone="success">On</RumahlBadge>} />
            <ListItem title="Backups" subtitle="Last run 2 hours ago" trailing={<RumahlBadge>OK</RumahlBadge>} />
            <ListItem title="Storage" subtitle="128 GB of 512 GB used" />
          </List>
        </div>
      </PhoneFrame>
    </div>
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as Default,y as __namedExportsOrder,g as default};