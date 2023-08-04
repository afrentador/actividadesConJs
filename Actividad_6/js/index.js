window.onload= inicio;
let bt;
let veces= 0;

function inicio(){
    bt=document.querySelector(".boton");
    bt.onclick=cambios;
    secuencia1()
}

function cambios(){
    veces++;
    if(veces==1){
        document.querySelector(".precio").innerHTML=`10k`;
        document.querySelector(".imagen img").src=`assets/img/cafeGrande.png`;
        document.querySelector(".descripcion").innerHTML=`Cafe Grande`;
        bt.classList.add("secuencia2"); 
    }else if(veces==2){
        document.querySelector(".precio").innerHTML=`15k`;
        document.querySelector(".descripcion").innerHTML=`Cafe + Ponque`;
        document.querySelector("section").insertAdjacentHTML("beforeend",`<div class="imagen2">+ <img src="assets/img/torta.png"></div>`
        );
        bt.classList.add("secuencia3"); 
    }else{
        bt.classList.remove("secuencia2");
        bt.classList.remove("secuencia3");
        secuencia1()
        veces=0;
    }
}

function secuencia1(){
    document.querySelector(".boton").innerHTML= `
        <section>
            <div class="precio">5K</div>
            <div class="imagen"></div>
        </section>
        <div class="descripcion"></div>
        `;
    document.querySelector(".precio").innerHTML=`5k`;
    document.querySelector(".imagen").innerHTML=`<img src="assets/img/cafeSimple.png">`;
    document.querySelector(".descripcion").innerHTML=`Cafe de Colombia`;
    bt.classList.add("secuencia1"); 
}