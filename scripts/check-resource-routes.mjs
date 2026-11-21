import {readFile,writeFile,unlink,readdir} from 'node:fs/promises';
import ts from 'typescript';
const generated=new URL('./.knowledge-check-generated.mjs',import.meta.url);
let devPort=Number(process.env.PORT)||3000;
try{devPort=JSON.parse(await readFile(new URL('../.vinext/dev/lock.json',import.meta.url),'utf8')).port??devPort;}catch{}
const origin='http://localhost:'+devPort;
async function legalRoutes(dir,base='/legal'){
  const routes=[];
  for(const entry of await readdir(dir,{withFileTypes:true})){
    if(entry.isDirectory())routes.push(...await legalRoutes(new URL(entry.name+'/',dir),base+'/'+entry.name));
    else if(entry.name==='page.tsx')routes.push(base);
  }
  return routes;
}
try{
  const source=await readFile(new URL('../components/rumahl/knowledge.ts',import.meta.url),'utf8');
  await writeFile(generated,ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText);
  const {docs,help}=await import(generated.href);
  const routes=['/docs','/help',...docs.map(a=>'/docs/'+a.slug),...help.map(a=>'/help/'+a.slug),...await legalRoutes(new URL('../app/legal/',import.meta.url)),'/os','/ai','/features'];
  const errors=[];
  for(let i=0;i<routes.length;i+=4)await Promise.all(routes.slice(i,i+4).map(async route=>{
    try{const result=await fetch(origin+route,{signal:AbortSignal.timeout(30000)});const body=await result.text();if(result.status!==200||body.includes('Internal Server Error')||body.includes('vite-error-overlay'))errors.push(`${route}: ${result.status}`);}
    catch(error){errors.push(`${route}: ${error.message}`);}
  }));
  for(const route of ['/docs/not-a-real-article','/help/not-a-real-article']){
    const result=await fetch(origin+route,{signal:AbortSignal.timeout(30000)});if(result.status!==404)errors.push(`${route}: expected 404, received ${result.status}`);
  }
  if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}else console.log(`PASS: ${routes.length} resource and product routes, plus both unknown-article 404 routes.`);
}finally{await unlink(generated).catch(()=>{});}
