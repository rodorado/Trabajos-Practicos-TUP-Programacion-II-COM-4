const inputLibro = document.getElementById("nombreLibro");
const inputAutor = document.getElementById("autorLibro");

const containerLibros = document.getElementById("catalogoContainer");

listar()

 async function agregar(){
    //axios.post("http://localhost:3000/catalogo", {libro: inputLibro.value, autor: inputAutor.value})
    //.then(function(resp){
        //alert("Agregado")
    //})
    //.catch((error)=>{
        //alert("Se produjo un error al guardar")
    //})
    respuesta = await axios.post("http://localhost:3000/catalogo", {libro: inputLibro.value, autor: inputAutor.value})
        alert("Agregado")
}

async function listar(){
 respuesta = await axios.get("http://localhost:3000/catalogo")
 respuesta.data.forEach(element => {

     containerLibros.innerHTML += "<br>" + "<br>" +  `<span>📌${element.libro}</span>` + `<span> — ${element.autor}`+ `<button onClick="agregar()">Agregar</button>` + "<br>"

 });
}


