let isal=!0;try{localStorage.getItem(brick("$_enableAnalytics"))&&(isal=localStorage.getItem(brick("$_enableAnalytics")))}catch(e){}if(location.href.indexOf("al=false")>-1){isal=!1;try{localStorage.setItem(brick("$_enableAnalytics"),!1)}catch(e){}}if("localhost"==location.hostname&&(isal=!1),isal){let e=document.getElementsByTagName("a");for(let t=0;t<e.length;t++)try{e[t].getAttribute("href").indexOf("://")<0&&location.protocol.indexOf("https")>-1&&(e[t].removeAttribute("rel"),e[t].href=e[t].href.replace(/(.html)/g,""))}catch(e){}let t=document.createElement("script");t.src="https://analytics.projectsegfau.lt/js/script.js",t.setAttribute("data-domain","sonomapickleballladder.github.io"),t.setAttribute("defer",""),document.head.appendChild(t)}let isstyled=!0;try{null!=lsdciph(localStorage.getItem(ladderId.ls+"isStyled"))&&(isstyled=lsdciph(localStorage.getItem(ladderId.ls+"isStyled")))}catch(e){}if(location.href.indexOf("style=0")>-1){isstyled=!1;try{localStorage.setItem(ladderId.ls+"isStyled",lsciph(!1))}catch(e){}}if(location.href.indexOf("style=1")>-1){isstyled=!0;try{localStorage.setItem(ladderId.ls+"isStyled",lsciph(!0))}catch(e){}}isstyled||(document.querySelectorAll("[style]").forEach((e=>e.removeAttribute("style"))),document.querySelectorAll('link[rel="stylesheet"]').forEach((e=>e.parentNode.removeChild(e))),document.querySelectorAll("style").forEach((e=>e.parentNode.removeChild(e))));let darkmode=get_darkmode();darkmode?document.body.classList.add("dark_theme"):0==darkmode&&document.body.classList.add("light_theme");try{byId("darkmode").checked=darkmode}catch(e){}