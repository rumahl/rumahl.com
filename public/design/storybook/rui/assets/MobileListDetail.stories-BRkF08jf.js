import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Cn as r,En as i,Jt as a,Nn as o,Pn as s,X as c,Xn as l,f as u,n as d,o as f,on as p,ot as m,qt as h}from"./iframe-ey0lnv34.js";var g,_,v,y,b,x,S;function C(){return(C=e((()=>{g=t(),d(),l(),_=n(),v={title:`Layout/Mobile/List–detail`,parameters:{layout:`fullscreen`,docs:{description:{component:`# Mobile list–detail (hybrid)

A template/inspiration for a push navigation: a list screen that opens a
detail screen inside the same \`PhoneFrame\` (with a back button).`}}}},y=[{id:`alex`,name:`Alex Morgan`,detail:`Owner · alex@rumahl.dev`},{id:`sam`,name:`Sam Rivera`,detail:`Editor · sam@rumahl.dev`},{id:`jo`,name:`Jo Chen`,detail:`Viewer · jo@rumahl.dev`}],b=(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`span`,{children:`9:41`}),(0,_.jsx)(`span`,{style:{letterSpacing:1,opacity:.7},children:`••• ▮`})]}),x={render:()=>{let[e,t]=(0,g.useState)(null),n=y.find(t=>t.id===e)??null;return(0,_.jsx)(`div`,{style:{minHeight:700,display:`grid`,placeItems:`center`,padding:24,background:`var(--rumahl-ui-color-canvas-background)`},children:(0,_.jsx)(p,{status:b,children:n?(0,_.jsxs)(`div`,{style:{padding:`0 18px 24px`,display:`grid`,gap:14},children:[(0,_.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,padding:`6px 0`},children:[(0,_.jsx)(c,{shape:`circle`,variant:`ghost`,label:`Back`,onClick:()=>t(null),children:(0,_.jsx)(s,{})}),(0,_.jsx)(m,{level:4,children:n.name})]}),(0,_.jsxs)(r,{children:[(0,_.jsx)(i,{title:`Role`,value:n.detail.split(` · `)[0]}),(0,_.jsx)(i,{title:`Email`,value:n.detail.split(` · `)[1]}),(0,_.jsx)(i,{title:`Status`,value:(0,_.jsx)(f,{tone:`success`,children:`Active`})})]})]}):(0,_.jsxs)(`div`,{style:{padding:`8px 18px`},children:[(0,_.jsx)(m,{level:3,style:{marginBottom:12},children:`People`}),(0,_.jsx)(h,{children:y.map(e=>(0,_.jsx)(a,{interactive:!0,onClick:()=>t(e.id),leading:(0,_.jsx)(u,{name:e.name,size:`sm`}),title:e.name,subtitle:e.detail,trailing:(0,_.jsx)(`span`,{style:{display:`inline-flex`,color:`var(--rumahl-ui-color-text-muted)`},children:(0,_.jsx)(o,{})})},e.id))})]})})})}},S=[`Default`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openId, setOpenId] = useState<string | null>(null);
    const person = PEOPLE.find(p => p.id === openId) ?? null;
    return <div style={{
      minHeight: 700,
      display: "grid",
      placeItems: "center",
      padding: 24,
      background: "var(--rumahl-ui-color-canvas-background)"
    }}>
        <PhoneFrame status={status}>
          {person ? <div style={{
          padding: "0 18px 24px",
          display: "grid",
          gap: 14
        }}>
              <div style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "6px 0"
          }}>
                <IconButton shape="circle" variant="ghost" label="Back" onClick={() => setOpenId(null)}>
                  <ArrowLeftIcon />
                </IconButton>
                <Heading level={4}>{person.name}</Heading>
              </div>
              <GroupContainer>
                <GroupRow title="Role" value={person.detail.split(" · ")[0]} />
                <GroupRow title="Email" value={person.detail.split(" · ")[1]} />
                <GroupRow title="Status" value={<RumahlBadge tone="success">Active</RumahlBadge>} />
              </GroupContainer>
            </div> : <div style={{
          padding: "8px 18px"
        }}>
              <Heading level={3} style={{
            marginBottom: 12
          }}>
                People
              </Heading>
              <List>
                {PEOPLE.map(p => <ListItem key={p.id} interactive onClick={() => setOpenId(p.id)} leading={<RumahlAvatar name={p.name} size="sm" />} title={p.name} subtitle={p.detail} trailing={<span style={{
              display: "inline-flex",
              color: "var(--rumahl-ui-color-text-muted)"
            }}>
                        <ArrowIcon />
                      </span>} />)}
              </List>
            </div>}
        </PhoneFrame>
      </div>;
  }
}`,...x.parameters?.docs?.source}}}})))()}C();export{x as Default,S as __namedExportsOrder,v as default};