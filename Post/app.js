import { post } from "./modulo.js";

const $rot = document.querySelector("#rot");
const $section = document.createElement("section");

const $form = document.createElement("form");
const $label = document.createElement("label");
const $input = document.createElement("input");
const $button = document.createElement("button");

$form.appendChild($label);
$form.appendChild($input);
$form.appendChild($button);
$label.textContent = "Digite";
$button.textContent = "Enviar";
$input.setAttribute("type", "text");
$button.setAttribute("type", "submit");

$rot.appendChild($form);
$rot.appendChild($section);

const agregarpost = (event) => {
  event.preventDefault();
  console.log($input.value);
  if (/^[0-9,$]*$/.test($input.value)) {
    post($input.value)
      .then((response) => {
        const $div = document.createElement("div");
        const $h2 = document.createElement("h2");
        const $p = document.createElement("p");
        $h2.textContent = response.title;
        $p.textContent = response.body;
        $div.appendChild($h2);
        $div.appendChild($p);
        $section.insertBefore($div, $section.firstChild);
      })
      .catch();
  }
};

$form.addEventListener("submit", agregarpost);
$input.addEventListener("keypress", function () {
  if (/^[0-9,$]*$/.test($input.value)) {
    $input.classList.remove("error");
    $input.classList.add("bien");
  } else {
    $input.classList.remove("bien");
    $input.classList.add("error");
  }
});
