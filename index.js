const body = document.querySelector("body");

body.addEventListener("mousemove", 
    function(event) {
        let span = document.createElement("span");
        let xPos = event.offsetX;
        let yPos = event.offsetY;
        let randomSize = Math.random() * 100 + 1;
        span.style.left = xPos + "px";
        span.style.top = yPos + "px";
        span.style.height = randomSize + "px";
        span.style.width = randomSize + "px";
        body.appendChild(span);
        setTimeout(
            function(){
                span.remove();
            }
            ,3000
        );
    }
)