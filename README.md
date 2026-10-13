# Natura pruebas

Copia del catálogo con código y proyectos Apps Script separados. Hojas de productos, precios, inventario, fotografías, anuncios y demás datos se comparten con Natura original por orden del titular del 2026-10-12. Las operaciones comerciales sobre datos compartidos son reales.

Los cinco proyectos Apps Script de pruebas tienen despliegues separados. El repositorio es público por orden del titular del 2026-10-13. El catálogo vigente se publica mediante GitHub Pages desde main y la raíz: https://gruemp.github.io/natura-pruebas/catalogo.html . Los commits del frontend se publican automáticamente en Pages; no requieren modificar ni desplegar Apps Script. Los módulos web usan exclusivamente los endpoints de pruebas; no usan los Apps Script de producción como respaldo. No hay sincronización ni promoción automática a producción.

Entrada de fuentes: catalogo.html. Configuración: config-pruebas.js. Registro de identidades: apps-script/google-projects.json. El lector utiliza la biblioteca del administrador de pruebas fijada en su versión 1. preparar-catalogo-apps-script.py integra HTML, CSS y JavaScript en apps-script/lector publico natura/Catalogo.html para su alojamiento en Apps Script. Ese HTML conserva el alojamiento anterior en Apps Script. No se regenera ni se despliega para las mejoras visuales publicadas en GitHub Pages.

Para regenerar: instalar las dependencias con npm install y ejecutar npm run preparar (Python 3 y Node.js). La compilación transforma las plantillas JavaScript en cadenas y concatenaciones equivalentes para evitar que HtmlService recorte URLs o código dentro de ellas. El HTML compilado conserva los enlaces de inicio del catálogo de pruebas.

Se incorporó también el cambio del original 51b9697cdfdfc8e1546d081edc049443d98f5dad: Productos!A contiene los datos operativos y B los textos y el orden de las fichas. El lector sanea esa información antes de publicarla. La compatibilidad con los encabezados actuales está incluida en catálogo, lector, administración y pedidos.

Se conservan los módulos del catálogo, administración, prospectos, analítica, carrito y folleto. Los productos, fotografías, anuncios, precios, inventario, pedidos y registros de visitas apuntan a las mismas fuentes de datos. Las operaciones sobre ellas son reales. No se activaron los workflows de producción ni se copiaron secretos.

La configuración pública y la visibilidad se almacenan en propiedades de Apps Script. Sus valores actuales se copiaron desde el administrador original a la instancia de pruebas mediante una inicialización única, sin escribir en las hojas comerciales. Esos ajustes quedan separados; no se sincronizan automáticamente. Las credenciales de servicios externos guardadas en propiedades, como Telegram, no se transfirieron; esas integraciones no están acreditadas en las copias.

La apertura con verificacion=1 desactiva el registro de visitas durante la comprobación documental de la interfaz. No se generan pedidos ni cambios de precios ficticios para validar este catálogo.

Fuente: gruemp/natura, main, commit 9afcb31d53a24073e1d68aa1f61a17c866e013a0. Se mantienen las identidades de los datos compartidos y no se modifica el repositorio original. Esta copia inicia un historial propio; no incluye la historia Git original.

La tarea de mejora visual trabaja sobre los archivos web del repositorio y excluye apps-script/. Las fuentes externas solo se consultan. El enlace vigente para ver cada mejora es el de GitHub Pages; el alojamiento anterior en Apps Script conserva la versión 6 y no refleja automáticamente cambios posteriores del frontend.
