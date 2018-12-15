
const textoinvertir = document.getElementById("texto");
const inverso = document.getElementById("invertido");
function reverseString() {
	const textIngresado = textoinvertir.value;
    inverso.value=textIngresado.split("").reverse().join("");
}
textoinvertir.addEventListener("keyup",reverseString);
