import{i as e}from"./preload-helper-Cs4UwXAW.js";import{t}from"./iframe-CMsHJqmJ.js";import{_ as n,d as r,f as i,p as a,r as o,u as s,y as c}from"./data-jk7lejyQ.js";import{t as l}from"./rwds-DZofpew-.js";var u,d,f,p,m;e((()=>{l(),u=t(),d={title:`RWDS/Foundations`,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`Tokens that every RWDS component reads: colour roles, the type scale and motion. Components never hard-code these values.`}}}},f={render:()=>(0,u.jsx)(i,{children:(0,u.jsx)(s,{children:(0,u.jsxs)(a,{gap:`lg`,children:[(0,u.jsx)(n,{level:2,size:`lg`,children:`Colour roles`}),(0,u.jsx)(r,{columns:4,gap:`sm`,children:[`--accent`,`--accent-secondary`,`--background`,`--surface`,`--surface-glass`,`--foreground`,`--foreground-muted`,`--border`].map(e=>(0,u.jsx)(o,{token:e},e))}),(0,u.jsx)(c,{children:`Switch the Appearance toolbar to compare light and dark values of the same roles.`})]})})})},p={render:()=>(0,u.jsx)(i,{children:(0,u.jsx)(s,{children:(0,u.jsxs)(a,{gap:`lg`,children:[(0,u.jsx)(n,{level:2,size:`lg`,children:`Motion`}),(0,u.jsxs)(r,{columns:3,children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(n,{level:3,size:`md`,children:`State · 0.2s`}),(0,u.jsx)(c,{children:`Colour, border and background changes.`})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(n,{level:3,size:`md`,children:`Surface · 0.35s`}),(0,u.jsx)(c,{children:`Panels and menus fade or slide in.`})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(n,{level:3,size:`md`,children:`Reveal · up to 0.7s`}),(0,u.jsx)(c,{children:`Editorial reveals never delay reading. Reduced motion removes them.`})]})]})]})})})},m=[`Colour`,`Motion`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Section>
      <Container>
        <Stack gap="lg">
          <Heading level={2} size="lg">Colour roles</Heading>
          <Grid columns={4} gap="sm">
            {['--accent', '--accent-secondary', '--background', '--surface', '--surface-glass', '--foreground', '--foreground-muted', '--border'].map(token => <Swatch key={token} token={token} />)}
          </Grid>
          <Text>Switch the Appearance toolbar to compare light and dark values of the same roles.</Text>
        </Stack>
      </Container>
    </Section>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Section>
      <Container>
        <Stack gap="lg">
          <Heading level={2} size="lg">Motion</Heading>
          <Grid columns={3}>
            <div><Heading level={3} size="md">State · 0.2s</Heading><Text>Colour, border and background changes.</Text></div>
            <div><Heading level={3} size="md">Surface · 0.35s</Heading><Text>Panels and menus fade or slide in.</Text></div>
            <div><Heading level={3} size="md">Reveal · up to 0.7s</Heading><Text>Editorial reveals never delay reading. Reduced motion removes them.</Text></div>
          </Grid>
        </Stack>
      </Container>
    </Section>
}`,...p.parameters?.docs?.source}}}}))();export{f as Colour,p as Motion,m as __namedExportsOrder,d as default};