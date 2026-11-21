import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{$t as r,Cn as i,En as a,Gn as o,In as s,Qt as c,R as l,Tn as u,Un as d,Xn as f,ar as p,c as m,en as h,ir as g,n as _,tn as v,wn as y,zn as b}from"./iframe-ey0lnv34.js";function x(e,t){let[n,o]=(0,S.useState)(`personalization`);return(0,C.jsx)(`div`,{style:{height:560},children:(0,C.jsx)(c,{collapsible:!0,defaultCollapsed:e.collapsed,sidebar:(0,C.jsx)(r,{...t?{header:t}:{},children:(0,C.jsx)(p,{title:`User`,children:T.map(e=>(0,C.jsx)(g,{as:`button`,type:`button`,icon:e.icon,current:n===e.id,onClick:()=>o(e.id),children:e.label},e.id))})}),children:(0,C.jsxs)(h,{title:`Personalization`,description:`Choose how rumahl OS looks and feels.`,children:[(0,C.jsx)(v,{title:`Appearance`,children:(0,C.jsxs)(i,{children:[(0,C.jsx)(a,{title:`Dark mode`,children:(0,C.jsx)(l,{label:`Dark mode`,defaultChecked:!0})}),(0,C.jsx)(a,{title:`Theme`,value:`Default`})]})}),(0,C.jsx)(v,{title:`Links`,children:(0,C.jsxs)(u,{children:[(0,C.jsx)(y,{icon:(0,C.jsx)(b,{}),title:`Display`,subtitle:`Resolution and scaling`,href:`#display`}),(0,C.jsx)(y,{icon:(0,C.jsx)(d,{}),title:`Accessibility`,subtitle:`Motion and contrast`,href:`#a11y`})]})})]})})})}var S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{S=t(),_(),f(),C=n(),w={title:`Layout/App/Sidebar layout`,component:c,args:{children:null,collapsed:!1},argTypes:{collapsed:{control:`boolean`},sidebar:{control:!1},children:{control:!1}},parameters:{layout:`fullscreen`,docs:{description:{component:"Two-pane app frame: a sidebar (`AppSidebar`) and a content scroller. The layout\nbrings the native window surface; the sidebar is the `--side` surface and the\ncontent is transparent (the window glass shows through).\n\n- `collapsible` / `collapsed` / `defaultCollapsed` — an icon-only rail.\n- Sidebar header / footer are slots (a search, a profile… or nothing).\n\n## Rules\n- **One sidebar, one content area.** Put the top-level sections in the sidebar.\n- Compose content from `PageHeader` + `PageSection` +\n  `GroupContainer`/`GroupRow` (or `GroupLinkContainer`).\n- **No material on the content** — material is for the sidebar and the frame.\n- A template / inspiration, not a mandate."}}}},T=[{id:`personalization`,label:`Personalization`,icon:(0,C.jsx)(s,{})},{id:`workspace`,label:`Workspace`,icon:(0,C.jsx)(b,{})},{id:`accessibility`,label:`Accessibility`,icon:(0,C.jsx)(d,{})},{id:`system`,label:`System`,icon:(0,C.jsx)(o,{})}],E=`import { useState } from "react";
import {
  AppLayout,
  AppSidebar,
  GroupContainer,
  GroupRow,
  PageHeader,
  PageSection,
  RumahlSwitch,
  SidenavItem,
  SidenavSection
} from "@rumahl/ui/components";
import { DesktopIcon, GridIcon, SettingsIcon } from "@rumahl/ui/icons";

const NAV = [
  { id: "personalization", label: "Personalization", icon: <DesktopIcon /> },
  { id: "workspace", label: "Workspace", icon: <GridIcon /> },
  { id: "system", label: "System", icon: <SettingsIcon /> }
];

export function App() {
  const [page, setPage] = useState("personalization");

  return (
    <AppLayout
      collapsible
      sidebar={
        <AppSidebar>
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
        </AppSidebar>
      }
    >
      <PageHeader title="Personalization" description="Choose how rumahl OS looks and feels.">
        <PageSection title="Appearance">
          <GroupContainer>
            <GroupRow title="Dark mode">
              <RumahlSwitch label="Dark mode" defaultChecked />
            </GroupRow>
            <GroupRow title="Theme" value="Default" />
          </GroupContainer>
        </PageSection>
      </PageHeader>
    </AppLayout>
  );
}`,D={parameters:{docs:{source:{language:`tsx`,code:E}}},render:e=>x(e)},O={parameters:{docs:{source:{language:`tsx`,code:E}}},render:()=>x({},(0,C.jsx)(m,{label:`Search settings`,clearLabel:`Clear`,value:``,onChange:()=>{}}))},k={args:{collapsed:!0},parameters:{docs:{source:{language:`tsx`,code:E}}},render:e=>x(e)},A={render:()=>(0,C.jsx)(`div`,{style:{height:360},children:(0,C.jsx)(c,{children:(0,C.jsx)(h,{title:`Activity`,description:`Recent events across your workspace.`,children:(0,C.jsx)(v,{title:`Today`,children:(0,C.jsxs)(i,{children:[(0,C.jsx)(a,{title:`Deployed API`,value:`09:24`}),(0,C.jsx)(a,{title:`Invited Sam Rivera`,value:`10:03`})]})})})})})},j=[`Default`,`WithHeader`,`Collapsed`,`ContentOnly`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        language: "tsx",
        code: DEFAULT_CODE
      }
    }
  },
  render: args => renderLayout(args)
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        language: "tsx",
        code: DEFAULT_CODE
      }
    }
  },
  render: () => renderLayout({}, <RumahlSearch label="Search settings" clearLabel="Clear" value="" onChange={() => {}} />)
}`,...O.parameters?.docs?.source},description:{story:`The sidebar header is a slot — put anything here (or nothing).`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    collapsed: true
  },
  parameters: {
    docs: {
      source: {
        language: "tsx",
        code: DEFAULT_CODE
      }
    }
  },
  render: args => renderLayout(args)
}`,...k.parameters?.docs?.source},description:{story:`Collapsed rail — the layout flexes to an icon-only sidebar.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 360
  }}>
      <AppLayout>
        <PageHeader title="Activity" description="Recent events across your workspace.">
          <PageSection title="Today">
            <GroupContainer>
              <GroupRow title="Deployed API" value="09:24" />
              <GroupRow title="Invited Sam Rivera" value="10:03" />
            </GroupContainer>
          </PageSection>
        </PageHeader>
      </AppLayout>
    </div>
}`,...A.parameters?.docs?.source},description:{story:`Same layout without a sidebar — just the content pane.`,...A.parameters?.docs?.description}}}})))()}M();export{k as Collapsed,A as ContentOnly,D as Default,O as WithHeader,j as __namedExportsOrder,w as default};