# Creación del proyecto para el Backend.

## Instalación y Ejecución

Empezamos creando una carpeta con el nombre `backend` donde se desarrollara la api.

* Con el comando `"npm init -y"` ejecutamos el package.json, donde se instalan las dependencias, luego se ejecuta el <br> `"npm install"` más las dependecias requeridas.

```bash
  $ npm init -y
  $ npm install
```

* Las dependencias instaladas y usadas son las siguientes.

```package.json
  "cors": "^2.8.5",
  "dotenv": "^16.4.7",
  "express": "^4.21.2",
  "mongoose": "^8.12.1",
  "morgan": "^1.10.0",
  "nodemon": "^3.1.9",
  "zod": "^3.24.2"
```
Para que mas adelante se ejecute correctamente el servidor, vamos a modificar el `package.json`.

* Agregamos en la parte de `"scripts"` los siguientes comandos de ejecución `"dev": "nodemon src/index.js"` y `"start": "node src/index.js"` como se ve en el ejemplo a continuación.

```package.json
{
  "name": "backend",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon src/index.js",
    "start": "node src/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module",
  "description": "Project-technical-test",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "mongoose": "^8.12.1",
    "morgan": "^1.10.0",
    "nodemon": "^3.1.9",
    "zod": "^3.24.2"
  }
}
```
* Creamos un archivo `app.js` donde ejecutará la aplicación principal.

```javascript
  import express from "express";
  import "dotenv/config"

  const app = express();

  export default app;
```

* A continuación se crea un archivo `index.js` para levantar el servidor localmente.

```javascript
  import app from './app.js';
  import { PORT } from './config.js';

  connectDB();

  app.listen(PORT, () => {
      console.log(`server is running on port http://localhost:${PORT}/api/products`);
  });
```

**Tener en cuenta:** Se debe crear un archivo `.env` para guardar las variables de entorno. y no exponer la seguridad.

* Vamos a crear un `config.js` donde se adapta a diferentes entornos, como desarrollo, pruebas y producción, y ejecutamos <br> las variables de entorno.

```javascript
export const PORT = process.env.PORT || 4000;
```

Con esta configuración tenemos el servidor terminado y listo para ejecutar.

* Para correr este servidor con el siguiente comando `"npm run dev"`.

```javascript
$ npm run dev
```

Por último vamos a hacer la conexión con la base de datos, en este caso con **Mongodb**.
* Empezamos creando la carpeta `database` y dentro creamos un archivo `db.js`.

```javascript
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI_LOCAL);
    console.log(">>> DB is connected");
  } catch (error) {
    console.log("Something went wrong!");
    console.log(error);
  }
};
```

De esta forma hacemos la conexión y llamamos la variable de entorno donde se encuentra <br> 
el token de acceso a la base de datos, si se conecto exitosamente aparece en consola <br> 
el siguiente mensaje establecido `">>> DB is connected"`
