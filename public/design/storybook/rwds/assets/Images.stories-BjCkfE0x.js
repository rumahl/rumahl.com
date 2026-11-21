import{i as e}from"./preload-helper-Cs4UwXAW.js";import{t}from"./iframe-CMsHJqmJ.js";import{n,t as r}from"./device-art-EOlIoO9K.js";import{r as i,t as a}from"./homepage-DkSvu3C4.js";import{a as o,i as s,n as c,r as l}from"./home-continuation-CyWgvLvP.js";var u,d,f,p,m;e((()=>{l(),n(),i(),o(),u=t(),d={title:`Components/Images`,parameters:{layout:`fullscreen`}},f={render:()=>(0,u.jsx)(`div`,{className:`sb-page`,children:(0,u.jsx)(`div`,{className:s.landscape,style:{maxWidth:920},children:(0,u.jsx)(c,{photo:a.hardware,action:{label:`Open the reference`,href:`#example`},eager:!0})})})},p={render:()=>(0,u.jsx)(`div`,{className:`sb-page`,children:(0,u.jsx)(`div`,{className:`highlight-grid`,style:{marginTop:0},children:[`sbc`,`minipc`,`server`].map(e=>(0,u.jsxs)(`article`,{className:`highlight-card`,children:[(0,u.jsx)(`div`,{style:{color:`var(--accent)`,marginBottom:10},children:(0,u.jsx)(r,{kind:e})}),(0,u.jsx)(`h3`,{children:e}),(0,u.jsx)(`p`,{children:`Device artwork used by the installation planner.`})]},e))})})},m=[`EditorialImageStory`,`DeviceArtwork`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="sb-page">
      <div className={styles.landscape} style={{
      maxWidth: 920
    }}>
        <EditorialImage photo={editorialPhotos.hardware} action={{
        label: 'Open the reference',
        href: '#example'
      }} eager />
      </div>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="sb-page">
      <div className="highlight-grid" style={{
      marginTop: 0
    }}>
        {(['sbc', 'minipc', 'server'] as const).map(kind => <article className="highlight-card" key={kind}>
            <div style={{
          color: 'var(--accent)',
          marginBottom: 10
        }}><DeviceArt kind={kind} /></div>
            <h3>{kind}</h3>
            <p>Device artwork used by the installation planner.</p>
          </article>)}
      </div>
    </div>
}`,...p.parameters?.docs?.source}}}}))();export{p as DeviceArtwork,f as EditorialImageStory,m as __namedExportsOrder,d as default};