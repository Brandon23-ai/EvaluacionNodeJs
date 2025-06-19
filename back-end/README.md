# Back-end - Gestión de Alumnos (NestJS + MySQL)

Este proyecto es un backend desarrollado con **NestJS** y **TypeORM**, que permite la creación y consulta de alumnos por grado, creacion, consulta y eliminacion de grados. Se conecta a una base de datos **MySQL** para poder guardar cada registro. Se trabajo intentando implementar código de la manera mas limpia posible y con buenas practicas.

---

## Requisitos

- Node.js (v18.x recomendado)
- MySQL (con base de datos creada previamente)
- npm (v9 o superior)
- Postman (para probar endpoints)

---

## Instalación

1. Clona el repositorio y entra al proyecto:

```
git clone https://github.com/Brandon23-ai/EvaluacionNodeJs.git
cd back-end
```

2. Instala las dependencias:

```
npm install
```

3. Modifica el archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=tu_contrasenia <--- Aseurate de poner tu contrase;a para el usuario ROOT
DB_NAME=alumnos_db
API_KEY=123456
```

> Asegúrate de que la base de datos `alumnos_db` exista en tu servidor MySQL antes de correr el proyecto.

---

## Estructura del proyecto

```
src/
├── alumno/
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── entity/
│   ├── dto/
│   └── mapper/
├── config/
│   └── typeorm.config.ts
├── app.module.ts
└── main.ts
```

---

## Scripts disponibles

### Desarrollo

```
npm run start:dev
```

Con este comando ejecutas el programa desde una terminal ubicada en back-end .

---

## Alguno de los endpoints disponibles

### Crear un grado

- **POST** `/grado/crear`

```json
{
  "nombre": "Juan Pérez",
}
```

### Crear un alumno

- **POST** `/alumno/crear`

```json
{
  "nombre": "Juan Pérez",
  "fechaNacimiento": "2005-10-12",
  "nombrePadre": "Carlos Pérez",
  "nombreMadre": "Ana Gómez",
  "gradoId": "1",
  "seccion": "A",
  "fechaIngreso": "2022-01-15"
}
```

---

### Consultar alumnos por gradoId

- **GET** `/alumno/grado/id/`

Ejemplo:
```
GET /alumno/grado/id/1
```

---

## Test de conexión

Para verificar que estás conectado correctamente a la base de datos, revisa la consola cuando el servidor arranca. Deberías ver algo como:

```
 DB config: {
  host: 'localhost',
  port: '3306',
  username: 'root',
  ...
}
```

---

## Seguridad

- Autenticación: API Key
- Validación: Uso de DTOs y clases validadoras

---

## Herramientas utilizadas

- NestJS
- TypeORM
- MySQL
- Swagger
- dotenv

---




