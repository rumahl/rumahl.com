import assert from 'node:assert/strict';
import {readFile,writeFile,unlink} from 'node:fs/promises';
import ts from 'typescript';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';

// Exercise the actual renderer without requiring a browser or a test framework.
const compiled=new URL('./.markdown-test-generated.mjs',import.meta.url);
try {
  const source=await readFile(new URL('../components/rumahl/rich-markdown.tsx',import.meta.url),'utf8');
  await writeFile(compiled,ts.transpileModule(source,{compilerOptions:{jsx:ts.JsxEmit.ReactJSX,module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText);
  const {RichMarkdown,MarkdownCode}=await import(compiled.href);
  const render=(text,prefix='test')=>renderToStaticMarkup(React.createElement(RichMarkdown,{prefix},text));
  const html=render('## Same\n\n## Same\n\n**Bold** and *italic* and ~~old~~.\n\n- [x] Done\n- [ ] Next\n\n| Key | Value |\n| --- | --- |\n| A | B |\n\nA note[^1].\n\n[^1]: Footnote.');
  for(const fragment of ['id="test-same"','id="test-same-1"','<strong>Bold</strong>','<em>italic</em>','<del>old</del>','type="checkbox"','checked=""','<table>','<td>A</td>','data-footnotes'])assert.ok(html.includes(fragment),fragment);
  for(const [,href] of html.matchAll(/href="#([^"]+)"/g))assert.ok(html.includes(`id="${href}"`),`Unresolved fragment: ${href}`);
  const note=render('> [!WARNING]\n> Keep **this**.\n>\n> - One\n> - Two');
  assert.ok(note.includes('data-tone="warning"'));assert.ok(note.includes('<strong>this</strong>'));assert.ok(note.includes('<ul>'));assert.ok(!note.includes('[!WARNING]'));
  const code=renderToStaticMarkup(React.createElement(MarkdownCode,{language:'json',content:'{"name": "<script>"}'}));
  assert.ok(code.includes('hljs-'));assert.ok(code.includes('&lt;script&gt;'));assert.ok(code.includes('Copy'));
  const safe=render('[bad](javascript:alert%281%29)\n\n<script>alert(1)</script>\n\n![Image](https://example.com/image.jpg)');
  assert.ok(!safe.includes('href="javascript:'));assert.ok(!safe.includes('<script>'));assert.ok(safe.includes('alt="Image"'));
  const other=render('Note[^1].\n\n[^1]: Another.','other');
  assert.ok(other.includes('other-fn-1'));assert.ok(!other.includes('test-fn-1'));
  console.log('PASS: Markdown formatting, unique anchors, footnotes, tables, task lists, callouts, syntax highlighting and safe HTML handling.');
} finally {await unlink(compiled).catch(()=>{});}
