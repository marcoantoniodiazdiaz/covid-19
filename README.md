# COVID-19
## Descripción
Este proyecto va a dirigido al ámbito de las Tecnologías de la Información en la cual se tendrá un registro de los lugares donde exista la producción y/o distribución de productos de higiene básica, así como de materiales necesarios para hacer frente a la contingencia (mascarillas, gel antibacterial, cubre bocas, etc.). Este sistema contara con la posibilidad de realizar diagnósticos de forma remota. 
El proyecto consta de 3 secciones fundamentales:
- Aplicación Web (Angular): Esta aplicación podrá ser accedida desde cualquier navegador de internet donde podrán visualizar un mapa en tiempo real con todos los lugares posibles para recoger medicamentos o materiales antes mencionados.
- Servidor (NodeJS): El servidor se encargará de gestionar la información como la base de datos, la API REST y la seguridad e integridad de los datos.
- Aplicación Móvil (Android y iOS): En esta aplicación también será posible visualizar el mapa en tiempo real y todas las características de la aplicación web. Pero además la aplicación móvil tendrá un apartado donde se podrá ver la información actualizada del COVID-19 en México. La comunidad doctores o especialistas podrán registrarse en la plataforma y brindar diagnostico a través de un chat privado, así como los centros tendrán un chat con los centros de distribución para verificar si cuentan con el medicamento que se requiere.
La aplicación también será capaz de lanzar notificaciones push con información relevante para la población.
## Eje al que corresponde
Salud
## Solución que se busca dar ante la contingencia covid-19
Que la población tenga acceso a una atención medica tanto gratuita como privada con la finalidad de evitar salir de casa, esto reducirá el riesgo de contagio por salir al exterior o visitar una institución de salud, esta característica permitirá también la optimización de recursos como el tiempo y transporte.

Así mismo se podrá consultar recibir un medicamento adecuado del lugar más cercano. Ofrecerá información oficial verídica del COVID-19, esto para evitar des información de la población y mantenerlos al día.

Y por otra parte agilizara la entrega de medicamentos teniendo un chat privado con cada uno de los centros de distribución para ver si el medicamento esta en existencia o en cual se puede encontrar, esto evitaría una salida al exterior innecesaria.
## Descripción de recursos requeridos para la implementación 
Para implementar todas las aplicaciones se quiere lo siguiente:
1.	Contratación en HEROKU para poder desplegar el servidor.
2.	Ampliar el espacio de almacenamiento de MongoDB conectado AWS (Amazon Web Services).
3.	En caso de superar el espacio y peticiones gratuitas de Cloudinary para subir imágenes, se requeriría un plan de pago adicional.
4.	Alquilar o comprar un nombre de dominio para la aplicación web.
5.	En caso de existir un tráfico excesivo de uso de MapBox se requerirá comprar un plan de pago para ampliar las peticiones.
## Proceso de implementación y tiempo requerido
Para implementar todos los servicios primero se realizarían bocetos de las aplicaciones, ya sean las móviles y la web. El equipo encargado del backend comenzaría a contratar los servicios antes mencionados, documentar la base de datos y después comenzar a desarrollarla.

En paralelo el equipo de frontend después de terminar el diseño de la aplicación comenzara con la fase de programación del diseño.

Cuando el equipo de backend tenga lista la API, se procederá a conectar las aplicaciones a la API.


