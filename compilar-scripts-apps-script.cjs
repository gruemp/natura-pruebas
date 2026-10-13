// Convierte plantillas JavaScript en cadenas compatibles con el procesamiento HTML de Apps Script.
const fs = require('fs');
let transform;
try { transform = require('@babel/core').transformAsync; }
catch { const bundled=require('/opt/codex/runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/lib/transform/babelBundle.js'); transform=(source)=>bundled.babelTransform(source,require('path').join(__dirname,'catalogo.js'),true,[[require('path').join(__dirname,'plantillas-apps-script.cjs'),{}]],[]); }
const plugin = ({types:t}) => ({visitor:{TemplateLiteral(path){
  if(path.parentPath.isTaggedTemplateExpression()) throw new Error('Plantilla etiquetada no prevista');
  const {quasis,expressions}=path.node;
  const first=t.stringLiteral(quasis[0].value.cooked);
  if(!expressions.length){path.replaceWith(first);return;}
  const args=[];
  expressions.forEach((expression,i)=>{args.push(expression,t.stringLiteral(quasis[i+1].value.cooked));});
  path.replaceWith(t.callExpression(t.memberExpression(first,t.identifier('concat')),args));
}}});
(async()=>{
 const scripts=JSON.parse(fs.readFileSync(0,'utf8'));
 const results=[];
 for(const source of scripts){const result=await transform(source,{configFile:false,babelrc:false,comments:false,plugins:[plugin],compact:false});results.push(result.code.replace(/\n\/\/# sourceMappingURL=data:[^\n]+/g,''));}
 process.stdout.write(JSON.stringify(results));
})().catch(error=>{process.stderr.write(String(error.stack));process.exitCode=1;});
