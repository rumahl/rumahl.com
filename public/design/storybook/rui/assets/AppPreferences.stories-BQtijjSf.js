import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{$t as r,Cn as i,En as a,Gn as o,In as s,Qt as c,R as l,Un as u,Xn as d,ar as f,en as p,ir as m,n as h,o as g,u as _,zn as v}from"./iframe-ey0lnv34.js";var y,b,x,S,C,w;function T(){return(T=e((()=>{y=t(),h(),d(),b=n(),x={title:`Layout/App/Preferences`,parameters:{layout:`fullscreen`,docs:{description:{component:`# Preferences (tab-in-sidebar, app style)

A template/inspiration: a sidebar for the top-level sections and tabs inside
the content for the sub-sections. Content on the surface.`}}}},S=[{id:`general`,label:`General`,icon:(0,b.jsx)(o,{})},{id:`appearance`,label:`Appearance`,icon:(0,b.jsx)(s,{})},{id:`accessibility`,label:`Accessibility`,icon:(0,b.jsx)(u,{})},{id:`workspace`,label:`Workspace`,icon:(0,b.jsx)(v,{})}],C={render:()=>{let[e,t]=(0,y.useState)(`appearance`),[n,o]=(0,y.useState)(`theme`);return(0,b.jsx)(`div`,{style:{height:560},children:(0,b.jsx)(c,{sidebar:(0,b.jsx)(r,{children:(0,b.jsx)(f,{title:`Preferences`,children:S.map(n=>(0,b.jsx)(m,{as:`button`,type:`button`,icon:n.icon,current:e===n.id,onClick:()=>t(n.id),children:n.label},n.id))})}),children:(0,b.jsx)(p,{title:`Appearance`,description:`Theme, wallpaper and accent colour.`,children:(0,b.jsx)(_,{label:`Appearance sections`,value:n,onChange:o,tabs:[{id:`theme`,label:`Theme`,content:(0,b.jsxs)(i,{children:[(0,b.jsx)(a,{title:`Dark mode`,children:(0,b.jsx)(l,{label:`Dark mode`,defaultChecked:!0})}),(0,b.jsx)(a,{title:`Accent`,value:(0,b.jsx)(g,{tone:`success`,children:`Mint`})})]})},{id:`wallpaper`,label:`Wallpaper`,content:(0,b.jsxs)(i,{children:[(0,b.jsx)(a,{title:`Style`,value:`Default`}),(0,b.jsx)(a,{title:`Motion`,children:(0,b.jsx)(l,{label:`Motion`,defaultChecked:!0})})]})}]})})})})}},w=[`Default`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [section, setSection] = useState("appearance");
    const [tab, setTab] = useState("theme");
    return <div style={{
      height: 560
    }}>
        <AppLayout sidebar={<AppSidebar>
              <SidenavSection title="Preferences">
                {NAV.map(item => <SidenavItem key={item.id} as="button" type="button" icon={item.icon} current={section === item.id} onClick={() => setSection(item.id)}>
                    {item.label}
                  </SidenavItem>)}
              </SidenavSection>
            </AppSidebar>}>
          <PageHeader title="Appearance" description="Theme, wallpaper and accent colour.">
            <RumahlTabs label="Appearance sections" value={tab} onChange={setTab} tabs={[{
            id: "theme",
            label: "Theme",
            content: <GroupContainer>
                      <GroupRow title="Dark mode">
                        <RumahlSwitch label="Dark mode" defaultChecked />
                      </GroupRow>
                      <GroupRow title="Accent" value={<RumahlBadge tone="success">Mint</RumahlBadge>} />
                    </GroupContainer>
          }, {
            id: "wallpaper",
            label: "Wallpaper",
            content: <GroupContainer>
                      <GroupRow title="Style" value="Default" />
                      <GroupRow title="Motion">
                        <RumahlSwitch label="Motion" defaultChecked />
                      </GroupRow>
                    </GroupContainer>
          }]} />
          </PageHeader>
        </AppLayout>
      </div>;
  }
}`,...C.parameters?.docs?.source}}}})))()}T();export{C as Default,w as __namedExportsOrder,x as default};