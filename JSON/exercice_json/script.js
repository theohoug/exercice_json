let canvas1 = document.getElementById("canvas1");
let context1 = canvas1.getContext("2d");
let button2 = document.getElementById("button2")

function body_onLoad() {
  drawCircle(150, 100, 10, "red");
  drawCircle(150, 20, 5, "black");
  drawCircle(300, 70, 25, "green");
}

function drawCircle(x, y, r, color) {
  context1.beginPath();
  context1.arc(x, y, r, 0, 2 * Math.PI, false);
  context1.fillStyle = color; // Remplir
  context1.fill(); //Tracer remplir
  context1.lineWidth = 1;
  context1.strokeStyle = color;
  context1.stroke(); //Tracer contour
  context1.closePath();
}
// Définition des objets en JSON puis en Code JS

let obj1 = {
  x: 123,
  y: 56,
  r: 5,
  color: "yellow",
};

console.log(obj1);

let obj2 = new Object();
obj2.x = 234;
obj2.y = 78;
obj2.r = 20;
obj2.color = "pink";

console.log(obj2);

let triangle1 = {
  pt1: {
    x: 123,
    y: 56,
  },
  pt2: {
    x: 120,
    y: 50,
  },
  pt3: {
    x: 130,
    y: 60,
  },
  color: "red",
};

console.log(triangle1);

//----------------------------------------------
function button2_onClick() {
    context1.clearRect(0, 0, canvas1.width, canvas1.height);
}

function button1_onClick() {
  console.log("button1_onClick()");
  drawCircle(obj1.x, obj1.y, obj1.r, obj1.color);
  drawCircle(obj2.x, obj2.y, obj2.r, obj2.color);
  console.log(obj1.infos);
}

button2.addEventListener('click', button2_onClick)