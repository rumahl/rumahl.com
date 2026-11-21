import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{N as n,P as r,St as i,j as a,n as o,z as s}from"./iframe-ey0lnv34.js";var c,l,u,d;function f(){return(f=e((()=>{o(),c=t(),l={title:`Components/Validation`,parameters:{layout:`fullscreen`}},u={render:(e,t)=>(0,c.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(min(100%, 290px), 1fr))`,gap:24},children:[`glass`,`floating`,`solid`].map(e=>(0,c.jsxs)(`section`,{className:`shell`,"data-material":e,"data-scheme":t.globals.scheme===`dark`?`dark`:`light`,style:{display:`grid`,alignContent:`start`,gap:20,padding:24,borderRadius:24,color:`var(--rumahl-ui-color-text-primary)`,background:`radial-gradient(ellipse at 100% 100%, #79b6ae20, transparent 70%), var(--rumahl-ui-color-panel-background)`},children:[(0,c.jsx)(`h2`,{style:{margin:0,textTransform:`capitalize`,fontSize:20},children:e}),(0,c.jsxs)(`label`,{style:{display:`grid`,gap:8,fontSize:12},children:[`Neutral`,(0,c.jsx)(n,{defaultValue:`Personal workspace`})]}),(0,c.jsxs)(`label`,{style:{display:`grid`,gap:8,fontSize:12},children:[`Error`,(0,c.jsx)(n,{defaultValue:`hello@`,error:`Enter a complete email address.`})]}),(0,c.jsxs)(`label`,{style:{display:`grid`,gap:8,fontSize:12},children:[`Success`,(0,c.jsx)(n,{defaultValue:`hello@rumahl.local`,status:`success`}),(0,c.jsx)(`small`,{children:`✓ Address accepted`})]}),(0,c.jsx)(r,{"aria-label":`Workspace address`,prefix:`/`,defaultValue:`workspace`,status:`success`}),(0,c.jsx)(r,{"aria-label":`Invalid workspace address`,prefix:`/`,defaultValue:`my workspace!`,error:`Use letters, numbers and hyphens.`}),(0,c.jsxs)(`label`,{style:{display:`grid`,gap:8,fontSize:12},children:[`Description`,(0,c.jsx)(s,{defaultValue:``,error:`Add a short description.`})]}),(0,c.jsxs)(a,{label:`Verified settings`,status:`success`,description:`Both values have been checked.`,children:[(0,c.jsxs)(`label`,{children:[`Name`,(0,c.jsx)(n,{defaultValue:`My workspace`})]}),(0,c.jsxs)(`label`,{children:[`Address`,(0,c.jsx)(n,{defaultValue:`workspace.local`})]})]}),(0,c.jsxs)(`label`,{style:{display:`grid`,gap:8,fontSize:12},children:[`Disabled success`,(0,c.jsx)(n,{defaultValue:`Verified`,status:`success`,disabled:!0})]}),(0,c.jsxs)(`label`,{style:{display:`grid`,gap:8,fontSize:12},children:[`Disabled error`,(0,c.jsx)(n,{defaultValue:`Invalid value`,status:`error`,disabled:!0})]}),(0,c.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[(0,c.jsx)(i,{variant:`primary`,children:`Save changes`}),(0,c.jsx)(i,{variant:`danger`,children:`Discard`})]})]},e))})},d=[`AllMaterials`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: (_args, context) => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 290px), 1fr))",
    gap: 24
  }}>
      {(["glass", "floating", "solid"] as const).map(material => <section className="shell" key={material} data-material={material} data-scheme={context.globals.scheme === "dark" ? "dark" : "light"} style={{
      display: "grid",
      alignContent: "start",
      gap: 20,
      padding: 24,
      borderRadius: 24,
      color: "var(--rumahl-ui-color-text-primary)",
      background: "radial-gradient(ellipse at 100% 100%, #79b6ae20, transparent 70%), var(--rumahl-ui-color-panel-background)"
    }}>
          <h2 style={{
        margin: 0,
        textTransform: "capitalize",
        fontSize: 20
      }}>{material}</h2>
          <label style={{
        display: "grid",
        gap: 8,
        fontSize: 12
      }}>Neutral<RumahlInput defaultValue="Personal workspace" /></label>
          <label style={{
        display: "grid",
        gap: 8,
        fontSize: 12
      }}>Error<RumahlInput defaultValue="hello@" error="Enter a complete email address." /></label>
          <label style={{
        display: "grid",
        gap: 8,
        fontSize: 12
      }}>Success<RumahlInput defaultValue="hello@rumahl.local" status="success" /><small>✓ Address accepted</small></label>
          <RumahlInputGroup aria-label="Workspace address" prefix="/" defaultValue="workspace" status="success" />
          <RumahlInputGroup aria-label="Invalid workspace address" prefix="/" defaultValue="my workspace!" error="Use letters, numbers and hyphens." />
          <label style={{
        display: "grid",
        gap: 8,
        fontSize: 12
      }}>Description<RumahlTextArea defaultValue="" error="Add a short description." /></label>
          <RumahlFieldGroup label="Verified settings" status="success" description="Both values have been checked.">
            <label>Name<RumahlInput defaultValue="My workspace" /></label>
            <label>Address<RumahlInput defaultValue="workspace.local" /></label>
          </RumahlFieldGroup>
          <label style={{
        display: "grid",
        gap: 8,
        fontSize: 12
      }}>Disabled success<RumahlInput defaultValue="Verified" status="success" disabled /></label>
          <label style={{
        display: "grid",
        gap: 8,
        fontSize: 12
      }}>Disabled error<RumahlInput defaultValue="Invalid value" status="error" disabled /></label>
          <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 8
      }}><Button variant="primary">Save changes</Button><Button variant="danger">Discard</Button></div>
        </section>)}
    </div>
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as AllMaterials,d as __namedExportsOrder,l as default};