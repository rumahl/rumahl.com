'use client';

import {Children,cloneElement,isValidElement,useEffect,useId,useRef,useState,type ReactNode} from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import {Check,Copy,Link as LinkIcon} from 'lucide-react';

export function RichCode({language='text',children}:{language?:string;children:ReactNode}) {
  const code=useRef<HTMLElement>(null);
  const [status,setStatus]=useState('');
  async function copy(){
    try {await navigator.clipboard.writeText(code.current?.textContent||'');setStatus('Copied');}
    catch {setStatus('Copy unavailable — select the code below.');}
  }
  return <figure className="rich-code"><figcaption><span>{language}</span><button type="button" onClick={copy}>{status==='Copied'?<Check size={16}/>:<Copy size={16}/>} Copy</button></figcaption><pre tabIndex={0}><code ref={code}>{children}</code></pre><span className="rich-copy-status" role="status">{status}</span></figure>;
}

function textOf(node:ReactNode):string {
  return Children.toArray(node).map(child=>typeof child==='string'||typeof child==='number'?String(child):isValidElement<{children?:ReactNode}>(child)?textOf(child.props.children):'').join('');
}

export function RichMarkdown({children,inline=false,prefix}:{children:string;inline?:boolean;prefix?:string}) {
  const unique=useId();
  const base=prefix||`md-${unique.replace(/[^a-zA-Z0-9]/g,'')}`;
  const counts=new Map<string,number>();
  const rootRef=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if(inline)return;
    const root=rootRef.current;
    if(!root)return;
    const boxes=Array.from(root.querySelectorAll<HTMLInputElement>('li.task-list-item input[type=checkbox]'));
    const bound=boxes.map((box,index)=>{
      const key=`rumahl-task-${base}-${index}`;
      box.disabled=false;
      try{const saved=window.localStorage.getItem(key);if(saved!==null)box.checked=saved==='1';}catch{/* ignore */}
      const handler=()=>{try{window.localStorage.setItem(key,box.checked?'1':'0');}catch{/* ignore */}};
      box.addEventListener('change',handler);
      return {box,handler};
    });
    return ()=>bound.forEach(({box,handler})=>box.removeEventListener('change',handler));
  },[base,children,inline]);
  function heading(level:2|3|4|5|6,content:ReactNode){
    const slug=textOf(content).toLowerCase().replace(/[^\p{L}\p{N}]+/gu,'-').replace(/^-|-$/g,'')||'heading';
    const count=counts.get(slug)||0;counts.set(slug,count+1);
    const id=`${base}-${slug}${count?`-${count}`:''}`;
    const Tag=`h${level}` as 'h2';
    return <Tag id={id}>{content}<a className="rich-anchor" href={`#${id}`} aria-label={`Link to ${textOf(content)}`}><LinkIcon size={16}/></a></Tag>;
  }
  const content=<Markdown allowedElements={inline?['p','a','strong','em','del','code','br','sup']:undefined} unwrapDisallowed={inline} remarkPlugins={[remarkGfm]} rehypePlugins={[[rehypeHighlight,{detect:false,ignoreMissing:true}]]} remarkRehypeOptions={{clobberPrefix:base+'-'}} skipHtml components={{
    p:({children})=>inline?<>{children}</>:<p>{children}</p>,
    h1:({children})=>heading(2,children),h2:({children,id})=>id?<h2 id={id}>{children}</h2>:heading(2,children),h3:({children})=>heading(3,children),h4:({children})=>heading(4,children),h5:({children})=>heading(5,children),h6:({children})=>heading(6,children),
    pre:({children})=>{const child=Children.toArray(children)[0];if(isValidElement<{className?:string;children?:ReactNode}>(child))return <RichCode language={/language-([^\s]+)/.exec(child.props.className||'')?.[1]}>{child.props.children}</RichCode>;return <pre>{children}</pre>;},
    table:({children})=><div className="rich-table" tabIndex={0} role="region" aria-label="Table"><table>{children}</table></div>,
    img:({src,alt,title})=><img src={src} alt={alt||''} title={title} loading="lazy"/>,
    blockquote:({children})=>{const value=textOf(children);const match=/^\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/.exec(value);return <blockquote className={match?'rich-callout':undefined} data-tone={match?.[1].toLowerCase()}>{match&&<strong className="rich-callout-label">{match[1]}</strong>}{match?Children.map(children,child=>isValidElement<{children?:ReactNode}>(child)?cloneElement(child,{},Children.map(child.props.children,(part,index)=>index===0&&typeof part==='string'?part.replace(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/,''):part)):child):children}</blockquote>;},
  }}>{children}</Markdown>;
  return inline?<span className="rich-inline">{content}</span>:<div ref={rootRef} className="rich-markdown">{content}</div>;
}

export function MarkdownCode({language,content}:{language:string;content:string}) {
  const fence="`".repeat(Math.max(3,...Array.from(content.matchAll(/`+/g),m=>m[0].length+1)));
  return <RichMarkdown>{fence+language+"\n"+content+"\n"+fence}</RichMarkdown>;
}
