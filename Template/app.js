import { comentarios } from "./modulo.js";
const $rot = document.querySelector("#root");
const $plantilla = document.querySelector("#plantilla").content;
const $fragmento = document.createDocumentFragment();
const $section = document.createElement("section");
$section.classList.add("cards");
console.log($plantilla);
comentarios().then((lista) => {
  lista.forEach((comentario) => {
    $plantilla.querySelector("div >h2").textContent = comentario.name;
    $plantilla.querySelector("div > div > p").textContent = comentario.email;
    $plantilla.querySelector("div >div > p").textContent = comentario.body;
    $plantilla.querySelector("div").classList.add("card");
    const $clon = document.importNode($plantilla, true);
    $fragmento.appendChild($clon);

    // const $div = document.createElement("div");
    // const $h2 = document.createElement("h2");
    // const $p1 = document.createElement("p");
    // const $p2 = document.createElement("p");

    // $h2.TextContent = comentario.name;
    // $p1.TextContent = comentario.email;
    // $p2.textContent = comentario.body;
    // $div.appendChild($h2);
    // $div.appendChild($p1);
    // $div.appendChild($p2);
    // $rot.appendChild($div);
  });
  $section.appendChild($fragmento);
  $rot.appendChild($section);
});
