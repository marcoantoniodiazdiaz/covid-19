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
- personas `[Usuario, Doctor]`

### Mensajes
- id `number`
- envio `Usuario | Doctor`
- fechaHora `string`
- chat `Chat`

### Productos
- id `number`
- nombre `string`
- foto `string`
- precio `number`
- venta `Lugares`
- existencia `number`

## Relaciones
### Lugares
- **admin** `Usuarios`

### Chat
- **personas** `[Usuario, Doctor]`

### Mensajes
- **envio** `Usuario | Doctor`
- **chat** `Chat`

### Productos
- **venta** `Lugares`