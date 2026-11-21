import{i as e}from"./preload-helper-Cs4UwXAW.js";import{t}from"./iframe-CMsHJqmJ.js";import{d as n,f as r,o as i,p as a,u as o}from"./data-jk7lejyQ.js";import{t as s}from"./rwds-DZofpew-.js";var c,l,u,d,f,p,m;e((()=>{s(),c=t(),l={title:`RWDS/Layout`,component:r,tags:[`autodocs`],args:{tone:`default`,spacing:`default`,children:null},argTypes:{tone:{control:`inline-radio`,options:[`default`,`alt`,`inverse`]},spacing:{control:`inline-radio`,options:[`default`,`tight`]}},parameters:{layout:`fullscreen`,docs:{description:{component:"`Section` is the vertical unit, `Container` the horizontal frame, `Grid` the responsive columns and `Stack` the vertical rhythm. Pick the smallest one that expresses the structure."}}}},u=e=>(0,c.jsx)(i,{title:e,children:`Content inside the container.`}),d={render:()=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(r,{children:(0,c.jsx)(a,{gap:`sm`,children:(0,c.jsx)(`strong`,{children:`Default section`})})}),(0,c.jsx)(r,{tone:`alt`,children:(0,c.jsx)(`strong`,{children:`Alternate section (surface)`})}),(0,c.jsx)(r,{tone:`inverse`,children:(0,c.jsx)(`strong`,{style:{color:`var(--white)`},children:`Inverse section (dark band)`})})]})},f={render:()=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(r,{children:(0,c.jsx)(o,{width:`narrow`,children:u(`Narrow · 760px · reading`)})}),(0,c.jsx)(r,{children:(0,c.jsx)(o,{width:`content`,children:u(`Content · 1040px · documentation`)})}),(0,c.jsx)(r,{children:(0,c.jsx)(o,{width:`wide`,children:u(`Wide · 1240px · pages`)})})]})},p={render:()=>(0,c.jsx)(r,{children:(0,c.jsxs)(a,{gap:`lg`,children:[(0,c.jsxs)(n,{columns:2,children:[u(`Two columns`),u(`Two columns`)]}),(0,c.jsxs)(n,{columns:3,children:[u(`Three columns`),u(`Three columns`),u(`Three columns`)]}),(0,c.jsxs)(n,{columns:4,gap:`sm`,children:[u(`Four`),u(`Four`),u(`Four`),u(`Four`)]})]})})},m=[`SectionTones`,`Containers`,`Grids`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <Section>
        <Stack gap="sm">
          <strong>Default section</strong>
        </Stack>
      </Section>
      <Section tone="alt">
        <strong>Alternate section (surface)</strong>
      </Section>
      <Section tone="inverse">
        <strong style={{
        color: 'var(--white)'
      }}>Inverse section (dark band)</strong>
      </Section>
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <Section>
        <Container width="narrow">{sample('Narrow · 760px · reading')}</Container>
      </Section>
      <Section>
        <Container width="content">{sample('Content · 1040px · documentation')}</Container>
      </Section>
      <Section>
        <Container width="wide">{sample('Wide · 1240px · pages')}</Container>
      </Section>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Section>
      <Stack gap="lg">
        <Grid columns={2}>{sample('Two columns')}{sample('Two columns')}</Grid>
        <Grid columns={3}>{sample('Three columns')}{sample('Three columns')}{sample('Three columns')}</Grid>
        <Grid columns={4} gap="sm">{sample('Four')}{sample('Four')}{sample('Four')}{sample('Four')}</Grid>
      </Stack>
    </Section>
}`,...p.parameters?.docs?.source}}}}))();export{f as Containers,p as Grids,d as SectionTones,m as __namedExportsOrder,l as default};