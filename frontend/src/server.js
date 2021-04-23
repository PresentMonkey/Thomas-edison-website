import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import http from 'http';
import io from 'socket.io';

const code = '06ab044c'

var users=[];

const server =  http.createServer();


const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';



polka({server}) // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }), 
		sapper.middleware()
	).listen(PORT, err => {
		if (err) console.log('error', err);
	});




io(server).on('connection', (socket)=>{
	socket.on('join', (data)=>{
		var id = socket.id;
		if(data.code == code){
			let user = {name: data.name}
			users.push(user);
			console.log(users);
			socket.emit('join_response', {success: true, err: null});
		}
		else{
			socket.emit('join_response', {success: false, err: 'No such code exists'});
		}

		
	})
	socket.on('disconnect', (reason)=>{
		
	})


	console.log('A user connected');
});

