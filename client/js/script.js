var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.write( this.responseText);
    }
};
xhttp.open("GET", "http://127.0.0.1:3000/", true);
xhttp.send();