import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{Xn as n,Yn as r}from"./iframe-ey0lnv34.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=t(),a={title:`Foundations/Icons`,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:"Every icon exported by `@rumahl/ui/icons`."}}}},o=Object.keys(r).filter(e=>/^[A-Z]/.test(e)).sort(),s={render:()=>(0,i.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(120px, 1fr))`,gap:14,padding:24},children:o.map(e=>{let t=r[e];return t?(0,i.jsxs)(`div`,{style:{display:`grid`,justifyItems:`center`,gap:8,padding:14,border:`1px solid var(--surface-edge)`,borderRadius:12,background:`var(--surface-sheen), var(--surface-fill)`},children:[(0,i.jsx)(`span`,{style:{display:`inline-flex`,width:22,height:22,color:`var(--rumahl-ui-color-text-primary)`},children:(0,i.jsx)(t,{})}),(0,i.jsx)(`code`,{style:{fontSize:11,color:`var(--rumahl-ui-color-text-muted)`,textAlign:`center`,overflowWrap:`anywhere`},children:e})]},e):null})})},c=[`Gallery`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
    gap: 14,
    padding: 24
  }}>
      {NAMES.map(name => {
      const Icon = (Icons as Record<string, ComponentType<SVGProps<SVGSVGElement>>>)[name];
      if (!Icon) return null;
      return <div key={name} style={{
        display: "grid",
        justifyItems: "center",
        gap: 8,
        padding: 14,
        border: "1px solid var(--surface-edge)",
        borderRadius: 12,
        background: "var(--surface-sheen), var(--surface-fill)"
      }}>
            <span style={{
          display: "inline-flex",
          width: 22,
          height: 22,
          color: "var(--rumahl-ui-color-text-primary)"
        }}>
              <Icon />
            </span>
            <code style={{
          fontSize: 11,
          color: "var(--rumahl-ui-color-text-muted)",
          textAlign: "center",
          overflowWrap: "anywhere"
        }}>
              {name}
            </code>
          </div>;
    })}
    </div>
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as Gallery,c as __namedExportsOrder,a as default};