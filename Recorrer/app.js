let win = window;
let dom = document;
let body = dom.body;
let form = dom.forms;
// Nuevas

let divs = dom.querySelectorAll("div");
let div = dom.querySelector("div");
let porId_Nuevo = dom.querySelector("#documento");
let porClase = dom.querySelector(".container");
let div_porClase = dom.querySelectorAll(".container");
let porId = dom.getElementById("documento");
let atributo = dom.getElementsByName("search");
let oldClass = dom.getElementsByClassName("input");
let captura_ul_li = dom.querySelectorAll("ul.list > li.item");

/*
  Pasar a mayuscula
*/
let pasar_mayuscula = dom.getElementById("api");
pasar_mayuscula.innerHTML = pasar_mayuscula.textContent.toUpperCase();

console.log(win);
console.log(dom);
console.log(dom.doctype);
console.log(dom.head);
console.log(body);
console.log(body.children);
console.log(body.children[2]);
console.log(divs);
console.log(div);
console.log("formularios", form);
console.log("css", dom.links);
console.log("css", dom.images);
console.log("por id", porId);
console.log("por id", porId);
console.log("por clase", porClase);
console.log("Por clases", div_porClase);
console.log("Por Atributo", atributo);
console.log("Por old Clas", oldClass);
console.log("Por ul y li", captura_ul_li);

const listaA = [...body.children];
console.log(listaA);
console.log(pasar_mayuscula);
console.log(body.childNodes);

// listaA.children.map((x) => {
//   console.log(x)
// })

//Ejercicio
const $padre = dom.getElementById("cards");
console.log($padre.children);
const $padre_Recorrer = [...$padre.children];
$padre_Recorrer.map((a, i) => {
  if (i % 2 != 0) {
    a.classList.toggle("bg--green");
    console.log(a);
    const hijos_a = a.children;
  }
});
// const $formulario = dom.getElementById("search");
// const $input = dom.querySelector(".search_form > .input");
// $formulario.setAttribute("enctype", "mutipart/form-data");
// $formulario.setAttribute("autocomplete", "of");
// $input.removeAttribute("placeholder", "hola");
// console.log($input);

//Custom propiety css
const $html = dom.documentElement;
console.log($html);
const MineShaft = getComputedStyle($html).getPropertyValue("--MineShaft--");
const white = getComputedStyle($html).getPropertyValue("--white--");
$html.style.setProperty("--MineShaft--", "#fff");
$html.style.setProperty("--white--", "#000");
console.log(MineShaft);
console.log(white);

const $parrafo = dom.querySelector("#elementos");
// console.log($parrafo);
$parrafo.textContent = "lorem";
$parrafo.innerHTML = "lorem";
console.log($parrafo);
