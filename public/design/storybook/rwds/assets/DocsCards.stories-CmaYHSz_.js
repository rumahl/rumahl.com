import{i as e}from"./preload-helper-Cs4UwXAW.js";import{t}from"./iframe-CMsHJqmJ.js";import{r as n,t as r}from"./docs-card-BQWhMlbJ.js";import{n as i,s as a}from"./knowledge-lhgwueJ7.js";var o,s,c,l;e((()=>{n(),a(),o=t(),s={title:`Components/Docs cards`,parameters:{layout:`fullscreen`}},c={render:()=>(0,o.jsx)(`div`,{className:`portal-scope content-main`,style:{paddingTop:0},children:(0,o.jsx)(`section`,{className:`content-section`,children:(0,o.jsx)(`div`,{className:`content-grid`,children:i.slice(0,4).map(e=>(0,o.jsx)(r,{article:e,href:`/docs/`+e.slug},e.slug))})})})},l=[`DocumentationCards`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="portal-scope content-main" style={{
    paddingTop: 0
  }}>
      <section className="content-section">
        <div className="content-grid">
          {docs.slice(0, 4).map(article => <DocsCard key={article.slug} article={article} href={'/docs/' + article.slug} />)}
        </div>
      </section>
    </div>
}`,...c.parameters?.docs?.source}}}}))();export{c as DocumentationCards,l as __namedExportsOrder,s as default};