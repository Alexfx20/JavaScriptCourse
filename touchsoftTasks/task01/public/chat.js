$(function(){
var socket = io.connect('http://localhost:3000')

var message =$("#message");
var username = $("#username");
var send_message = $("#send_message");
var send_username = $("#send_username");
var chatroom =$("#chatroom");

send_message.click(function(){
	console.log(message.val());
	socket.emit('new_message', {message : message.val()});
})

socket.on("new_message", (data) => {
	console.log(data);
	chatroom.append("<p class='message'>" + data.username + ": "+data.message + "</p>");

})


send_username.click(function(){
	console.log(username.val());
	socket.emit('change_username', {username : username.val()});
})

socket.on("new_message")

message.bind("keypress", () => {
	socket.emit('typing')
})

socket.on('typing', (data) => {
	feedback.html("<p><i>"+data.username + " istyping a message..."+"</i></p>");
})



});