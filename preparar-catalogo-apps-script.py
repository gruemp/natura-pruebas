from pathlib import Path
import re
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
out=root/'apps-script'/'lector publico natura'/'Catalogo.html'
out.write_text(html)
print(out, len(html.encode()), 'bytes')
