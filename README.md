# Proyecto prueba tecnica

* ## Contenido
- [Introducción](#introducción)
- [Tecnologías](#tecnologías)
- [Intalación](#instalación)
  -  [frontend](#frontend)
  -  [backend](#backend)
- [Estructura](#estructura-del-proyecto)

## Introducción

A continuación les presento como fue desarrollado este proyecto sobre la gestión para venta de productos <br> 
y usuarios que tienen descuentos especiales, eventualmente se mostrará una tabla con los registros de los <br>
productos, con su categoría, descripción, precios y usuarios que tienen precios especiales.

## Tecnologías

* **Cliente:** Javascript, React-vite, TailwindCSS

* **Servidor:** Javascript, Nodejs, Express.

* **Base de datos:** Mondodb.

## Estructura del proyecto

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
│── .gitignore          # para especificar qué archivos se ignoran
│── .env                # Variables de entorno
│── package.json        # Configuración de dependencias
│── package-lock.json   # Configuraciones generales
│── README.md           # Documentación del proyecto
```
