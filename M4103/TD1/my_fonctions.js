function init(){
    defTitre1();
    defTitre2();
    defTitre3();
    defTitre4();
    inverseTexte();
    dateModif();
    majNbJours();
    majHorloge1();
    majHorloge2();
    majGraphH();
    majHeure();
    majSaisie();
    menu();
}


function defTitre1() {
    var titre = document.getElementById("titre").innerText = "H1 un";
}

function  defTitre2() {
    var h2s = document.getElementsByTagName("h2");
    if(h2s.length > 0)
    {
        document.getElementById("titre").innerText = h2s[0].innerText;
    }
}

function defTitre3(){
    var h2s = document.getElementsByTagName("h2");
    if(h2s.length > 0)
    {
        document.getElementById("titre").innerText = h2s[h2s.length-1].innerText;
    }

    else
    {
        document.getElementById("titre").innerText = "Fournier Nathan"
    }
}

function defTitre4 (){
    var FOL = document.getElementsByClassName("firstOrLast");

    if(FOL.length > 0) {
        if (FOL.length%2 == 0) {
            document.title = FOL[0].innerText;
        }
        else {
            document.title = FOL[FOL.length - 1].innerText;
        }
    }
    else
    {
        document.title = "Fournier Nathan"
    }
}

function inverseTexte() {
    var ps = document.getElementsByTagName("p");
    if(ps.length > 1){
        var tmp;
        for(var i=0; i<ps.length/2; i++){
            tmp = ps[i].innerText;
            ps[i].innerText = ps[ps.length-(i+1)].innerText;
            ps[ps.length-(i+1)].innerText = tmp;
        }
    }
}

function dateModif() {
    var jours = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
    var mois = new Array("janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre");
    aujourdhui = new Date();
    var modification = document.getElementById("date_modif");
    modification.innerText += "Voici la dernière date de modification :";
    modification.innerText += " " + jours[aujourdhui.getDay()];
    modification.innerText += " " + aujourdhui.getDate();
    modification.innerText += " " + mois[aujourdhui.getMonth()];
    modification.innerText += " " + aujourdhui.getFullYear();
    modification.innerText += " par " + document.querySelector("meta[name=author]").getAttribute("content");
}

function majNbJours() {
    var juillet = new Date(2019, 1, 1);
    var date = new Date();
    var jours = document.getElementsByTagName("p")[2];
    jours.innerText = "il reste " + Math.round((juillet - date)/(1000*60*60*24)) + " jours avant le 1 janvier 2019";
}

function majHorloge1() {
    var horloge = document.getElementById("horloge");
    function majHeure(){
        var temps = new Date();
        horloge.innerText = temps.getHours() + ":" + temps.getMinutes() + ":" + temps.getSeconds();
    }
    majHeure();
    window.setInterval(majHeure, 1000);
}

function majHorloge2() {
    var horloge = document.getElementById("horloge");
    function majHeure(){
        var temps = new Date();
        horloge.innerText = temps.getHours() + ":" + temps.getMinutes() + ":" + temps.getSeconds();
        window.setTimeout(majHeure, 1000);
    }
    majHeure();
}

function majGraphH() {
    var numeros = new Array('images/0.gif', 'images/1.gif', 'images/2.gif','images/3.gif',
        'images/4.gif','images/5.gif','images/6.gif','images/7.gif',
        'images/8.gif', 'images/9.gif');
    var images = document.getElementsByTagName("img");
    function majHeure(){
        var temps = new Date();
        images[0].src = numeros[Math.trunc(temps.getHours() / 10)];
        images[1].src = numeros[temps.getHours() % 10];
        images[2].src = numeros[Math.trunc(temps.getMinutes() / 10)];
        images[3].src = numeros[temps.getMinutes() % 10];
        images[4].src = numeros[Math.trunc(temps.getSeconds() / 10)];
        images[5].src = numeros[temps.getSeconds() % 10];
    }
    majHeure();
    window.setInterval(majHeure, 1000);
}

function majSaisie() {
    console.log("test");
    var formulaire = document.getElementsByTagName("input")[0];
    if(formulaire.value == "") {
        formulaire.className = "blanc";
    }
    else if(formulaire.value >= '0' && formulaire.value <= '9'){
        formulaire.className = "vert";
    }
    else {
        formulaire.className = "rouge";
    }
}

var plusOuMoins = "plus";

function menu() {
    var image = document.getElementsByTagName("img")[6];
    if (plusOuMoins == "plus") {
        var contenu = document.getElementsByClassName("menu");
        image.src = "images/moins.gif";
        plusOuMoins = "moins";
        for (var i = 0; i < 3; i++) {
            contenu[0].className = "menu2";
        }
    }
    else {
        var contenu = document.getElementsByClassName("menu2");
        image.src = "images/plus.gif";
        plusOuMoins = "plus";
        for (var i = 0; i < 3; i++) {
            contenu[0].className = "menu";
        }
    }
}