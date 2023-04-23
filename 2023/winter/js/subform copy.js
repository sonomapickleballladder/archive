window.onload = function () {
  cusInp();
  rdFrstNm();
  jsFill();

  let rnd = getRound();
  try{autofillRound(rnd,'current');
  autofillRound(rnd,'next')
  }
  catch(ex){}

}



function cusInp() {
    try {
        let cus = byAttr('prompt');

        for (let i = 0; i < cus.length; i++) {
            cus[i].addEventListener('click', function() {
                try{dgprompt(cus[i].getAttribute('prompt'),
                function (val) {
                    //console.log(val);
                    try{if(Boolean(val)&&val.trim().length>60){alert('Input is too long');return false}}catch(ex){}
                    try{if(Boolean(val)&&val.trim().length>0) {cus[i].innerHTML=val;cus[i].classList.add('valid')}}catch(ex){}
                    if(Boolean(val)&&val.trim().length>0&&Boolean(unundefine(cus[i].getAttribute('prepend')))&&cus[i].innerHTML.indexOf(cus[i].getAttribute('prepend'))<0) {cus[i].innerHTML = cus[i].getAttribute('prepend')+cus[i].innerHTML}
                    if(Boolean(val)&&val.trim().length>0&&Boolean(unundefine(cus[i].getAttribute('append')))&&cus[i].innerHTML.indexOf(cus[i].getAttribute('append'))<0) {cus[i].innerHTML += cus[i].getAttribute('append')}
    
                }
                );
                
            }
            catch(ex) {
                //console.log(ex);
                let dg = document.createElement('input');
                dg.classList.add('subinput');
                dg.value=cus[i].innerText.replace(/(\(click to edit\))/g,'');
                cus[i].replaceWith(dg);
            }
            })
            
        }
    } catch (error) {
        
    }
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
            console.log(ex);
          }
        }
      }catch(ex){}
}





function vrfrd(m) {
    
    
    

    //console.log(53);
    let nrd = getRound();
    let g = byId('round').value;
    let tx = g.replace(/[0-9]/g,'');
    let prd = parseInt(g.replace(tx,''));
    if(isNaN(nrd)) {
        event.preventDefault(); calert(false,'Hang on!', 'This form is currently disabled as this Ladder season is not yet active (or has finished). It will be enabled '+Math.abs(frstC+2)+' days before the first round starts.','notice',0,0,0,0,'1.5em'); return false;
    }
    if(prd<nrd) {
        event.preventDefault(); calert(false,'Error', 'You cannot offer to be a sub for a previous round.','error', 0,0,0,0,'1.5em'); return false;
    }
    if(prd>nrd+1) {
        event.preventDefault(); calert(false,'Error', 'You may only  offer to be a sub for the current or next Round. Please wait until '+byId('round').children[byId('round').selectedIndex-1].value+' to submit this form for '+byId('round').value+'.','error', 0,0,0,0,'1.5em'); return false;
    }

    
    postInfo();

}



function vrfid() {
    let ussr = '';
    event.preventDefault();
    //console.log('working');
    try {ussr=localStorage.getItem('aeloMidneufdaNiNaN').tags.swoma9hsofeK.ussr}
    catch(ex) {
    //calert(false,'error','aw98ng98ee')
    }
}

function postInfo() {
    let fake = '(click to edit)';
    let blank = '(click to add)';
    let real = '(click to update)';
    let unwntd = /[\(\)]/g;
    let unfake = new RegExp(fake,'g'), unreal = new RegExp(real,'g'), unblank = new RegExp(blank,'g');
    let round= parseInt(byId('round').value.split(' ').pop().trim()), name = byId('name').innerText, email = byId('email').innerText, phone = byId('phone').innerText, skill = byId('skill').innerText, in_ladder = byId('inladder').checked, already_playing = byId('inround').checked, week1days = byId('w1days').innerText, week2days = byId('w2days').innerText;
    if(name.indexOf(fake)>-1) {calert(0,"Error", "You may not use an auto-generated name to submit this form. Please provide your real name."); return false}
    if(email.indexOf(fake)>-1) {calert(0,"Error", "You may not use an auto-generated email to submit this form. Please provide your real email."); return false}
    if(phone.indexOf(blank)>-1) {phone=phone.replace(unblank,'')}
    if(skill.indexOf(fake)>-1) {calert(0,"Error", "You may not use an auto-generated skill level to submit this form. Please provide your real skill level."); return false}
    if(week1days.indexOf(fake)>-1) {week1days=""}
    if(week2days.indexOf(fake)>-1) {week2days=""}
    //console.log('posting', round);
    name=name.replace(unreal,'').replace(unwntd,'').trim(); email = email.replace(unreal,'').replace(unwntd,'').trim(); phone = phone.replace(unreal,'').replace(unwntd,'').trim(); skill=skill.replace(unreal,'').replace(unwntd,'').trim(), week1days=week1days.replace(unreal,'').replace(unwntd,'').trim(), week2days=week2days.replace(unreal,'').replace(unwntd,'').trim(); 
    if(!validateEmail(email)){calert(0,"Error", "The email you provided is not a valid email"); byId('email').classList.remove('valid'); return false}
    //console.log(name,email,phone);
    let injson = {round: round, name: name, email: email, phone: phone, skill: skill, in_ladder: in_ladder, already_playing: already_playing, week1days:week1days, week2days: week2days}

    try {
        saveData('subs',injson).then(function(res) {
            //console.log(res, typeof res);
            if(res) {calert(0,'Error','Form submission failed for unknown reasons.', 'error')}
            else {copyData(injson); return false; document.write('Success! You will be redirected back to the Subs Page momentarily.'); setTimeout(function() {location.replace('subs copy.html')},3000)}
        })
    } catch (ex) {
        
    }
}

function copyData(j) {
    let uznj;
    try {
        ptc('subs','uidabt','email',j.email).then(function(r){
            j.uidabt = r;
            j = JSON.stringify({anffain:j});

    try{
        localStorage.setItem('nbosJefMsoh0Oc', j)
    } 
    catch(ex) {}
        })
    } catch (error) {
        
    }

    
}



const map = {true: 'Yes', false: 'No'}
const unmap = {Yes: true, No: false}