const express = require('express');

const app = express()

//
app.use(express.static('public'))

app.get('/', (req, res, next)=>{
    res.send('Welcome new visitor, this webpage will show you some information about Isaac Newton') // Para mandar únicamente texto 
})

app.get('/pagina1', (req, res, next)=>{
    res.send(`<h1> Título de prueba </h1>`)
})

app.get('/profile', (req, res, next)=>{
    res.sendFile(__dirname + '/views/perfil.html' )
})

app.listen(3000, ()=>{
    console.log('Ando corriendo en el puerto 3000');
})

