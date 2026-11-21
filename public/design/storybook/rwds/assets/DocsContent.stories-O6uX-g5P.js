import{i as e}from"./preload-helper-Cs4UwXAW.js";import{t}from"./iframe-CMsHJqmJ.js";import{n,r,t as i}from"./content-elements-DS5SsGu7.js";import{n as a,r as o,t as s}from"./rich-markdown-B5Njn2oF.js";var c,l,u,d;e((()=>{r(),o(),c=t(),l={title:`Components/Docs content`,parameters:{layout:`fullscreen`}},u={render:()=>(0,c.jsx)(`div`,{className:`sb-page`,style:{maxWidth:820},children:(0,c.jsx)(`div`,{className:`content-prose`,children:(0,c.jsxs)(`section`,{children:[(0,c.jsx)(`h2`,{children:`Rich documentation content`}),(0,c.jsx)(a,{children:`rumahl connects **external** and native services through explicit capabilities. See [the integration model](/docs/integrations) for the broader context.`}),(0,c.jsx)(i,{tone:`note`,title:`Documentation note`,text:`Callouts use the same typography, spacing and accent treatment as the main website docs.`}),(0,c.jsx)(n,{id:`docs-content-example`,title:`Review checklist`,items:[`Check the tokens`,`Check the components`,`Check light and dark`]}),(0,c.jsx)(s,{language:`json`,content:`{
  "system": "RWDS",
  "scope": "web"
}`})]})})})},d=[`ContentElements`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="sb-page" style={{
    maxWidth: 820
  }}>
      <div className="content-prose">
        <section>
          <h2>Rich documentation content</h2>
          <RichMarkdown>{\`rumahl connects **external** and native services through explicit capabilities. See [the integration model](/docs/integrations) for the broader context.\`}</RichMarkdown>
          <Callout tone="note" title="Documentation note" text="Callouts use the same typography, spacing and accent treatment as the main website docs." />
          <Checklist id="docs-content-example" title="Review checklist" items={['Check the tokens', 'Check the components', 'Check light and dark']} />
          <MarkdownCode language="json" content={'{\\n  "system": "RWDS",\\n  "scope": "web"\\n}'} />
        </section>
      </div>
    </div>
}`,...u.parameters?.docs?.source}}}}))();export{u as ContentElements,d as __namedExportsOrder,l as default};