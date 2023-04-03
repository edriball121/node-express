# Configurar proyecto node

- Fuente: https://expressjs.com/
- 1. Crear proyecto base en node --> npm init -y
- 2. Iniciar git --> git init
- 3. Crear .gitignore //https://www.toptal.com/developers/gitignore
- 4. Crear .editorconfig //instalar extension editor config
- 5. Crear .eslintrc.json
- 6. Crear index.js
- 7. Instalar nodemon y configurar scripts
--> npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D
- 8. Validar entorno de desarrollo npm run dev
- 9. Validar el modo producción npm run start

# Instalar Express
- 1. Instalar express npm i express
- 2. configurar servidor de express en index.js

# Routes
- 1. Inicio: /
- 2. Productos: products
- 3. Authenticatión: auth
- 4. json: json

# Api Restfull
1. Get: Obtener
2. Put: Modificar/Actualizar
3. Patch: Modificar/Actualizar
4. Post: Crear
5. Delete: Eliminar

# Api data FAKE
1. Instalar dependencia para data falsa --> npm i @faker-js/faker

# Configurar los routes "Una sola responsabilidad"
1. Crear carpeta routes
2. Crear la carpeta index.js dentro de routes
3. Crear los archivos de rutas por cada entidad
4. Importar y exportar los modulos
5. Agregar el router al index.js
6. Agregar ruteo padre

# Agregar metodo GET

# Agregar metodo POST
1. Agregar middleware para trabajo con --> en el index: json app.use(express.json());

# Agregar metodo PUT - PATH - DELETE
1. El metodo put debe enviasele todo el json de nuevo.
2. El patch solo se le debe enviar el campo o valor a modificar

# Status code
1. fuente: https://developer.mozilla.org/en-US/docs/Web/HTTP
2. Agregar status a las rutas: res.status(201).json...

# Agregar servicios
1. Agregar los metodos Create/detele/update  de las entidades como products

# Agergar Sync a las apis

1. Agregar async a las funciones

# middleware
1. https://expressjs.com/en/guide/writing-middleware.html
2. Crear carpeta middleware y sus archivos y funciones

# Instalar manejador de errores. libreria boom
1. Instalar boom --> npm i @hapi/boom
2. Manipulación de errores

# Instalar middleware de validación joy
1. Instalar joi --> npm i joi  -- https://joi.dev/
2. Crear carpeta schemas
3. Crear middleware para validar datos con Joi
4. Configurar endpoints con middleware de Joi

# Cores
1. https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
2. helmet https://helmetjs.github.io/

# Resolver error de cores
1. instalar libreria --> npm i cors

# Desplegar en heroku
* heroku ya no es gratis, otras alternativas
https://railway.app/
https://render.com/
https://vercel.com/

# Desplegar en vercel
1. Crear cuenta
2. Crear proyecto
3. mover todo a una carpeta nueva llamada api


