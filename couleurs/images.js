const gridContainer = document.querySelector(".contain-portofolio");
const watcher = document.querySelector(".intersection-watcher");
const nbPhotos = 105;

var derPhoto = 1;
var nbPhotosPage = 6;
var urlPhoto = "palettes/img";
var compteur = "00";
var extension = ".jpg";


addContent = () => {

    for (i = derPhoto; (i < (derPhoto + nbPhotosPage) && (i <= nbPhotos) ); i++) {
        // gestion du compteur pour le numero des images
        if (i >= 10) {
            compteur = "0";
        }
        if (i >= 51) {
            extension = ".png";
        }
        if (i >= 63) {
            extension = ".PNG";
        }
        if (i >= 100) {
            compteur = "";
        }

        urlComplete = urlPhoto + compteur + i + extension;

        let myDIV = document.createElement("div"); // crée la div
        let mySousDIV = document.createElement("div"); // crée la div de div
        let myh3 = document.createElement("h3"); // crée la div de div
        let myTexteh3 = document.createTextNode("Palette " + i);

        myDIV.classList.add('portofolio'); // ajoute une classe
        mySousDIV.classList.add('photo'); // ajoute une classe
        mySousDIV.style.backgroundImage = 'url(' + urlComplete + ')';

        document.querySelector(".contain-portofolio").appendChild(myDIV); // ajoute la div dans le dom
        myDIV.appendChild(mySousDIV); // ajoute la div dans le dom
        myDIV.appendChild(myh3); // ajoute le titre h3
        myh3.appendChild(myTexteh3); // ajoute le texte dans le h3
    }
}

const handleIntersect = entries => {
    console.log(entries);
    if (entries[0].isIntersecting) {
        if (derPhoto <= nbPhotos) {
            addContent();
            derPhoto = derPhoto + nbPhotosPage;
        }
    }
}

new IntersectionObserver(handleIntersect).observe(watcher)


