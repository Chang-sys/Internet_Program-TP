var videoElement = document.getElementById("videoElement");
let btn = document.getElementById("btn");
let count = 0;

function pauseVdo(){
    count = count + 1;
    if (count%2 !=0) {
        videoElement.pause();
    } else {
        videoElement.play();
        count = 0;
    }
}

var streamContraints = {
    audio: false,
    video: true,
};

var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d',{alpha: false});
var canvasInterval = null;
var fps=30;

function gotStream(stream) {
    videoElement.srcObject = stream 
    videoElement.play()
}

if(videoElement){
    navigator.mediaDevices
    .getUserMedia(streamContraints)
    .then(gotStream)
    .catch((err) =>{
        console.log('navigator.MediaDevices.getUserMedia error: ',err.message,err.name);
    });
}

function drawImage(video) {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
}

var canvasProject = document.getElementById('canvasOutput');
var ctxProject = canvasProject.getContext('2d');
function gridVideo(video){
    ctxProject.drawImage(video, 0, 0, 213, 240, 0, 0, 99, 74);
    ctxProject.drawImage(video, 213, 0, 213, 240, 100, 0, 99, 74);
    ctxProject.drawImage(video, 426, 0, 213, 240, 200, 0, 100, 74);
    ctxProject.drawImage(video, 0, 240, 213, 240, 0, 75, 99, 75);
    ctxProject.drawImage(video, 213, 240, 213, 240, 100, 75, 99, 75);
    ctxProject.drawImage(video, 426, 240, 213, 240, 200, 75, 100, 75);
}

canvasInterval = window.setInterval(() => {
    drawImage(videoElement);
}, 1000 / fps);

canvasInt = window.setInterval(() => {
    gridVideo(videoElement);
 }, 1000 / fps);