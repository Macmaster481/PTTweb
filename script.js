
function tankAfull(){
	var socket = io.connect();
	socket.emit('afullclicked');
			    //when we receive buttonUpdate, do this
	socket.on('buttonUpdate', function(data){
		document.getElementById("buttonCount").innerHTML = data;
	});
	return document.getElementById("tanka").src = "img/full_n.png";
}
function tankAmi() {
	var socket = io.connect();
	socket.emit('amedclicked');
			    //when we receive buttonUpdate, do this
	socket.on('buttonUpdate', function(data){
		document.getElementById("buttonCount").innerHTML = data;
	});
	return document.getElementById("tanka").src = "img/min_n.png";
}
function tankAlow() {
	var socket = io.connect();
	socket.emit('alowclicked');
			    //when we receive buttonUpdate, do this
	socket.on('buttonUpdate', function(data){
		document.getElementById("buttonCount").innerHTML = data;
	});
	return document.getElementById("tanka").src = "img/low_n.png";
}
function tankBfull(){
	var socket = io.connect();
	socket.emit('bfullclicked');
			    //when we receive buttonUpdate, do this
	socket.on('buttonUpdate', function(data){
		document.getElementById("buttonCount").innerHTML = data;
	});
	return document.getElementById("tankb").src = "img/full_n.png";
}
function tankBmi() {
	var socket = io.connect();
	socket.emit('bmedclicked');
			    //when we receive buttonUpdate, do this
	socket.on('buttonUpdate', function(data){
		document.getElementById("buttonCount").innerHTML = data;
	});
	return document.getElementById("tankb").src = "img/min_n.png";
}
function tankBlow() {
	var socket = io.connect();
	socket.emit('blowclicked');
			    //when we receive buttonUpdate, do this
	socket.on('buttonUpdate', function(data){
		document.getElementById("buttonCount").innerHTML = data;
	});
	return document.getElementById("tankb").src = "img/low_n.png";
}

function tankCfull() {
	var socket = io.connect();
	socket.emit('cfullclicked');
			    //when we receive buttonUpdate, do this
	socket.on('buttonUpdate', function(data){
		document.getElementById("buttonCount").innerHTML = data;
	});
	return document.getElementById("tankc").src = "img/full_n.png";
}
function tankCmi() {
	var socket = io.connect();
	socket.emit('cmedclicked');
			    //when we receive buttonUpdate, do this
	socket.on('buttonUpdate', function(data){
		document.getElementById("buttonCount").innerHTML = data;
	});
	return document.getElementById("tankc").src = "img/min_n.png";
}
function tankClow() {
	var socket = io.connect();
	socket.emit('clowclicked');
			    //when we receive buttonUpdate, do this
	socket.on('buttonUpdate', function(data){
		document.getElementById("buttonCount").innerHTML = data;
	});
	return document.getElementById("tankc").src = "img/low_n.png";
}

