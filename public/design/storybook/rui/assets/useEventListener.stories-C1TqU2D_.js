import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{n,o as r}from"./hooks-Dn8gpBYX.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{ct as a,n as o}from"./iframe-ey0lnv34.js";var s,c,l,u,d;function f(){return(f=e((()=>{s=t(),n(),o(),c=i(),l={title:`Hooks/useEventListener`,parameters:{layout:`centered`}},u={render:()=>{let[e,t]=(0,s.useState)(typeof window>`u`?0:window.innerWidth);return r(typeof window>`u`?null:window,`resize`,()=>t(window.innerWidth)),(0,c.jsxs)(a,{children:[`Window width: `,e,`px — resize to update.`]})}},d=[`Default`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [width, setWidth] = useState(typeof window === "undefined" ? 0 : window.innerWidth);
    useEventListener(typeof window === "undefined" ? null : window, "resize", () => setWidth(window.innerWidth));
    return <Text>Window width: {width}px — resize to update.</Text>;
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as Default,d as __namedExportsOrder,l as default};