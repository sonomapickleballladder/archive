function getRefs(){let e=byAttr("sublist");for(let n=0;n<e.length;n++)ptc("refs","*","round",getRound()).then((function(e){e=e.data;try{displayRefs(e)}catch(e){byAttr("sublist")[0].innerHTML="<p>No one yet...</p>"}}))}function displayRefs(e){e=e.reverse();try{e=e.filter(((e,n,t)=>t.findIndex((n=>n.name===e.name))===n))}catch(e){}try{e=e.filter(((e,n,t)=>t.findIndex((n=>n.email===e.email))===n))}catch(e){}if(e.length<1)return yAttr("sublist")[0].innerHTML="<p>\n    No one yet...\n  </p>",!1;let n={true:"Yes",false:"No",null:"No info","":"No info"};debug,byAttr("sublist")[0].innerHTML="";for(let t=0;t<e.length;t++){let l=e[t].name,s=e[t].email,a=e[t].phone,i=e[t].skill,r=e[t].in_ladder,o=e[t].already_playing,f=e[t].week1days,d=e[t].week2days,p="";i||(i=n[i]),a&&(a=`<a href='tel:${a}'>${a}</a>`),a||(a=n[a]),f||(f=n[f],p="h"),d||(d=n[d]);let y="";0==r?y="psx":1==o?y="psy":0==o&&(y="psz"),byAttr("sublist")[0].innerHTML+=`<details class="${y}"><summary>${l}</summary><p class="infop">Email: <a href="mailto:${s}">${s}</a></p>\n    <p class="infop">Phone: ${a}</p>\n    <p class="infop ${p}">Days available in Round: ${f}</p>\n   `}}document.addEventListener("DOMContentLoaded",(function(){jsFill(),getRefs(),lsWarning()}));