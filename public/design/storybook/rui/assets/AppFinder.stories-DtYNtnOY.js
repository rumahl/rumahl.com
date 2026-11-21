import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{Bn as n,Gn as r,In as i,Ln as a,N as o,Nn as s,Pn as c,X as l,Xn as u,ar as d,ct as f,fn as p,ft as m,ir as h,mn as g,n as _,nr as v,ot as y,pn as b,ut as x,zn as S}from"./iframe-ey0lnv34.js";var C,w,T,E,D,O;function k(){return(k=e((()=>{_(),u(),C=t(),w={title:`Layout/App/Finder`,parameters:{layout:`fullscreen`,docs:{description:{component:`# Finder / explorer (app style)

A template/inspiration: a location sidebar, a toolbar and a content grid.
Content on the surface; material for the sidebar and toolbar.`}}}},T=[{id:`home`,label:`Home`,icon:(0,C.jsx)(n,{}),current:!0},{id:`desktop`,label:`Desktop`,icon:(0,C.jsx)(i,{})},{id:`documents`,label:`Documents`,icon:(0,C.jsx)(a,{})},{id:`apps`,label:`Applications`,icon:(0,C.jsx)(S,{})}],E=[`Invoices`,`Photos`,`Projects`,`Notes`,`Backups`,`Exports`,`Screenshots`,`Downloads`],D={render:()=>(0,C.jsxs)(`div`,{style:{height:560,display:`grid`,gridTemplateColumns:`220px minmax(0, 1fr)`},children:[(0,C.jsx)(v,{children:(0,C.jsx)(d,{title:`Places`,children:T.map(e=>(0,C.jsx)(h,{as:`a`,href:`#`,icon:e.icon,current:e.current===!0,children:e.label},e.id))})}),(0,C.jsxs)(x,{direction:`column`,style:{minWidth:0},children:[(0,C.jsx)(`div`,{style:{padding:`12px 16px`},children:(0,C.jsxs)(p,{children:[(0,C.jsxs)(b,{children:[(0,C.jsx)(l,{label:`Back`,children:(0,C.jsx)(c,{})}),(0,C.jsx)(l,{label:`Forward`,children:(0,C.jsx)(s,{})})]}),(0,C.jsx)(g,{}),(0,C.jsx)(`div`,{style:{width:220},children:(0,C.jsx)(o,{type:`search`,placeholder:`Search`,"aria-label":`Search`})}),(0,C.jsx)(b,{children:(0,C.jsx)(l,{label:`Settings`,children:(0,C.jsx)(r,{})})})]})}),(0,C.jsx)(`div`,{style:{padding:`8px 20px 0`},children:(0,C.jsx)(y,{level:5,children:`Documents`})}),(0,C.jsx)(`div`,{style:{padding:20,display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(120px, 1fr))`,gap:14,overflow:`auto`},children:E.map(e=>(0,C.jsxs)(m,{p:3,radius:`14px`,style:{display:`grid`,justifyItems:`center`,gap:8,cursor:`pointer`},children:[(0,C.jsx)(`span`,{style:{display:`grid`,placeItems:`center`,width:48,height:48,borderRadius:12,color:`var(--rumahl-ui-color-accent)`,background:`color-mix(in srgb, var(--rumahl-ui-color-accent) 14%, transparent)`},children:(0,C.jsx)(a,{})}),(0,C.jsx)(f,{size:`sm`,children:e})]},e))})]})]})},O=[`Default`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 560,
    display: "grid",
    gridTemplateColumns: "220px minmax(0, 1fr)"
  }}>
      <Sidenav>
        <SidenavSection title="Places">
          {PLACES.map(place => <SidenavItem key={place.id} as="a" href="#" icon={place.icon} current={place.current === true}>
              {place.label}
            </SidenavItem>)}
        </SidenavSection>
      </Sidenav>

      <Flex direction="column" style={{
      minWidth: 0
    }}>
        <div style={{
        padding: "12px 16px"
      }}>
          <Toolbar>
            <ToolbarGroup>
              <IconButton label="Back">
                <ArrowLeftIcon />
              </IconButton>
              <IconButton label="Forward">
                <ArrowIcon />
              </IconButton>
            </ToolbarGroup>
            <ToolbarSpacer />
            <div style={{
            width: 220
          }}>
              <RumahlInput type="search" placeholder="Search" aria-label="Search" />
            </div>
            <ToolbarGroup>
              <IconButton label="Settings">
                <SettingsIcon />
              </IconButton>
            </ToolbarGroup>
          </Toolbar>
        </div>

        <div style={{
        padding: "8px 20px 0"
      }}>
          <Heading level={5}>Documents</Heading>
        </div>

        <div style={{
        padding: 20,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
        gap: 14,
        overflow: "auto"
      }}>
          {FILES.map(file => <Box key={file} p={3} radius="14px" style={{
          display: "grid",
          justifyItems: "center",
          gap: 8,
          cursor: "pointer"
        }}>
              <span style={{
            display: "grid",
            placeItems: "center",
            width: 48,
            height: 48,
            borderRadius: 12,
            color: "var(--rumahl-ui-color-accent)",
            background: "color-mix(in srgb, var(--rumahl-ui-color-accent) 14%, transparent)"
          }}>
                <DocumentIcon />
              </span>
              <Text size="sm">{file}</Text>
            </Box>)}
        </div>
      </Flex>
    </div>
}`,...D.parameters?.docs?.source}}}})))()}k();export{D as Default,O as __namedExportsOrder,w as default};