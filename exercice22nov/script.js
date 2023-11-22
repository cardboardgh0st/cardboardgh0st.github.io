let MonBouton = document.querySelector("#bouton")
MonBouton.addEventListener("click",CaMarche)
function CaMarche (){
    console.log("ça marche")
    }
//version 2 
document.querySelector("#bouton").addEventListener("click", function (){
    console.log("ça marche")
})

//série pour aujourd'hui
//1: créer une balise image
let MonImage = document.createElement("img")
MonImage.setAttribute("src","https://www.unil.ch/modules/unil-core/img/unil-logo.svg")
document.body.appendChild(MonImage)
 
let MonParagraphe = document.createElement("p")
MonParagraphe.setAttribute("innerText", "abcdefg") /*p ou text ne marche pas, je dois utiliser quoi?*/
document.body.appendChild(MonParagraphe)

