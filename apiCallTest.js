const electron = require('electron');

// Importing the net Module from electron remote
const net = electron.remote.net;

var get = document.getElementById('get');
var post = document.getElementById('post');

get.addEventListener('click', () => {
    console.log("Get clicked")
})


post.addEventListener('click', () => {
    console.log("Post clicked")
})

