import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{A as r,E as i,H as a,I as o,L as s,V as c,n as l}from"./iframe-ey0lnv34.js";function u({id:e}){let[t,n]=(0,d.useState)(42),[l,u]=(0,d.useState)(`list`);return(0,f.jsxs)(`div`,{style:{display:`grid`,gap:24},children:[(0,f.jsx)(s,{label:`Progress`,min:0,max:100,value:t,onChange:e=>n(e.target.valueAsNumber)}),(0,f.jsx)(c,{label:`Storage used`,value:t}),(0,f.jsx)(c,{label:`Empty`,value:0}),(0,f.jsx)(c,{label:`Complete`,value:100}),(0,f.jsx)(c,{label:`Loading files`}),(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:18},children:[(0,f.jsx)(a,{label:`Loading small`,size:`sm`}),(0,f.jsx)(a,{label:`Loading`}),(0,f.jsx)(a,{label:`Loading large`,size:`lg`})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:12},children:[(0,f.jsx)(r,{label:`Selected`,defaultChecked:!0}),(0,f.jsx)(r,{label:`Empty`}),(0,f.jsx)(r,{label:`Disabled`,defaultChecked:!0,disabled:!0}),(0,f.jsx)(o,{name:e,label:`First`,defaultChecked:!0}),(0,f.jsx)(o,{name:e,label:`Second`})]}),(0,f.jsx)(i,{label:`Drag to choose a view`,value:l,onChange:u,options:[{value:`list`,label:`List`},{value:`grid`,label:`Grid`},{value:`locked`,label:`Locked`,disabled:!0},{value:`columns`,label:`Columns`}]})]})}var d,f,p,m,h,g;function _(){return(_=e((()=>{d=t(),l(),f=n(),p={title:`Components/Indicators`,parameters:{layout:`fullscreen`}},m={render:(e,t)=>(0,f.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(min(100%, 300px), 1fr))`,gap:24},children:[`glass`,`floating`,`solid`].map(e=>(0,f.jsxs)(`section`,{className:`shell`,"data-material":e,"data-scheme":t.globals.scheme===`dark`?`dark`:`light`,style:{padding:24,borderRadius:24,background:`var(--rumahl-ui-color-panel-background)`,color:`var(--rumahl-ui-color-text-primary)`},children:[(0,f.jsx)(`h2`,{style:{margin:`0 0 24px`,fontSize:20,textTransform:`capitalize`},children:e}),(0,f.jsx)(u,{id:`indicator-${e}`})]},e))})},h={render:()=>(0,f.jsx)(a,{label:`Loading workspace`,size:`lg`})},g=[`AllMaterials`,`Spinner`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (_args, context) => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
    gap: 24
  }}>
    {(["glass", "floating", "solid"] as const).map(material => <section key={material} className="shell" data-material={material} data-scheme={context.globals.scheme === "dark" ? "dark" : "light"} style={{
      padding: 24,
      borderRadius: 24,
      background: "var(--rumahl-ui-color-panel-background)",
      color: "var(--rumahl-ui-color-text-primary)"
    }}>
      <h2 style={{
        margin: "0 0 24px",
        fontSize: 20,
        textTransform: "capitalize"
      }}>{material}</h2>
      <Indicators id={\`indicator-\${material}\`} />
    </section>)}
  </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <RumahlSpinner label="Loading workspace" size="lg" />
}`,...h.parameters?.docs?.source}}}})))()}_();export{m as AllMaterials,h as Spinner,g as __namedExportsOrder,p as default};