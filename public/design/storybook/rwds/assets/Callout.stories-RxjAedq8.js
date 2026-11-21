import{i as e}from"./preload-helper-Cs4UwXAW.js";import{t}from"./iframe-CMsHJqmJ.js";import{a as n}from"./data-jk7lejyQ.js";import{t as r}from"./rwds-DZofpew-.js";var i,a,o,s,c;e((()=>{r(),i=t(),a={title:`RWDS/Callout`,component:n,tags:[`autodocs`],args:{title:`Note`,children:`Context the reader should know, but does not need to act on.`,tone:`note`},argTypes:{title:{control:`text`},children:{control:`text`},tone:{control:`inline-radio`,options:[`note`,`tip`,`important`,`warning`]}},parameters:{layout:`padded`,docs:{description:{component:"Highlighted text for context. Use `warning` only when an action can lose data or break something."}}}},o={},s={render:()=>(0,i.jsxs)(`div`,{style:{display:`grid`,gap:14,maxWidth:720},children:[(0,i.jsx)(n,{title:`Note`,children:`Context for the reader.`}),(0,i.jsx)(n,{title:`Tip`,tone:`tip`,children:`A helpful shortcut.`}),(0,i.jsx)(n,{title:`Important`,tone:`important`,children:`A rule that must be followed.`}),(0,i.jsx)(n,{title:`Warning`,tone:`warning`,children:`An action that can break something.`})]})},c=[`Playground`,`AllTones`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 14,
    maxWidth: 720
  }}>
      <Callout title="Note">Context for the reader.</Callout>
      <Callout title="Tip" tone="tip">A helpful shortcut.</Callout>
      <Callout title="Important" tone="important">A rule that must be followed.</Callout>
      <Callout title="Warning" tone="warning">An action that can break something.</Callout>
    </div>
}`,...s.parameters?.docs?.source}}}}))();export{s as AllTones,o as Playground,c as __namedExportsOrder,a as default};