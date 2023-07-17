window.onload=inicio;
let rotacion=0;
let sumar=true;

function inicio(){
    document.querySelector(".boton").onclick=girar;
    actualizar();
}

function girar(){
    if(sumar){
        rotacion+=20;
    }else{
        rotacion-=20;
    }

    if(rotacion<=0 || rotacion>=360){
        sumar=!sumar;
    }
    document.querySelector(".flecha").style.transform=`rotate(${rotacion}deg)`;
    actualizar();
}
function actualizar(){
    document.querySelector(".porcentaje").innerHTML=`${rotacion}º`;
}
