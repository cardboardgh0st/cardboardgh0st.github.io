const taille=20

for (let i = 0; i < taille; i++) {
    for (let j = 0; j < taille; j++) {
       let monDiv=document.createElement("div")
       monDiv.innerHTML = "&nbsp;" 
       monDiv.addEventListener("click", function(){
        let couleurSelectionnee = document.querySelector("#maCouleur").value
        monDiv.style.backgroundColor = couleurSelectionnee
       })
       document.body.appendChild(monDiv)  
    }
    let monBr = document.createElement("br")
    document.body.appendChild(monBr)  
}