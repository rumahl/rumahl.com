import{i as e}from"./preload-helper-Cs4UwXAW.js";import{t}from"./iframe-CMsHJqmJ.js";import{i as n,t as r}from"./lucide-react-DYzepsWi.js";var i,a,o,s;e((()=>{r(),i=t(),a={title:`Components/Mega panel`,parameters:{layout:`fullscreen`}},o={render:()=>(0,i.jsx)(`div`,{className:`sb-page`,style:{paddingTop:30},children:(0,i.jsxs)(`div`,{className:`mega-panel-inner`,style:{maxWidth:1100},children:[(0,i.jsx)(`div`,{className:`mega-columns`,children:[[`Overview`,[`rumahl OS`,`Integrations`,`Features`,`Live demo`]],[`Foundations`,[`Architecture`,`Documentation`,`Releases`]]].map(([e,t])=>(0,i.jsxs)(`div`,{className:`mega-column`,children:[(0,i.jsx)(`span`,{className:`eyebrow muted`,children:e}),t.map(e=>(0,i.jsxs)(`a`,{className:`mega-link`,href:`#example`,children:[(0,i.jsx)(`strong`,{children:e}),(0,i.jsx)(`span`,{children:`A short description of the destination.`})]},e))]},e))}),(0,i.jsxs)(`a`,{className:`mega-featured`,href:`#example`,children:[(0,i.jsx)(`span`,{className:`mega-featured-icon`,children:(0,i.jsx)(n,{size:22})}),(0,i.jsx)(`span`,{className:`eyebrow`,children:`BUILT IN THE OPEN`}),(0,i.jsx)(`strong`,{children:`One home for every service.`}),(0,i.jsx)(`span`,{className:`mega-featured-text`,children:`Open integrations, without lock-in or forced migrations.`}),(0,i.jsxs)(`span`,{className:`mega-featured-cta`,children:[`Learn more `,(0,i.jsx)(n,{size:14})]})]})]})})},s=[`MegaPanel`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="sb-page" style={{
    paddingTop: 30
  }}>
      <div className="mega-panel-inner" style={{
      maxWidth: 1100
    }}>
        <div className="mega-columns">
          {[['Overview', ['rumahl OS', 'Integrations', 'Features', 'Live demo']], ['Foundations', ['Architecture', 'Documentation', 'Releases']]].map(([title, links]) => <div className="mega-column" key={title as string}>
              <span className="eyebrow muted">{title}</span>
              {(links as string[]).map(label => <a className="mega-link" href="#example" key={label}><strong>{label}</strong><span>A short description of the destination.</span></a>)}
            </div>)}
        </div>
        <a className="mega-featured" href="#example">
          <span className="mega-featured-icon"><ArrowUpRight size={22} /></span>
          <span className="eyebrow">BUILT IN THE OPEN</span>
          <strong>One home for every service.</strong>
          <span className="mega-featured-text">Open integrations, without lock-in or forced migrations.</span>
          <span className="mega-featured-cta">Learn more <ArrowUpRight size={14} /></span>
        </a>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}}}))();export{o as MegaPanel,s as __namedExportsOrder,a as default};