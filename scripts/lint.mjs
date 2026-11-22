import { ESLint } from 'eslint';
import { readFile, readdir } from 'node:fs/promises';
const eslint = new ESLint(), results = await eslint.lintFiles(['**/*.{js,mjs,cjs}']);
async function inspect(folder) {
 for (const entry of await readdir(folder,{withFileTypes:true})) {
  if (entry.name.startsWith('.') || ['node_modules','_site'].includes(entry.name)) continue;
  const file=folder+'/'+entry.name;
  if(entry.isDirectory())await inspect(file);
  else if(file.endsWith('.html')){
   const html=await readFile(file,'utf8');let i=0;
   for(const match of html.matchAll(/<script\b(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/gi)) if(!/application\/(?:ld\+)?json/.test(match[1]))results.push(...await eslint.lintText(match[2],{filePath:'scripts/inline-'+i+++'-'+entry.name+'.js'}));
  }
 }
}
await inspect('.');const formatter=await eslint.loadFormatter('stylish');const text=formatter.format(results);if(text)console.log(text);if(results.some(result=>result.errorCount))process.exitCode=1;
