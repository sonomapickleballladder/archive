window.onload = function() {
    //console.log(2);

    jsFill();

    getdata();

    try{
      if(JSON.parse(localStorage.getItem(ladderSeason+'toggleautorefresh'))) {
        console.log('%cfetching signups...', 'color:lightblue');
        getPlayerJSON()
      }
      else {
        byId('toggleautorefresh').checked = false;
        try{ displaySignups(JSON.parse(localStorage.getItem(ladderSeason+'playerJSON28')), {store: JSON.parse(localStorage.getItem(ladderSeason+'playerJSON28'))}) } catch(ex) {console.error(ex);}
      }
    }catch(ex){getPlayerJSON()}

      try {
          idwh(JSON.parse(localStorage.getItem(ladderSeason+'playerJSON28')))
      }
      catch(ex) {}

      try {
          let bgw = JSON.parse(localStorage.getItem(ladderSeason+'lastview'))
          let dtls = document.querySelectorAll('details')
          for (let i = 0; i < dtls.length; i++) {
            dtls[i].open =  bgw[i]
          }
      } catch(ex){}

      try{if(adsb.client) {hide(0)} else {
        if(cipher('xsapevvue3g(xm')(prompt('Password'))=='616b637176317c3e52314830'){hide(0)}else{setTimeout(function(){document.write('<style>html,body{font-size:1.25rem}</style>unauthorized')},200)}
      }} catch(ex){}
  
}

function getdata() {
    try {
        savekey(LZString.decompress(localStorage.getItem(ladderSeason+'admkey')))
    } catch (ex) {
        console.log(ex);
    }
}

async function ptc(t,s,e,m,x,z,thenfunction){
  const { data, error } = await adsb.client
  .from(init.f_e+t)
  .select(s)

  console.log(data,error)

if(error&&debug) console.log(error);


return {data:data,error:error}

  
}

  function savekey(k) {
   
    if(k.length<1) {try {
        k=LZString.decompress(localStorage.getItem(ladderSeason+'admkey'))
    } catch (ex) {
        
    }}

   else{ localStorage.setItem(ladderSeason+'admkey', LZString.compress(k));}

  //console.log(k);


    adsb.client = supabase.createClient(init.f_u, k)
      
  }

  function getavlb(tb,ol,lad) {
    byId('avbls').innerHTML = ''
    let mp = []; mp.push(lad)
    for (let ih = 0; ih < mp.length; ih++) {
     let  nw = laddersOffered[mp[ih]]
    // console.log(nw.sb);
     let gwr = JSON.parse(tempStore.lsnups)[mp[ih]].signups.map(a=> {return {name: a.first_name+' '+a.last_name, expires: LZString.compressToEncodedURIComponent(LZString.decompressFromBase64(a.secret_key))}})
        

     ptc(nw.sb+tb, '*').then(function(res){
      res = res.data;
        avbl=res;
        avbl2.round = [[],[],[],[],[],[],[],[],[]]
       for (let i = 0; i < res.length; i++) {
         

        for (let vi = 0; vi < gwr.length; vi++) {
          let msy = gwr[vi];
          //console.log(msy);
          
        }
           avbl2.round[res[i].round].push(res[i])
       }
       dspavlb(ol,0,mp[ih])
    })
    }
    
  }

  function dspavlb(ol, uij, kwm) {
    byId('avbls').innerHTML=''
    let round = byId('round').value;
    if(ol){round=ol}
    uij || (uij=true)
    // console.log(ol, uij, kwm);
    //console.log(uij);
    let rarr = avbl2.round[round];
  let hd = rarr.sort(function(x, y){
    return new Date(x.created_at) - new Date(y.created_at);
   })

   console.log(hd);
   rarr = hd;

   

   let mah = document.createElement('textarea');
   mah.classList.add('h')
   let uniq = document.createElement('textarea');
   uniq.setAttribute('rows', '10')
   uniq.setAttribute('columns', '32')
   
   
    mah.value = '';


    for (let i = 0; i < rarr.length; i++) {
        // console.log(rarr[i]);
        let dl = '\n';
        if(byId('delimit').value.length>0) {dl = byId('delimit').value}
        if(Boolean(rarr[i].is_available) == uij) {mah.value+=rarr[i].name.trim()+dl};
    }

    uniq.value = mah.value.split("\n")
    .filter((item, i, allItems) => {
      return i === allItems.indexOf(item);
    })
    .join("\n");

    byId('count').innerHTML =  JSON.stringify(uniq.value.split('\n').length-1) + ' / ' + JSON.stringify(rarr.length);
    byId('ngroups').innerHTML = Math.ceil((uniq.value.split('\n').length-1)/4);


    byId('avbls').appendChild(mah);
    byId('avbls').appendChild(uniq);
  }

  function displayNotAvailable(round, property, ladder) {
    const available = avbl2.round[round].map(p => `${p[property]}`)
    // console.log(available);
    const ladderJson = JSON.parse(localStorage.getItem(ladderSeason+'Ladders_Offered_Computation'))[ladder].signups
    const everyone = ladderJson.map(a=>`${a.first_name} ${a.last_name}`)
    const absentPlayers = everyone.filter(player => !available.includes(player))
    console.log(absentPlayers)

    const absentPlayerEmails = []
    for (let i = 0; i < absentPlayers.length; i++) {
      const element = absentPlayers[i];
      const email = ladderJson.filter(player => (`${player.first_name} ${player.last_name}`) == element)[0].email
      // console.log(email)
      absentPlayerEmails.push(email)
    }
    
    byId("avbls").children[1].value = absentPlayerEmails.join(",\n")
    

  }


  function getAlphabeticalList(ladder, element) {
    const ladderJson = JSON.parse(localStorage.getItem(ladderSeason+'Ladders_Offered_Computation'))[ladder].signups
    let alphabeticalList = ladderJson.map(player => `${player.first_name} ${player.last_name}`)
    alphabeticalList = alphabeticalList.sort().join('\n')
    console.log(`Alphabetical List of Players for ${ladder} Ladder:\n\n${alphabeticalList}`);
    navigator.clipboard.writeText(alphabeticalList)
  }

  function getsbs(tb) {
    ptc(tb, '*').then(function(res){
        sbs=res;
        sbs2.round = [[],[],[],[],[],[],[],[],[]]
       for (let i = 0; i < res.length; i++) {
        if(!unundefine(res[i].round)) {res[i].round=0}
           sbs2.round[res[i].round].push(res[i])
       }
       dspsbs();
    })
  }


  function dspsbs() {
    let round = byId('round2').value;
    let rarr = sbs2.round[round];
    byId('output2').value = '';
    

    for (let i = 0; i < rarr.length; i++) {
        console.log(rarr[i]);
        let dl = '\n';
        if(byId('delimit').value.length>0) {dl = byId('delimit').value}
        byId('output2').value+=rarr[i].name.trim()+dl;
    }
  }

 let adsb = {}
 let avbl = {};
 let avbl2 = {};
 let sbs={};
 let sbs2={};
 let currnttb = {}


 function gettable(tn) {
  ptc(tn, '*').then(function(res){
    res = res.data;
    if(!res) return false;
    byId('table').innerHTML='';
     currnttb = res;
     console.log(res);
     
     let thr = document.createElement('tr');
     for (let i = 0; i < Object.keys(res[0]).length; i++) {
      let ky = Object.keys(res[0])[i];
      //console.log(Object.keys(res[0])[i]);
      let th = document.createElement('th'); th.innerHTML = ky;
      thr.appendChild(th);
     }

     byId('table').appendChild(thr);

     for (let i = 0; i < res.length; i++) {
      let tr = document.createElement('tr');
      for (let ij = 0; ij < Object.values(res[i]).length; ij++) {
        let ky = Object.values(res[i])[ij];
        let yk = Object.keys(res[i])[ij];
        //console.log(Object.keys(res[i])[ij]);
        if(byId('cvtime').checked && yk=='created_at' && Boolean(new Date(ky)!='Invalid Date')){
          ky = new Date(ky).toString();
        }
        let td = document.createElement('td'); td.innerHTML = ky;
        tr.appendChild(td);
      }
      byId('table').appendChild(tr);
     }
     
  })
 }
  
 const tempStore = {}
 const minSignupNumber = 24;

 function getPlayerJSON() {
  execTime['gpl'] = Date.now();
  let tb = byId('tablename').value;
  let ms = 'Signups';
  if(tb.trim().length<1 || tb.value == ms) {byId('tablename').value = ms; getPlayerJSON(); return false}
  else {
    byId('svew').innerHTML+='<span id="vload">&nbsp;<div style="display: inline-block; " class="loader"></div></span>'
    //console.log(tb)
    ptc(tb, '*')
    .then ((res) => {
      res = res.data;
      if(res) {
        console.log(res);
        res = res.sort((a,b)=> a.id - b.id)
        let k = {responses: res};
        if(k.responses.length>0) {

           for (let i = 0; i < k.responses.length; i++) {
            let nh = k.responses[i]
            nh.ladder = JSON.parse(nh.ladder)
            //console.log(nh);
            let lo = Object.keys(laddersOffered)
            for (let yi = 0; yi < lo.length; yi++) {
              let bv = lo[yi];
              if(!laddersOffered[bv].signups) laddersOffered[bv].signups = []
              if(typeof nh.ladder == 'array' || typeof nh.ladder == 'object') {
                if(nh.ladder.includes(bv)) {
                  //console.log(nh);
                  laddersOffered[bv].signups.push(nh)
                  laddersOffered[bv].signups = laddersOffered[bv].signups.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);
                  let gmsec = laddersOffered[bv].signups
                //  laddersOffered[bv].signups_by_rating = gmsec.sort(function(a,b) {return averageRating([b.DUPR,b.Self_Rating]) - averageRating([a.DUPR,a.Self_Rating])});
                 // console.log(laddersOffered[bv].signups_by_rating);
                //tempStore[bv]['signups_by_rating'] = laddersOffered[bv].signups_by_rating;
                }
              }
              
              
            }

            if(i==k.responses.length-1) {
              displaySignups(laddersOffered, {store: laddersOffered})
            }
           }

          //return false;
          let sivw = JSON.stringify(k);
          //navigator.clipboard.writeText(sivw);
          localStorage.setItem(ladderSeason+'playerJSON28', sivw)
          setplayers(sivw);
          //window.open('addplayers.html', '_blank')
          let test = Object.keys(res[0]);
          /*for (let i = 0; i < test.length; i++) {
            k.questions[`q${i+1}`] = test[i]
          }*/
        }
        console.log(`%c${Date.now()-execTime['gpl']}ms:%O`, "color: #64d462 ;", k);
        let sntoday = k.responses.filter(ah => new Date(ah.created_at).toString().split('2025 ')[0] == new Date().toString().split('2025 ')[0]).length;
        byId('nplreg').value = `${k.responses.length} (${sntoday} today)`

        let fpp = k.responses.filter(ax => ax.payment_method == 'PayPal')
        let fcc = k.responses.filter(ax => ax.payment_method == 'Cash/Check')
        byId('pvpp').value = fpp.length
        byId('pvcc').value = fcc.length

        let nx = 0, msk = [];
        for (let i = 0; i < k.responses.length; i++) {
          let gr = k.responses[i];
         // if(gr.fallback_ladder == 'Yes') {nx++}
          if(gr.ladder.includes('Open')){nx++}
          if(gr.ladder.includes('Womens')){nx++}
          if(!gr.ladder.includes('Womens') && !gr.ladder.includes('Open') && gr.fallback_ladder =='Yes') {msk.push(gr)}
        }
        byId('maxdough').value = `$${nx*35}`

        console.log(`%c${Date.now()-execTime['gpl']}ms:%O`, "color: #64d462 ;", msk);

        
        localStorage.setItem(ladderSeason+`Ladders_Offered_Computation`, JSON.stringify(laddersOffered))
                

        }
    })
  }
 }

 function jsFill(){try{let hy=byAttr("jsfill");for(let i=0;i<hy.length;i++){let jf;jf=Boolean(hy[i].getAttribute("jsfill"))?hy[i].getAttribute("jsfill"):"";try{typ=jf.split('?')[1];jf=jf.split('?')[0];if(typ.length>0){hy[i][typ]=eval(jf)}else{hy[i].innerHTML=eval(jf)}}catch(ex){}}}catch(t){}}

function averageRating(x) {
  let nhv = [], tt = 0;
  for (let i = 0; i < x.length; i++) {
    if(Boolean(x[i])){nhv.push(x[i]); tt+=x[i]}
    if(i==x.length-1) {return tt/nhv.length}
  }
}

function displaySignups(s, mv) {
  let g = Object.keys(s)
  byId('signups').innerHTML = '';
  byId('signups').innerHTML += `<tr><th>Ladder Name</th><th>Number of Signups</th><th>Signups Still Required</th><th>New Signups</th><th>All Signups</th><th>Signups Today</th></tr>`

  let allnew=0;
 
  for (let i = 0; i < g.length; i++) {
    let bv = g[i]
    let ns = s[bv].signups.length;
    let tdsnps = s[bv].signups.filter(ah => new Date(ah.created_at).toString().split('2025 ')[0] == new Date().toString().split('2025 ')[0]).length
    if(s[bv].min == undefined) {s[bv].min = minSignupNumber}
    let need = s[bv].min - ns; if(need<1) need = '#/NA'
    let last = 0;
    try{if(localStorage.getItem(ladderSeason+'Ladder_Signups')) {last = JSON.parse(localStorage.getItem(ladderSeason+'Ladder_Signups'))[bv].signups.length}}catch(ex){}
    let sem = s[bv].signups.map(a => `<li id=${a.email} style=color:blue;cursor:pointer;text-decoration:underline; onclick=showIndPlayer(this)>${a.first_name} ${a.last_name}</li>`)
    sem = sem.toString().replace(/(,)/g,'').replace(/(')/g, '‘')

    byId('signups').innerHTML += `<tr id="${bv}"><td>${bv}</td><td>${ns}</td><td>${need}</td><td>${ns-last} New</td><td><a href="javascript:;" onclick="calert(0,'${bv} Ladder Signups', '<ol>${sem}</ol>', 'notice', 0,0,0,0,'1em','full', 'padding: 1em')">View &nearr;</a></td><td>${tdsnps}</td></tr>`

    allnew += (ns-last)
 
    if(i==g.length-1) {
      hide(0, byId('signups'))
      try{byId('svew').removeChild(byId('vload'))}catch(ex){console.error(ex);}
      try{if(allnew>0){byId('svew').classList.add('newalert'); byId('approvePlayers').classList.add('blink_me');};}catch(ex){}
      if(mv.store) {
        tempStore.lsnups = JSON.stringify(mv.store)
        //localStorage.setItem(ladderSeason+'Ladder_Signups')
      }
    }
  }
}

function showIndPlayer(p) {
  let omp = JSON.parse(localStorage.getItem(ladderSeason+'playerJSON28')).responses
  //console.log(omp);
  let ind = omp.filter(a => {return a.email == p.id})[0]
  //console.log(ind);
  let sjik = ind.secret_key;
  try{if(LZString.decompressFromBase64(sjik)){sjik = LZString.decompressFromBase64(sjik)}} catch(ex){}
  delete ind.secret_key;

  let magic_link = `https://sonomapickleballladder.github.io/${ladderSeasonNameLowercase}_season/login?spl=${lsciph('email='+ind.email+'&key='+LZString.compressToBase64(sjik)+'&autologin')}`
  let emb = `Magic Link\n\nYou can use this link: ${encodeURI(magic_link)} to log into your dashboard temporarily.\n\nFrom your dashboard, under 'Messages', you can copy or email yourself your permanent login link, which will autofill your correct credentials.`
  let subj = `${ladderSeasonName} Ladder Season | Magic Link`
  let mailto = `mailto:${ind.email}?subject=${subj}&body=${encodeURIComponent(emb)}`

  let cpy = '<button onclick="navigator.clipboard.writeText(this.previousElementSibling.href)">&nbsp;Copy&nbsp;</button>'
  let child = window.open("about:blank",rdString(10));
  child.document.write(`<html>
    <head><title>Responses => ${p.innerHTML}</title>
    <style>summary{cursor: pointer; outline: none;} summary::marker{ color: gray;} details{ border: 0.1em solid black; border-radius: 0.5em; padding: 0.25em;}</style>
    </head>
    <body>

    <center>
        <h2>${ind.first_name} ${ind.last_name}</h2>
      </center>

    <p> <details>
    <summary>Information</summary>
    <div><p><pre style='word-wrap: break-word; white-space: pre-wrap;'>${JSON.stringify(ind)}</pre></p></div>
    </details> </p>
    

    <p> <details>
    <summary>Copy Hashes</summary>
    <div>
    <p><a href="javascript:;" onclick="navigator.clipboard.writeText('?spl=${lsciph('email='+ind.email+'&key='+LZString.compressToBase64(sjik))}')">Copy SPL login hash</a></p>
    <p><a href="javascript:;" onclick="navigator.clipboard.writeText('https://sonomapickleballladder.github.io/${ladderSeasonNameLowercase}_season/login?spl=${lsciph('email='+ind.email+'&key='+LZString.compressToBase64(sjik)+'&autologin')}')">Copy remote auto-login link</a></p>
    <p><a href="javascript:;" onclick="navigator.clipboard.writeText('${getPFUrl(2)}login${protoMap[location.protocol]}?spl=${lsciph('email='+ind.email+'&key='+LZString.compressToBase64(sjik)+'&autologin')}')">Copy local auto-login link</a></p>
    </div>
   </details> </p>

   <p> <details>
     <summary>Local Links</summary>
     <div>
     <p><a target="_blank" href="${getPFUrl(2)}login${protoMap[location.protocol]}?spl=${lsciph('email='+ind.email+'&key='+LZString.compressToBase64(sjik))}">Autofill login credentials &nearr;</a> ${cpy}</p>
     <p><a target="_blank" href="${getPFUrl(2)}login${protoMap[location.protocol]}?spl=${lsciph('email='+ind.email+'&key='+LZString.compressToBase64(sjik)+'&autologin')}">Auto login &nearr;</a> ${cpy}</p>
     <p><a target="_blank" href="${getPFUrl(2)}login${protoMap[location.protocol]}?spl=${lsciph('email='+ind.email+'&key='+LZString.compressToBase64(sjik)+'&autologin')}&return_to=${getPFUrl(2)}confirm_availability${protoMap[location.protocol]}">Confirm ${ind.first_name}'s Availability &nearr;</a> ${cpy}</p>
     <p><a target="_blank" href="${getPFUrl(2)}login${protoMap[location.protocol]}?spl=${lsciph('email='+ind.email+'&key='+LZString.compressToBase64(sjik)+'&autologin')}&return_to=${getPFUrl(2)}@Womens/confirm_availability${protoMap[location.protocol]}">Confirm ${ind.first_name}'s Availability Womens &nearr;</a> ${cpy}</p>
     <p><a target="_blank" href="${getPFUrl(2)}login${protoMap[location.protocol]}?spl=${lsciph('email='+ind.email+'&key='+LZString.compressToBase64(sjik)+'&autologin')}&return_to=${getPFUrl(2)}initial_order${protoMap[location.protocol]}">Test Initial Order &nearr;</a> ${cpy}</p>
     <p><a target="_blank" href="${getPFUrl(2)}login${protoMap[location.protocol]}?spl=${lsciph('email='+ind.email+'&key='+LZString.compressToBase64(sjik)+'&autologin')}&return_to=${getPFUrl(2)}@Womens/initial_order${protoMap[location.protocol]}">Test Initial Order Womens &nearr;</a> ${cpy}</p>
     
     
     </div>
    </details> </p>
    

    <p> <details>
     <summary>Website Links</summary>
     <div>
     <p><a target="_blank" href="https://sonomapickleballladder.github.io/${ladderSeasonNameLowercase}_season/login?spl=${lsciph('email='+ind.email+'&key='+LZString.compressToBase64(sjik))}">Autofill login credentials &nearr;</a> ${cpy}</p>
     <p><a target="_blank" href="https://sonomapickleballladder.github.io/${ladderSeasonNameLowercase}_season/login?spl=${lsciph('email='+ind.email+'&key='+LZString.compressToBase64(sjik)+'&autologin')}">Auto login &nearr;</a> ${cpy}</p>
     <p><a target="_blank" href="https://sonomapickleballladder.github.io/${ladderSeasonNameLowercase}_season/login?spl=${lsciph('email='+ind.email+'&key='+LZString.compressToBase64(sjik)+'&autologin')}&return_to=/${ladderSeasonNameLowercase}_season/confirm_availability${protoMap[location.protocol]}">Confirm ${ind.first_name}'s Availability &nearr;</a> ${cpy}</p>
     <p><a target="_blank" href="https://sonomapickleballladder.github.io/${ladderSeasonNameLowercase}_season/login?spl=${lsciph('email='+ind.email+'&key='+LZString.compressToBase64(sjik)+'&autologin')}&return_to=/${ladderSeasonNameLowercase}_season/@Womens/confirm_availability${protoMap[location.protocol]}">Confirm ${ind.first_name}'s Availability Womens &nearr;</a> ${cpy}</p>
     <p><a target="_blank" href="https://sonomapickleballladder.github.io/${ladderSeasonNameLowercase}_season/login?spl=${lsciph('email='+ind.email+'&key='+LZString.compressToBase64(sjik)+'&autologin')}&return_to=/${ladderSeasonNameLowercase}_season/initial_order${protoMap[location.protocol]}">Test Initial Order &nearr;</a> ${cpy}</p>
     <p><a target="_blank" href="https://sonomapickleballladder.github.io/${ladderSeasonNameLowercase}_season/login?spl=${lsciph('email='+ind.email+'&key='+LZString.compressToBase64(sjik)+'&autologin')}&return_to=/${ladderSeasonNameLowercase}_season/@Womens/initial_order${protoMap[location.protocol]}">Test Initial Order Womens &nearr;</a> ${cpy}</p>
     <p><a target="_blank" href="${mailto}">Email Magic Link &nearr;</a> ${cpy}</p>
     </div>
    </details> </p>

    <p> <details>
        <summary>Confirm email</summary>
        <div>
            <br>
            <textarea name="" id="" onclick="navigator.clipboard.writeText(this.value)">update auth.users\nset\n\temail_confirmed_at = '${supabaseDate()}'\nwhere\n\temail = '${ind.emailx}';</textarea>
        </div>
    </details> </p>
    

    </body>
   </html>`);
  child.document.close();
  //calert(0, `Responses => ${p.innerHTML}`, `<pre style='word-wrap: break-word; white-space: pre-wrap;'>${JSON.stringify(ind)}</pre>`, 'notice', 0,0,0,0,'1em','full', 'padding: 1em')
}


function addPayOpt(e) {
  if(byId('ptdate').value.length<1 || byId('ptend').value.length<1 || byId('ptstart').value.length<1 || byId('ptloc').value.length<1 || byId('ptpers').value.length<1) return false
  console.log(e);
  let fb = new Date(byId('ptdate').value)
  fb.setDate(fb.getDate() +1)
  console.log(fb);
var seconds = Math.round(fb.getTime() / 1000) + parseInt(byId('ptstart').value.split(':')[0])
  let conc = {0:"th",1:"st",2:"nd",3:"rd",4:"th",5:"th",6:"th",7:"th",8:"th",9:"th",10:"th",11:"th",12:"th",13:"th",14:"th",15:"th",16:"th",17:"th",18:"th",19:"th",20:"th",21:"st",22:"nd",23:"rd",24:"th",25:"th",26:"th",27:"th",28:"th",29:"th",30:"th",31:"st"}
  let sne = {months: {1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'}, days: {1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5:'Friday', 6: 'Saturday', 0: 'Sunday'}}
  let dat = sne.days[fb.getDay()]+' '+sne.months[fb.getMonth()+1]+' '+fb.getDate()+conc[fb.getDate()]
  //console.log(dat);
  let stm = tConvert(byId('ptstart').value) + ' – ' + tConvert(byId('ptend').value)
  let jsonob = {id: seconds, time: stm, location: byId('ptloc').value, date: dat, person: byId('ptpers').value, awvnu: '1'}
  console.log(jsonob);

  adsaveData('oermovw', jsonob)

}
window.addEventListener('beforeunload', function(e) {
  try{
    if(byId('markasseen').checked && Object.keys(JSON.parse(tempStore.lsnups)).length>0) {localStorage.setItem(ladderSeason+'Ladder_Signups',tempStore.lsnups)}
  }catch(ex){}

  try{
    localStorage.setItem(ladderSeason+'lastview',JSON.stringify([...document.querySelectorAll('details')].map(e=>e.open)))
  }
  catch(ex){}
})
  

function tConvert (time) {
  // Check correct time format and split into components
  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice (1);  // Remove full string match value
    time[5] = +time[0] < 12 ? 'am' : 'pm'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join (''); // return adjusted time or original string
}

tConvert ('18:00:00');


  async function shaprms(t,n) {
    const textAsBuffer = new TextEncoder().encode(t);
    const hashBuffer = await window.crypto.subtle.digest('SHA-'+JSON.stringify(n), textAsBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const digest = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return digest;
  }

  async function sha(t,n) {
    let k;
    let h = await shaprms(t,n).then(function(g){
      k=g;
    });
    return k;
    
  }

  async function adsaveData(t, e, thenfunction) {
    const { data, error } = await adsb.client
     .from(init.f_e+t)
     .insert([
       e
     ])
   
     if(error) console.log(error);
 
     try{executeFunctionByName(thenfunction, window, data);}catch(ex){}
  
     return {data: data, error: error}
   
}



  function setplayers(k) {
    localStorage.setItem(ladderSeason+'playerJSON28', k);
    idwh(JSON.parse(k))
}

function idwh(k) {
    
    for (let i = 0; i < k.responses.length; i++) {
        const eg = k.responses[i];
        let fn = eg.first_name.trim(), ln = eg.last_name.trim(), fln = `${fn} ${ln}`, pw = LZString.decompressFromBase64(eg.secret_key);
        afp[fln]=pw;
        eml[fln]=eg.email;
        fp.push(fln)
    }
    fp=fp.sort();
   // console.log(fp);
    sdi(fp)
}
function sdi(k) {
  for (let i = 0; i < k.length; i++) {
      byId('players').innerHTML+=`<option>${k[i]}</option>`;
  }
  let nround = 8;
  try {
    for (let i = 0; i < nround; i++) {
      const element = document.createElement('option');
      element.innerHTML = i+1;
      byId('cfround').appendChild(element);
      byId('cfround').value = getRound();
    }
  } catch (ex) {
    console.error(ex);
  }
}
  

let fp = [], afp={}, eml = {};

function confirmsubmit(k,s) {
 let ty = confirm(`Are you sure you want to confirm availability for ${k} for round ${s}?`);
 if(!ty) {return false}
 checkstatus();
 confirmavbl(k,s)
}
function confirmupdate(k,s) {
  let ty = confirm(`Are you sure you want to update availability for ${k} for round ${s}?`);
  if(!ty) {return false}
  checkstatus();
  updavbl(k,s)
 }
 


function confirmavbl(k,s) {
  let nm = k.replace(/(\s)/g,'').toLowerCase();
    let st = nm+afp[k];
     let lm = {name: k, token: sha256x(st,1), expires: LZString.compress(afp[k])};
        localStorage.setItem(ladderSeason+'logged_in_user3', JSON.stringify(lm));

vrfid(byId('avbl').checked,s)

       
        
}

function updavbl(k,s) {
  let nm = k.replace(/(\s)/g,'').toLowerCase();
    let st = nm+afp[k];
     let lm = {name: k, token: sha256x(st,1), expires: LZString.compress(afp[k])};
        localStorage.setItem(ladderSeason+'logged_in_user3', JSON.stringify(lm));

unvrfid(byId('avbl').checked,s)

       
        
}


function sha256x(s,x) {
  for (let i = 0; i < x; i++) {
    s = sha256(s);
  }
  return s;
}




function checkstatus() {
  let kp = JSON.parse(localStorage.getItem(ladderSeason+'logged_in_user3'));
  ptc('availability2.0', 'encoding3', 'smvig', kp.token).then(function(res){
    res = res.data;
      if(res && res.length>0) {
          //console.log(res);
          //console.log(res);
          let rsje;
          try{rsje = parseInt(byId('cfround').value)}catch(ex){rsje = getRound()+1}
          //console.log(rsje);
          
          
         let dcip = decipher(LZString.decompress(kp.expires));
         for (let i = 0; i < res.length; i++) {
          let fa = dcip(res[i].encoding3);
          //console.log(parseInt(fa.split('/')[0].trim())===getRound()+1);
          //console.log(fa);
          if(parseInt(fa.split('/')[0].trim())===rsje){ acwom = res[i].encoding3; return false};
          if(i==res.length-1) {return false}
         }
      }

     
  })

  console.log(acwom);
}



let acwom;



function vrfid(tmd,s) {

  if(!Boolean(tmd)){tmd=true}
  document.activeElement.blur();
  let angm = 'serviceWorkers';
  let bw = localStorage.getItem(ladderSeason+'logged_in_user3');
  bw = JSON.parse(bw);
  let wname = bw.name.replace(/(\s)/g,'').toLowerCase();
  let rnd = parseInt(byId('cfround').value.trim());
  let cky = cipher(LZString.decompress(bw.expires));
  let gso = cky(`${rnd}/${wname}`);
  let cgso = cky(`${rnd}/${wname}/${tmd}`);
  //console.log(cgso);
  let injson = {round: rnd, name: bw.name, smvig: bw.token, encoding: gso, encoding3: cgso, is_available: tmd}

  console.log(injson);
  let kf = confirm(`By clicking okay, you are confirming that you (${bw.name}) are available for ${byId("round").value}.\r\n \r\nIf you are not, please hit cancel.`)
  
  if(!kf) {return false}


  setTimeout(function(){saveData('availability2.0', injson).then(function(dn) {
      if(!dn) {
        getavlb('availability2.0',s)
      //showstatus(true);
      //cfstatus = true;
      }
      else {calert(0,'Server Error', 'Could not proccess your request. Please confirm by email instead.')}
  })},500);

}


function unvrfid(tmd,s) {
  if(!Boolean(tmd)){tmd=false}
  let angm = 'serviceWorkers';
  let bw = localStorage.getItem(ladderSeason+'logged_in_user3');
  bw = JSON.parse(bw);
  let wname = bw.name.replace(/(\s)/g,'').toLowerCase();
  let rnd = parseInt(byId('round').value.trim());
  let cky = cipher(LZString.decompress(bw.expires));
  //let gso = cky(`${rnd}/${wname}`);
  let cgso = cky(`${rnd}/${wname}/${tmd}`);
  let ocgso = cky(`${rnd}/${wname}/${!tmd}`);
  //console.log(cgso);
  let injson = {encoding3: cgso, is_available: tmd}

  //console.log(injson);
  
  let mgea = `By clicking okay, you are confirming that you (${bw.name}) are available for round ${byId("cfround").value}.\r\n \r\nIf you are not, please hit cancel.`;
  if(!tmd) {mgea = `By clicking okay, you (${bw.name}) are withdrawing your availability for round ${byId("cfround").value}.\r\n \r\nIf you do not wish to proceed, please hit cancel.`;}
  let kf = confirm(mgea);
  
  if(!kf) {return false}

  //console.log(injson);

  //try{byId('confirmationstatus').innerHTML = 'pending...';byId('confirmationstatus').style.backgroundColor=''}catch(ex){}

  setTimeout(function(){declareData('availability2.0', injson, 'encoding3', ocgso).then(function(dn) {
    console.log(dn);
    if(!dn) {
      getavlb('availability2.0',s)
        //  showstatus(tmd)
        //  cfstatus = tmd;
      }
      else {calert(0,'Server Error', 'Could not proccess your request. Please confirm by email instead.')}
      
      
  })},500);

}

let cfstatus;


/*var amvd = document.querySelectorAll('a')

for (let i = 0; i < amvd.length; i++) {
  let nv =  amvd[i]
  try{if(nv.getAttribute('onclick').indexOf('GetPlayersByActivity')>-1) {nv.click()}}catch(ex){}
  
}*/




function checkplayers(r, ld) {
  'string' == typeof r && (r = parseInt(r))
  let nd = []
  ptc(laddersOffered[ld].sb+'availability2.0', '*').then(res=>{
    !res.error && (res = res.data)
    console.log(res);

    

    let fdc = JSON.parse(tempStore.lsnups)[ld].signups.map(a=> {return {name: a.first_name+' '+a.last_name, expires: LZString.compressToEncodedURIComponent(LZString.decompressFromBase64(a.secret_key))}})
     
    for (let er = 0; er < fdc.length; er++) {
      let kp = fdc[er];
      let hv = res.filter((e)=>{return e.name.replace(/(\s)/g,'').toLowerCase() == kp.name.replace(/(\s)/g,'').toLowerCase()})
      //console.log(hv);

      for (let lu  = 0; lu  < hv.length; lu ++) {
        let dcip = decipher(LZString.decompressFromEncodedURIComponent(kp.expires));

            try{let fa = dcip(hv[lu].encoding3);
            //console.log(parseInt(fa.split('/')[0].trim())===getRound()+1);
            //console.log(fa);
            if((parseInt(fa.split('/')[0].trim())==r || parseInt(hv[lu].round) == fa || (hv[lu].smvig == '4873' && parseInt(hv[lu].round) == r)) && hv[lu].is_available){nd.push(hv[lu].name) /* console.log(res[i].name);*/ };
            }catch(ex){console.error(ex);}
      }

  

    
           

          

        }
  let txt = document.createElement('textarea')
  txt.value = nd.toString().replace(/(,)/g,'\n')

  copyTextToClipboard(txt.value)
 console.log(nd);

  })
}


function chckplrByRound(r,ld) {
  'string' == typeof r && (r = parseInt(r))

  ptc(laddersOffered[ld].sb+'availability2.0', '*').then(res=>{
    !res.error && (res = res.data)
    //console.log(res);
    let snje = res.filter(nn => parseInt(nn.round) == r)
    snje = snje.filter(nn => nn.is_available == true)
    console.log(snje);
  })
}


function fallbackCopyTextToClipboard(o){var e=document.createElement("textarea");e.value=o,e.style.top="0",e.style.left="0",e.style.position="fixed",document.body.appendChild(e),e.focus(),e.select();try{document.execCommand("copy")}catch(o){}document.body.removeChild(e)}function copyTextToClipboard(o){navigator.clipboard?navigator.clipboard.writeText(o).then((function(){}),(function(o){})):fallbackCopyTextToClipboard(o)}

function supabaseDate() {
  let now = new Date()
  let formattedDate = `${now.getFullYear()}-${expandNumber(now.getMonth())}-01 00:00:00.000000+00`
  return formattedDate
}

function expandNumber(number) {
  if (number < 10) {
    return "0"+number
  }
  else  {
    return number
  }
}

const execTime = {}