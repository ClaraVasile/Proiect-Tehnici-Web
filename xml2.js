var q = document.getElementById("rezultat");

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {       
   q.innerText = xhttp.responseText; 
}
};
xhttp.open("GET", "Request/get.php?com=1", true);
xhttp.send();

function Editeaza(btn){
    var w = document.getElementById("test");
    w.removeAttribute("readonly");
    btn.innerText = "FINISH";
    btn.onclick = function(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {   
        alert(xhttp.responseText);
        }
        };
        xhttp.open("PUT", "Request/get.php?com=1", true);
        xhttp.send();
        w.setAttribute("readonly","true");
        btn.innerText = "UPDATE";
        btn.onclick = function(){
            Editeaza(btn);
        }
    }
}

function Editeaza2(btn){
    var w = document.getElementById("french");
    w.removeAttribute("readonly");
    btn.innerText = "FINISH";
    btn.onclick = function(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {  
        alert(xhttp.responseText);
        }
        };
        xhttp.open("PUT", "Request/get.php?com=2", true);
        xhttp.send();
        w.setAttribute("readonly","true");
        btn.innerText = "UPDATE";
        btn.onclick = function(){
            Editeaza2(btn);
        }
    }
}

function Sterge(container){
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {      
            alert(xhttp.responseText);
        }
        };
        xhttp.open("DELETE", "Request/get.php?com=2", true);
        container.remove();
        xhttp.send();
}

