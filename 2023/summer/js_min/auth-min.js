const init={f_u:"https://oqpiiqfveroswwanvkzu.supabase.co",f_a:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xcGlpcWZ2ZXJvc3d3YW52a3p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMwMzMwNjEsImV4cCI6MTk4ODYwOTA2MX0.zEzrbDtrxxbMxev8qEQ9XZ_ftqn3D-wC-Y9woleli0U",f_e:"Summer_2023_"},sb={client:supabase.createClient(init.f_u,init.f_a)};var debug=location.search.indexOf("debug")>-1;async function ptc(t,e,r,n,a){a||(a=ladderId.sb);const{data:i,error:o}=await sb.client.from(init.f_e+a+t).select(e).eq(r,n);return{data:i,error:o}}async function saveData(t,e,r){r||(r=ladderId.sb);const{data:n,error:a}=await sb.client.from(init.f_e+ladderId.sb+t).insert([e]);return{data:n,error:a}}async function declareData(t,e,r,n,a){a||(a=ladderId.sb);const{data:i,error:o}=await sb.client.from(init.f_e+a+t).update([e]).eq(r,n);return{data:i,error:o}}async function upsertData(t,e,r){r||(r=ladderId.sb);const{data:n,error:a}=await sb.client.from(init.f_e+r+t).upsert([e]);return{data:n,error:a}}function mk(){try{let t=document.getElementsByClassName("scd");for(let e=0;e<t.length;e++){let r=t[e].getAttribute("t"),n=t[e].getAttribute("s"),a=t[e].getAttribute("e"),i=t[e].getAttribute("m"),o=t[e].getAttribute("y");ptc(r,n,a,i).then((function(r){r=r.data,o&&(r[0][n]=LZString.decompressFromUTF16(r[0][n]));try{Boolean(r[0][n])&&(t[e].innerHTML=r[0][n])}catch(t){}gbstr.fd=(new Date).getTime()}))}}catch(t){}}function validateEmail(t){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}function disallow(t){let e=["4qCe4rOb4qWIaw==","4qCe4rOS4pu4","4qiS4rOcdA==","4rOO4p654LOH","4piy4pqK4rSu4p2V4q6v","4rCG4q2A4p+B"];for(let r=0;r<e.length;r++)if(t.toLowerCase().indexOf(idecompress(e[r]))>-1)return!0}const sha256=function t(e){function r(t,e){return t>>>e|t<<32-e}for(var n,a,i=Math.pow,o=i(2,32),c="",s=[],f=8*e.length,d=t.h=t.h||[],l=t.k=t.k||[],u=l.length,b={},p=2;u<64;p++)if(!b[p]){for(n=0;n<313;n+=p)b[n]=p;d[u]=i(p,.5)*o|0,l[u++]=i(p,1/3)*o|0}for(e+="";e.length%64-56;)e+="\0";for(n=0;n<e.length;n++){if((a=e.charCodeAt(n))>>8)return;s[n>>2]|=a<<(3-n)%4*8}for(s[s.length]=f/o|0,s[s.length]=f,a=0;a<s.length;){var g=s.slice(a,a+=16),h=d;for(d=d.slice(0,8),n=0;n<64;n++){var m=g[n-15],I=g[n-2],w=d[0],q=d[4],C=d[7]+(r(q,6)^r(q,11)^r(q,25))+(q&d[5]^~q&d[6])+l[n]+(g[n]=n<16?g[n]:g[n-16]+(r(m,7)^r(m,18)^m>>>3)+g[n-7]+(r(I,17)^r(I,19)^I>>>10)|0);(d=[C+((r(w,2)^r(w,13)^r(w,22))+(w&d[1]^w&d[2]^d[1]&d[2]))|0].concat(d))[4]=d[4]+C|0}for(n=0;n<8;n++)d[n]=d[n]+h[n]|0}for(n=0;n<8;n++)for(a=3;a+1;a--){var O=d[n]>>8*a&255;c+=(O<16?0:"")+O.toString(16)}return c};