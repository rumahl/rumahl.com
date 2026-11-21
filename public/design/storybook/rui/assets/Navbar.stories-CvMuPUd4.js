import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{$n as r,Bn as i,Gn as a,W as o,Wn as s,X as c,Xn as l,er as u,n as d}from"./iframe-ey0lnv34.js";var f,p,m,h,g;function _(){return(_=e((()=>{f=t(),d(),l(),p=n(),m={title:`Components/Navbar`,component:r,args:{children:null},parameters:{layout:`fullscreen`,docs:{description:{component:`A horizontal navigation bar for a few top-level destinations.

## Rules
- Keep it to one line; short, parallel labels.
- **Don't mix navigation and actions** — actions belong in a Toolbar.`}}}},h={render:()=>{let[e,t]=(0,f.useState)(`home`);return(0,p.jsx)(`div`,{style:{padding:24},children:(0,p.jsx)(r,{brand:(0,p.jsx)(o,{style:{width:16,height:28}}),actions:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{label:`Search`,children:(0,p.jsx)(s,{})}),(0,p.jsx)(c,{label:`Settings`,children:(0,p.jsx)(a,{})})]}),children:[{id:`home`,label:`Home`,icon:(0,p.jsx)(i,{})},{id:`apps`,label:`Apps`,icon:(0,p.jsx)(s,{})},{id:`activity`,label:`Activity`,icon:(0,p.jsx)(a,{})}].map(n=>(0,p.jsx)(u,{as:`button`,type:`button`,icon:n.icon,current:e===n.id,onClick:()=>t(n.id),children:n.label},n.id))})})}},g=[`Default`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState("home");
    return <div style={{
      padding: 24
    }}>
        <Navbar brand={<RumahlMark style={{
        width: 16,
        height: 28
      }} />} actions={<>
              <IconButton label="Search">
                <SearchIcon />
              </IconButton>
              <IconButton label="Settings">
                <SettingsIcon />
              </IconButton>
            </>}>
          {[{
          id: "home",
          label: "Home",
          icon: <HomeIcon />
        }, {
          id: "apps",
          label: "Apps",
          icon: <SearchIcon />
        }, {
          id: "activity",
          label: "Activity",
          icon: <SettingsIcon />
        }].map(item => <NavbarItem key={item.id} as="button" type="button" icon={item.icon} current={page === item.id} onClick={() => setPage(item.id)}>
              {item.label}
            </NavbarItem>)}
        </Navbar>
      </div>;
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as Default,g as __namedExportsOrder,m as default};