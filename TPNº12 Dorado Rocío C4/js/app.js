function calculadoraIMC() {
    const operacionCalcular = document.getElementById("calcular")
    operacionCalcular.addEventListener("click", calculo)
    }
    
    function calculo(){
        
        let numero1 = document.getElementById("peso")
        let numero2 = document.getElementById("altura")
    
        let numeroUno = parseFloat(numero1.value)
        let numeroDos = parseFloat(numero2.value)
        let resultado = numeroUno / (numeroDos * numeroDos);
        resultado =(Math.round(resultado*100)/100)
       
        let operacion = document.getElementById("operacion")
        parseFloat(operacion.value = resultado)
          
    }
    
    calculadoraIMC()
    
    