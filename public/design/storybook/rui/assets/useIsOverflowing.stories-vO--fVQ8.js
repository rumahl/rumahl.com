import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,n}from"./hooks-Dn8gpBYX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{ct as i,n as a}from"./iframe-ey0lnv34.js";var o,s,c,l;function u(){return(u=e((()=>{n(),a(),o=r(),s={title:`Hooks/useIsOverflowing`,parameters:{layout:`centered`}},c={render:()=>{let[e,n]=t();return(0,o.jsxs)(`div`,{style:{width:220},children:[(0,o.jsx)(`div`,{ref:e,style:{overflow:`hidden`,whiteSpace:`nowrap`,textOverflow:`ellipsis`},children:(0,o.jsx)(i,{children:`A fairly long label that may or may not overflow its container box.`})}),(0,o.jsxs)(i,{tone:`muted`,children:[`overflowing: `,n?`true`:`false`]})]})}},l=[`Default`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [ref, overflowing] = useIsOverflowing<HTMLDivElement>();
    return <div style={{
      width: 220
    }}>
        <div ref={ref} style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"
      }}>
          <Text>A fairly long label that may or may not overflow its container box.</Text>
        </div>
        <Text tone="muted">overflowing: {overflowing ? "true" : "false"}</Text>
      </div>;
  }
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as Default,l as __namedExportsOrder,s as default};