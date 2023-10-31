let monBouton = document.querySelector("#bouton_ajouter");
monBouton.addEventListener("click",ajouterElement);

//clic du boutton-->récupère le champ de texte, crée <li>, injecte le texte, ajoute <li> dans <ul>
function ajouterElement(){
    let monChampTexte= document.querySelector("#champ_texte");
    let valeurChamp= monChampTexte.value;
    let elementLi= document.createElement("li");
    elementLi.innerText = valeurChamp;
    document.querySelector("ul").appendChild(elementLi);
//vider champ (tjrs dans la fonction)
monChampTexte.value = ""
}


//passe la souris sur h1-->son s'enclenche
let monTitre=document.querySelector("h1")

/* 
    monTitre.addEventListener("mouseover",jouerSon)
function jouerSon({
    let bruit= new Audio ("link.mp3");
    bruit.play();
})
*/