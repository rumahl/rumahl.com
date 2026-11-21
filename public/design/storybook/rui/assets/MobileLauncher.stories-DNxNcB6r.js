import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Bn as r,Fn as i,Gn as a,Wn as o,X as s,Xn as c,c as l,cn as u,n as d,on as f,un as p}from"./iframe-ey0lnv34.js";var m,h,g,_,v,y;function b(){return(b=e((()=>{m=t(),d(),c(),h=n(),g={title:`Layout/Mobile/Launcher`,parameters:{layout:`fullscreen`,docs:{description:{component:`# Mobile launcher (hybrid template)

A **presentational** template for a phone home screen: a search field and an
app grid inside a \`PhoneFrame\`. It composes rumahl/ui building blocks only.

This is a layout *template*, not the OS launcher: the real launcher behaviour
(app catalog, folders, drag, opening apps) lives in the shell. rumahl OS opens
on a phone inside the launcher.`}}}},_=[{id:`files`,title:`Files`},{id:`photos`,title:`Photos`},{id:`calendar`,title:`Calendar`},{id:`notes`,title:`Notes`},{id:`mail`,title:`Mail`},{id:`music`,title:`Music`},{id:`maps`,title:`Maps`},{id:`settings`,title:`Settings`,system:!0}],v={render:()=>{let[e,t]=(0,m.useState)(``);return(0,h.jsx)(`div`,{style:{minHeight:700,display:`grid`,placeItems:`center`,padding:24,background:`var(--rumahl-ui-color-canvas-background)`},children:(0,h.jsx)(f,{status:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`span`,{children:`9:41`}),(0,h.jsx)(`span`,{style:{letterSpacing:1,opacity:.7},children:`••• ▮`})]}),footer:(0,h.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-around`,padding:8},children:[(0,h.jsx)(s,{shape:`circle`,variant:`primary`,label:`Home`,children:(0,h.jsx)(r,{})}),(0,h.jsx)(s,{shape:`circle`,variant:`ghost`,label:`Search`,children:(0,h.jsx)(o,{})}),(0,h.jsx)(s,{shape:`circle`,variant:`ghost`,label:`Activity`,children:(0,h.jsx)(i,{})}),(0,h.jsx)(s,{shape:`circle`,variant:`ghost`,label:`Settings`,children:(0,h.jsx)(a,{})})]}),children:(0,h.jsxs)(`div`,{style:{padding:`10px 16px 18px`,display:`grid`,gap:18},children:[(0,h.jsx)(l,{label:`Search apps`,clearLabel:`Clear`,value:e,onChange:t}),(0,h.jsx)(u,{columns:3,children:_.filter(t=>t.title.toLowerCase().includes(e.toLowerCase())).map(e=>(0,h.jsx)(p,{id:e.id,title:e.title,system:e.system===!0,onClick:()=>{}},e.id))})]})})})}},y=[`Default`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [query, setQuery] = useState("");
    return <div style={{
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
              <IconButton shape="circle" variant="primary" label="Home">
                <HomeIcon />
              </IconButton>
              <IconButton shape="circle" variant="ghost" label="Search">
                <SearchIcon />
              </IconButton>
              <IconButton shape="circle" variant="ghost" label="Activity">
                <BoltIcon />
              </IconButton>
              <IconButton shape="circle" variant="ghost" label="Settings">
                <SettingsIcon />
              </IconButton>
            </div>}>
          <div style={{
          padding: "10px 16px 18px",
          display: "grid",
          gap: 18
        }}>
            <RumahlSearch label="Search apps" clearLabel="Clear" value={query} onChange={setQuery} />
            <AppGrid columns={3}>
              {APPS.filter(app => app.title.toLowerCase().includes(query.toLowerCase())).map(app => <AppTile key={app.id} id={app.id} title={app.title} system={app.system === true} onClick={() => {}} />)}
            </AppGrid>
          </div>
        </PhoneFrame>
      </div>;
  }
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as Default,y as __namedExportsOrder,g as default};