import { data } from "./datos.js";
const $fragem = document.createDocumentFragment();
const $contenedor = document.querySelector(".container")
$contenedor.classList.add('cards')

data.map(a => {
  const $card = document.createElement("div");
  const $card_header = document.createElement("div");
  const $card_title = document.createElement("h2");
  const $card_body = document.createElement("div");
  const $card_img = document.createElement("img");
  const $card_paragrahp = document.createElement("p");
  const $button = document.createElement("a");
  const $button_span = document.createElement("span");
  const $button_icon = document.createElement("i")
  const $cards=document.createElement("div")
  // 
  $cards.appendChild($card)
  $card.appendChild($card_header)
  $card.appendChild($card_title)
  $card.appendChild($card_body);
  $card.appendChild($card_img);
  $card.appendChild($card_paragrahp);
  $card.appendChild($button);
  $card.appendChild($button_span);
  $card.appendChild($button_icon)
  // Vamos agregarle el contenido

  $card_title.innerHTML = a.title
  console.log($card_title)
  $card_paragrahp.innerHTML = a.paragraph
  console.log($card_paragrahp)
  $card_img.innerHTML = a.src
  $card_img.setAttribute("src", a.src)
  console.log($card_img)
  $button.href = a.url
  $button_span.innerText="Saber Mas"
  $button.appendChild($button_span)
  $button.appendChild($button_icon)
  console.log($button)
  
  // Estilos css
  $cards.classList.add("cards")
  $card.classList.add("card")
  $card_header.classList.add("card__header")
  $card_title.classList.add("card__title")
  $card_body.classList.add("card__body")
  $card_img.classList.add("card__img")
  $card_paragrahp.classList.add("card__paragraph")
  $button.classList.add("button")
  $button.classList.add("button","button--outline")
  $button_span.classList.add("button__text")
  $button_icon.classList.add("bx", "bxs-chevron-right", "button__icon")
 
  $fragem.appendChild($cards)

})
  $contenedor.appendChild($fragem)
