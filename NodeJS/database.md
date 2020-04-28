# Formatos y campos de la base de datos

## Tablas
### Usuarios
- id `number`
- nombre `string`
- fechaNac `string`
- ingreso `string`
- activado `boolean`
- foto `string`
- email `string`
- password `string`

### Doctores
- id `number`
- nombre `string`
- fechaNac `string`
- ingreso `string`
- activado `boolean`
- foto `string`
- email `string`
- descripcion `string`
- password `string`

### Lugares
- id `number`
- direccionEscrita `string`
- abre `string`
- cierra `string`
- lat `string`
- lng `string`
- admin `Usuarios`
- password `string`

### Chat
- id
- mensajes []

### Productos
- id `number`
- nombre `string`
- foto `string`
- precio `number`
- venta `Lugares`
- existencia `number`
