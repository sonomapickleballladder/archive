function attemptLogin(e,t,a){try{a.ladder=JSON.parse(a.ladder)}catch(e){}try{for(let e=0;e<a.ladder.length;e++)try{document.referrer.indexOf(laddersOffered[a.ladder[e]].url)>0&&a.ladder.push(a.ladder.splice(a.ladder.indexOf(a.ladder[e]),1)[0])}catch(e){}}catch(e){}for(let r=0;r<a.ladder.length;r++)try{let i,l=laddersOffered[a.ladder[r]];ptc("rdbusrs","*","id",1,l.sb).then((function(o){i=o.data;let n=e.replace(/(\s)/g,"").toLowerCase(),s=n+t,d=sha256x(s,2);try{i=i[0].list}catch(e){i=[]}let c=0;for(let e=0;e<i.length;e++)i[e]==d&&(c=1,i.length=e+1);if(c){let i={name:e,token:sha256x(s,1),expires:LZString.compressToEncodedURIComponent(t)};if(localStorage.setItem(l.ls+"logged_in_user",lsciph(i,0,l.ls)),localStorage.setItem(l.ls+"session6",lsciph(reverseString(decipher(JSON.stringify((new Date).getFullYear()))("735079644d33456a646748")))),localStorage.removeItem("payalert"),location.search.indexOf("return_to=")>-1){location.search.split("return_to=")[1].split("&")[0].indexOf("initial_order")>-1&&localStorage.setItem(l.ls+"ArprO_lA3RZxD5z",lsciph({name:n,key:t},0,l.ls))}else r==a.ladder.length-1&&location.replace(`dashboard${protoMap[location.protocol]}`)}else r==a.ladder.length-1&&(location.search.indexOf("return_to=")>-1?setTimeout((function(){alert("Login was successful, but the page you are trying to visit is either not accesible yet, or you have not yet been approved to view it."),location.replace(`dashboard${protoMap[location.protocol]}`)}),10):setTimeout((function(){location.replace(`dashboard${protoMap[location.protocol]}`)}),20));if(r==a.ladder.length-1&&(document.querySelector(".modal.login").classList.remove("pulse"),byId("submit").removeAttribute("disabled"),location.search.indexOf("return_to=")>-1)){let e=location.search.split("return_to=")[1].split("&")[0];location.replace(e)}}))}catch(e){}}function sha256x(e,t){for(let a=0;a<t;a++)e=sha256(e);return e}function showpskey(e){let t={text:["🙈","password"],password:["👁️","text"]};e.previousElementSibling.type=t[e.previousElementSibling.type][1],e.innerHTML=t[e.previousElementSibling.type][0]}function authorize(e){try{var t=document.querySelector('meta[name="viewport"]');t&&t.setAttribute("content","width=device-width, maximum-scale=1.0, initial-scale=1.0"),byId("submit").blur()}catch(e){}try{if(e.email.length<1)return byId("message").innerHTML="Email Adress is required",!1;if(e.key.length<1)return byId("message").innerHTML="Secret Key is required",!1}catch(e){}signIn({email:e.email,key:e.key}).then((t=>{if(t.error){try{hide(0)}catch(e){}document.querySelector(".modal.login").classList.remove("pulse"),byId("submit").removeAttribute("disabled"),calert(0,'<span style="font-size: large;">Login Failed</span>',`<span style="font-size: medium;">${t.error.message}</span>`,"error","100%","100%",0,0,"2em","full","padding: 0.5em")}else{let t=JSON.parse(localStorage.getItem(sb.client.storageKey)).user.user_metadata;vhptc("Signups").then((a=>{try{a.data.length>0?(localStorage.setItem(brick("$_authenticated_user"+ladderSeason),lsciph(a.data[0])),t=a.data[0]):localStorage.setItem(brick("$_authenticated_user"+ladderSeason),lsciph(t))}catch(e){}sb.client.auth.signOut(),attemptLogin(`${t.first_name} ${t.last_name}`,e.key,t)}))}}))}async function vhptc(e,t){e=t?init.f_e+t+e:init.f_e+ladderId.sb+e;const{data:a,error:r}=await sb.client.from(e).select();return r&&debug,{data:a,error:r}}async function signIn(e){document.querySelector(".modal.login").classList.add("pulse"),byId("submit").disabled=!0;const{data:t,error:a}=await sb.client.auth.signInWithPassword({email:e.email,password:e.key});return{data:t,error:a}}window.addEventListener("keydown",(function(e){"Enter"==e.key&&(byId("email")==this.document.activeElement&&byId("key").focus(),byId("key")==this.document.activeElement&&authorize({email:byId("email").value,key:byId("key").value}))})),document.addEventListener("DOMContentLoaded",(function(){try{try{let e=location.search;location.search.indexOf("spl=")>-1&&(e=lsdciph(location.search.split("spl=")[1].split("&")[0].split("?")[0]).replace(/(%26key)/g,"&key")),e.indexOf("email=")>-1&&(byId("email").value=decodeURI(e.split("email=")[1].split("&")[0])),e.indexOf("key=")>-1&&(byId("key").value=decodeURI(e.split("key=")[1].split("&auto")[0].split("&return")[0])),e.indexOf("autologin")>-1?authorize({email:byId("email").value,key:byId("key").value}):hide(0)}catch(e){hide(0)}(ismobile()||isiPad()||navigator.userAgent.indexOf("Beaker")>-1)&&(byId("vbtoggle").style.transform="translate(-150%, 0%)")}catch(e){hide(0)}}));