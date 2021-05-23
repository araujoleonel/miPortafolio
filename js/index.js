
var oculto = true;

function iniciar() {
  // *********************************************
  // NAVEGACION
  // *********************************************
  var botonToggle = document.getElementById("navega_icono");
  botonToggle.addEventListener("click", mostrarMenu);
  //
  var menu = document.getElementById("navega__menu");
  menu.addEventListener("click", ocultarMenu);
  //
  var enlaces = document.querySelectorAll(".navega__enlaces a");
  enlaces.forEach(opcion => {
    opcion.addEventListener("click", function(){
      enlaces.forEach(opc => opc.classList.remove("navega__activo"));
      this.classList.add("navega__activo");
    });
  });
}

// *********************************************
// NAVEGACION
// *********************************************
function mostrarMenu() {
  var elemento = document.getElementById("navega__menu");
    elemento.style.transform = "translateX(-104%)";
    oculto = false;
}

function ocultarMenu() {
  var elemento = document.getElementById("navega__menu");
  if(!oculto){
    elemento.style.transform = "translateX(100%)";
    oculto = true;
  }
}

window.addEventListener("resize", function () {
  if (window.innerWidth >= 840) { 
    var elemento = document.getElementById("navega__menu");
    if(oculto){
      elemento.style.transform = "translateX(0%)";
    }else{
      elemento.style.transform = "translateX(0%)";
    }
    
  }
});

window.addEventListener("scroll", function () {
  var elemento = document.getElementById("navega");
  if(window.scrollY > 100) {
    elemento.style.background = "rgba(0,0,0,0.9)";
  }else{
    elemento.style.background = "transparent";
  }
});


//
window.addEventListener("load", iniciar);