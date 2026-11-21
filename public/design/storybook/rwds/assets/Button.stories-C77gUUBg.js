import{i as e}from"./preload-helper-Cs4UwXAW.js";import{t}from"./iframe-CMsHJqmJ.js";import{h as n}from"./data-jk7lejyQ.js";import{t as r}from"./rwds-DZofpew-.js";var i,a,o,s,c,l;e((()=>{r(),i=t(),a={title:`RWDS/Button`,component:n,tags:[`autodocs`],args:{children:`Read the reference`,variant:`primary`,size:`md`,disabled:!1},argTypes:{variant:{control:`inline-radio`,options:[`primary`,`secondary`,`ghost`,`inverse`]},size:{control:`inline-radio`,options:[`md`,`sm`]},children:{control:`text`},href:{control:`text`,description:`Renders a link when set, otherwise a button.`},external:{control:`boolean`},disabled:{control:`boolean`},icon:{control:!1},onClick:{action:`clicked`}},parameters:{layout:`centered`,docs:{description:{component:"Primary call to action. Use `href` for navigation and a button for in-page actions. Keep one primary action per section."}}}},o={},s={args:{href:`/design/rwds`,children:`RWDS reference`}},c={parameters:{layout:`padded`},render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:16,alignItems:`center`},children:[(0,i.jsx)(n,{children:`Primary`}),(0,i.jsx)(n,{variant:`secondary`,children:`Secondary`}),(0,i.jsx)(n,{variant:`ghost`,children:`Ghost`}),(0,i.jsx)(n,{variant:`inverse`,children:`Inverse`}),(0,i.jsx)(n,{size:`sm`,children:`Small`}),(0,i.jsx)(n,{disabled:!0,children:`Disabled`})]})},l=[`Playground`,`AsLink`,`AllVariants`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    href: '/design/rwds',
    children: 'RWDS reference'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16,
    alignItems: 'center'
  }}>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="inverse">Inverse</Button>
      <Button size="sm">Small</Button>
      <Button disabled>Disabled</Button>
    </div>
}`,...c.parameters?.docs?.source}}}}))();export{c as AllVariants,s as AsLink,o as Playground,l as __namedExportsOrder,a as default};