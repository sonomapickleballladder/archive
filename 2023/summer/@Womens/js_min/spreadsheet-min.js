function setrefresh(){try{hide(0)}catch(e){}let e=document.createElement("p");e.id="loader",e.innerHTML='<div class="bigger loader"></div>';let t=document.createElement("iframe");function r(){let e=byId("link").getAttribute("url");try{if(e.length<1){let e="This page will be available once the Ladder Season is underway.",t=document.title;return document.body.innerHTML=e,document.title=t,hide(0),!1}}catch(e){}let r=byId("link").getAttribute("append")?byId("link").getAttribute("append").trim():"&widget=false&headers=false&gridlines=true&chrome=false";t.referrerpolicy=byId("link").getAttribute("referrerpolicy")?byId("link").getAttribute("referrerpolicy").trim():"no-referrer",t.sandbox=byId("link").getAttribute("sandbox")?byId("link").getAttribute("sandbox").trim():"allow-scripts";try{"Womens"==thisLadder&&t.classList.add("wml")}catch(e){}t.src=e+r,t.classList.add("h"),document.body.appendChild(t),document.querySelector("iframe").addEventListener("load",loadcomplete)}document.body.appendChild(e),setInterval(r,6e5),r()}function loadcomplete(){try{document.getElementById("loader").classList.add("h")}catch(e){}try{document.querySelector("iframe").classList.remove("h"),unfade(document.querySelector("iframe"),10)}catch(e){}try{document.querySelector("iframe").focus()}catch(e){}}document.addEventListener("DOMContentLoaded",setrefresh);