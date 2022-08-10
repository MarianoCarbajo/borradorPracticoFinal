let producto = document.getElementById("producto");
let precio = document.getElementById("precio");
let btnAgregar = document.getElementById("btnAgregar");
let btnTotal = document.getElementById("btnTotal");
let lista = document.getElementById("lista");
let subtotal = document.getElementById("subtotal");
let mensaje = document.getElementById("mensaje");
let total = document.getElementById("total");
let btnBorrar = document.getElementById("btnBorrar");
let suma: number = 0;
let descuento: number = 0;

function agregarProducto(): void {
  let nombreProducto: string = producto.value;
  let precioProducto: number = Number(precio.value);
  suma += precioProducto;
  lista.innerHTML += `<li>${nombreProducto} $${precioProducto}</li>`;
  subtotal.innerHTML = `$${suma}`;
  producto.value = "";
  precio.value = "";
}

function agregarDescuento(): void {
  if (suma >= 2500) {
    mensaje.innerHTML = `Tiene un descuento del 10%`;
    descuento = suma * 0.1;
    total.innerHTML = `$${suma - descuento}`;
  } else {
    mensaje.innerHTML = `Con su compra de $2500 puede acceder a un descuento del 10%`;
    total.innerHTML = `$${suma}`;
  }
}

function borrarLista(): void {
  lista.innerHTML = "";
  subtotal.innerHTML = "";
  mensaje.innerHTML = "";
  total.innerHTML = "";
}

btnAgregar.addEventListener("click", agregarProducto);
btnTotal.addEventListener("click", agregarDescuento);
btnBorrar?.addEventListener("click", borrarLista);
