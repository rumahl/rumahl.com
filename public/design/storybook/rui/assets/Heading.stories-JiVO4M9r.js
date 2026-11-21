import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,ot as r}from"./iframe-ey0lnv34.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=t(),a={title:`Primitives/Heading`,component:r,args:{children:`Heading`,level:2,tone:`default`},argTypes:{level:{control:`inline-radio`,options:[1,2,3,4,5,6]},size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`,`xl`]},tone:{control:`inline-radio`,options:[`default`,`muted`]},children:{control:`text`}},parameters:{docs:{description:{component:"A semantic heading (`level` 1–6) with an independent visual `size`.\n\n## Rules\n- `level` sets the **semantics**, `size` the visuals — keep the outline logical.\n- **One `level={1}` per page.**"}}}},o={},s={render:()=>(0,i.jsx)(`div`,{style:{display:`grid`,gap:10},children:[1,2,3,4,5,6].map(e=>(0,i.jsxs)(r,{level:e,children:[`Level `,e]},e))})},c=[`Default`,`Levels`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 10
  }}>
      {([1, 2, 3, 4, 5, 6] as const).map(level => <Heading key={level} level={level}>
          Level {level}
        </Heading>)}
    </div>
}`,...s.parameters?.docs?.source}}}})))()}l();export{o as Default,s as Levels,c as __namedExportsOrder,a as default};