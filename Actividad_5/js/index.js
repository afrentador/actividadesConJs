window.onload=inicio;

function inicio(){
    document.querySelector(".boton").onclick=girar;
}

function girar(){
    document.querySelector(".flecha").style.transform="rotate(20deg)";
}

