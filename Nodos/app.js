import { datos } from "./datos.js";
//indentificamos el elemento por la clase
const $padre = document.querySelector(".container");
//Creamos un elemento
const nodo = document.createElement("p");
const text =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis assumenda eius deleniti nobis expedita, cum velit perspiciatis. Assumenda, voluptatem. Nemo quas inventore dolores delectus, omnis eveniet distinctio quasi aspernatur veniam.";
nodo.innerText = text;
$padre.appendChild(nodo);
const nodo2 = document.createElement("p");
const text2 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis assumenda eius";
nodo2.innerText = text2;
$padre.appendChild(nodo2);

const $lista = document.querySelector("div.container >div.card >ul.list");
console.log($lista);
datos.map((a) => {
  console.log(a);
  const li = document.createElement("li");
  const lista = a.name;
  li.innerHTML = lista;
  li.classList.add("item");
  $lista.appendChild(li);
});
