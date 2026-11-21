import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Gn as r,In as i,Un as a,Xn as o,ar as s,ir as c,n as l,nr as u,rr as d,zn as f}from"./iframe-ey0lnv34.js";var p,m,h,g,_,v,y;function b(){return(b=e((()=>{p=t(),l(),o(),m=n(),h={title:`Components/Sidenav`,component:u,args:{children:null},parameters:{layout:`centered`,docs:{description:{component:`The vertical app navigation (sidebar) with sections and items.

## Rules
- One level of sections; put the **primary** destinations here.
- The active item uses the accent; identity / header / footer are slots.
- Use \`AppSidebar\` inside \`AppLayout\`; keep labels short.`}}}},g=[{id:`personalization`,label:`Personalization`,icon:(0,m.jsx)(i,{})},{id:`workspace`,label:`Workspace`,icon:(0,m.jsx)(f,{})},{id:`accessibility`,label:`Accessibility`,icon:(0,m.jsx)(a,{})},{id:`system`,label:`System`,icon:(0,m.jsx)(r,{})}],_=`import { useState } from "react";
import { Sidenav, SidenavIdentity, SidenavItem, SidenavSection } from "@rumahl/ui/components";
import { DesktopIcon, GridIcon, PulseIcon, SettingsIcon } from "@rumahl/ui/icons";

const NAV = [
  { id: "personalization", label: "Personalization", icon: <DesktopIcon /> },
  { id: "workspace", label: "Workspace", icon: <GridIcon /> },
  { id: "accessibility", label: "Accessibility", icon: <PulseIcon /> },
  { id: "system", label: "System", icon: <SettingsIcon /> }
];

function Story() {
  const [page, setPage] = useState("personalization");

  return (
    <Sidenav
      header={<SidenavIdentity name="Alex Morgan" detail="Personal · Default" />}
      footer={<>rumahl OS <b>Preview</b></>}
    >
      <SidenavSection title="User">
        {NAV.map((item) => (
          <SidenavItem
            key={item.id}
            as="button"
            type="button"
            icon={item.icon}
            current={page === item.id}
            onClick={() => setPage(item.id)}
          >
            {item.label}
          </SidenavItem>
        ))}
      </SidenavSection>
    </Sidenav>
  );
}`,v={parameters:{docs:{source:{language:`tsx`,code:_}}},render:()=>{let[e,t]=(0,p.useState)(`personalization`);return(0,m.jsx)(`div`,{style:{height:420,width:240},children:(0,m.jsx)(u,{header:(0,m.jsx)(d,{name:`Alex Morgan`,detail:`Personal · Default`}),footer:(0,m.jsxs)(m.Fragment,{children:[`rumahl OS `,(0,m.jsx)(`b`,{children:`Preview`})]}),children:(0,m.jsx)(s,{title:`User`,children:g.map(n=>(0,m.jsx)(c,{as:`button`,type:`button`,icon:n.icon,current:e===n.id,onClick:()=>t(n.id),children:n.label},n.id))})})})}},y=[`Default`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        language: "tsx",
        code: DEFAULT_CODE
      }
    }
  },
  render: () => {
    const [page, setPage] = useState("personalization");
    return <div style={{
      height: 420,
      width: 240
    }}>
        <Sidenav header={<SidenavIdentity name="Alex Morgan" detail="Personal · Default" />} footer={<>rumahl OS <b>Preview</b></>}>
          <SidenavSection title="User">
            {NAV.map(item => <SidenavItem key={item.id} as="button" type="button" icon={item.icon} current={page === item.id} onClick={() => setPage(item.id)}>
                {item.label}
              </SidenavItem>)}
          </SidenavSection>
        </Sidenav>
      </div>;
  }
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as Default,y as __namedExportsOrder,h as default};