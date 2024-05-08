//Slideshow - Carrusel

var bgCounter = 0;

var listaImgBg = [
    "url('media/logo-white.png')",
    "url('media/logo-white2.png')",
    "url('media/logo-white3.png')"
]; 

function heroSlideshow(){
        bgCounter = (bgCounter +1) % listaImgBg.length;
        document.getElementById("heroImage").style.backgroundImage = listaImgBg[bgCounter];
        console.log(listaImgBg[bgCounter]);
    }





//codigo modal formulario

function modalForm() {
    document.getElementById("modalForm").style.display="block";
    //La siguiente linea pausa el scroll
    document.documentElement.style.overflow="hidden";
}

function cerrarModalForm(){
    document.documentElement.style.overflow="auto"; 
    document.getElementById("modalForm").style.display="none";
}

//codigo menu


//Esta variable guarda la posición anterior del scorll
var posPreviaScroll = document.documentElement.scrollTop;

//Cuando hagamos scroll se llamara a la función esconderMostrarMenu()
window.onscroll = function() {esconderMostrarMenu()};

function esconderMostrarMenu(){

    var posActualScroll = document
                            .getElementsByTagName("body")[0]
                            .scrollTop;

    var menu = document.getElementById("menu");
    if (posPreviaScroll >= posActualScroll) {
        //document.getElementById("menu").style.display = "block"; codigo del profe
        //Vamos a cambiar añadir la clase para poner efectos. 
        menu.classList.remove("oculto");
    } else {
        //menu.style.display = "none"; codigo del profe
        menu.classList.add("oculto");
    }

    //Al finalizar el scroll actualizamos la posicion previa, si no no volveraa a aparecer el menu
    posPreviaScroll = posActualScroll;
}

//
//
//
//Aqui empezara la funcion para el modalLightBoxGaleria

var listaRutaImgGal = []; //Array vacio, hacemos un bucle después para recorrerlo. 
//Dejamos este array aquí fuera porque si no no accederemos a el desde las funciones.

//
//function modalLightboxGaleria(){
//
//    //Mostramos el modal
//    document.getElementById("modalLightboxGaleria").style.display = "block";
//    //document.documentElement.style.overflow = "hidden";
//
//    //Variable para contener las imagenes
//    var listaImgGal = document.getElementsByClassName("imgProfesional");
//   //El bucle recorre el array que tiene la clase de las img. 
//    //Lo pushea dentro del array vacio lista RutaImgGal
//    //Pushea el src del img
//    for (var i=0; i<listaImgGal.length; i++){
//        listaRutaImgGal.push(listaImgGal[i].src);
//    }
//
//    //Creamos un elemento html dentro del html. Esto muestra la imagen.
//////    document.getElementById("galeriaMostrar").innerHTML = "<img class='imagenLightbox' src='media/profesional1.jpg'>";

//}



function readyLightbox() {
    var listaImgGal = document.getElementsByClassName("imgProfesional");

    for (var i=0; i<listaImgGal.length; i++){
        listaRutaImgGal.push(listaImgGal[i].src);
    }

    for (var i=0; i<listaImgGal.length; i++){
        listaImgGal[i].addEventListener('click', openLightBox);
    }

    function openLightBox(event){
        var rutaImgClicada = event.currentTarget.src;
        numeroImg = listaRutaImgGal.indexOf(rutaImgClicada);
        document.getElementById("galeriaMostrar").innerHTML = "<img class='imagenLightbox' src='" + listaRutaImgGal[numeroImg] + "'>";
        document.getElementById("botonAnterior").style.display = "block";
        document.getElementById("botonSiguiente").style.display = "block";
        closeLightbox();
    }

    function closeLightbox(){
        window.addEventListener("click", function(event){ //Al abrir llave llamamos la funcion a la vez que la definimos.
            
            if(!event.target.matches(".imagenLightbox") && !event.target.matches(".imgProfesional") && !event.target.matches(".bontonLb") && !event.target.matches(".fa-solid") ){
                document.getElementById("galeriaMostrar").innerHTML = "";
                document.getElementById("botonAnterior").style.display = "none";
                document.getElementById("botonSiguiente").style.display = "none";
            }
        });
    }

    document.getElementById("galeriaMostrar").addEventListener("click", function() {
        // Mostrar los botones cuando se hace clic en una imagen de la galería
        document.getElementById("botonAnterior").style.display = "block";
        document.getElementById("botonSiguiente").style.display = "block";
    }); 
}

//Variable contandor, esta fuera de las funciones para que sea indepndiente a estas.
var numeroImg = 0;

function nextImgGal(){


    // a%b = while(a>=b) a=a-b
    numeroImg = (numeroImg+1) % document.getElementsByClassName("imgProfesional").length;

    document.getElementById("galeriaMostrar").innerHTML = "<img class='imagenLightbox' src='" + listaRutaImgGal[numeroImg] + "'>";

}

function prevImgGal(){

    numeroImg = (numeroImg-1 + document.getElementsByClassName("imgProfesional").length) 
    % 
    document.getElementsByClassName("imgProfesional").length;

    document.getElementById("galeriaMostrar").innerHTML = "<img class='imagenLightbox' src='" + listaRutaImgGal[numeroImg] + "'>";

}

//
//Aquí empieza el código de las Pestañas


function marcarPestana(contenedorAMostrar, tabClicada){

    var listaPestanas = document.getElementsByClassName("divPestana");

    for (var i=0; i<listaPestanas.length; i++){
        listaPestanas[i].style.display="none";
    }

    document.getElementById(contenedorAMostrar).style.display="block";

    var tabLinks = document.getElementsByClassName("clickPestana");

    for (var i=0; i<tabLinks.length; i++){
        tabLinks[i].classList.remove('pestanaActiva');
    }

    document.getElementById(tabClicada).classList.add("pestanaActiva");

    document.getElementById(contenedorAMostrar).style.display="block";


        // Para quitar y poner animacion

    var foto = document.getElementsByClassName("foto");

    for (var i=0; i<foto.length; i++){
        foto[i].classList.remove("fotoAnimada");
    }

    var foto2= document.getElementById(contenedorAMostrar).children;

    for (var i=0; i<foto2.length; i++){
        foto2[i].classList.add("fotoAnimada");
    }

}
