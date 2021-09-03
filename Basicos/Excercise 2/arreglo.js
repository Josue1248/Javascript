//Definir un arreglo vacio 

let productos = [];
let listaProductos = document.getElementById("listaElementos");

function agregarElemento() {
    let newElement = window.prompt('Nuevo Elemento: ');
    if (newElement != null) {
        productos.push(newElement);
    }
    console.log(productos);

    //Se limpia la lista il totalmente 
    while (listaProductos.firstChild)
        listaProductos.removeChild(listaProductos.firstChild);

    productos.forEach((producto) => {
        let nuevoProducto = document.createElement("li");
        let numeroDeProductos = listaProductos.children.length;
        nuevoProducto.setAttribute('id', numeroDeProductos);
        nuevoProducto.innerHTML = `${producto}<button onclick='eliminaProducto
        (${numeroDeProductos})'>Eliminar</button>`;
        listaProductos.appendChild(nuevoProducto);
    });

}
function eliminaProducto(cual) {
    alert(`Eliminar Producto${cual}`);
    listaProductos.removeChild(listaProductos.ChildNodes[cual])
}


    /*function agregarProducto (p) {
    let nuevoProducto = document.createElement("li");
    nuevoProducto.innerText = producto;
    listaProductos.appendChild(nuevoProducto);

}*/
