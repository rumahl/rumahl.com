import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{Ln as n,Xn as r,n as i,un as a}from"./iframe-ey0lnv34.js";var o,s,c,l,u;function d(){return(d=e((()=>{i(),r(),o=t(),s={title:`Components/AppTile`,component:a,args:{title:`Files`,id:`files`,onClick:()=>{}},argTypes:{system:{control:`boolean`},launchable:{control:`boolean`}},parameters:{layout:`centered`,docs:{description:{component:`A launcher icon for an app.

## Rules
- The icon is the app's mark; the label is its name.
- \`system\` marks a protected app; \`launchable\` toggles the launch affordance.
- Part of the **deliberate flat exception** (theme icon gradient), like the
  desktop and launcher.`}}}},c={render:e=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:16},children:[(0,o.jsx)(a,{...e,settingsHref:`#files-settings`}),(0,o.jsx)(a,{title:`Photos`,id:`photos`,onClick:()=>{},settingsHref:`#photos-settings`}),(0,o.jsx)(a,{title:`Settings`,id:`settings`,system:!0,onClick:()=>{}}),(0,o.jsx)(a,{title:`Docs`,id:`docs`,icon:(0,o.jsx)(n,{}),onClick:()=>{}})]})},l={render:e=>(0,o.jsx)(a,{...e,title:`Terminal`,id:`terminal`,launchable:!1,notLaunchableLabel:`Not installed`})},u=[`Default`,`NotLaunchable`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: 16
  }}>
      <AppTile {...args} settingsHref="#files-settings" />
      <AppTile title="Photos" id="photos" onClick={() => {}} settingsHref="#photos-settings" />
      <AppTile title="Settings" id="settings" system onClick={() => {}} />
      <AppTile title="Docs" id="docs" icon={<DocumentIcon />} onClick={() => {}} />
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <AppTile {...args} title="Terminal" id="terminal" launchable={false} notLaunchableLabel="Not installed" />
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as Default,l as NotLaunchable,u as __namedExportsOrder,s as default};