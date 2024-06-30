const body = document.getElementById("animation-body");

// for pc
body.addEventListener("mousemove", function (event) {
  let span = document.createElement("span");
  let xPos = event.offsetX;
  let yPos = event.offsetY;
  let randomSize = Math.random() * 100 + 1;
  span.style.left = xPos + "px";
  span.style.top = yPos + "px";
  span.style.height = randomSize + "px";
  span.style.width = randomSize + "px";
  body.appendChild(span);
  setTimeout(function () {
    span.remove();
  }, 3000);
});

function eventHandler(event) {
  // console.log(event)
  let span = document.createElement("span");
  let xPos = event.touches[0].screenX;
  let yPos = event.touches[0].screenY;
  let randomSize = Math.random() * 100 + 1;
  span.style.left = xPos + "px";
  span.style.top = yPos + "px";
  span.style.height = randomSize + "px";
  span.style.width = randomSize + "px";
  body.appendChild(span);
  setTimeout(function () {
    span.remove();
  }, 3000);

  console.log(event.touches);
}

//for mobile
body.addEventListener("touchstart", eventHandler);
body.addEventListener("touchmove", eventHandler);
