from pathlib import Path
import re,json,subprocess
root=Path(__file__).resolve().parent
html=(root/'catalogo.html').read_text()
def script(match):
    name=match.group(1).split('?')[0]
    code=(root/name).read_text().replace('</script','<\\/script')
    return '<script>\n'+code+'\n</script>'
html=re.sub(r'<script\s+src="([^"]+)"\s*></script>',script,html)
html=re.sub(r'<link\s+rel="stylesheet"\s+href="catalogo.css[^\"]*"\s*/?>','<style>\n'+(root/'catalogo.css').read_text()+'\n</style>',html)
html=re.sub(r'<(?:meta|link)[^>]*(?:logo_empresa\.(?:png|webp)|rel="canonical")[^>]*>','',html)
html=html.replace('<head>','<head>\n<base target="_top">',1)
config=json.loads((root/'config-pruebas.js').read_text().split('Object.freeze(',1)[1].split(');',1)[0])
html=html.replace('href="catalogo.html"','href="'+config['catalogo']+'"')
pattern=r'<script([^>]*)>(.*?)</script>'
matches=[m for m in re.finditer(pattern,html,re.S) if 'ld+json' not in m.group(1)]
compiled=json.loads(subprocess.run(['node',str(root/'compilar-scripts-apps-script.cjs')],input=json.dumps([m.group(2) for m in matches]),text=True,capture_output=True,check=True).stdout)
for match,code in reversed(list(zip(matches,compiled))):
    html=html[:match.start()]+'<script'+match.group(1)+'>'+code.replace('</script','<\\/script')+'</script>'+html[match.end():]
out=root/'apps-script'/'lector publico natura'/'Catalogo.html'
out.write_text(html)
print(out, len(html.encode()), 'bytes')
