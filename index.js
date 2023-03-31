//llamar a express constructor
const express = require('express');
//crear la app de express llamando al constructor
const app = express();
//configurar el puerto del servidor de express
const port = 3000;

//routes
//req=request y res=response
app.get('/', (req, res) =>{
 res.send('Mi primer servidor en express');
});

app.listen(port, () =>{
  console.log('Servidor online en el puerto: ' + port)
});
