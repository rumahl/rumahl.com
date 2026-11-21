import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{Hn as n,Kn as r,Wn as i,Xn as a,Zn as o,n as s,yn as c}from"./iframe-ey0lnv34.js";var l,u,d,f;function p(){return(p=e((()=>{s(),a(),l=t(),u={title:`System/MenuBar`,component:o,args:{brand:`rumahl`,menus:[{id:`file`,label:`File`},{id:`edit`,label:`Edit`},{id:`view`,label:`View`},{id:`window`,label:`Window`}],clock:`9:41 AM`,onSelect:()=>{}},parameters:{layout:`fullscreen`,docs:{description:{component:`The top system bar (menus on the left, status / clock on the right).

## Rules
- **System chrome only** — apps never render it.
- Menus open as dropdowns; the bar floats over the wallpaper.`}}}},d={render:e=>(0,l.jsx)(`div`,{style:{padding:16},children:(0,l.jsx)(o,{...e,status:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{label:`Search`,children:(0,l.jsx)(i,{})}),(0,l.jsx)(c,{label:`Focus`,children:(0,l.jsx)(n,{})}),(0,l.jsx)(c,{label:`Privacy`,children:(0,l.jsx)(r,{})})]})})})},f=[`Default`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: 16
  }}>
      <MenuBar {...args} status={<>
            <TrayItem label="Search">
              <SearchIcon />
            </TrayItem>
            <TrayItem label="Focus">
              <MoonIcon />
            </TrayItem>
            <TrayItem label="Privacy">
              <ShieldIcon />
            </TrayItem>
          </>} />
    </div>
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as Default,f as __namedExportsOrder,u as default};