function showLadders(){let e,a=lsdciph(localStorage.getItem(brick("$_authenticated_user"+ladderSeason)));try{e=JSON.parse(a.ladder)}catch(t){e=a.ladder}e.indexOf("Open");for(let a=0;a<e.length;a++){let t="";(null==laddersOffered[e[a]].min||laddersOffered[e[a]].min>0)&&"Womens"!=e[a]&&(t="*");let o="";laddersOffered[e[a]].url.length>3&&(o="target=_blank"),byId("my_ladders").innerHTML+="*"!=t?`<a class="nav" ${o} href="${laddersOffered[e[a]].url}">${e[a]} Ladder${t} &#8599;</a>`:`<a class="nav" style="opacity: 0.75; text-decoration:line-through;" ${o}>${e[a]} Ladder${t} &#8599;</a>`}}function showActions(){let e=lsdciph(localStorage.getItem(brick("$_authenticated_user"+ladderSeason)));try{e.ladder=JSON.parse(e.ladder)}catch(e){}byId("actions").innerHTML+=`<p><span style='color: gray'>Signed in as <i>${e.first_name} ${e.last_name}</i></span></p>`,byId("actions").innerHTML+="<button class=\"warn\" onclick='lgot()'>Sign out</button>";let a=document.createElement("a");a.href=`login${protoMap[location.protocol]}`,byId("notifications").innerHTML+=`<details><summary>Your Login Link</summary>\n  <p>Hi ${e.first_name},<br>You can use this link: <span id='loginlink' class='copy' onclick='copy(this)'>${a.href}?spl=${lsciph("email="+encodeURI(e.email)+"&key="+encodeURI(e.secret_key))}</span> to login.\n  <br>Theo<br><br><small>P.S. Please keep track of your secret key! Consider bookmarking or <a href='mailto:${e.email}?subject=Pickleball%20Ladder%20|%20Login%20Link&body=I%20can%20use%20this%20link:%20${a}?spl=${lsciph("email="+encodeURI(e.email)+"&key="+encodeURI(e.secret_key))}%20to%20login.'>emailing yourself</a> your login link if you think you might forget it.</small></p></details>`;let t="",o="";try{e.ladder.toString().toLowerCase().split(",").includes("open")&&(t="Other ","paypal"==e.payment_method.toLowerCase()?byId("notifications").innerHTML+=`\n   <details>\n   <summary>Open Ladder Payment</summary>\n   <p>Hi ${e.first_name},<br>If you haven't done so already, please pay at least $40 to <span class='copy' onclick='copy("SPLdeposits@riseup.net", 0, this)'>SPLdeposits@riseup.net</span> via <a rel="noreferrer" target="_blank" href="https://paypal.me/vq90lhInA1pD/40">PayPal</a> to complete your registration.<br>Thanks,<br>Theo</small></p>\n   </details>`:(byId("notifications").innerHTML+=`\n   <details>\n   <summary>Open Ladder Payment</summary>\n   <p>Hi ${e.first_name},<br>If you haven't done so already, please pay me or my dad (Adam) at least $40 in cash or check to complete your registration. (Click <a target="_blank" href="pay_options${protoMap[location.protocol]}">here</a> for times we will be at the courts). If you pay my dad, please <a href="mailto:SPLinfo+payment@riseup.net?subject=Spring Ladder Payment&body=Hi Theo,%0AI paid your dad $amount via cash/check.%0AYour name">email me</a> so that I know.<br>Thanks,<br>Theo</small></p>\n   </details>`,t="Starred ",o="*"))}catch(e){}try{e.ladder.toString().toLowerCase().split(",").includes("womens")&&(t="Other ","paypal"==e.payment_method.toLowerCase()?byId("notifications").innerHTML+=`\n   <details>\n   <summary>Women's Ladder Payment</summary>\n   <p>Hi ${e.first_name},<br>If you haven't done so already, please pay at least $40 to <span class='copy' onclick='copy("SPLdeposits@riseup.net", 0, this)'>SPLdeposits@riseup.net</span> via <a rel="noreferrer" target="_blank" href="https://paypal.me/vq90lhInA1pD/40">PayPal</a> to complete your registration.<br>Thanks,<br>Theo</small></p>\n   </details>`:(byId("notifications").innerHTML+=`\n   <details>\n   <summary>Women's Ladder Payment</summary>\n   <p>Hi ${e.first_name},<br>If you haven't done so already, please pay me or my dad (Adam) at least $40 in cash or check to complete your registration. (Click <a target="_blank" href="pay_options${protoMap[location.protocol]}">here</a> for times we will be at the courts). If you pay my dad, please <a href="mailto:SPLinfo+payment@riseup.net?subject=Spring Ladder Payment&body=Hi Theo,%0AI paid your dad $amount via cash/check.%0AYour name">email me</a> so that I know.<br>Thanks,<br>Theo</small></p>\n   </details>`,t="Starred ",o="*"))}catch(e){}let n="",r=e.ladder;r.length,r.indexOf("Open")>-1&&r.splice(r.indexOf("Open"),1),r.indexOf("Womens")>-1&&r.splice(r.indexOf("Womens"),1);r.length,1==r.length&&"Yes"==e.fallback_ladder&&"*"!=o||r.length;let l=byId("notifications").querySelectorAll("details").length;byId("notifications").querySelector(".under").innerHTML+=` (${l})`}function lgot(){if(!confirm("Are you sure?"))return!1;localStorage.removeItem(brick("$_authenticated_user"+ladderSeason));for(let e=0;e<Object.keys(laddersOffered).length;e++){let a=laddersOffered[Object.keys(laddersOffered)[e]];localStorage.removeItem(a.ls+"logged_in_user"),localStorage.removeItem(a.ls+"ArprO_lA3RZxD5z"),localStorage.removeItem(a.ls+"session6")}location.replace(`login${protoMap[location.protocol]}`)}function toggleDarkMode(e){e?(document.body.classList.remove("light_theme"),document.body.classList.add("dark_theme")):(document.body.classList.remove("dark_theme"),document.body.classList.add("light_theme")),localStorage.setItem(brick("$_darkMode"),e);let a={true:1,false:0};try{byId("loginlink").innerHTML=byId("loginlink").innerText.replace(/(darkmode=1)/g,"").replace(/(darkmode=0)/g,"")+`&darkmode=${a[e]}`,byId("loginlink").innerHTML=byId("loginlink").innerText.replace(/&+/g,"&")}catch(e){}}document.addEventListener("DOMContentLoaded",(function(){nifnok()&&unfade(document.documentElement,5);try{showLadders()}catch(e){}try{showActions()}catch(e){}document.documentElement.style.opacity=0}));