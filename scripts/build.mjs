import { cp, mkdir } from 'node:fs/promises';
import { versionAssets } from './version-assets.mjs';
const out=process.env.OUT_DIR||'_site';await mkdir(out,{recursive:true});
for(const name of ['index.html','contact.js','favicon.png','assets','bubble','rebirth','zygzakowice','hatchlist'])await cp(name,out+'/'+name,{recursive:true,filter:source=>!source.endsWith('.test.mjs')&&!source.endsWith('README.md')&&!source.endsWith('card.html')});
await versionAssets(out);
