document.querySelector("#bouton").addEventListener("click", creerBalisediv)

function recuperer(){
    let nombre = document.querySelector("#champtexte").value
    console.log(nombre)
}//pas utilisée maintenant qu'on a la fonction creerBalisediv, et c'est pour ça qu'on répète la ligne 4 à la ligne 8, pour pas appeller deux fonctions
function creerBalisediv(){
    let nombre = document.querySelector("#champtexte").value
for (let index = 0; index < nombre; index++) {
    let balisediv = document.createElement("div")
    balisediv.innerText=3
    document.body.appendChild(balisediv)
}
}

//ça me fait pas nombre balise mais une seule balise. ok parce que j'avais laissé nombre.length dans la boucle au lieu de nombre