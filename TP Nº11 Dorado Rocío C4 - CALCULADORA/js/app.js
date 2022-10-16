function calculadora() {
const operacionSuma = document.getElementById("suma")
operacionSuma.addEventListener("click", sumar)
const operacionResta = document.getElementById("resta")
operacionResta.addEventListener("click", restar)
const operacionMultiplicacion = document.getElementById("multiplicacion")
operacionMultiplicacion.addEventListener("click", multiplicar)
const operacionDivision = document.getElementById("division")
operacionDivision.addEventListener("click", dividir)
}

function sumar(){

    if(isNaN(num1) || isNaN(num2)){
        let numero1 = document.getElementById("num1")
        let numero2 = document.getElementById("num2")

    let numeroUno = parseFloat(numero1.value)
    let numeroDos = parseFloat(numero2.value)
    let resultado = numeroUno + numeroDos 
    
    let operacion = document.getElementById("operacion")
    parseFloat(operacion.value = resultado)
       }else{ 
      alert("Algunos de los valores ingresados no es válido. Vuelva a ingresar los valores");
       }
}


function restar(){
    if(isNaN(num1) || isNaN(num2)){
         let numero1 = document.getElementById("num1")
        let numero2 = document.getElementById("num2")

        let numeroUno = parseFloat(numero1.value)
        let numeroDos = parseFloat(numero2.value)
        let resultado = numeroUno - numeroDos 
    
        let operacion = document.getElementById("operacion")
        parseFloat(operacion.value = resultado)
       }else{
        alert("Algunos de los valores ingresados no es válido. Vuelva a ingresar los valores");
       }
    }

function multiplicar(){
    if(isNaN(num1) || isNaN(num2)){
        let numero1 = document.getElementById("num1")
        let numero2 = document.getElementById("num2")

        let numeroUno = parseFloat(numero1.value)
        let numeroDos = parseFloat(numero2.value)
        let resultado = numeroUno*numeroDos; 
    
        let operacion = document.getElementById("operacion")
        parseFloat(operacion.value=resultado)
       }else{
        alert("Algunos de los valores ingresados no es válido. Vuelva a ingresar los valores");
       }
       }


function dividir(){
    if(isNaN(num1) || isNaN(num2)){
       let numero1 = document.getElementById("num1")
        let numero2 = document.getElementById("num2")

        let numeroUno = parseFloat(numero1.value)
        let numeroDos = parseFloat(numero2.value)
        let resultado = numeroUno / numeroDos 
    
        let operacion = document.getElementById("operacion")
        parseFloat(operacion.value = resultado)
       }else{
          alert("Algunos de los valores ingresados no es válido. Vuelva a ingresar los valores");
       }
 
}
calculadora()

