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
			users.push({id: socket.id, name: data.name, stars: 0});
			console.log(users);
			socket.emit('join_response', {success: true, err: null});
			updateData();
		}
		else{
			socket.emit('join_response', {success: false, err: 'No such code exists'});
		}

		
	})
	socket.on('fetchStudents', ()=>{
		updateData();
	})
	socket.on('give_star', (data)=>{
		console.log(data);
		socket.to(data).emit('gived_star');
	})


	socket.on('disconnect', (reason)=>{
		//delete users[socket.id];
		updateData();
	})
	function updateData(){
		socket.emit('studentData', {users});
		
	}

	setInterval(updateData, 2000);


	console.log('A user connected');
});

