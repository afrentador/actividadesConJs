let usuario= "Victor"
let productoComprado=0;
const Descuento=0.1;
let precioDescuento;
const TATUAJES=[{
    diseño:"Relog de Agua",
    precio:250000,
    tamaño:"45cm",
    imagen:"tatuaje_grande.jpg"
},{
    diseño:"Heroe",
    precio:60000,
    tamaño:"8cm",
    imagen:"tatuaje_pequeño.jpg"
}
]

document.querySelector("body").innerHTML=
`<h1>${usuario}</h1>
<button class="boton">Siguinte</button>
    <section class="caja">
        <div>
            ${TATUAJES[productoComprado].diseño} ( ${TATUAJES[productoComprado].precio} $)
        </div>
        <div> Descuento: ${calcularDescuento()} $</div>
        <div>
            <strong>
                Precio Final: ${precioFinal()} $ PESOS
            </strong>
        </div>
        <div>
            Tamaño: ${TATUAJES[productoComprado].tamaño}
        </div>
        <img src="img/${TATUAJES[productoComprado].imagen}" alt= "${TATUAJES[productoComprado].nombre}">
    </section>
`;

// function inicio(){
//     document.querySelectorAll("body").onclick=accion;
// }
// function accion(){
//     if(productoComprado[0]){
//         return TATUAJES[1]
//     }
// }
function calcularDescuento(){
    precioDescuento=TATUAJES[productoComprado].precio * Descuento;
    return precioDescuento;
}

function precioFinal(){
    return TATUAJES[productoComprado].precio - precioDescuento;
    
}