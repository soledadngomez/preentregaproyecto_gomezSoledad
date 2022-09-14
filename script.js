let libros = [];

class Libro {
  constructor(codigo,nombre, autor, editorial, precio, cantidad) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.autor = autor;
    this.editorial = editorial;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  vender() {
    console.log(this);
    if (this.cantidad > 0) {
      this.disminuirStock(1);
    } else {
      alert("Ya no hay disponibilidad");
    }
  }
  aumentarPrecio = (precio) => (this.precio += precio);
  disminuirPrecio = (precio) => (this.precio -= precio);
  aumentarStock = (cantidad) => (this.cantidad += cantidad);
  disminuirStock = (cantidad) => (this.cantidad -= cantidad);
}

function agregarDatosDeLibro() {
  let codigo = prompt("Ingresa el codigo del Libro");
  let nombre = prompt("Ingresa el nombre del Libro");
  let autor = prompt("Ingresa el autor del Libro");
  let editorial = prompt("Ingresa la editorial del Libro");
  let precio = parseFloat(prompt("Ingresa el precio de venta del Libro"));
  let cantidad = parseInt(prompt("Ingresa la cantidad de Libros"));

  const objetoLibro = new Libro(codigo,nombre, autor, editorial, precio, cantidad);
  return objetoLibro;
}

function listaProductos() {
    for (let index = 0; index < libros.length; index++) {
        alert("Codigo: " + libros[index].codigo + "Libro: " + libros[index].nombre +  "Autor:" + libros[index].autor + " Editorial: " + libros[index].editorial +" Precio: " + libros[index].precio + " Stock: " + libros[index].cantidad);
    }
}

console.log(libros);


function mostrarMenu() {
  const OPCION = prompt(
    "Bienvenido, seleccione una opción (ESC para salir)\n1. Agregar datos del Libro\n2. Aumentar precio\n3. Disminuir precio\n4. Aumentar stock\n5. Disminuir stock\n6. Vender\n7. Mostrar información del Libro"
  );
  return OPCION;
}

function convertirObjetoEnTexto(objeto) {
  let texto = "";
  for (const clave in objeto) {
    if (typeof objeto[clave] !== "function")
      texto += clave + " : " + objeto[clave] + "\n";
  }
  return texto;
}

function procesarCompra (){
    
alert(`Compro ${cantidad} unidad de ${libros.nombre} por $ ${cantidad * libros.precio}`)
    return cantidad * libros.precio
  }


function procesarInventario() {
  let opcionSeleccionada = mostrarMenu();
  while (opcionSeleccionada?.toLowerCase() != "esc") {
    if (opcionSeleccionada != "") {
      opcionSeleccionada = parseInt(opcionSeleccionada);
      if (!isNaN(opcionSeleccionada)) {
        switch (opcionSeleccionada) {
          case 1:
            miLibro = agregarDatosDeLibro();
            break;

          case 2:
            const PRECIO_A_AUMENTAR = parseFloat(
              prompt("Ingrese en cuanto aumenta el precio del Libro")
            );
            
            miLibro.aumentarPrecio(PRECIO_A_AUMENTAR);

            break;

          case 3:
            const PRECIO_A_DISMINUIR = parseFloat(
              prompt("Ingrese en cuanto disminuye el precio del Libro")
            );
            miLibro.disminuirPrecio(PRECIO_A_DISMINUIR);

            break;

          case 4:
            const LIBROS_A_AUMENTAR = parseInt(
              prompt("Ingrese la cantidad de Libros a aumentar")
            );
            miLibro.aumentarStock(LIBROS_A_AUMENTAR);

            break;

          case 5:
            const LIBROS_A_DISMINUIR = parseInt(
              prompt("Ingrese la cantidad de Libros a disminuir")
            );
            miLibro.disminuirStock(LIBROS_A_DISMINUIR);

            break;

          case 6:
            prompt("Ingresa el nombre del libro que queres comprar:");
            prompt("Cuantas unidades desea comprar?:");
            miLibro.vender();
            procesarCompra();

            break;

          case 7:
            const OBJETO_TEXTO = convertirObjetoEnTexto(miLibro);
            alert(OBJETO_TEXTO);

            break;

          default:
            alert("Opcion Incorrecta");
            break;
        }
      } else {
        alert("Ingresó una letra");
      }
    } else {
      alert("Seleccione la opción");
    }
    opcionSeleccionada = mostrarMenu();
  }
}

function main() {
  procesarInventario();
  miLibro = agregarDatosDeLibro();

}

main();
