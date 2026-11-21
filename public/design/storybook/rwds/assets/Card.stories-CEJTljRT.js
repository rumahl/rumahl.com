import{i as e}from"./preload-helper-Cs4UwXAW.js";import{t}from"./iframe-CMsHJqmJ.js";import{b as n,o as r,v as i}from"./data-jk7lejyQ.js";import{t as a}from"./rwds-DZofpew-.js";var o,s,c,l,u,d,f;e((()=>{a(),o=t(),s={title:`RWDS/Card`,component:r,tags:[`autodocs`],args:{title:`Documentation`,children:`A short description of what the reader will find here.`,padding:`md`,tone:`surface`},argTypes:{title:{control:`text`},children:{control:`text`},padding:{control:`inline-radio`,options:[`md`,`lg`]},tone:{control:`inline-radio`,options:[`surface`,`plain`]},href:{control:`text`,description:`Makes the whole card a link.`},eyebrow:{control:!1},footer:{control:!1}},parameters:{layout:`padded`,docs:{description:{component:`Content surface with title, body and an optional footer. Put the call to action in the footer so cards in a grid align.`}}}},c={},l={args:{footer:(0,o.jsx)(n,{href:`#example`,children:`Open the reference`}),eyebrow:(0,o.jsx)(i,{tone:`accent`,children:`RWDS`})},render:e=>(0,o.jsx)(`div`,{style:{maxWidth:380},children:(0,o.jsx)(r,{...e})})},u={args:{href:`#example`,title:`Whole card is a link`,children:`Hover to see the border change.`},render:e=>(0,o.jsx)(`div`,{style:{maxWidth:380},children:(0,o.jsx)(r,{...e})})},d={args:{tone:`plain`,title:`Plain card`,children:`No surface, only the border.`}},f=[`Playground`,`WithFooter`,`Interactive`,`Plain`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    footer: <TextLink href="#example">Open the reference</TextLink>,
    eyebrow: <Tag tone="accent">RWDS</Tag>
  },
  render: args => <div style={{
    maxWidth: 380
  }}><Card {...args} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    href: '#example',
    title: 'Whole card is a link',
    children: 'Hover to see the border change.'
  },
  render: args => <div style={{
    maxWidth: 380
  }}><Card {...args} /></div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'plain',
    title: 'Plain card',
    children: 'No surface, only the border.'
  }
}`,...d.parameters?.docs?.source}}}}))();export{u as Interactive,d as Plain,c as Playground,l as WithFooter,f as __namedExportsOrder,s as default};