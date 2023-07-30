//usario y contraseña del simulador 
let usuario = prompt("Ingrese su nombre de usuario");
let contrasenia = prompt("Ingrese su contraseña");

while ((usuario !="man") || (contrasenia !="2076")) {
    if (alert("El usuario o contraseña no son validos"));
    usuario = prompt ("Ingrese un nombre de usuario valido");
    contrasenia = prompt('Ingrese una contraseña valida');
} 
    alert("Bienvenido al sistema :3");

// Lista de productos para venta
const productos = [
    { nombre: "cafe", precio: 14.5},
    { nombre: "paneton", precio: 20.9},
    { nombre: "vino", precio: 49.9},
    { nombre: "aceite", precio: 10.7},
    { nombre: "cerveza six pack", precio: 24.9},
];

let carrito = []

let seleccion = prompt("Hola, ¿Desea comprar algun producto? Si o No")

//Bucle para iniciar la compra
while (seleccion !="si" && seleccion !="no") {
    alert("Por favor ingrese si o no")
    seleccion = prompt("Hola, ¿Desea comprar algo? si o no")
}

if( seleccion == "si") {
    alert ("A continuacion nuestra lista de productos")
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todoslosProductos.join(" - "))
} else if (seleccion == "no") {
    alert("Gracias por venir, hasta pronto!!")
}

//Accion para agregar un producto al carrito
while(seleccion !="no") {
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if (producto == "cafe" || producto == "paneton" || producto == "vino" || producto == "aceite" || producto == "cerveza six pack") {
        switch(producto) {
            case "cafe":
            precio = 14.5;
            break;
            case "paneton":
            precio = 20.9;
            break;
            case "vino":
            precio = 49.9;
            break;
            case "aceite":
            precio = 10.7;
            break;
            case "cerveza six pack":
            precio = 24.9;
            break;
            default:
            break;
        }

        let unidades = parseInt(prompt("¿Cuantas unidades piensa llevar?"))

        carrito.push({producto, unidades, precio})
        console.log(carrito)
    } else {
        alert("Disculpe, no tenemos dicho producto. Escriba otro.")
    }

//Informacion de cada producto agregado al carrito
    seleccion = prompt("¿Desea seguir comprando?")

    while(seleccion ==="no") {
        alert("!Gracias por su compra! Hasta pronto :)")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}` )
        })
        break;
    }
}
//Acumulador para dar como resultado el precio total a pagar
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es: ${total}`)