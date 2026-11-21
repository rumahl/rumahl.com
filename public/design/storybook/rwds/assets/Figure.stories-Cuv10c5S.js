import{i as e}from"./preload-helper-Cs4UwXAW.js";import{t}from"./iframe-CMsHJqmJ.js";import{c as n}from"./data-jk7lejyQ.js";import{t as r}from"./rwds-DZofpew-.js";var i,a,o,s,c;e((()=>{r(),i=t(),a={title:`RWDS/Figure`,component:n,tags:[`autodocs`],args:{src:`/images/editorial/hardware-unsplash.jpg`,alt:`A Raspberry Pi circuit board.`,ratio:`16:9`,caption:`Photo: Harrison Broadbent / Unsplash`},argTypes:{src:{control:`text`},alt:{control:`text`,description:`Describe the image content, or leave empty only for decorative images.`},ratio:{control:`inline-radio`,options:[`16:9`,`4:3`,`1:1`]},caption:{control:`text`}},parameters:{layout:`padded`,docs:{description:{component:`Image with a fixed aspect ratio, so layouts do not shift while images load.`}}}},o={render:e=>(0,i.jsx)(`div`,{style:{maxWidth:640},children:(0,i.jsx)(n,{...e})})},s={render:()=>(0,i.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, minmax(0, 1fr))`,gap:18},children:[(0,i.jsx)(n,{src:`/images/editorial/hardware-unsplash.jpg`,alt:`Raspberry Pi circuit board`,ratio:`16:9`,caption:`16:9 · Harrison Broadbent / Unsplash`}),(0,i.jsx)(n,{src:`/images/editorial/network-unsplash.jpg`,alt:`Ethernet switch`,ratio:`4:3`,caption:`4:3 · User_Pascal / Unsplash`}),(0,i.jsx)(n,{src:`/images/editorial/network-unsplash.jpg`,alt:`Ethernet switch`,ratio:`1:1`,caption:`1:1 · User_Pascal / Unsplash`})]})},c=[`Playground`,`Ratios`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    maxWidth: 640
  }}><Figure {...args} /></div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: 18
  }}>
      <Figure src="/images/editorial/hardware-unsplash.jpg" alt="Raspberry Pi circuit board" ratio="16:9" caption="16:9 · Harrison Broadbent / Unsplash" />
      <Figure src="/images/editorial/network-unsplash.jpg" alt="Ethernet switch" ratio="4:3" caption="4:3 · User_Pascal / Unsplash" />
      <Figure src="/images/editorial/network-unsplash.jpg" alt="Ethernet switch" ratio="1:1" caption="1:1 · User_Pascal / Unsplash" />
    </div>
}`,...s.parameters?.docs?.source}}}}))();export{o as Playground,s as Ratios,c as __namedExportsOrder,a as default};