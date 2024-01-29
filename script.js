
var numCase = 0 
    // instructions Javascript exécutées après chargement du DOM
var parent=document.querySelector(".listAnalogies")
console.log(parent)


// création d'un curseur personalisé : 
// on prend l'événement de X et Y pour changer leurs valeurs tout au long du déplacement de la souris
let cursor = document.querySelector('.cursor')
document.addEventListener('mousemove', e=> {
    cursor.setAttribute('style', 'top:'+(e.pageY -20)+"px; left:"+ (e.pageX -20)+"px;")
})
document.addEventListener('click', ()=>{
    cursor.classList.add('expand');

    setTimeout(()=>{
        cursor.classList.remove('expand');
    },500);
})

// code pour créer les analogies avec deux classes ( analogie et analogie + numéro de l'analogies pour pouvoir les personalisers si besoin)
data.forEach(function(element) {
    console.log(numCase)
    console.log("Si j'étais " + element + " je serais")
    parent.innerHTML = parent.innerHTML + "<section id='analogie"+numCase+"'class ='analogie analogie"+ numCase +"'><h2>Si j'étais " + data[numCase].Question + ",<br> je serais " +data[numCase].Reponse +"</h2> <img src="+ data[numCase].image+"><p>"+ data[numCase].explication + "</p></section>" 
    numCase = numCase + 1 
    
    
    }
)
;

// Tentative d'animation pour scroll de section en section.

/*var topProfil
var profil = document.querySelector(".moi")
profil.addEventListener("click", function(element){
    topProfil=document.querySelector(".profil").offsetTop
    window.scrollTo({
        top:topProfil,
        behavior:"smooth",
    })
})
var topWindow
var flecheHaut= document.querySelector(".toTop")
flecheHaut.addEventListener("click",function(event){
    topWindow = window.offsetTop
    if (topWindow ==1031){
        window.scrollTo({
            top:0,
            behavior:"smooth",
        })
    }
})
*/


// code pour le pop up : 
// ici on affiche le popup après le click sur le "Mentions légales"
var afficheimage = document.querySelector(".Mentions")
afficheimage.addEventListener("click",function(event){
    document.querySelector(".popup-invisible").classList.add('popup-visible')
    document.querySelector(".popup-invisible").classList.remove('popup-invisible')


})
// ici on cache le popup après le click sur "fermer"
var cachefenetre = document.querySelector(".cache-fenetre")
.addEventListener("click",function(event){
    
    document.querySelector(".popup").classList.add('popup-invisible')
    document.querySelector("popup").classList.remove('popup-visible')

})
// ici le code pour récupérer les information du formulaire.
// ici on récupère le contenue pour l'analogie
let analogies = document.querySelector("#analogies")
let analogiesKey
analogies.addEventListener("keyup", function(event){
    analogiesKey = analogies.value
    console.log(analogiesKey)
    return analogiesKey
})
// ici on récupère la réponse pour l'analogie
let valeurAnalogies = document.querySelector("#valeurAnalogies")
let valeurKey
valeurAnalogies.addEventListener("keyup",function(event){
   
    valeurKey = valeurAnalogies.value
    console.log(valeurKey)
    return valeurKey
})
// ici on récupère l'explication de l'analogie
let explicationAnalogie = document.querySelector("#explicationAnalogies")
let explicationKey
explicationAnalogie.addEventListener("keyup",function(event){
   
    explicationKey = explicationAnalogie.value
    console.log(explicationKey)
    return explicationKey
})
// ici on récupère l'image pour l'analogie
let imageAnalogie = document.querySelector("#imageAnalogies")
let imageKey
imageAnalogie.addEventListener("keyup",function(event){
   
    imageKey = imageAnalogie.value
    console.log(imageKey)
    return imageKey
})
// ici on crée la nouvelle analogie à partir des élément collectés
let formulaireAnalogie = document.querySelector(".analogiesFormulaire")
envoyerForm = document.querySelector("#submit")
envoyerForm.addEventListener("click", function(event){
    event.preventDefault()
    formulaireAnalogie.innerHTML = formulaireAnalogie.innerHTML + "<section class ='analogie analogie"+numCase+"'><h2>Si j'étais " + analogiesKey + ", je serais <span class='rouge'>"+valeurKey+"</span></h2><img src=" + imageKey + "> <p>" + explicationKey + "</p></section>" 

})
// ici on envoie les informations collectés à l'API pour ensuite les stocker.
let submit=document.querySelector("#submit")


submit.addEventListener("click", function(event){
let urlVisitee = "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=louis.duhez&courriel=philippe.gambette@u-pem.fr&message=Si j'étais "+analogiesKey+ "Je serais" +valeurKey+"explication:"+explicationKey+"lien image :"+imageKey 
    fetch(urlVisitee).then(function(response){
        response.json().then(function(data){
            console.log("Réponse reçue : ")
            console.log(data);
        })  
    }) 
})





