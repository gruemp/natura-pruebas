// Inicialización única de ajustes de la copia; no modifica hojas comerciales.
function inicializarPruebas(){
 if(ScriptApp.getScriptId()!=="10UzprixP4Dw860DJrvTJ1asRYOuETK3bteDl0kwuU6Y-AU-yiDh41gfM")throw new Error("Proyecto de pruebas incorrecto");
 const datos={
  "CATALOGO_CONFIG_ADMIN_NO_MOSTRAR_OCULTOS": "DESACTIVADO",
  "CATALOGO_CONFIG_ADMIN_VER_PRODUCTOS_SIN_PRECIO": "DESACTIVADO",
  "CATALOGO_CONFIG_MIGRADA_V1": "ok",
  "CATALOGO_CONFIG_MOSTRAR_CANTIDAD_STOCK": "DESACTIVADO",
  "CATALOGO_CONFIG_MOSTRAR_FOLLETO": "ACTIVADO",
  "CATALOGO_CONFIG_MOSTRAR_PRECIOS_PRODUCTO": "ACTIVADO",
  "CATALOGO_CONFIG_MOSTRAR_SPRE": "DESACTIVADO",
  "CATALOGO_CONFIG_ORDEN_NAVEGACION": "!section,category,subcategory,public,!line,product",
  "CATALOGO_CONFIG_ORDEN_PRODUCTOS": "price_asc",
  "CATALOGO_CONFIG_PUBLIC_REVISION_V1": "2026-10-07T23:00:14.772Z",
  "CATALOGO_CONFIG_PUBLIC_SNAPSHOT_V1": "[\"DESACTIVADO\",\"DESACTIVADO\",\"ACTIVADO\",\"!section,category,subcategory,public,!line,product\",\"price_asc\"]",
  "CATALOGO_CONFIG_REGISTRAR_VISITAS_PROPIAS": "DESACTIVADO",
  "CATALOGO_VISIBILIDAD_REGLAS_V1": "{\"version\":1,\"reglas\":[{\"tipo\":\"producto\",\"identificador\":\"0418\",\"oculto\":false,\"etiqueta\":\"NATURA LUMINA BRILLO Y PROTECCIÓN DEL COLOR KIT SHAMPOO 300 ML ACONDICIONADOR 300 ML X2\"},{\"tipo\":\"categoria\",\"identificador\":\"belleza y cuidado|cabello\",\"oculto\":false,\"etiqueta\":\"Cabello\"},{\"tipo\":\"categoria\",\"identificador\":\"otros productos|medicamentos\",\"oculto\":true,\"etiqueta\":\"Medicamentos\"},{\"tipo\":\"seccion\",\"identificador\":\"otros productos\",\"oculto\":true,\"etiqueta\":\"Otros productos\"}]}"
};
 const props=PropertiesService.getScriptProperties();
 if(props.getProperty("PRUEBAS_INICIALIZADAS_V1")==="ok")return;
 props.setProperties(datos,false);
 for(const key of Object.keys(datos))if(props.getProperty(key)!==datos[key])throw new Error("No se confirmó "+key);
 props.setProperty("PRUEBAS_INICIALIZADAS_V1","ok");
 console.log("Ajustes iniciales copiados; hojas comerciales sin cambios.");
}
