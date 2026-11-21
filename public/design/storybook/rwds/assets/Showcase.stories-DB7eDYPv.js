import{i as e}from"./preload-helper-Cs4UwXAW.js";import{t}from"./iframe-CMsHJqmJ.js";import{i as n,t as r}from"./catalog-k4VWc-I0.js";import{a as i,c as a,i as o,n as s,o as c,r as l,s as u,t as d}from"./showcase-BPiyNt37.js";var f,p,m,h,g,_,v,y,b,x,S;e((()=>{a(),r(),f=t(),p={title:`Website/Showcase`,parameters:{layout:`fullscreen`,docs:{description:{component:`Product-page building blocks from the website: statistics, highlight cards, galleries, comparison, specifications and FAQ. These render the same data the product pages use.`}}}},m=n.os,h={render:()=>(0,f.jsx)(i,{stats:m.stats})},g={render:()=>(0,f.jsx)(o,{eyebrow:`Get the highlights`,title:`Get the highlights.`,highlights:m.highlights})},_={render:()=>(0,f.jsx)(l,{items:m.gallery})},v={render:()=>(0,f.jsx)(c,{eyebrow:`Details`,title:`A closer look.`,items:m.gallery})},y={render:()=>(0,f.jsx)(d,{comparison:m.comparison??{columns:[],rows:[]}})},b={render:()=>(0,f.jsx)(u,{groups:m.specs})},x={render:()=>(0,f.jsx)(s,{items:m.faq})},S=[`Stats`,`Highlights`,`Gallery`,`ScrollingGallery`,`Comparison`,`Specifications`,`FAQ`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <ProductStats stats={os.stats} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ProductHighlights eyebrow="Get the highlights" title="Get the highlights." highlights={os.highlights} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <FeatureGallery items={os.gallery} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ScrollGallery eyebrow="Details" title="A closer look." items={os.gallery} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <ComparisonTable comparison={os.comparison ?? {
    columns: [],
    rows: []
  }} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <SpecsSection groups={os.specs} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <FaqSection items={os.faq} />
}`,...x.parameters?.docs?.source}}}}))();export{y as Comparison,x as FAQ,_ as Gallery,g as Highlights,v as ScrollingGallery,b as Specifications,h as Stats,S as __namedExportsOrder,p as default};