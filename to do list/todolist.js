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

//faire un bouton tout effacer
let boutonDeux = document.querySelector("#bouton_effacer")
boutonDeux.addEventListener("click", toutEffacer)

function toutEffacer(){
//queryselectorall-->tableau, queryselector-->objet. tous_les_li est un tableau
    let tous_les_li = document.querySelectorAll("li");
//comme tous_les_li est un tableau (plusieurs éléments), il faut faire des boucles
    for (let compteur=0 /*initialisation*/;compteur<tous_les_li.length /*combien de fois l'action est faite*/; compteur++ /*on passe du stylo 0 au stylo 1 au stylo 2. il faut préciser le pattern. ++=+1 */){
        tous_les_li[compteur].remove();
    }
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
//marche pas
let boutonTrois = document.querySelector("#bouton_de")
boutonDeux.addEventListener("click", lancerDes)


function lancerDes(){
    let nombreAlea = math.floor(math.random()*6)+1;
    console.log(nombreAlea)

    let de=document.createElement("div");
    de.innerText=nombreAlea
    document.body.appendChild(de)
}
