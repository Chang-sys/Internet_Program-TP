var tween;
var coords;
var target = document.getElementById('RunButton');
var Startx=0,Starty=0;

requestAnimationFrame(animate);

const moveFromSourceToDesk = (startX, startY, endX, endY) => {
    coords = { x: startX, y: startY }
    tween = new TWEEN.Tween(coords)
        .to({ x: endX, y: endY }, 500)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(() => {
            console.log(`${coords.x}px, ${coords.y}px`);
            target.style.left = coords.x +"px";
            target.style.top = coords.y +"px";
            Startx=coords.x;
            Starty=coords.y;
        })
        .start();
}

function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}

function run () {
    const x_ = Math.floor(Math.random() * window.innerWidth); 
    const y_ = Math.floor(Math.random() * window.innerHeight);
    moveFromSourceToDesk(Startx, Starty, x_, y_);
}
