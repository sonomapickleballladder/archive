function executeFunctionByName(e,t){for(var p=Array.prototype.slice.call(arguments,2),r=e.split("."),l=r.pop(),n=0;n<r.length;n++)t=t[r[n]];return t[l].apply(t,p)}

function byId(p){return document.getElementById(p)}


function rdString(t,e){e||(e=entireAlph()+allNumbers()+specChars());let r="";for(let n=0;n<t;n++){let t=getRandomInt(0,e.length-1);r+=e.charAt(t)} return r}

function entireAlph(){return"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"}function allNumbers(){return"1234567890"}function specChars(){return"-_"}

function getRandomInt(t,o){return t=Math.ceil(t),o=Math.floor(o),Math.floor(Math.random()*(o-t+1))+t}

function enforceMinMax(el,val) {
    if(el.value>parseInt(el.max)) {el.value=el.max}
    if(el.value<parseInt(el.min)) {el.value=el.min}
}

function unloadJS(e){document.getElementsByTagName("head").item(0);var n=document.getElementById(e);n.parentNode.removeChild(n)}function unloadAllJS(e){var n=new Array;let t=(n=document.getElementsByTagName("script")).length;for(i=0;i<t;i++)n[0].id?unloadJS(n[0].id):e.indexOf(n[0].src)<0&&n[0].parentNode.removeChild(n[0])}

function jsFill(){try{let hy=byAttr("jsfill");for(let i=0;i<hy.length;i++){let jf;jf=Boolean(hy[i].getAttribute("jsfill"))?hy[i].getAttribute("jsfill"):"";try{hy[i].innerHTML=eval(jf)}catch(ex){hy[i].value=eval(jf)}}}catch(t){}}

function fillDates(){try{let t=byAttr("date");for(let e=0;e<t.length;e++){let h;h=Boolean(t[e].getAttribute("offset"))?parseInt(t[e].getAttribute("offset")):0,Boolean(t[e].getAttribute("today"))?t[e].innerHTML=formatDate(offsetDate(h)[0],"us"):t[e].innerHTML=formatDate(offsetDate(h)[1],"us")}}catch(t){}}function formatDate(t,e){try{if("us"){let e=t.split("/"),h=parseInt(e[0]),r=e[1],a=e[2];return["January","February","March","April","May","June","July","August","September","October","November","December"][h-1]+" "+parseInt(r)+{0:"th",1:"st",2:"nd",3:"rd",4:"th",5:"th",6:"th",7:"th",8:"th",9:"th",10:"th",11:"th",12:"th",13:"th",14:"th",15:"th",16:"th",17:"th",18:"th",19:"th",20:"th",21:"st",22:"nd",23:"rd",24:"th",25:"th",26:"th",27:"th",28:"th",29:"th",30:"th",31:"st"}[parseInt(r)]+" "+a}return t}catch(e){return t}}

function lgifnolg() { try{if(!lsdciph(localStorage.getItem(ladderId.ls+'logged_in_user'))) {location.replace(`login${protoMap[location.protocol]}?return_to=${location.pathname}`)} else {try{hide(0)} catch(ex){} return true}}catch(ex){location.replace(`login.html`)}}
function nifnok() { try{if(!lsdciph(localStorage.getItem(brick('$_authenticated_user'+ladderSeason)))) {location.replace(`login${protoMap[location.protocol]}`)} else {try{hide(0)} catch(ex){} return true}}catch(ex){location.replace(`login.html`)}}

function ismobile() {
  let check = false;
   try{ 
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera); 
    } catch(ex){};
  return check;
};

function isiPad() {
  return (navigator.userAgent.match(/(iPad)/) /* iOS pre 13 */ || 
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) /* iPad OS 13 */); 
}

function apndChilren(p,j) {
  try {
    for (let i = 0; i < j.length; i++) {
      if(debug) console.log(j[i]);
      p.appendChild(j[i])
    }
  }
  catch(ex) {}
}

function reverseString(e){let r="";for(let t=e.length-1;t>=0;t--)r+=e[t];return r}

  function optStorage(t,e){if(["recipe_content"].indexOf(t)<0)return{result:e};let r=[e,LZString.compressToUTF16(e),LZString.compressToUint8Array(e)],n=[];for(let t=0;t<r.length;t++)n[t]=r[t].length;let o=n.indexOf(Math.min(...n));return gbstr.compression=o,{result:r[o]}}

  function formatLabel(label, r) {
    try{label = label.split(r);
    !isNaN(+label[label.length - 1]) ? label.pop() : '';
    return label.join(r);}
    catch(ex){return label}
  }

  function isLocalStorageAvailable(){
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}

function remvel(e,r){e&&!r&&(r=document.querySelector(e));try{r.parentNode.removeChild(r)}catch(e){}}

function ns(src,id,type,inh,prent){
  let m = '';
try{
  let s = document.createElement('script'); s.src=unundefine(src,m); s.id=unundefine(id,m), s.type=unundefine(type,m);s.innerHTML=unundefine(inh,m);
  if(!prent){prent=document.head}
  prent.prepend(s)
}
catch(ex){}
}

function unundefine(x,e) {
  if(!e) {e=false}
  let fltypes = [false,0,undefined, null, 'undefined']
  if(fltypes.indexOf(x)>-1){x=e}
  return x;
}

function lsWarning(message) {
  if(!isLocalStorageAvailable()){
    var rmvlogic = false;
    message ||  (message = 'Failed to access your browser\'s local storage. As a result, this page\'s functionality will be limited and certain content may not load. See <a target="_blank" rel="noreferrer" href="https://mid.as/kb/00103/enable-disable-or-clear-web-storage-cache">here</a> for info about how to enable local storage.')
    calert(rmvlogic,'<span style="font-size: large;">Local Storage Error</span>', `<span style="font-size: medium;">${message}</span>`, 'error','100%', '100%',0,0,'2em', 'full', 'padding: 0.5em')
}
}

  const gbstr = {}
  const fte= {'/faq': [['mk'],['lsWarning']], '/signup': [[]], '/how_it_works': [['jsFill()']], '/confirm_availability': [['lgifnolg()']]}

  document.addEventListener("DOMContentLoaded",function() {
    try{let lz = LZString.compress('test')}catch(ex){let surl = getScriptURL(); let path = `${getScriptURL().path.split('/')[0]}/lzstring.js`, sc = document.createElement('script'); sc.src = path; getScriptURL().script.parentNode.insertBefore(sc, getScriptURL().script)}
    try{createReferences()}catch(ex){}
    let pthname = location.pathname.split('.')[0];
    //console.log(pthname);
    if(!fte[pthname]){fte[pthname]=[[]]}
    if(!fte[pthname][0][0]){fte[pthname][0][0]=''}
    if(!fte[pthname][0][1]){fte[pthname][0][1]=''}
    let lnn = fte[pthname].length;
    try{
      for (let i = 0; i < lnn; i++) {
        let fh = fte[pthname][i];
        try{executeFunctionByName(fh[0],window,fh[1])}catch(ex){}finally{gbstr.sd = new Date().getTime();}
      }
        
      }
  
    catch(ex){}

    


    jsFill();
    
      
      })




      let getScriptURL = (function() {
        var scripts = document.getElementsByTagName('script');
        var index = scripts.length - 1;
        var myScript = scripts[index];
        return function() { return {actual: myScript.src, path: myScript.getAttribute('src'), script: myScript}; };
    })();

    function copy(t,l,nh) {
      let m = t;
      'object' == typeof m && (m = m.innerText)
      navigator.clipboard.writeText(m)
      if(typeof t != 'object' && typeof nh != 'object') return false
      if(typeof nh == 'object') t = nh
      if(!l) {
        let kp = document.createElement('mark')
        kp.innerHTML = 'Copied!'
        kp.classList.add('copied')
        t.parentNode.insertBefore(kp, t.nextElementSibling);
        setTimeout(function(){t.parentNode.removeChild(kp)},1000)
      }
    }
    
  



       function createReferences() {
        let r = '';
        if(location.search.indexOf('r=')>-1) {
          r = location.search.split('r=')[1].split('&')[0].split('?')[0]      
        }
        else if(location.search.indexOf('t=')>-1) {r = '*'}
        if (r.length>0) {collar(r)}
        if(location.search.indexOf('t=')>-1) {
          let m = location.search.split('t=')[1].split('&')[0].split('?')[0];
          byId(m).scrollIntoView();
        }
       }

       function collar(rs) {
        const sha256=function r(t){function n(r,t){return r>>>t|r<<32-t}for(var o,e,f=Math.pow,h=f(2,32),a="",l=[],g=8*t.length,c=r.h=r.h||[],i=r.k=r.k||[],u=i.length,v={},s=2;u<64;s++)if(!v[s]){for(o=0;o<313;o+=s)v[o]=s;c[u]=f(s,.5)*h|0,i[u++]=f(s,1/3)*h|0}for(t+="";t.length%64-56;)t+="\0";for(o=0;o<t.length;o++){if((e=t.charCodeAt(o))>>8)return;l[o>>2]|=e<<(3-o)%4*8}for(l[l.length]=g/h|0,l[l.length]=g,e=0;e<l.length;){var k=l.slice(e,e+=16),d=c;for(c=c.slice(0,8),o=0;o<64;o++){var p=k[o-15],w=k[o-2],A=c[0],C=c[4],M=c[7]+(n(C,6)^n(C,11)^n(C,25))+(C&c[5]^~C&c[6])+i[o]+(k[o]=o<16?k[o]:k[o-16]+(n(p,7)^n(p,18)^p>>>3)+k[o-7]+(n(w,17)^n(w,19)^w>>>10)|0);(c=[M+((n(A,2)^n(A,13)^n(A,22))+(A&c[1]^A&c[2]^c[1]&c[2]))|0].concat(c))[4]=c[4]+M|0}for(o=0;o<8;o++)c[o]=c[o]+d[o]|0}for(o=0;o<8;o++)for(e=3;e+1;e--){var S=c[o]>>8*e&255;a+=(S<16?0:"")+S.toString(16)}return a};
        rs = document.querySelectorAll(rs);
        for (let i = 0; i < rs.length; i++) {
          if(!rs[i].getAttribute('id')) {rs[i].setAttribute('id', sha256(b64(JSON.stringify(rs[i].innerHTML))))}
        }
        if(location.search.indexOf('easylinks')>-1) {
          for (let i = 0; i < rs.length; i++) {
            rs[i].style.cursor = 'pointer';
            rs[i].onclick = function() {navigator.clipboard.writeText(location.href.replace(/(easylinks)/g,'').replace(/(t=)[\S]+/g,``).replace(/\&$/,`&t=${rs[i].id}`))}
          }
        }
       }



function b64(r, t) {
let Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
if(t == -1) {return Base64.decode(r);}
else return Base64.encode(r);
}

function calert(rmv, title, content, clas, hgt, wdth, mesbg, mescl, mespad, fullpage, tpad) {

  //function prvundefined(e,n){"array"!=typeof e&&(e=e.split(","));for(let r=0;r<e.length;r++)Boolean(e[r])||(e[r]=n);return e}
          let mthen = {funct:'remvel',para:'.modal__overlay'}
          let kdwn = {list:'keydown',targ:'html', evnt: '27', then:mthen}
          if(!Boolean(rmv)) {rmv=[{list:'click',targ:'.modal__close',then:mthen},kdwn]} 

          if(content.toString().length>0&&!mespad) {mespad='0.5em'}

          clas||(clas=""),hgt||(hgt=""),wdth||(wdth=""),mesbg||(mesbg=""),mescl||(mescl=""),mespad||(mespad="");
          
          if(fullpage == 'full') {fullpage = 'height: 100%; width: 100%; max-width: 100%!important'}
          else {fullpage = `max-height:${hgt};max-width:${wdth};`}
    
          var alertContent = `
            <div class="modal__overlay verdana">
              <div class="modal__window" style="${fullpage}">
                <div class="modal__titlebar ${clas}" style="${tpad}">
                  <span class="modal__title">${title}</span>                        
                  <button class="modal__close">X</button>                    
                </div>                     
                <div class="modal__content" style="background-color:${mesbg};color:${mescl};padding:${mespad}">${content}</div>
              </div>
            </div>`
          var dialogBox = document.createElement("div");
          dialogBox.innerHTML = alertContent;
          document.body.appendChild(dialogBox); // actually append it
  
          for (let i = 0; i < rmv.length; i++) {
            if(!rmv[i].evnt){rmv[i].evnt=0}
            aevlst(rmv[i].targ, rmv[i].list, rmv[i].evnt, rmv[i].then.funct, rmv[i].then.para);
            
          }

        }
        
        
              function aevlst(e,t,c,n,i){"array"!=typeof e&&(e=e.split(","));for(let t=0;t<e.length;t++)if("object"!=typeof e[t])try{e[t]=document.querySelector(e[t])}catch(e){}for(let r=0;r<e.length;r++)if(unundefine(c)){let a=c.split(",");try{e[r].addEventListener(t,(e=>{try{e.which!=a[0]&&e.which!=a[1]&&e.which!=a[2]||(e.preventDefault(),executeFunctionByName(n,window,i))}catch(e){}}))}catch(e){}}else try{e[r].addEventListener(t,(e=>{try{executeFunctionByName(n,window,i)}catch(e){}}))}catch(e){}}
        
              
        
              function byAttr(atr, val) {
                if(!val) {return document.querySelectorAll('['+atr+']')}
                return document.querySelectorAll('['+atr+'="'+val+'"]');
              }





              function createPersonName() { var firstNames = [ "Basil", "Berthold", "Bev", "Coltrane", "Emanuel", "Fahri", "Fred", "Gerrit", "Gilly", "Harry", "Ian", "Jack", "Kai-Uwe", "Lucy", "Morten", "Neville", "Oscar", "Paul", "Steven", "Sven", "Thomas", "Walt", "Xena", "Yuji", "Ziggs","Paulina", "Gavin", "Amandine", "Guevara", "Edie", "Larue", "Ruse", "Avary", "Talor", "Ricard", "Merriam", "Jonette", "Moorcock", "Rajidin", "Melinda", "Roseburg", "Manolo", "Todd", "Shauna", "Kigali", "Jacob", "Borghese", "Ouzo", "Tinia", "Boa", "Chang", "Rakus","Wyatt","Luke","Vera","Pamela","Jean","Peggy","Katharine","Nicholas","Jill","Brenda","Dick","Jason","Lara","Willy","Wayne","Ted","Adam","Linda","Catherine","Larry","Tina","Jessica","Susan","Tim","Kirk","Priscilla","James","Jim","Mark","Carolyn","Katie","Jeanne","Billy","Quentin","Muriel","Margaret","Bob","Mike","Joan","Roger","Gerald","Mildred","Jennie","Rose","Sue","Henri","Marie", "Christophe", "Michel", "Valérie", "Joël", "Dominique", "Pierre", "Florence", "Marie", "Benoît", "Luc", "François", "Jérôme","Bill","Steve","Philip","Mary","Ralph","Melissa","Jessie","Ann","Ava","Rebecca","Sally","Tracy","Barbara","Lucy","Lulu","Kathleen","Lin","Tony","Clyde","Sean","Betty","Bobby","Chris","Kristine",'Colin','Niki','Mina','Kerry','Kim','Terry','Drew','Wesley','Gabby','Jodie','Karis','Harley','Steph','Eric','Reid','Jessica','Claire','Michelle','Ann','Carol','Madison','Kym','Jillian','Carly','Jess','Emily','Stacey','Erica','Cat', 'Nathan','Jude','Matthew','Levi','Mandy','Sophia','Alexa','Vicki','Kelci','Sabrina','Nicole','Devin','Natasha','Amy','Stephanie','Amanda','Mason','Naomi','Thomas','Katelyn','Jessie','Olivia','Tammy','Tyler','Miley','Mia','Lea','Chelsea','Angelina'];var lastNames = ["Pandorf", "Tiddig", "Alger", "Wardat", "Norsk", "Kever", "Morodo", "Bakker", "Bulsky", "Oltman", "Lorens", "Caruso", "Barnes", "Moon", "Grubben", "Hanekamp", "Akash", "Mahood", "Denton", "Pierce", "Monroe", "Sechewitz", "Doheny", "Hubbock", "Carville", "Adebolajo", "Sprague", "Guy", "Carson", "Cowper", "Manry", "Rooker", "Davenport", "Delaune", "Pohlman", "Struensee", "Trasier", "Hawkins", "Gardner", "Andrews", "Eagan", "Coy", "Fowler", "Connor", "Clodfelter", "Cornelius", "Moore", "Coz", "Botha", "Johnson", "Simsm", "Galton", "Bastain", "Osherson", "Morris", "Liengard","Smith","Doe","Jones","Jacks","Toms","Black","Brown","Williams","Adreon", "Albonetti", "Ameliai", "Arcandori", "Audici", "Balestri", "Bassetti", "Bayzi", "Benanti", "Bernardini", "Bischoffi", "Boni", "Brocchi", "Caccia", "Caporali", "Carico", "Catoni", "Cattivelli", "Cavalazzi","Björklund", "Ceder", "Dahlgren", "Edlund", "Eriksson", "Falk", "Folke", "Forsell", "Gunnarson", "Helgesson", "Hedlund", "Hemsö", "Henriksson", "Hjärtstam", "Hultman", "Håkansson", "Idäsvik", "Idestamn", "Johansson", "Jonsson", "Kanders", "Karlson","Haddad", "Aajam", "Bouay", "Harraki", "Keddi", "Haji", "Kharb", "Belhaj", "Kettane","Pujtani","Herman","Kristian","Ardiansyah","Tolichar","Budiyani","Ganesha","Aldy","Aries","Kovaltyn","Acuña", "Aguilar", "Andrade", "Anabalón", "Araos", "Araya", "Armijo", "Barba", "Barrios", "Barrera", "Barugan", "Bertrand", "Boyd", "Brahm", "Cabrera", "Cabreras", "Café", "Cardenas", "Carocca", "Castillo", "Cepeda", "Chamorro", "Chau", "Cuevas", "Díaz", "Encina", "Escalante", "Espiñeira", "Esprich", "Fariña", "Fernández", "Figueroa", "Forset"]; var count = 0; var name = firstNames[Math.floor(Math.random()*firstNames.length)] + " " + lastNames[Math.floor(Math.random()*lastNames.length)]; while (name[count]!=null) { count++; name = firstNames[Math.floor(Math.random()*firstNames.length)] + " " + lastNames[Math.floor(Math.random()*lastNames.length)]; } return name}

              function createEmail(name) {
                var emailDomains = ["gmail.com", "proton.me", "outlook.com", "harvard.edu", "sonic.net", "aleeas.com", "disroot.org", "tuta.io", "jetmail.com", "gmx.com", "getalife.com", "whitehouse.gov", "hotmail.com", "7yaks.space", "yahoo.com", "icloud.com", "pm.me", "aol.com", "comcast.net", "simplelogin.com","protonmail.com", "bastardi.net", "tutanota.com", "airmail.cc"]
              
                if(!name) var name = createPersonName();
                var fname = name.split(' ')[0].replace(/\s/g,'').toLowerCase();
                var lname = name.split(' ').pop().replace(/\s/g,'').toLowerCase();
                //name.replace(new RegExp(fname,'g'),'').replace(/\s/g,'').toLowerCase();
                //console.log(fname,lname);
                var salt = '012345', schars = '0123456789', sjoiners = '-_.', adjs = ['isthebest', 'isawesome', 'isnotdead', '4congress'], fhalf = '';
                //console.log(sl,fname);

                //console.log(fname,lname,fname+lname,rdString(Math.floor(Math.random()*5),schars),fname+rdString(Math.floor(Math.random()*5),schars));
                let cass = {
                  0:fname+lname+rdString(Math.floor(Math.random()*5),schars),
                  1:fname+rdString(1,sjoiners)+lname,
                  2:rdString(Math.ceil(Math.random()*3),schars)+fname+lname,
                  3:lname+fname,
                  4:fname+lname,
                  4:fname+lname+adjs[Math.floor(Math.random()*adjs.length)],
                  5:lname+fname+rdString(Math.ceil(Math.random()*5),schars)
                }

                let sl = Math.floor(Math.random()*Object.values(cass).length);
                
                
               //console.log(cass);
               //console.log(emailDomains, typeof emailDomains);
               fhalf=cass[sl]+'@'+emailDomains[Math.floor(Math.random()*emailDomains.length)].toString().replace(/\s/g,'')
            
                return fhalf;
              }


              function dgprompt(message, success, failure) {
                var open_time = new Date();
                var result = prompt(message);
                var close_time = new Date();
                
                if (close_time - open_time < 10) {
                    failure();
                } else {
                    success(result);
                }
            }
            

            String.prototype.proper = function (lower) {
              return (lower ? this.toLowerCase() : this).replace(/(?:^|\s|['`‘’.-])[^\x00-\x60^\x7B-\xDF](?!(\s|$))/g, function (a) {
                return a.toUpperCase();
              });
            };



        function randFill() {
          try{
            let randname = byAttr('randomname');
            for (let i = 0; i < randname.length; i++) {
              randname[i].innerHTML=createPersonName();
              if(Boolean(randname[i].getAttribute('apnd'))) {randname[i].innerHTML+=randname[i].getAttribute('apnd')}
            }
          }catch(ex){}
        }




        function rdFrstNm() {
          try{
              let randname = byAttr('randomname');
              for (let i = 0; i < randname.length; i++) {
                  let uy = createPersonName();
                  randname[i].innerHTML=uy;
                if(Boolean(randname[i].getAttribute('apnd'))) {randname[i].innerHTML+=randname[i].getAttribute('apnd')}
                try {
                  if(byAttr('randomemail',randname[i].getAttribute('dataid')).length>0){
                      byAttr('randomemail')[0].innerHTML=createEmail(uy);
                  }
                } catch (ex) {
                  if(debug)console.error(ex);
                }
              }
            }catch(ex){}
      }

      function log(t) {
        console.log(t);
      }

      var debug = location.search.indexOf('debug')>-1;


function unRadio(h) {
  if(h.checked) h.checked = false;
}



function compressst(e){e=unescape(encodeURIComponent(e));for(var t,n,r="",o=0;o<e.length;o+=2)t=e.charCodeAt(o),o+1<e.length?(n=t+""+(e.charCodeAt(o+1)-31).toLocaleString("en",{minimumIntegerDigits:2}),r+=String.fromCharCode(parseInt(n,10))):r+=e.charAt(o);return btoa(unescape(encodeURIComponent(r)))}function decompressst(e){var t,n,r,o,a="";e=decodeURIComponent(escape(atob(e)));for(var s=0;s<e.length;s++)(t=e.charCodeAt(s))>132?(n=t.toString(10),r=parseInt(n.substring(0,n.length-2),10),o=parseInt(n.substring(n.length-2,n.length),10)+31,a+=String.fromCharCode(r)+String.fromCharCode(o)):a+=e.charAt(s);return a}


function icompress(e){e=unescape(encodeURIComponent(e));for(var n,t,r="",o=0;o<e.length;o+=2)n=e.charCodeAt(o),o+1<e.length?(t=n+""+(e.charCodeAt(o+1)-31).toLocaleString("en",{minimumIntegerDigits:2}),r+=String.fromCharCode(parseInt(t,10))):r+=e.charAt(o);return btoa(unescape(encodeURIComponent(r)))}function idecompress(e){var n,t,r,o,a="";e=decodeURIComponent(escape(atob(e)));for(var c=0;c<e.length;c++)(n=e.charCodeAt(c))>132?(t=n.toString(10),r=parseInt(t.substring(0,t.length-2),10),o=parseInt(t.substring(t.length-2,t.length),10)+31,a+=String.fromCharCode(r)+String.fromCharCode(o)):a+=e.charAt(c);return a}


const cipher = salt => {
  const textToChars = text => text.split('').map(c => c.charCodeAt(0));
  const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
  const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);

  return text => text.split('')
    .map(textToChars)
    .map(applySaltToChar)
    .map(byteHex)
    .join('');
}
  
const decipher = salt => {
  const textToChars = text => text.split('').map(c => c.charCodeAt(0));
  const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
  return encoded => encoded.match(/.{1,2}/g)
    .map(hex => parseInt(hex, 16))
    .map(applySaltToChar)
    .map(charCode => String.fromCharCode(charCode))
    .join('');
}



function lsciph(g,cp,c) {
  typeof g == 'string' || (g = JSON.stringify(g))
  c||(c=ladderId.ls)
  cp==true||(cp=false)
  let k = cipher(c)
  k =  k(g)
  cp && (k = LZString.compress(k))
  return k
}

function lsdciph(g,cp,c) {
  if(!Boolean(g)) {return null}
  c||(c=ladderId.ls)
  cp==true||(cp=false)
  cp && (g = LZString.decompress(g))
  let k = decipher(c)
  k = k(g)
  try{
    k = JSON.parse(k)
  }
  catch(ex){}
  return k

}

function hide(e,t){t||(t=document.documentElement),null==e&&(e=!0),e?t.setAttribute("hidden",""):t.removeAttribute("hidden")}



function unfade(a,k){k||(k=10);var t=.1;a.style.display="block";var l=setInterval((function(){t>=1&&clearInterval(l),a.style.opacity=t,a.style.filter="alpha(opacity="+100*t+")",t+=.1*t}),k)}
function fade(t){var a=1,e=setInterval((function(){a<=.1&&clearInterval(e),t.style.opacity=a,t.style.filter="alpha(opacity="+100*a+")",a-=.1*a}),50)}

function notReady(ms) {
  ms || (ms = `<!DOCTYPE html><head><style>html,body{font-size:1.25rem}</style></head><pre style="word-wrap: break-word; white-space: pre-wrap;">This page will be available once the Ladder Season is underway.</pre>`)
  {let tt = document.title; document.documentElement.innerHTML = ms; document.title = tt; hide(0); return false}
}

function brick(r){try{return cipher("brick")(r)}catch(c){return r}}function unbrick(r){try{return decipher("brick")(r)}catch(c){return r}}

function get_darkmode() {
  let isdarkmode = null;
try {if(localStorage.getItem(brick('$_darkMode')) != null) {isdarkmode = JSON.parse(localStorage.getItem(brick('$_darkMode')))}} catch(ex) {console.error(ex);}
if(location.href.indexOf('darkmode=0')>-1) {isdarkmode = false; try{localStorage.setItem(brick('$_darkMode'), false)} catch(ex){}}
if(location.href.indexOf('darkmode=1')>-1) {isdarkmode = true; try{localStorage.setItem(brick('$_darkMode'), true)} catch(ex){}}
if(isdarkmode == null) {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isdarkmode = true
  }
  else {isdarkmode = false}
}
return isdarkmode
}

function sendBug(b) {
  var test = document.createElement('a'); test.href = 'bugs.html';
 try{ 'object' == typeof b && (b = JSON.stringify(b))
  let cp = cipher(reverseString('gubed'))
  let o = cp(b)
  //var _navigator = {};
  //for (var i in window.navigator) _navigator[i] = navigator[i];
  let nvgt = cp(navigator.userAgent)
  let usr = lsdciph(localStorage.getItem(brick('$_authenticated_user'+ladderSeason)))
  let bg =  `page=${location.href}&user=${usr.first_name} ${usr.last_name}&bug=${o}&n=${nvgt}&darkmode=${get_darkmode()}`
 // console.log(bg.length, LZString.compressToEncodedURIComponent(bg).length);
   bg = LZString.compressToEncodedURIComponent(bg)
  return `${test.href}?${bg}` } catch(ex) {return `${test.href}?501`}
}

String.prototype.between = function(a,b) {
  try{return this.split(a)[1].split(b)[0]}catch(ex){return this}
}

function emailx(e) {
  try {
    return `${e.split('@')[0]}+${ladderSeason}@${e.split('@')[1]}`.toLowerCase()
  } catch (ex) {
    return e;
  }
}

function getPFUrl(n) {
  var test = document.createElement('a')
  var hsn = ''
  'number' == typeof n || (n=0)
  for (let i = 0; i < n; i++) {
    hsn+='../'
    if(i==n-1) {test.href=hsn; return test.href}
  }
}

function isSafari() {
  return (/^((?!chrome|android).)*safari/i.test(navigator.userAgent))
}