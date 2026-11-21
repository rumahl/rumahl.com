'use client';
import {Tabs,TabsList,TabsTrigger,TabsContent} from '@/components/ui/tabs';
import Link from 'next/link';
import {ArrowRight,House,ShieldCheck,Folder,Layers,Network,Cable,Server,Cloud,LockKeyhole} from 'lucide-react';
import type {ProductKey} from './catalog';
import styles from './product-explorer.module.css';
import {editorialPhotos} from '@/content/homepage';
const explorationPhotos = {
  local: editorialPhotos.hardware,
  vpn: editorialPhotos.network,
  updates: editorialPhotos.development,
  connected: editorialPhotos.network,
  enhanced: editorialPhotos.hardware,
  native: editorialPhotos.hardware,
  files: editorialPhotos.storage,
  apps: editorialPhotos.development,
  connection: editorialPhotos.network,
};
const explorations = {
  os: {title:'Local operation and remote access',intro:'Choose a connection to see how it fits around your local system.',items:[
    {id:'local',label:'At home',icon:House,title:'Local platform',text:'Your files, apps and core system live on your own hardware. Authenticated access uses local accounts; local operation does not require a central account.',facts:['Runs on your own hardware','Local account authentication','Internet is not required locally'],href:'/developers/architecture',cta:'Understand the foundation',note:'LOCAL FOUNDATION'},
    {id:'vpn',label:'Your own VPN',icon:Network,title:'Access through your own VPN',text:'Connect to your home network through a VPN you manage. Remote access adds a way in; the local system remains the foundation.',facts:['You manage the VPN','Your system stays at home','An internet connection is needed when away'],href:'/help/remote-access',cta:'Explore remote access',note:'OPTIONAL CONNECTION'},
    {id:'updates',label:'Updates',icon:ShieldCheck,title:'System update development',text:'The image separates system and data volumes. Signed updates, A/B activation and rollback policy remain development milestones; they are not a finished automatic update service.',facts:['Separate system and data volumes','A/B activation in development','Release acceptance required'],href:'/docs/security-model',cta:'Read the security model',note:'PLATFORM'},
  ]},
  integrations: {title:'Integration levels',intro:'Choose how a service becomes part of rumahl — without giving up its independence.',items:[
    {id:'connected',label:'Connected',icon:Cloud,title:'Start with what you already run.',text:'The Connected level is intended to link an existing service through its API or URL. Check the implementation status before configuring a provider.',facts:['No installation on the other system','Uses the service API or URL','The original app remains available'],href:'/docs/external-integrations',cta:'Connect an existing service',note:'CONNECTED'},
    {id:'enhanced',label:'Enhanced',icon:Cable,title:'Optional connector capabilities',text:'The Enhanced level proposes additional capabilities through a connector. Snapshots, health and update information depend on the specific provider implementation.',facts:['Connector contract in development','Scoped credentials and capabilities','Service keeps its own lifecycle'],href:'/developers/connectors',cta:'Read the connector docs',note:'ENHANCED'},
    {id:'native',label:'Native',icon:Server,title:'Managed installation design',text:'The native model lets rumahl install and manage a supported system. Maintained builds are planned to track upstream changes on GitHub and update automatically.',facts:['Planned managed installation','Visible upstream changes on GitHub','Rollback target'],href:'/docs/native-integrations',cta:'How native builds work',note:'NATIVE'},
  ]},
  features: {title:'Apps, files and permissions',intro:'Read the platform mechanisms and their current boundaries.',items:[
    {id:'files',label:'Files',icon:Folder,title:'File provider model',text:'The file-provider design aims to expose local and external storage through common contracts. NAS and cloud provider support is still being developed.',facts:['Local, NAS and cloud providers','Original storage systems stay intact','One native Files experience'],href:'/developers/connectors',cta:'Read the provider model',note:'ORGANISE'},
    {id:'apps',label:'Apps',icon:Layers,title:'Open to build on.',text:'Apps, connectors and providers live in public GitHub repositories. Install what you need and contribute your own integration.',facts:['Apps and connectors in the open','Public connector specification','Community providers welcome'],href:'https://github.com/rumahl/apps',cta:'Browse apps on GitHub',note:'EXTEND'},
    {id:'connection',label:'Capabilities',icon:LockKeyhole,title:'What a service can do is explicit.',text:'The proposed integration namespaces include storage.snapshots.create and system.health.read. An available capability still requires an explicit permission grant.',facts:['Installation level is not permission','Per-service scopes','Revocable at any time'],href:'/docs/integration-capabilities',cta:'Understand capabilities',note:'CONTROL'},
  ]},
};
export function ProductExplorer({product}:{product:ProductKey}) {
  const data=explorations[product];
  return <section id="explore" className={styles.explorer} data-editorial-motion>
    <header data-editorial-reveal><span className={styles.eyebrow}>A CLOSER LOOK</span><h2>{data.title}</h2><p>{data.intro}</p></header>
    <Tabs defaultValue={data.items[0].id} className={styles.tabs}>
      <TabsList className={styles.tabList} aria-label={'Explore '+product}>{data.items.map(item=><TabsTrigger className={styles.tab} key={item.id} value={item.id}>{item.label}</TabsTrigger>)}</TabsList>
      {data.items.map((item)=>{const photo=explorationPhotos[item.id as keyof typeof explorationPhotos]; return <TabsContent className={styles.panel} key={item.id} value={item.id}><div className={styles.panelIdentity}><img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy"/><div className={styles.imageLabel}><item.icon size={30} strokeWidth={1.5}/><span>{item.note}</span></div><a className={styles.credit} href={photo.source} target="_blank" rel="noreferrer">{photo.author} / Unsplash</a></div><div className={styles.panelCopy}><h3>{item.title}</h3><p>{item.text}</p><ul>{item.facts.map((fact,i)=><li key={fact}><span>0{i+1}</span>{fact}</li>)}</ul><Link href={item.href}>{item.cta}<ArrowRight size={18}/></Link></div></TabsContent>})}
    </Tabs>
  </section>;
}
