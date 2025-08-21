const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

// Función para generar un color aleatorio
function getRandomColor() {
  const colors = ['#9dbdba', '#f8b042', '#ec6a52', '#93aec1', '#f3b7ad', '#E74C3C'];
  return colors[Math.floor(Math.random() * colors.length)];
}

io.on('connection', (socket) => {
  console.log('🟢 Usuario conectado');

  // Asigna un color aleatorio al socket
  const userColor = getRandomColor();
  socket.emit('set color', userColor);

  socket.on('chat message', (msgData) => {
    io.emit('chat message', msgData);
  });

  socket.on('disconnect', () => {
    console.log('🔴 Usuario desconectado');
  });
});

http.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
