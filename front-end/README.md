# Frontend - Gestión de Alumnos (React)

Este proyecto es una interfaz desarrollada con **React** que consume el backend de NestJS para gestionar alumnos. Permite crear, consultar e eliminar grados y crear y visualizar alumnos por grado de forma sencilla.

---

## Requisitos

- Node.js (v18.x recomendado)
- npm (v9 o superior)

---

## Instalación

1. Clona el repositorio y entra al proyecto:

```bash
git clone https://github.com/Brandon23-ai/EvaluacionNodeJs.git
cd front-end
```

2. Instala las dependencias:

```bash
npm install
```

3. Configura la URL en el archivo `api.js` (src/services/):

```env
baseURL: 'http://localhost:3000'
```

---

## Scripts disponibles

### Iniciar el servidor de desarrollo

```bash
npm run dev
```

Este comando inicia el servidor en `http://localhost:5173` (o `3000`, según tu config).

---

## Funcionalidades

- Formulario para crear, consultar y eliminar grados.
- Agregar alumnos por grado.
- Lista de alumnos consultados por grado.
- Conexión automática al backend NestJS.
- Estilos aplicados con Bootstrap.

---

## Tecnologías utilizadas

- React
- JavaScript / TypeScript
- Vite / Create React App
- Bootstrap 
- Fetch API / Axios

---

## Comunicación con el backend

Asegúrate de que el backend (NestJS) esté corriendo en la dirección especificada en tu archivo `.env`.

Por defecto: `http://localhost:3000`

---

## Autor

Desarrollado por **Brandon Morales**.  
GitHub: [@Brandon23-ai](https://github.com/Brandon23-ai)

---
