const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let p1 = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 2,
    speed: 3
};

let p2 = {
    x: canvas.width / 2 + 40,
    y: canvas.height / 2,
    radius: 15,
    speed: 3
};

let keys = {};

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw p1 (tan)
    ctx.beginPath();
    ctx.arc(p1.x, p1.y, p1.radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.lineWidth = 3; //remove when player image is added
    ctx.strokeStyle = 'black'; //remove when player image is added
    ctx.stroke();

    // Draw p2 (brown)
    ctx.beginPath();
    ctx.arc(p2.x, p2.y, p2.radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgb(152, 104, 50)';
    ctx.fill();
    ctx.lineWidth = 3; //remove when player image is added
    ctx.strokeStyle = 'black'; //remove when player image is added
    ctx.stroke();

    // Clamp player 1 position to stay within canvas borders
    p1.x = Math.max(p1.radius * 2, Math.min(canvas.width - p1.radius * 2, p1.x));
    p1.y = Math.max(p1.radius * 2, Math.min(canvas.height * 7.2 / 10 - p1.radius, p1.y));

    // Clamp player 2 position to stay within canvas borders
    p2.x = Math.max(p2.radius * 2, Math.min(canvas.width - p2.radius * 2, p2.x));
    p2.y = Math.max(p2.radius * 2, Math.min(canvas.height * 7.2 / 10 - p2.radius, p2.y));

    console.log('x: ', p1.x, ' y: ', p1.y);
}

function update() {
    if (keys['w']) p1.y -= p1.speed;
    if (keys['a']) p1.x -= p1.speed;
    if (keys['s']) p1.y += p1.speed;
    if (keys['d']) p1.x += p1.speed;

    // p2 movement (arrow keys)
    if (keys['ArrowUp']) p2.y -= p2.speed;
    if (keys['ArrowLeft']) p2.x -= p2.speed;
    if (keys['ArrowDown']) p2.y += p2.speed;
    if (keys['ArrowRight']) p2.x += p2.speed;

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