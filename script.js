//Sélection de la section "listAnalogies" pour pouvoir y incorporer les Analogies
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

//Création d'une variable pour pouvoir stocker le nombre de l'analogies après chaque tour de la fonction
var numCase = 0 
data.forEach(function(element) {
    //console.log(numCase)
    //console.log("Si j'étais " + element + " je serais")
    parent.innerHTML = parent.innerHTML + 
    "<section id='analogies" + numCase + "'class ='analogies_bloc'><div class='analogies_explication'><h2>Si j'étais " + data[numCase].Question +"<br>Je serai " + data[numCase].Reponse + " </h2> <br> <p>"+data[numCase].explication+"</p></div><div class='analogies_images'><img src=" + data[numCase].image + "></div></section>"
    numCase = numCase + 1 
    
    
    }
)
;

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
    formulaireAnalogie.innerHTML = formulaireAnalogie.innerHTML + "<section class ='analogies_bloc'><div class='analogies_explication'<h2>Si j'étais " + analogiesKey + ", je serais <span class='rouge'>"+valeurKey+"</span> <p>" + explicationKey + "</p></h2></div><div class='analogies_images'><img src=" + imageKey + "></section>" 

})
// ici on envoie les informations collectés à l'API pour ensuite les stocker.
let urlVisitee = "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=louis.duhez&courriel=philippe.gambette@u-pem.fr&message=Si j'étais "+analogiesKey+ "Je serais" +valeurKey+"explication:"+explicationKey+"lien image :"+imageKey 
let submit=document.querySelector("#submit")
submit.addEventListener("click", function(event){
    fetch(urlVisitee).then(function(response){
        response.json().then(function(data){
            console.log("Réponse reçue : ")
            console.log(data);
        })  
    }) 
})
