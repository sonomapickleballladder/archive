function cusInp(){try{let e=byAttr("prompt");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(){try{dgprompt(e[t].getAttribute("prompt"),(function(r){try{if(Boolean(r)&&r.trim().length>60)return alert("Input is too long"),!1}catch(e){}try{Boolean(r)&&r.trim().length>0&&(e[t].innerHTML=r,e[t].classList.add("valid"))}catch(e){}Boolean(r)&&r.trim().length>0&&Boolean(unundefine(e[t].getAttribute("prepend")))&&e[t].innerHTML.indexOf(e[t].getAttribute("prepend"))<0&&(e[t].innerHTML=e[t].getAttribute("prepend")+e[t].innerHTML),Boolean(r)&&r.trim().length>0&&Boolean(unundefine(e[t].getAttribute("append")))&&e[t].innerHTML.indexOf(e[t].getAttribute("append"))<0&&(e[t].innerHTML+=e[t].getAttribute("append"))}))}catch(r){let n=document.createElement("input");n.classList.add("subinput"),n.value=e[t].innerText.replace(/(\(click to edit\))/g,""),e[t].replaceWith(n)}}))}catch(e){}}function rdFrstNm(){try{let e=byAttr("randomname");for(let t=0;t<e.length;t++){let r=createPersonName();e[t].innerHTML=r,Boolean(e[t].getAttribute("apnd"))&&(e[t].innerHTML+=e[t].getAttribute("apnd"));try{byAttr("randomemail",e[t].getAttribute("dataid")).length>0&&(byAttr("randomemail")[0].innerHTML=createEmail(r))}catch(e){}}}catch(e){}}function vrfrd(e){let t=getRound(),r=byId("round").value,n=r.replace(/[0-9]/g,""),a=parseInt(r.replace(n,""));return isNaN(t)?(event.preventDefault(),calert(!1,"Hang on!","This form is currently disabled as this Ladder season is not yet active (or has finished). It will be enabled "+Math.abs(frstC+2)+" days before the first round starts.","notice",0,0,0,0,"1.5em"),!1):a<t?(event.preventDefault(),calert(!1,"Error","You cannot offer to be a sub for a previous round.","error",0,0,0,0,"1.5em"),!1):a>t+1?(event.preventDefault(),calert(!1,"Error","You may only  offer to be a sub for the current or next Round. Please wait until "+byId("round").children[byId("round").selectedIndex-1].value+" to submit this form for "+byId("round").value+".","error",0,0,0,0,"1.5em"),!1):void postInfo()}function vrfid(){let e="";event.preventDefault();try{e=localStorage.getItem(ladderId.ls+"aeloMidneufdaNiNaN").tags.swoma9hsofeK.ussr}catch(e){}}function postInfo(){let e="(click to edit)",t="(click to add)",r=/[\(\)]/g,n=(new RegExp(e,"g"),new RegExp("(click to update)","g")),a=new RegExp(t,"g"),l=parseInt(byId("round").value.split(" ").pop().trim()),i=byId("name").innerText,o=byId("email").innerText,d=byId("phone").innerText,c=byId("skill").innerText,s=byId("inladder").checked,u=byId("inround").checked,m=byId("w1days").innerText,p=byId("w2days").innerText;if(i.indexOf(e)>-1)return calert(0,"Error","You may not use an auto-generated name to submit this form. Please provide your real name."),!1;if(o.indexOf(e)>-1)return calert(0,"Error","You may not use an auto-generated email to submit this form. Please provide your real email."),!1;if(d.indexOf(t)>-1&&(d=d.replace(a,"")),c.indexOf(e)>-1)return calert(0,"Error","You may not use an auto-generated skill level to submit this form. Please provide your real skill level."),!1;if(m.indexOf(e)>-1&&(m=""),p.indexOf(e)>-1&&(p=""),i=i.replace(n,"").replace(r,"").trim(),o=o.replace(n,"").replace(r,"").trim(),d=d.replace(n,"").replace(r,"").trim(),c=c.replace(n,"").replace(r,"").trim(),m=m.replace(n,"").replace(r,"").trim(),p=p.replace(n,"").replace(r,"").trim(),disallow(i)||localStorage.getItem(ladderId.ls+"unauthorized"))return calert(!0,"Error",`You are not authorized ${i}.`,"error"),localStorage.setItem(ladderId.ls+"unauthorized",!0),!1;if(!validateEmail(o))return calert(0,"Error","The email you provided is not a valid email"),byId("email").classList.remove("valid"),!1;let f={round:l,name:i,email:o,phone:d,skill:c,in_ladder:s,already_playing:u,week1days:m,week2days:p};try{saveData("subs",f).then((function(e){e.error?calert(0,"Error","Form submission failed for unknown reasons.","error"):(document.write("Success! You will be redirected back to the Subs Page momentarily."),copyData(f),setTimeout((function(){location.replace("subs.html")}),3e3))}))}catch(e){}}function copyData(e){try{localStorage.setItem(ladderId.ls+"subCredentials;",LZString.compress(JSON.stringify(e)))}catch(e){}}function retainvals(){let e=lsdciph(localStorage.getItem(ladderId.ls+"subCredentials;"));if(e){let t=e;if(t)try{let e="(click to update)",r=["name","email","phone","skill"];for(let n=0;n<r.length;n++)try{let a=t[r[n]];Boolean(a)&&(byId(r[n]).innerHTML=`${a} ${e}`,byId(r[n]).classList.add("valid"))}catch(e){}byId("inladder").checked=t.in_ladder,byId("inladder").previousElementSibling.innerHTML=map[byId("inladder").checked]}catch(e){}}else{let e=lsdciph(localStorage.getItem(brick("$_authenticated_user"+ladderSeason)));if(e){e.name=`${e.first_name} ${e.last_name}`,e.DUPR?e.skill=e.DUPR:e.Self_Rating&&(e.skill=e.Self_Rating);try{let t="(click to update)",r=["name","email","phone","skill"];for(let n=0;n<r.length;n++)try{let a=e[r[n]];Boolean(a)&&(byId(r[n]).innerHTML=`${a} ${t}`,byId(r[n]).classList.add("valid"))}catch(e){}lsdciph(localStorage.getItem(ladderId.ls+"logged_in_user"))&&(byId("inladder").checked=!0,byId("inladder").previousElementSibling.innerHTML=map[byId("inladder").checked])}catch(e){}}}}document.addEventListener("DOMContentLoaded",(function(){cusInp(),rdFrstNm(),jsFill(),retainvals();try{byId("wkcalc").value=`Round ${getRound()}`,byId("wkcalc").innerHTML=`Round ${getRound()}`}catch(e){}let e=getRound();try{autofillRound(e,"current"),autofillRound(e,"next")}catch(e){}}));const map={true:"Yes",false:"No"},unmap={Yes:!0,No:!1};