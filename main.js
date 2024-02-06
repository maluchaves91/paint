let canvas = document.getElementById("Mycanvas");
let ctx = canvas.getContext("2d");

let cor;
let largura; 
let mouseevent; 
let mouseXfinal; 
let mouseYfinal; 
let touchXinicial; 
let touchYinicial; 
let touchXfinal; 
let touchYfinal; 

canvas.addEventListener("mousedown", cliquei);

function cliquei() {
    cor = document.getElementById("cor").value;
    largura = document.getElementById("largura").value;
    mouseevent = "mousedown";
}

canvas.addEventListener("mousemove", arrastei);

function arrastei(e) {
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;

    if (mouseevent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = cor;
        ctx.lineWidth = largura;
        ctx.moveTo(mouseXfinal, mouseYfinal);
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
    }
    mouseXfinal = mouseX;
    mouseYfinal = mouseY;
}

canvas.addEventListener("mouseup", up);

function up(){
    mouseevent="mouseup";
}

function limparcanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

let celular = screen.width;
let novaLargura = screen.width - 70;
let novaAltura = screen.height - 300;

if(celular<992){
    document.getElementById("Mycanvas").width=novaLargura;
    document.getElementById("Mycanvas").height=novaAltura;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart", encostei);

function encostei() {
    cor = document.getElementById("cor").value;
    largura = document.getElementById("largura").value;
}

canvas.addEventListener("touchmove", movi);

function movi(e) {
    touchXinicial = e.touches[0].clientX - canvas.offsetLeft;
    touchYinicial = e.touches[0].clientY - canvas.offsetTop;

    
        ctx.beginPath();
        ctx.strokeStyle = cor;
        ctx.lineWidth = largura;
        ctx.moveTo(touchXfinal, touchYfinal);
        ctx.lineTo(touchXinicial, touchYinicial);
        ctx.stroke();
   
    touchXfinal = touchXinicial;
    touchYfinal = touchYinicial;
}