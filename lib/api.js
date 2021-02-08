const { Processing } = require("processing");

var Processing = require("processing");


var canvases = document.getElementsByTagName("canvas");

for(var i = 0;i < canvases.length;i++){
    if (canvases[i].hasAttribute("processing-file")) {
        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } 
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var func = Processing.compile(this.responseText)
                new Processing(canvases[i],func)
            }
        };
        xmlhttp.open("GET", canvases[i].getAttribute("processing-file"), true);
        xmlhttp.send(); 
    }
}