const init = {
  f_u: 'https://oqpiiqfveroswwanvkzu.supabase.co',
  f_a: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xcGlpcWZ2ZXJvc3d3YW52a3p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMwMzMwNjEsImV4cCI6MTk4ODYwOTA2MX0.zEzrbDtrxxbMxev8qEQ9XZ_ftqn3D-wC-Y9woleli0U',
  f_e: '0996_Winter_2025_'
}

const sb = {
  client: supabase.createClient(init.f_u, init.f_a)
}

var debug = location.search.indexOf('debug')>-1;

async function ptc(t,s,e,m,kr){
  kr || ( kr = ladderId.sb )
  const { data, error } = await sb.client
  .from(init.f_e+kr+t)
  .select(s)
  .eq(e, m)


if(error&&debug) console.log(error);

return {data: data, error: error}

//return data

  
}

async function saveData(t, e, kr) {
  kr || ( kr = ladderId.sb )
 const { data, error } = await sb.client
  .from(init.f_e+ladderId.sb+t)
  .insert([
    e
  ])

  if(error) console.log(error);

  return {data: data, error: error}

}


async function declareData(t, e, s, m, kr) {
  kr || ( kr = ladderId.sb )
  const { data, error } = await sb.client
   .from(init.f_e+kr+t)
   .update([
     e
   ])
   .eq(s,m)
   //.select()

   if(error){console.log(error)}

   return {data: data, error: error}
 }

async function upsertData(t, e, kr) {
  kr || ( kr = ladderId.sb )
  const { data, error } = await sb.client
   .from(init.f_e+kr+t)
   .upsert([
     e
   ])
 
   if(error) console.log(error);;

   return {data: data, error: error}
}

function mk() {
 try {
  let ud = document.getElementsByClassName('scd');
  for (let i = 0; i < ud.length; i++) {
    let t=ud[i].getAttribute('t'),s=ud[i].getAttribute('s'),e=ud[i].getAttribute('e'),m=ud[i].getAttribute('m'),y=ud[i].getAttribute('y'),r=false;
    ptc(t,s,e,m).then(function(rc) {
      rc = rc.data;
      if(y){rc[0][s]=LZString.decompressFromUTF16(rc[0][s])}
      try {if(Boolean(rc[0][s])){ud[i].innerHTML=rc[0][s]}} catch (error) {}
      gbstr.fd=new Date().getTime();
      if(debug) console.log('loaded in '+JSON.stringify(gbstr.fd - gbstr.sd)+' milliseconds');
  })
    }
  } catch(ex){}
}


function validateEmail(email) {
  const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(String(email).toLowerCase());
}

function disallow(h) {
  let sjr = ['4qCe4rOb4qWIaw==', '4qCe4rOS4pu4', '4qiS4rOcdA==', '4rOO4p654LOH', '4piy4pqK4rSu4p2V4q6v', '4rCG4q2A4p+B']
  for (let i = 0; i < sjr.length; i++) {
    if(h.toLowerCase().indexOf(idecompress(sjr[i]))>-1) {return true}
    
  }
}


const sha256=function r(t){function n(r,t){return r>>>t|r<<32-t}for(var o,e,f=Math.pow,h=f(2,32),a="",l=[],g=8*t.length,c=r.h=r.h||[],i=r.k=r.k||[],u=i.length,v={},s=2;u<64;s++)if(!v[s]){for(o=0;o<313;o+=s)v[o]=s;c[u]=f(s,.5)*h|0,i[u++]=f(s,1/3)*h|0}for(t+="";t.length%64-56;)t+="\0";for(o=0;o<t.length;o++){if((e=t.charCodeAt(o))>>8)return;l[o>>2]|=e<<(3-o)%4*8}for(l[l.length]=g/h|0,l[l.length]=g,e=0;e<l.length;){var k=l.slice(e,e+=16),d=c;for(c=c.slice(0,8),o=0;o<64;o++){var p=k[o-15],w=k[o-2],A=c[0],C=c[4],M=c[7]+(n(C,6)^n(C,11)^n(C,25))+(C&c[5]^~C&c[6])+i[o]+(k[o]=o<16?k[o]:k[o-16]+(n(p,7)^n(p,18)^p>>>3)+k[o-7]+(n(w,17)^n(w,19)^w>>>10)|0);(c=[M+((n(A,2)^n(A,13)^n(A,22))+(A&c[1]^A&c[2]^c[1]&c[2]))|0].concat(c))[4]=c[4]+M|0}for(o=0;o<8;o++)c[o]=c[o]+d[o]|0}for(o=0;o<8;o++)for(e=3;e+1;e--){var S=c[o]>>8*e&255;a+=(S<16?0:"")+S.toString(16)}return a};
