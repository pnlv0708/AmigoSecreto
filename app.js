const amigos=[];

function agregarAmigo(){
  //obtenemos el valor que se agrega en el input
    let inputAmigo=document.getElementById("amigo").value;

  //validamos que el valor no este vacio. En caso de estarlo, nos avisara. 
    if (inputAmigo===""){
        alert('Por favor, ingrese un nombre');
      } else{
  //Crea el elemento en la lista y deja en blanco el input
        amigos.push(inputAmigo);
        document.getElementById("amigo").value = "";
        mostrarListaAmigo();
      }   
}

function mostrarListaAmigo(){
    let listaAmigos= document.getElementById("listaAmigos");
    listaAmigos.innerHTML="";
    for (let i = 0; i < amigos.length; i++) {
        let nombres = amigos[i];

    // crea el elemento en la lista
        let listaHTML = document.createElement("li");
        listaHTML.textContent = nombres; 
        listaAmigos.appendChild(listaHTML);
      }
}

function sortearAmigo(){
       if (amigos.length === 0) {
        alert("Por favor, inserte un nombre antes de sortear");
      } else {
    let indiceAmigo = Math.floor(Math.random() * amigos.length);
    let resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = "El amigo ganador es: "+amigos[indiceAmigo];
    }
}

