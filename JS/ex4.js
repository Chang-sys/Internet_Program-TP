document.querySelector("video").style.display="none";
var canvas = document.querySelector("canvas"),
    video = document.querySelector("video"),
    button = document.querySelector("button"),
    playing = true,err = video.error;

navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true,
}).then((stream) => {
    video.srcObject = stream;

    (function loop() {
        if (playing && video.srcObject) {
            canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
            setTimeout(loop, 1000 / 30);
        }
    })();

    button.addEventListener("click", function () {
        playing=(playing?false:true);

        button.innerHTML=(playing?"Pause":"Resume");

        (function loop() {
            if (playing && video.srcObject) {
                canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
                setTimeout(loop, 1000 / 30);
            }
        })();
    });
}).catch((err) => {
    console.log("navigator.MediaDevices.getUserMedia err: ", err.message, err.name);
});