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

head.appendChild(charsetMeta);
head.appendChild(viewportMeta);
head.appendChild(title);
head.appendChild(stylesheet);
head.appendChild(favicon);

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