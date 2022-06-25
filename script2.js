// variavel que vai receber o click do botão
const button = document.querySelector('button');

// quando o botão for clicado chama a classe popup-wrapper
const popup = document.querySelector('.popup-wrapper');

// variavel que armazena a referencia do X
const closedButton = document.querySelector (".popup-closed");

// quando o botão é clicado muda o estado do display na class popup-wrapper de none para block
button.addEventListener("click", () => {
 popup.style.display = "block"
 })

 popup.addEventListener ("click", event => {
    const  classNameOfClickedElement = event.target.classList[0]
    const classNames =  ['popup-closed','popup-wrapper','popup-link']
    const shouldClosedPopup = classNames.some(className => className===classNameOfClickedElement)

if (shouldClosedPopup){
    popup.style.display = "none"
}}
    )
   
    