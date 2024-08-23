window.onload = function() {
 jsFill();
 getdata();

 if(!localStorage.getItem(ladderSeason+'Ladders_Offered_Computation')) {byId('check').checked = true}
 
}

function getdata() {
    try {
        savekey(LZString.decompress(localStorage.getItem(ladderSeason+'admkey')))
    } catch (ex) {
        
    }
}


async function ptc(t,s,e){
    e && (t = e + t)
    const { data, error } = await adsb.client
    .from(init.f_e+t)
    .select(s)
  
  
    if(error) console.log(error);
 
    try{executeFunctionByName(thenfunction, window, data);}catch(ex){}
 
    return {data: data, error: error}
  
    
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

  function getavlb(tb) {
    ptc(tb, '*').then(function(res){
        avbl=res;
        avbl2.round = [[],[],[],[],[],[],[],[],[]]
       for (let i = 0; i < res.length; i++) {
           avbl2.round[res[i].round].push(res[i])
       }
       dspavlb()
    })
  }

  function dspavlb() {
    let round = byId('round').value;
    let rarr = avbl2.round[round];
    byId('output').value = '';

    for (let i = 0; i < rarr.length; i++) {
        console.log(rarr[i]);
        let dl = '\n';
        if(byId('delimit').value.length>0) {dl = byId('delimit').value}
        byId('output').value+=rarr[i].name.trim()+dl;
    }
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
  

 function jsFill(){try{let hy=byAttr("jsfill");for(let i=0;i<hy.length;i++){let jf;jf=Boolean(hy[i].getAttribute("jsfill"))?hy[i].getAttribute("jsfill"):"";try{typ=jf.split('?')[1];jf=jf.split('?')[0];if(typ.length>0){hy[i][typ]=eval(jf)}else{hy[i].innerHTML=eval(jf)}}catch(ex){}}}catch(t){}}






  function addplayers(val) {
    let ldv = {Open: {sb:''}, Womens: {sb: 'womens-ladder_'}}
    if(!byId('check').checked) {val = localStorage.getItem(ladderSeason+'Ladders_Offered_Computation')}
   let h= JSON.parse(val)

   let nhf =  prompt('Ladders to save (csv)').split(',')
    

   for (let mni = 0; mni < Object.keys(h).length; mni++) {
    var ld = Object.keys(h)[mni];
    var bh = h[ld].signups;

    let awiaf = [];
    let awiaf2 = [];
    let awiaf3 = [];
   

   for (let i = 0; i < bh.length; i++) {
    let fnam = bh[i].first_name.trim().toLowerCase();
    let lnam = bh[i].last_name.trim().toLowerCase();
    let nam = (bh[i].username).toLowerCase().replace(/(\s)/g,"")
    let skey = bh[i].secret_key;
  try{if(LZString.decompressFromBase64(skey)){skey = LZString.decompressFromBase64(skey)}} catch(ex){}
    let cmbin = nam+skey;
    let hsh = sha256(cmbin);

    awiaf.push(hsh);

    awiaf2.push(sha256(hsh));
    
    console.log(fnam+" "+lnam+": "+ld+"\n"+sha256(cmbin));

    let gc = (fnam+lnam).replace(/(\s)/g,'');
    let cph = cipher('limit');
    //console.log(cph(gc));

    awiaf3.push(cph(gc))
    

    let ins = {hash: hsh, bwoc: nam}
    let tb = 'identities';

    //addelete(tb);

 ////   adsaveData(tb,ins);


 if(nhf.includes(ld)) {


  console.log(tb,ins, ldv[ld].sb);
  adsaveData(tb,ins,ldv[ld].sb);


  console.log(`${gc}: ${cph(gc)}`);


    let ins2 = {afaf: cph(gc), bool: true}
    adsaveData('pard',ins2,ldv[ld].sb);


let mno = {list: awiaf2};

console.log(mno);

//console.log(JSON.stringify(awiaf2));

 adupdateData('rdbusrs', mno, 'id', 1, ldv[ld].sb)

}

//navigator.clipboard.writeText(JSON.stringify(awiaf))

   }
  }
   
  }




function spreadsheetify() {
  let nb = JSON.parse(localStorage.getItem(ladderSeason+'Ladders_Offered_Computation'))
  let nt = ['created_at', 'username', 'first_name', 'last_name', 'email', 'phone', 'prefer', 'have_read','0','DUPR', '0', '0', 'Self_Rating', 'payment_method', 'PayPal_name', '0']
  let ld = byId('ladder').value
  if(ld.length<1) {alert('Invalid Ladder'); return false}
  //document.documentElement.focus()
  let hg = nb[ld].signups;
  console.log(hg);
  let ce = document.createElement('textarea')
  ce.setAttribute('hidden','')
  document.body.appendChild(ce)
  for (let ix = 0; ix < hg.length; ix++) {
    let snp = hg[ix];
    let vf = Object.keys(snp)
    let st = ''
  
  for (let i = 0; i < nt.length; i++) {
    let h = nt[i];
    if(vf.includes(h) && snp[h] !=null) {
      st+=snp[h]+',';
    }
    else {
      st+=','
    }
    

  }
  ce.value+=(st)+'\n';
 }
 navigator.clipboard.writeText(ce.value);
 let al = document.createElement('a')
 al.innerHTML = 'Test Spreadsheet'
 al.href = 'javascript:;'
 al.target = '_blank'; al.rel = 'noreferrer'
 al.onclick = function() {
  window.open('https://calc.domainepublic.net/ninnisonue93n9mMNDicw9csd9ckMwc', '_blank')
 }
 document.body.appendChild(al)
}







  async function adsaveData(t, e, th) {
    th && (t = th + t)
    const { data, error } = await adsb.client
     .from(init.f_e+t)
     .insert([
       e
     ])
   
     if(error) console.log(error);
 
     return {data: data, error: error}
   
}


async function adupdateData(t, e, s, m, th) {
  th && (t = th + t)
  //console.log(e)
  //console.log(init.f_e+t,e)
  const { data, error } = await adsb.client
   .from(init.f_e+t)
   .update([
     e
   ])
   .eq(s,m)
 
   if(error) console.log(error);

   return {data: data, error: error}
 
}


async function addelete(t) {

    confirm(`Are you sure you want to delete the entire table ${t}?`);

    confirm('Are you really sure?');

    confirm('This cannot be undone');

    confirm('Proceed?')

    const { data, error } = await adsb.client
     .from(init.f_e+t)
     .delete()
  
}


function updatePaymentTable(boolean) {
  let ldv = {Open: {sb:''}, Womens: {sb: 'womens-ladder_'}}
  let ladder = prompt("Which ladder is this for?")
  notPaidArray = byId(Boolean(boolean)?"paid":"notpaid").value.trim().split("\n")
  console.log(notPaidArray);
  for (let i = 0; i < notPaidArray.length; i++) {
    const player = notPaidArray[i];
    let gc = (player).replace(/(\s)/g,'').toLowerCase();
    
    let cph = cipher('limit');
    console.log(`${gc}: ${cph(gc)}`);
    let json = {afaf: cph(gc), bool: boolean}
    adupdateData('pard', json, 'afaf', cph(gc), ldv[ladder].sb)
    
  }
  

}


