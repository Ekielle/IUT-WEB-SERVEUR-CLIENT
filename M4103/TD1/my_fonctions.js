function init(){
    defTitre1();
    defTitre2();
    defTitre3();
    defTitre4();
    inverseTexte();
    dateModified();
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

function dateModified(){
    var date = new Date(document.lastModified);
    var sDate = date.getDay() + " " +  month(date.getMonth()) + " " + date.getFullYear();
    var hDate = date.getHours() + " " + date.getMinutes() + " " + date.getSeconds();
    var author = document.querySelector("meta[name = 'author']").getAttribute("content");
    document.getElementById("date_modif").innerText = "Voici la date de modification : " + sDate + " à " + hDate + " par " + author;

}

function month(m){
    const months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"]
    return months[m];
}