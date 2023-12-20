

//champ texte
let texte=document.createElement("input")
texte.setAttribute("type", "text")
document.body.appendChild(texte)
//bouton
let bouton=document.createElement("input")
bouton.setAttribute("type", "button")
bouton.setAttribute("value", "entrer")
bouton.addEventListener("click", générerImage)
document.body.appendChild(bouton)

//problème dans cette fonction: utilisation de parseInt
function générerImage(){
    //récupérer le nombre
    let accèsbouton = document.querySelector("input[type=text]")
    let nombreentré = parseInt.accèsbouton.value //rend un nombre "5" en texte pas en value (utiliser un input number ou parseInt.accèsbouton.value je crois)
    for (let i = 0; i < nombreentré.value; i++) {
        let monImage = document.createElement("img")
        monImage.setAttribute("src", "https://www.svgheart.com/wp-content/uploads/2021/11/halloween-pumpkin-free-svg-file-SvgHeart.Com.png")
        document.body.appendChild(monImage)}
     }
