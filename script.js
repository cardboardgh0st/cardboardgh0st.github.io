function afficherConsole(){
    console.log("salut!")
}
//faire un joli bouton:
//1.recupère element
let monElement = document.querySelector("input");
//2.ajouter comportement à element
monElement.addEventListener("click", afficherConsole);
