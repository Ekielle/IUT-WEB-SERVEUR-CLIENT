$(document).ready(function () {
    console.log($("#selection"));
    //$("#selection").hide();
    //$("#h1").hide();
    $('#tgl').on('click', function () {
        $("#selection").toggle();
    });
});

function init(){
    init_xhr();
    document.getElementById("selection").addEventListener("change", function(event) {
        selectionRSS(event);
    });
}

function init_xhr() {
    if (window.XMLHttpRequest) {
        http = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        http = new ActiveXObject("Microsoft.XMLHTTP");
    } else {
        console.log("Votre naviguateur ne supporte pas XMLHttpRequest")
    }
}

function selectionRSS(event){
    console.log(event.target.value);
    var link = event.target.value;
    http.onreadystatechange = function() {
        if(http.readyState == 4){
            if(http.status === 200) {
                printRSSJson(http.response);
            }
        }
    }
}
http.open('POST', "proxyJson.php", true);
http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
http.send("rssURL="+link);


function printRSS(data) {
    document.getElementById("rss-content").innerHTML = "<pre lang='xml'>"+data+"</pre>";
}

function printRSSJson(data) {
    document.getElementById("rss-content").innerHTML = data;
}