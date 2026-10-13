module.exports = ({types:t}) => ({visitor:{TemplateLiteral(path){
  if(path.parentPath.isTaggedTemplateExpression()) throw new Error('Plantilla etiquetada no prevista');
  const {quasis,expressions}=path.node;
  const first=t.stringLiteral(quasis[0].value.cooked);
  if(!expressions.length){path.replaceWith(first);return;}
  const args=[];
  expressions.forEach((expression,i)=>{args.push(expression,t.stringLiteral(quasis[i+1].value.cooked));});
  path.replaceWith(t.callExpression(t.memberExpression(first,t.identifier('concat')),args));
}}});
