<?php
$url = $_POST["rssURL"];
if ($url != ""){
    $monRSSDoc = new DOMDocument();
    if ($monRSSDoc->load($url)){
        $xml = simplexml_load_string($monRSSDoc->saveXML());
        echo json_encode($xml);
    }else{
        echo "<h3>erreur de lecture</h3>";
    }
}else{
    echo "<h3>URL vide</h3>";
}
?>