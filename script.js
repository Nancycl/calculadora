function sumar() {
    // hacer que el simbolo cambie a sumar
    document.getElementById("simbolo").textContent= "+"
    // obtener los valores de los campos de entrada
        const numero1 = parseFloat(document.getElementById("number1").value);
        const numero2 = parseFloat(document.getElementById("number2").value);

//Sumar los dos numeros
        const resultado = numero1 + numero2;
//mostrar el resultado en el elemento id "resultado"
        document.getElementById("resultado").textContent = resultado;
        }
function restar() {
    // obtener los valores de los campos de entrada
    // hacer que el simbolo cambie a restar
    document.getElementById("simbolo").textContent= "-"
        const numero1 = parseFloat(document.getElementById("number1").value);
        const numero2 = parseFloat(document.getElementById("number2").value);

//Restar los dos numeros
        const resultado = numero1 - numero2;
//mostrar el resultado en el elemento id "resultado"
        document.getElementById("resultado").textContent = resultado;
}
function multiplicar() {
    // hacer que el simbolo cambie a multiplicar
    document.getElementById("simbolo").textContent= "*"
    // obtener los valores de los campos de entrada
        const numero1 = parseFloat(document.getElementById("number1").value);
        const numero2 = parseFloat(document.getElementById("number2").value);

//Multiplicar los dos numeros
        const resultado = numero1 * numero2;
//mostrar el resultado en el elemento id "resultado"
        document.getElementById("resultado").textContent = resultado;
        }
function dividir() {
        // hacer que el simbolo cambie a dividir
    document.getElementById("simbolo").textContent= "/"
    // obtener los valores de los campos de entrada
        const numero1 = parseFloat(document.getElementById("number1").value);
        const numero2 = parseFloat(document.getElementById("number2").value);

//Dividir los dos numeros
        const resultado = numero1 / numero2;
//mostrar el resultado en el elemento id "resultado"
        document.getElementById("resultado").textContent = resultado;
}


function limpiar() {
    // Limpiar los campos de entrada
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

    // Limpiar el símbolo
    document.getElementById("simbolo").textContent = "";

    // Limpiar el resultado
    document.getElementById("resultado").textContent = "";
}

document.getElementById("limpiar").addEventListener("click", limpiar);


