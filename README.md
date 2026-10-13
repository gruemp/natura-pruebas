# Natura pruebas

Copia del catálogo con código y proyectos Apps Script separados. Hojas de productos, precios, inventario, fotografías, anuncios y demás datos se comparten con Natura original por orden del titular del 2026-10-12. Las operaciones comerciales sobre datos compartidos son reales.

Los cinco proyectos Apps Script de pruebas tienen despliegues separados. El catálogo se aloja en el lector de pruebas porque GitHub Pages no está disponible para este repositorio privado con el plan actual. Los módulos web usan exclusivamente los endpoints de pruebas; no usan los Apps Script de producción como respaldo. No hay sincronización ni promoción automática a producción.

Entrada de fuentes: catalogo.html. Configuración: config-pruebas.js. Registro de identidades: apps-script/google-projects.json. El lector utiliza la biblioteca del administrador de pruebas fijada en su versión 1. preparar-catalogo-apps-script.py integra HTML, CSS y JavaScript en apps-script/lector publico natura/Catalogo.html para su alojamiento en Apps Script. Tras modificar las fuentes, hay que regenerar ese HTML y actualizar el despliegue de pruebas.

Para regenerar: instalar las dependencias con npm install y ejecutar npm run preparar (Python 3 y Node.js). La compilación transforma las plantillas JavaScript en cadenas y concatenaciones equivalentes para evitar que HtmlService recorte URLs o código dentro de ellas. El HTML compilado conserva los enlaces de inicio del catálogo de pruebas.

Se incorporó también el cambio del original 51b9697cdfdfc8e1546d081edc049443d98f5dad: Productos!A contiene los datos operativos y B los textos y el orden de las fichas. El lector sanea esa información antes de publicarla. La compatibilidad con los encabezados actuales está incluida en catálogo, lector, administración y pedidos.

Se conservan los módulos del catálogo, administración, prospectos, analítica, carrito y folleto. Los productos, fotografías, anuncios, precios, inventario, pedidos y registros de visitas apuntan a las mismas fuentes de datos. Las operaciones sobre ellas son reales. No se activaron los workflows de producción ni se copiaron secretos.

La configuración pública y la visibilidad se almacenan en propiedades de Apps Script. Sus valores actuales se copiaron desde el administrador original a la instancia de pruebas mediante una inicialización única, sin escribir en las hojas comerciales. Esos ajustes quedan separados; no se sincronizan automáticamente. Las credenciales de servicios externos guardadas en propiedades, como Telegram, no se transfirieron; esas integraciones no están acreditadas en las copias.

La apertura con verificacion=1 desactiva el registro de visitas durante la comprobación documental de la interfaz. No se generan pedidos ni cambios de precios ficticios para validar este catálogo.

Fuente: gruemp/natura, main, commit 9afcb31d53a24073e1d68aa1f61a17c866e013a0. Se mantienen las identidades de los datos compartidos y no se modifica el repositorio original. Esta copia inicia un historial propio; no incluye la historia Git original.

