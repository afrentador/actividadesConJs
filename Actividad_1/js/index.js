window.onload = inicio;

function inicio(){
    document.querySelectorAll(".button")[0].onclick=accion1; 
    document.querySelectorAll(".button")[1].onclick=accion2; 
    document.querySelectorAll(".button")[2].onclick=accion3; 
    document.querySelectorAll(".button")[3].onclick=accion4; 
}

function accion1(){
    document.querySelector(".caja").innerHTML="Hola Mundo";
}

function accion2(){
    document.querySelector(".caja").innerHTML="<img src= 'imagenes/IMG-20200210-WA0012.jpg' width=190px>";
}

function accion3(){
    document.querySelector(".caja").insertAdjacentHTML('beforeend','<button>Botón</button>');
}

function accion4(){
    document.querySelector(".caja").innerHTML="";
}