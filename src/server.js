import http from 'http';
import { Server } from 'socket.io';


const server = http.createServer(() => {
})
const io = new Server(server, {cors: {origin: '*'}});

io.on('connection', (socket) => {
  console.log('socket', socket)
  console.log('a user connected');
});


const port = 8080;
server.listen(port, () => {

  console.log('Server is live and direct....')
})