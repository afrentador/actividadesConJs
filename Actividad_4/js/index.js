window.onload=inicio;
let sumaCorrecta,primerValor,segundoValor;

function inicio(){
    numeros();
    document.querySelector("#button").onclick=comprobar;
    document.querySelector(".total").onkeydown=teclado;
   
}

function teclado(v){
    let tecla=v.key;
    if(tecla=="Enter"){
        comprobar();
    }
}

function comprobar(){
    let valorFinal=Number(document.querySelector(".total").value);
    if(valorFinal==sumaCorrecta){
        document.querySelector(".resultado").insertAdjacentHTML("beforebegin",`<div class="verde">Es Correcto</div>`);
    } else {
        document.querySelector(".resultado").insertAdjacentHTML("beforebegin",`<div class="rojo">El resultado de ${primerValor}+${segundoValor}=${sumaCorrecta}</div>`);
    }
    numeros();
}

function numeros(){
    primerValor=Math.floor(Math.random()*10);   
    segundoValor=Math.floor(Math.random()*10);  
    sumaCorrecta = primerValor+segundoValor;
    document.querySelector(".entero").value=primerValor;
    document.querySelector(".sumando").value=segundoValor;
    document.querySelector(".total").value="";
    document.querySelector(".total").focus();
}