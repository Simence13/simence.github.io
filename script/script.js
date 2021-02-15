var preload = document.getElementById('loading');
        setTimeout(function preloader(){preload.style.display = "true"}, 2000);
        var opacity = 0; 
        var intervalID = 0; 
        window.onload = fadeout; 
        function fadeout(){ 
               setInterval(hide, 50); 
        } 
        function hide(){ 
            var body = document.getElementById("loading"); 
            opacity = Number(window.getComputedStyle(body).getPropertyValue("opacity")); 
            if(opacity>0){ 
                opacity -= 0.01; 
                body.style.opacity = opacity 
            } 
            else
                clearInterval(intervalID);           
        }  