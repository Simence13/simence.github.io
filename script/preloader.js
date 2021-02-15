var opacity = 0;
window.onload = function(){ window.setTimeout(fadeout, 100);}
function fadeout(){setInterval(hide, 15);} 
function hide(){ 
    var body = document.getElementById("loading"); 
    opacity = Number(window.getComputedStyle(body).getPropertyValue("opacity")); 
    if(opacity>0){ 
        opacity -= 0.01; 
        body.style.opacity = opacity 
    } 
     else
        body.style.display = "none";
}

