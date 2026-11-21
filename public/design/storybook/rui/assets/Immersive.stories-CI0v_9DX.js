import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{Jn as n,Jt as r,Ln as i,Nn as a,Pn as o,St as s,Vn as c,X as l,Xn as u,ct as d,n as f,ot as p,qt as m,tn as h}from"./iframe-ey0lnv34.js";var g,_,v,y,b;function x(){return(x=e((()=>{f(),u(),g=t(),_={title:`Layout/App/Media detail`,parameters:{layout:`fullscreen`,docs:{description:{component:`# Immersive (media) app layout

A template/inspiration for a media detail page (like the artist page): a hero
image on top with the controls **floating inside the image**, and the text
content below on the work surface. Anything over the image is \`floating\`.`}}}},v=[{title:`Golden Hour`,time:`3:42`},{title:`Nightingale`,time:`4:07`},{title:`Drift`,time:`3:18`},{title:`Afterglow`,time:`5:02`}],y={render:()=>(0,g.jsxs)(`div`,{style:{height:560,overflow:`auto`},children:[(0,g.jsxs)(`div`,{style:{position:`relative`,height:260,background:`radial-gradient(ellipse at 30% 20%, #ffffff22, transparent 55%), linear-gradient(160deg, #103126 0%, #1d4d3a 48%, #123a3a 100%)`},children:[(0,g.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`linear-gradient(180deg, #00000059, transparent 34%, transparent 62%, #00000059)`}}),(0,g.jsx)(`div`,{style:{position:`absolute`,top:16,left:16},children:(0,g.jsx)(l,{floating:!0,shape:`circle`,label:`Back`,children:(0,g.jsx)(o,{})})}),(0,g.jsx)(`div`,{style:{position:`absolute`,top:16,right:16},children:(0,g.jsx)(l,{floating:!0,shape:`circle`,label:`Info`,children:(0,g.jsx)(c,{})})}),(0,g.jsx)(`div`,{style:{position:`absolute`,right:20,bottom:20},children:(0,g.jsx)(l,{floating:!0,variant:`primary`,shape:`circle`,size:`xl`,label:`Play`,children:(0,g.jsx)(n,{})})})]}),(0,g.jsxs)(`div`,{style:{padding:`22px 28px 32px`,display:`grid`,gap:20},children:[(0,g.jsxs)(`div`,{style:{display:`grid`,gap:4},children:[(0,g.jsx)(p,{level:1,style:{fontSize:30},children:`Summer`}),(0,g.jsx)(d,{tone:`muted`,children:`Aurora · Live set · 12 tracks`})]}),(0,g.jsxs)(`div`,{style:{display:`flex`,gap:10,flexWrap:`wrap`},children:[(0,g.jsx)(s,{variant:`primary`,leftIcon:(0,g.jsx)(n,{}),children:`Play`}),(0,g.jsx)(s,{leftIcon:(0,g.jsx)(a,{}),children:`Shuffle`}),(0,g.jsx)(s,{variant:`ghost`,leftIcon:(0,g.jsx)(i,{}),children:`Add to library`})]}),(0,g.jsx)(h,{title:`Popular`,children:(0,g.jsx)(m,{children:v.map(e=>(0,g.jsx)(r,{title:e.title,subtitle:`Aurora`,trailing:(0,g.jsx)(d,{tone:`muted`,size:`sm`,as:`span`,children:e.time})},e.title))})})]})]})},b=[`Default`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 560,
    overflow: "auto"
  }}>
      {/* Hero image — controls float inside it. */}
      <div style={{
      position: "relative",
      height: 260,
      background: "radial-gradient(ellipse at 30% 20%, #ffffff22, transparent 55%), linear-gradient(160deg, #103126 0%, #1d4d3a 48%, #123a3a 100%)"
    }}>
        <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, #00000059, transparent 34%, transparent 62%, #00000059)"
      }} />

        {/* Controls float as individual islands — no bar around single buttons. */}
        <div style={{
        position: "absolute",
        top: 16,
        left: 16
      }}>
          <IconButton floating shape="circle" label="Back">
            <ArrowLeftIcon />
          </IconButton>
        </div>

        <div style={{
        position: "absolute",
        top: 16,
        right: 16
      }}>
          <IconButton floating shape="circle" label="Info">
            <InfoIcon />
          </IconButton>
        </div>

        <div style={{
        position: "absolute",
        right: 20,
        bottom: 20
      }}>
          <IconButton floating variant="primary" shape="circle" size="xl" label="Play">
            <SparkIcon />
          </IconButton>
        </div>
      </div>

      {/* Text content on the work surface. */}
      <div style={{
      padding: "22px 28px 32px",
      display: "grid",
      gap: 20
    }}>
        <div style={{
        display: "grid",
        gap: 4
      }}>
          <Heading level={1} style={{
          fontSize: 30
        }}>
            Summer
          </Heading>
          <Text tone="muted">Aurora · Live set · 12 tracks</Text>
        </div>

        <div style={{
        display: "flex",
        gap: 10,
        flexWrap: "wrap"
      }}>
          <Button variant="primary" leftIcon={<SparkIcon />}>
            Play
          </Button>
          <Button leftIcon={<ArrowIcon />}>Shuffle</Button>
          <Button variant="ghost" leftIcon={<DocumentIcon />}>
            Add to library
          </Button>
        </div>

        <PageSection title="Popular">
          <List>
            {TRACKS.map(track => <ListItem key={track.title} title={track.title} subtitle="Aurora" trailing={<Text tone="muted" size="sm" as="span">{track.time}</Text>} />)}
          </List>
        </PageSection>
      </div>
    </div>
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as Default,b as __namedExportsOrder,_ as default};