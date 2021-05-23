
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

  // *********************************************
  // SECCION ACERCA
  // *********************************************
  var imgHtml5 = document.getElementById("html5");
  imgHtml5.addEventListener("mouseover", hoverHtml5);
  imgHtml5.addEventListener("mouseout", outHtml5);
  //
  var imgCss3 = document.getElementById("css3");
  imgCss3.addEventListener("mouseover", hoverCss3);
  imgCss3.addEventListener("mouseout", outCss3);
  //
  var imgBootstrap = document.getElementById("bootstrap");
  imgBootstrap.addEventListener("mouseover", hoverBootstrap);
  imgBootstrap.addEventListener("mouseout", outBootstrap);
  //
  var imgJavascript = document.getElementById("javascript");
  imgJavascript.addEventListener("mouseover", hoverJavascript);
  imgJavascript.addEventListener("mouseout", outJavascript);
  //
  var imgJquery = document.getElementById("jquery");
  imgJquery.addEventListener("mouseover", hoverJquery);
  imgJquery.addEventListener("mouseout", outJquery);
  //
  var imgReact = document.getElementById("react");
  imgReact.addEventListener("mouseover", hoverReact);
  imgReact.addEventListener("mouseout", outReact);
  //
  var imgReactnative = document.getElementById("reactnative");
  imgReactnative.addEventListener("mouseover", hoverReactnative);
  imgReactnative.addEventListener("mouseout", outReactnative);
  //
  var imgPhp = document.getElementById("php");
  imgPhp.addEventListener("mouseover", hoverPhp);
  imgPhp.addEventListener("mouseout", outPhp);
  //
  var imgLaravel = document.getElementById("laravel");
  imgLaravel.addEventListener("mouseover", hoverLaravel);
  imgLaravel.addEventListener("mouseout", outLaravel);
  //
  var imgCodeigniter = document.getElementById("codeigniter");
  imgCodeigniter.addEventListener("mouseover", hoverCodeigniter);
  imgCodeigniter.addEventListener("mouseout", outCodeigniter);
  //
  var imgMysql = document.getElementById("mysql");
  imgMysql.addEventListener("mouseover", hoverMysql);
  imgMysql.addEventListener("mouseout", outMysql);
  //
  var imgPostgresql = document.getElementById("postgresql");
  imgPostgresql.addEventListener("mouseover", hoverPostgresql);
  imgPostgresql.addEventListener("mouseout", outPostgresql);

  // *********************************************
  // SECCION SERVICIOS
  // *********************************************
  var imgResponsive = document.getElementById("item-responsive");
  imgResponsive.addEventListener("mouseover", hoverResponsive);
  imgResponsive.addEventListener("mouseout", outResponsive);
  //
  var imgSeo = document.getElementById("item-seo");
  imgSeo.addEventListener("mouseover", hoverSeo);
  imgSeo.addEventListener("mouseout", outSeo);
  //
  var imgDesarrollo = document.getElementById("item-desarrollo");
  imgDesarrollo.addEventListener("mouseover", hoverDesarrollo);
  imgDesarrollo.addEventListener("mouseout", outDesarrollo);
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

// *********************************************
// SECCION ACERCA
// *********************************************
function hoverHtml5() {
  var imagen = document.querySelector("#html5 img");
  imagen.src="img/html5.svg";
}

function outHtml5() {
  var imagen = document.querySelector("#html5 img");
  imagen.src="img/html5-osc.svg";
}

// 
function hoverCss3() {
  var imagen = document.querySelector("#css3 img");
  imagen.src="img/css3.svg";
}

function outCss3() {
  var imagen = document.querySelector("#css3 img");
  imagen.src="img/css3-osc.svg";
}

// 
function hoverBootstrap() {
  var imagen = document.querySelector("#bootstrap img");
  imagen.src="img/bootstrap.svg";
}

function outBootstrap() {
  var imagen = document.querySelector("#bootstrap img");
  imagen.src="img/bootstrap-osc.svg";
}

// 
function hoverJavascript() {
  var imagen = document.querySelector("#javascript img");
  imagen.src="img/javascript.svg";
}

function outJavascript() {
  var imagen = document.querySelector("#javascript img");
  imagen.src="img/javascript-osc.svg";
}

// 
function hoverJquery() {
  var imagen = document.querySelector("#jquery img");
  imagen.src="img/jquery.svg";
}

function outJquery() {
  var imagen = document.querySelector("#jquery img");
  imagen.src="img/jquery-osc.svg";
}

// 
function hoverReact() {
  var imagen = document.querySelector("#react img");
  imagen.src="img/react.svg";
}

function outReact() {
  var imagen = document.querySelector("#react img");
  imagen.src="img/react-osc.svg";
}

// 
function hoverReactnative() {
  var imagen = document.querySelector("#reactnative img");
  imagen.src="img/reactnative.svg";
}

function outReactnative() {
  var imagen = document.querySelector("#reactnative img");
  imagen.src="img/reactnative-osc.svg";
}

// 
function hoverPhp() {
  var imagen = document.querySelector("#php img");
  imagen.src="img/php.svg";
}

function outPhp() {
  var imagen = document.querySelector("#php img");
  imagen.src="img/php-osc.svg";
}

// 
function hoverLaravel() {
  var imagen = document.querySelector("#laravel img");
  imagen.src="img/laravel.svg";
}

function outLaravel() {
  var imagen = document.querySelector("#laravel img");
  imagen.src="img/laravel-osc.svg";
}

// 
function hoverCodeigniter() {
  var imagen = document.querySelector("#codeigniter img");
  imagen.src="img/codeigniter.svg";
}

function outCodeigniter() {
  var imagen = document.querySelector("#codeigniter img");
  imagen.src="img/codeigniter-osc.svg";
}

// 
function hoverMysql() {
  var imagen = document.querySelector("#mysql img");
  imagen.src="img/mysql.svg";
}

function outMysql() {
  var imagen = document.querySelector("#mysql img");
  imagen.src="img/mysql-osc.svg";
}

// 
function hoverPostgresql() {
  var imagen = document.querySelector("#postgresql img");
  imagen.src="img/postgresql.svg";
}

function outPostgresql() {
  var imagen = document.querySelector("#postgresql img");
  imagen.src="img/postgresql-osc.svg";
}

// *********************************************
// SECCION SERVICIOS
// *********************************************
function hoverResponsive() {
  var imagen = document.querySelector("#item-responsive img");
  imagen.src="img/responsive-hover.svg";
}

function outResponsive() {
  var imagen = document.querySelector("#item-responsive img");
  imagen.src="img/responsive.svg";
}
//
function hoverSeo() {
  var imagen = document.querySelector("#item-seo img");
  imagen.src="img/seo-hover.svg";
}

function outSeo() {
  var imagen = document.querySelector("#item-seo img");
  imagen.src="img/seo.svg";
}
//
function hoverDesarrollo() {
  var imagen = document.querySelector("#item-desarrollo img");
  imagen.src="img/desarrollo-hover.svg";
}

function outDesarrollo() {
  var imagen = document.querySelector("#item-desarrollo img");
  imagen.src="img/desarrollo.svg";
}

//
window.addEventListener("load", iniciar);