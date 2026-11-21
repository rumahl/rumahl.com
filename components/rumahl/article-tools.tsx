'use client';
import {useState} from 'react';
import {FileText,Link,Printer} from 'lucide-react';
import {useLang} from './language';
export function ArticleTools({markdownHref}:{markdownHref?:string}){
  const {lang}=useLang();const de=lang==='de';const [message,setMessage]=useState('');
  async function copy(){try{await navigator.clipboard.writeText(location.href);setMessage(de?'Link kopiert.':'Link copied.');}catch{setMessage(de?'Bitte kopiere die Adresse aus der Adressleiste.':'Please copy the address from your address bar.');}}
  return <div className="article-tools"><button type="button" onClick={copy}><Link size={15}/>{de?'Link kopieren':'Copy link'}</button><button type="button" onClick={()=>window.print()}><Printer size={15}/>{de?'Drucken':'Print'}</button>{markdownHref&&<a href={markdownHref} type="text/markdown"><FileText size={15}/>Markdown</a>}<span role="status">{message}</span></div>;
}
