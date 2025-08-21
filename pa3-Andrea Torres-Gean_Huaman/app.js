const express = require('express');
//console.log(express);
//modulo nativo
const path = require('path')

const app = express();

//indicando ruta de valores estaticos
app.use(express.static('public'));

//rutas
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./src/views/home.html'));
})
app.get('/servicios',(req,res)=>{
    res.sendFile(path.join(__dirname,'./src/views/servicios.html'));
})
app.get('/galeria',(req,res)=>{
    res.sendFile(path.join(__dirname,'./src/views/galeria.html'));
})
app.get('/testimonio',(req,res)=>{
    res.sendFile(path.join(__dirname,'./src/views/testimonio.html'));
})
app.get('/reservas',(req,res)=>{
    res.sendFile(path.join(__dirname,'./src/views/reservas.html'));
})
/*
app.get('/nosotros',(req,res)=>{
    //res.send('Hola somos una empresa dedicada al desarrollo de software')
    res.sendFile(path.join(__dirname,'./src/views/nosotros.html'));
})
*/

//implementando el servidor web con express
app.listen(3001,()=>{
    console.log('Servidor corriendo en el puerto 3001')
})

