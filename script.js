const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let p1 = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 25,
    speed: 3
};

let keys = {};

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(p1.x, p1.y, p1.radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
}

function update() {
    if (keys['w']) p1.y -= p1.speed;
    if (keys['a']) p1.x -= p1.speed;
    if (keys['s']) p1.y += p1.speed;
    if (keys['d']) p1.x += p1.speed;
    draw();
    requestAnimationFrame(update);
}

document.addEventListener('keydown', function(e) {
    keys[e.key] = true;
});

document.addEventListener('keyup', function(e) {
    keys[e.key] = false;
});

update();