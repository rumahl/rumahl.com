import{i as e}from"./preload-helper-Cs4UwXAW.js";import{t}from"./iframe-CMsHJqmJ.js";import{i as n,n as r,r as i,t as a}from"./lucide-react-DYzepsWi.js";var o,s,c,l,u;e((()=>{a(),o=t(),s={title:`Components/Search`,parameters:{layout:`fullscreen`}},c={render:()=>(0,o.jsx)(`div`,{className:`sb-page`,children:(0,o.jsxs)(`div`,{style:{position:`relative`,minHeight:420,border:`1px solid var(--border)`,borderRadius:24,overflow:`hidden`,background:`var(--surface)`},children:[(0,o.jsxs)(`div`,{className:`nav-search`,style:{position:`absolute`},children:[(0,o.jsx)(i,{size:18}),(0,o.jsx)(`input`,{placeholder:`Search rumahl`,defaultValue:`integrations`,"aria-label":`Search`}),(0,o.jsx)(`button`,{className:`nav-search-close`,"aria-label":`Close search`,children:(0,o.jsx)(r,{size:16})})]}),(0,o.jsxs)(`div`,{className:`nav-search-panel`,style:{position:`relative`,top:70,margin:16},children:[(0,o.jsx)(`span`,{className:`nav-search-label`,children:`DESIGN`}),(0,o.jsx)(`div`,{className:`nav-search-list`,children:[`Design documentation`,`RWDS reference`,`RUI reference`].map((e,t)=>(0,o.jsxs)(`button`,{className:`nav-search-result`,"data-active":t===0,children:[(0,o.jsx)(`span`,{className:`nav-search-cat`,children:`Design`}),(0,o.jsxs)(`span`,{className:`nav-search-body`,children:[(0,o.jsx)(`strong`,{children:e}),(0,o.jsx)(`span`,{children:`Reference documentation for the design systems.`})]}),(0,o.jsx)(n,{size:16})]},e))}),(0,o.jsxs)(`div`,{className:`nav-search-footer`,children:[(0,o.jsxs)(`span`,{children:[(0,o.jsx)(`kbd`,{children:`↑`}),(0,o.jsx)(`kbd`,{children:`↓`}),` navigate`]}),(0,o.jsxs)(`span`,{children:[(0,o.jsx)(`kbd`,{children:`↵`}),` open`]}),(0,o.jsxs)(`span`,{children:[(0,o.jsx)(`kbd`,{children:`esc`}),` close`]})]})]})]})})},l={render:()=>(0,o.jsx)(`div`,{className:`sb-page`,children:(0,o.jsxs)(`div`,{className:`content-search`,style:{maxWidth:700},children:[(0,o.jsx)(i,{size:19}),(0,o.jsx)(`input`,{placeholder:`Search the documentation…`,"aria-label":`Search documentation`}),(0,o.jsx)(`kbd`,{children:`Ctrl K`})]})})},u=[`SearchOverlay`,`DocsSearch`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="sb-page">
      <div style={{
      position: 'relative',
      minHeight: 420,
      border: '1px solid var(--border)',
      borderRadius: 24,
      overflow: 'hidden',
      background: 'var(--surface)'
    }}>
        <div className="nav-search" style={{
        position: 'absolute'
      }}>
          <Search size={18} />
          <input placeholder="Search rumahl" defaultValue="integrations" aria-label="Search" />
          <button className="nav-search-close" aria-label="Close search"><X size={16} /></button>
        </div>
        <div className="nav-search-panel" style={{
        position: 'relative',
        top: 70,
        margin: 16
      }}>
          <span className="nav-search-label">DESIGN</span>
          <div className="nav-search-list">
            {['Design documentation', 'RWDS reference', 'RUI reference'].map((title, index) => <button className="nav-search-result" data-active={index === 0} key={title}>
                <span className="nav-search-cat">Design</span>
                <span className="nav-search-body"><strong>{title}</strong><span>Reference documentation for the design systems.</span></span>
                <ArrowUpRight size={16} />
              </button>)}
          </div>
          <div className="nav-search-footer"><span><kbd>↑</kbd><kbd>↓</kbd> navigate</span><span><kbd>↵</kbd> open</span><span><kbd>esc</kbd> close</span></div>
        </div>
      </div>
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="sb-page">
      <div className="content-search" style={{
      maxWidth: 700
    }}>
        <Search size={19} />
        <input placeholder="Search the documentation…" aria-label="Search documentation" />
        <kbd>Ctrl K</kbd>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}}}))();export{l as DocsSearch,c as SearchOverlay,u as __namedExportsOrder,s as default};