const express = require('express');

const app = express()

//
app.use(express.static('public'))

app.get('/', (req, res, next)=>{
    res.send('Welcome new visitor, this is a test webpage') // Para mandar únicamente texto 
})

app.get('/pagina1', (req, res, next)=>{
    res.send(`<h1> Título de prueba </h1>`)
})

app.get('/basicInfo1', (req, res, next)=>{
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Info</title>
</head>
<body>
     <h1>Artist Basic Info </h1>
      <ul>
         <li>Name: David </li>
         <li>Last Name: Hatch </li>
         <li>LinkedIn: https://www.linkedin.com/in/david-hatch-vazquez/ </li>
      </ul>
</body>
</html>
    `)
})

app.listen(3000, ()=>{
    console.log('Ando corriendo en el puerto 3000');
})

