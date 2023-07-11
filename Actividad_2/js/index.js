window.onload=inicio;
var boton, imagen, cajaImagen;


function inicio(){
    document.querySelector("body").insertAdjacentHTML("beforeend", `
    <button class="button">Botón</button>
    <button class="button">Botón</button>
    <button class="button">Botón</button>
    <div id="imagen"><img src="imagenes/linux-logo-by-Vexels.svg" alt=""></div>`);
    boton=document.querySelectorAll(".button");
    imagen=document.querySelector("img");
    cajaImagen=document.querySelector("#imagen");

    boton[0].onclick=accion1;
    boton[1].onclick=accion2;
    boton[2].onclick=accion3;
    resaltar();
}

function accion1(){
    imagen.style.backgroundColor="#1162ac";
    cajaImagen.style.borderRadius="50%";
    cajaImagen.style.transform="rotate(20deg)";
    boton[0].style.visibility="hidden";
} 
function accion2(){
    if(cajaImagen.style.display=="none"){
        cajaImagen.style.display="block";
        resaltar();
    }else{
        cajaImagen.style.display="none";
        boton[1].style.background=null;
        boton[1].style.borderColor=null;
    }
}
function accion3(){
    imagen.style=null;
    cajaImagen.style=null;
    boton[0].style=null;
    boton[2].style=null;
    resaltar();
}
function resaltar(){
    boton[1].style.background="#e44d26";
    boton[1].style.borderColor="#e44d26";
}