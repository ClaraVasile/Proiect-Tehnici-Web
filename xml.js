var w = document.getElementById("get");
var o = document.getElementById("rezultat");

w.onclick = function(){

    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {     
       o.innerText = xhttp.responseText; 
    }
};
xhttp.open("POST", "Request/get.php", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("com=1");
}
