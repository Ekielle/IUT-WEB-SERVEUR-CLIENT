function defTitre1() {
    var titre = document.getElementById("titre").innerText = "H1 un";
    defTitre2();
}

function  defTitre2() {
    var h2s = document.getElementsByTagName("h2");
    if(h2s.length > 0)
    {
        document.getElementById("titre").innerText = h2s[0].innerText;
    }
    defTitre3();
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
    defTitre4();
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
    inverseTexte();
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