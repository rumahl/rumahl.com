/** Array order = display order. Set enabled:false to hide a campaign. */
export type EditorialPhoto = {src:string; alt:string; width:number; height:number; position:string; mobilePosition?:string; author:string; source:string};
export type EditorialLink = {label:string; href:string};
type Base = {id:string; enabled:boolean; eyebrow:string; title:string; text:string; link:EditorialLink};
export type HomepageModule =
  | (Base & {kind:'highlights'; slides:{title:string;text:string;photo:EditorialPhoto;link?:EditorialLink}[]})
  | (Base & {kind:'story'; photo:EditorialPhoto; caption:string})
  | (Base & {kind:'spotlight'; photo:EditorialPhoto; wordmark:string; status:string})
  | (Base & {kind:'collection'; links:(EditorialLink & {text:string})[]})
  | (Base & {kind:'invitation'; secondary:EditorialLink});
// Only documented, human-made photography. See photo-sources.json and IMAGE_POLICY.md.
export const editorialPhotos = {
  hardware: {src:'/images/editorial/hardware-unsplash.jpg', alt:'A close-up of a Raspberry Pi circuit board, processor and printed logo.', width:2000,height:1400,position:'50% 50%',author:'Harrison Broadbent',source:'https://unsplash.com/photos/green-and-black-circuit-board-c3YpscwJb04'},
  network: {src:'/images/editorial/network-unsplash.jpg', alt:'A desktop Ethernet switch with connected cables and illuminated status lights.', width:2000,height:1400,position:'50% 50%',author:'User_Pascal',source:'https://unsplash.com/photos/a-network-switch-with-ethernet-cables-connected-vE5AKQRUs7c'},
  storage: {src:'/images/editorial/storage-unsplash.jpg', alt:'An opened hard disk showing the platter and read-write arm.', width:2000,height:1400,position:'50% 50%',author:'William Warby',source:'https://unsplash.com/photos/a-hard-drive-that-is-open-on-a-white-surface-NIpQvMn5RTk'},
  development: {src:'/images/editorial/development-unsplash.jpg', alt:'A laptop on a desk with source code open in an editor.', width:2000,height:1400,position:'50% 50%',author:'Jantine Doornbos',source:'https://unsplash.com/photos/black-laptop-computer-turned-on-displaying-source-code-on-table-xt9tb6oa42o'},
} satisfies Record<string,EditorialPhoto>;

// Each subject follows the surrounding content rather than alternating decoration.
export const productPhotography = {
  os: {hero: editorialPhotos.hardware, highlights: [editorialPhotos.network, editorialPhotos.hardware, editorialPhotos.development], gallery: [editorialPhotos.storage, editorialPhotos.storage, editorialPhotos.network]},
  integrations: {hero: editorialPhotos.network, highlights: [editorialPhotos.network, editorialPhotos.hardware, editorialPhotos.development], gallery: [editorialPhotos.storage, editorialPhotos.storage, editorialPhotos.network]},
  features: {hero: editorialPhotos.storage, highlights: [editorialPhotos.storage, editorialPhotos.hardware, editorialPhotos.network], gallery: [editorialPhotos.storage, editorialPhotos.development, editorialPhotos.network]},
};

const REPO_URL = 'https://github.com/rumahl/rumahl';

export const homepageModules:HomepageModule[] = [
  {id:'highlights',kind:'highlights',enabled:true,eyebrow:'OPEN INTEGRATIONS AT A GLANCE',title:'The integration model.',text:'',link:{label:'Explore integrations',href:'/integrations'},slides:[
    {title:'Connect what you already run.',text:'The integration design keeps existing services independent. Provider support and API contracts are still being developed.',photo:editorialPhotos.hardware,link:{label:'How integration works',href:'/docs/integrations'}},
    {title:'Independent service lifecycles.',text:'External or native, every service keeps its own lifecycle. Capabilities and permissions decide what is possible — not lock-in.',photo:editorialPhotos.network,link:{label:'Read the capability model',href:'/docs/integration-capabilities'}},
    {title:'Built in the open.',text:'The connector specification is being developed in public. Apache-2.0 source, transparent development and an architecture you can read end to end.',photo:editorialPhotos.development,link:{label:'Read the connector documentation',href:'/developers/connectors'}},
  ]},
  {id:'why',kind:'story',enabled:false,eyebrow:'SMALL MOMENTS. A BIGGER WORLD.',title:'For all the things\nyou call yours.',text:'The photos you come back to. The project you can’t put down. Keep your files and ideas on hardware you call your own.',link:{label:'Why rumahl',href:'/features'},photo:editorialPhotos.hardware,caption:'Your memories. Your space.'},
  {id:'open',kind:'spotlight',enabled:false,eyebrow:'BUILT IN THE OPEN',wordmark:'OPEN.',title:'An operating system\nyou can read.',text:'rumahl is open source under Apache-2.0. Explore the domain core, the platform contracts and the identity provider — then help shape what comes next.',link:{label:'Explore on GitHub',href:REPO_URL},status:'Apache-2.0 · Source available',photo:editorialPhotos.network},
  {id:'contribute',kind:'collection',enabled:false,eyebrow:'YOUR SPACE. YOUR POSSIBILITIES.',title:'What will you\nmake room for?',text:'Start with your own foundation, then help build the rest.',link:{label:'Contributing guide',href:'/legal/contributing'},links:[
    {label:'Architecture',text:'Understand the platform from the core out.',href:'/developers/architecture'},
    {label:'Documentation',text:'Guides for users, admins and app developers.',href:'/docs'},
    {label:'Community',text:'Join the discussion and report issues.',href:REPO_URL + '/issues'},
  ]},
  {id:'get-rumahl',kind:'invitation',enabled:false,eyebrow:'GOOD THINGS START AT HOME.',title:'Come on in.',text:'rumahl is taking shape. Explore the project and find your place in what comes next.',link:{label:'Discover rumahl',href:'/get-rumahl'},secondary:{label:'Build with us',href:REPO_URL}},
];
