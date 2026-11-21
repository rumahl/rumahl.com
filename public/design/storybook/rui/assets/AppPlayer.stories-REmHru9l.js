import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{Jn as n,Jt as r,Nn as i,Pn as a,V as o,X as s,Xn as c,ct as l,n as u,ot as d,qt as f,ut as p}from"./iframe-ey0lnv34.js";var m,h,g,_,v;function y(){return(y=e((()=>{u(),c(),m=t(),h={title:`Layout/App/Player`,parameters:{layout:`fullscreen`,docs:{description:{component:`# Player / now-playing (app style)

A template/inspiration: large artwork + transport controls, with the queue
alongside. Content on the surface.`}}}},g=[{title:`Golden Hour`,time:`3:42`},{title:`Nightingale`,time:`4:07`},{title:`Drift`,time:`3:18`},{title:`Afterglow`,time:`5:02`}],_={render:()=>(0,m.jsxs)(`div`,{style:{height:560,display:`grid`,gridTemplateColumns:`minmax(0, 1fr) 320px`},children:[(0,m.jsx)(`div`,{style:{display:`grid`,placeItems:`center`,padding:24},children:(0,m.jsxs)(`div`,{style:{display:`grid`,gap:20,justifyItems:`center`,width:`min(420px, 90%)`},children:[(0,m.jsx)(`div`,{style:{width:240,height:240,borderRadius:20,background:`radial-gradient(ellipse at 30% 20%, #ffffff33, transparent 55%), linear-gradient(150deg, #1f6f5c, #2b6cb0 60%, #b83280)`}}),(0,m.jsxs)(`div`,{style:{textAlign:`center`,display:`grid`,gap:2},children:[(0,m.jsx)(d,{level:2,children:`Golden Hour`}),(0,m.jsx)(l,{tone:`muted`,children:`Aurora · Summer`})]}),(0,m.jsx)(`div`,{style:{width:`100%`},children:(0,m.jsx)(o,{label:`Track`,value:38})}),(0,m.jsxs)(p,{align:`center`,gap:3,children:[(0,m.jsx)(s,{shape:`circle`,label:`Previous`,children:(0,m.jsx)(a,{})}),(0,m.jsx)(s,{shape:`circle`,variant:`primary`,size:`lg`,label:`Play`,children:(0,m.jsx)(n,{})}),(0,m.jsx)(s,{shape:`circle`,label:`Next`,children:(0,m.jsx)(i,{})})]})]})}),(0,m.jsxs)(`div`,{style:{borderLeft:`1px solid var(--surface-edge)`,padding:16,overflow:`auto`},children:[(0,m.jsx)(d,{level:6,style:{marginBottom:8},children:`Up next`}),(0,m.jsx)(f,{children:g.map(e=>(0,m.jsx)(r,{title:e.title,subtitle:`Aurora`,trailing:(0,m.jsx)(l,{tone:`muted`,size:`sm`,as:`span`,children:e.time})},e.title))})]})]})},v=[`Default`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 560,
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) 320px"
  }}>
      <div style={{
      display: "grid",
      placeItems: "center",
      padding: 24
    }}>
        <div style={{
        display: "grid",
        gap: 20,
        justifyItems: "center",
        width: "min(420px, 90%)"
      }}>
          <div style={{
          width: 240,
          height: 240,
          borderRadius: 20,
          background: "radial-gradient(ellipse at 30% 20%, #ffffff33, transparent 55%), linear-gradient(150deg, #1f6f5c, #2b6cb0 60%, #b83280)"
        }} />
          <div style={{
          textAlign: "center",
          display: "grid",
          gap: 2
        }}>
            <Heading level={2}>Golden Hour</Heading>
            <Text tone="muted">Aurora · Summer</Text>
          </div>
          <div style={{
          width: "100%"
        }}>
            <RumahlProgress label="Track" value={38} />
          </div>
          <Flex align="center" gap={3}>
            <IconButton shape="circle" label="Previous">
              <ArrowLeftIcon />
            </IconButton>
            <IconButton shape="circle" variant="primary" size="lg" label="Play">
              <SparkIcon />
            </IconButton>
            <IconButton shape="circle" label="Next">
              <ArrowIcon />
            </IconButton>
          </Flex>
        </div>
      </div>

      <div style={{
      borderLeft: "1px solid var(--surface-edge)",
      padding: 16,
      overflow: "auto"
    }}>
        <Heading level={6} style={{
        marginBottom: 8
      }}>
          Up next
        </Heading>
        <List>
          {QUEUE.map(track => <ListItem key={track.title} title={track.title} subtitle="Aurora" trailing={<Text tone="muted" size="sm" as="span">{track.time}</Text>} />)}
        </List>
      </div>
    </div>
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as Default,v as __namedExportsOrder,h as default};