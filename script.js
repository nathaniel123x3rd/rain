var title = document.createElement("title");
title.textContent = "Cloud Rain";

var charsetMeta = document.createElement("meta");
charsetMeta.setAttribute("charset", "utf-8");

var viewportMeta = document.createElement("meta");
viewportMeta.setAttribute("name", "viewport");
viewportMeta.setAttribute("content", "width=device-width");

var stylesheet = document.createElement("link");
stylesheet.setAttribute("href", "style.css");
stylesheet.setAttribute("rel", "stylesheet");
stylesheet.setAttribute("type", "text/css");

var favicon = document.createElement("link");
favicon.setAttribute("rel", "icon");
favicon.setAttribute("href", "/cloud.webp");
favicon.setAttribute("sizes", "192x192");

var head = document.head || document.getElementsByTagName("head")[0];
head.append(charsetMeta, viewportMeta, title, stylesheet, favicon);

var containerDiv = document.createElement("div");
containerDiv.className = "container";
var cloudDiv = document.createElement("div");
cloudDiv.className = "cloud";
containerDiv.appendChild(cloudDiv);
document.body.appendChild(containerDiv);

function rain() {
  let cloud = document.querySelector('.cloud');
  let e = document.createElement('div');
  let left = Math.floor(Math.random() * 310);
  let width = Math.random() * 5;
  let height = Math.random() * 50;
  let duration = Math.random() * 0.5;
  
  e.classList.add('drop');
  cloud.appendChild(e);
  e.style.left = left + 'px';
  e.style.width = 0.5+width + 'px';
  e.style.height = 0.5+height + 'px';
  e.style.animationDuration = 1+duration+'s';
    
  setTimeout(function(){
    cloud.removeChild(e)
  },2000)
}

setInterval(function() {
  rain()
},20);
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.minHeight = "100vh";
document.body.style.background = "#1b1b1b";

var container = document.querySelector(".container");

if (container) {
  Object.assign(container.style, {
    position: "relative",
    width: "100%",
    height: "400px",
    display: "flex",
    justifyContent: "center",
    borderBottom: "1px solid rgba(255,255,255,0.1)"
  });
}
var style = document.createElement("style");
style.textContent = `
  .container .cloud {
    position: relative;
    width: 320px;
    height: 100px;
    border-radius: 100px;
    filter: drop-shadow(8px 8px 0 #0005);
    animation: animateCloud 2s steps(1) infinite;
  }
`;


document.head.appendChild(style);