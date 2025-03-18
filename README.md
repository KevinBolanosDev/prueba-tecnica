# Proyecto prueba tecnica

* ## Contenido
- [Introducción](#introducción)
- [Tecnologías](#tecnologías)
- [Intalación:](#instalación)
  -  [frontend](https://github.com/KevinBolanosDev/prueba-tecnica/tree/main/frontend)
  -  [backend](https://github.com/KevinBolanosDev/prueba-tecnica/tree/main/backend)
- [Estructura](#estructura-del-proyecto)
- [Despliegue](#despliegue-de-la-aplicación)

## Introducción

A continuación les presento como fue desarrollado este proyecto sobre la gestión para venta de productos <br> 
en donde los usuarios tienen descuentos especiales, el objetivo es mostrar una tabla con los registros de los <br>
productos, con su categoría, descripción, precios y los usuarios que tienen precios especiales en el momento.

## Tecnologías

Las tecnologías que se usaron en este proyecto, porque elegí este stack, por las bases que he adquirido en las <br>
últimas formaciones, para el frontend utilice el lenguaje de Javascript por no se tan fuertemente tipado, <br> 
hace un poco más entendible la lógica, React para armar componentes rapidamente, y TailwindCss por su flexibilidad <br>
a la hora de estilizar, es muy abierto a la hora de generar estilos desde los mismos componentes de React.

Posteriormente para desarrollar el backend, use el lenguaje de Javascript, lo cual Nodejs lo trae por defecto, <br>
express para crear servidores más rápido, utilizando un patrón de diseño MVC para desarrollar la api.

* **Cliente:** Javascript, React-vite, TailwindCSS

* **Servidor:** Javascript, Nodejs, Express.

* **Base de datos:** Mondodb.

## Estructura del proyecto

**Backend**
```plaintext
backend/
│── src/
│   ├── controllers/    # Lógica del negocio
│   ├── database/       # Configuración y conexión a la base de datos
│   ├── models/         # Modelo que representa a la base de datos
│   ├── routes/         # Rutas crud que ejecuta de los controladores
│   ├── schema/         # Esquema que estructura la base de datos
│   ├── app.js          # Configuración de la app principal
│   ├── config.js       # Configuraciones globales
|   ├── index.js        # Donde se ejecuta el servidor
│── .gitignore          # Lista de archivos y carpetas que Git debe ignorar
│── .env                # Archivo para guardar variables de entorno sensibles
│── package.json        # Configuración del proyecto y listado de dependencias
│── package-lock.json   # Archivo que bloquea las versiones exactas de las dependencias instaladas
│── README.md           # Documentación del proyecto
```

**Frontend**
```plaintext
frontend/
|── public/              # Carpeta para archivos estáticos
│── src/                 # Contiene el código fuente del proyecto
│   ├── api/             # Carpeta donde se manejan las peticiones al backend
|       |── api.js
|       |── axios.js     
│   ├── assets/          # Archivos estáticos utilizados en la app
│   ├── components/      # Contiene los componentes reutilizables de la aplicación
|       |── Articles.jsx
|       |── FormAdd.jsx
|       |── Home.jsx
|       |── NavBar.jsx            
│   ├── App.css         # Estilos específicos de la aplicación
│   ├── App.jsx         # Componente principal que renderiza la aplicación
│   ├── index.css       # Estilos globales de la aplicación
|   ├── main.jsx        # Archivo donde se monta React en el DOM y se inicia la app
│── .gitignore          # Lista de archivos y carpetas que Git debe ignorar
│── .env                # Archivo para guardar variables de entorno sensibles
│── eslint.config.js    # ayuda a mantener un código limpio
│── index.html          # Archivo HTML principal donde React se monta
│── package.json        # Configuración del proyecto y listado de dependencias
│── package-lock.json   # Archivo que bloquea las versiones exactas de las dependencias instaladas
│── README.md           # Documentación del proyecto
│── vite.config.js      # Configuración de Vite para optimizar el desarrollo y compilación
```

## Despliegue de la aplicación

Hemos realizado el deploy por medio de dos plataformas, el `frontend` lo subimos por medio de la platafforma **Netlify** <br>
y el `backend` lo hemos subido por medio de la plataforma **Railway**.

* A continuación los links:

- Frontend URL: [Frontend](https://prueba-tecnica-react-js.netlify.app/)
- Backend URL: [Backend](https://prueba-tecnica-production-46eb.up.railway.app/api/products)
