# Formatos y campos de la base de datos

## Tablas
### User
- Id `PK int`
- FirstName `String`
- SecondName `String`
- Password `String`
- Institute `FK int`
- Email `String`
- Role `String`
- Activated `String`

### Institute
- Id `PK int`
- Name `String`
- Address `String`

### Groups
- Id `PK int`
- Name `String`
- CreateDate `String`
- CreateUser `FK int`

### GroupsDetail
- Id `PK int`
- Group `FK int`
- User `FK int`
- UserDateLogin `String`

### Assignment
- Id `PK int`
- ExpireDate `String`
- PublishDate `String`
- Points `String`
- Description `String`
- Group `FK int`