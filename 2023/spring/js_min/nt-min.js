const ovuw={aa:"Basic MGJiMjNkOTktMzhmOC00YjYyLWExNjYtMmE5MzI0N2RiMzUw",bb:"f2c2c916-b99a-4b1d-8fb1-12453a49b8d8",ab:"10e8e0fc-ca3a-4162-bc6d-a46ef136072c"};async function snEm(e){let a=e.subject;Boolean(a)||(a="No Subject");let o=e.bod;Boolean(o)||(a="No Body");let t=e.from_name;Boolean(t)||(t="Nobody");let i=e.from_email;Boolean(i)||(i="");let n=e.reply_to;Boolean(n)||(n="");let c=e.send_at;const l={method:"POST",headers:{accept:"application/json",Authorization:ovuw.aa,"content-type":"application/json"},body:JSON.stringify({app_id:ovuw.ab,include_email_tokens:e.email,email_subject:a,email_body:o,email_reply_to_address:n,include_unsubscribed:!0,disable_email_click_tracking:!0})};if(Boolean(c)){let e=JSON.parse(l.body);e.send_after=c,l.body=JSON.stringify(e)}fetch("https://onesignal.com/api/v1/notifications",l).then((e=>e.json())).then((e=>{e.recipients>1&&localStorage.setItem("lastNTFId",e.id)})).catch((e=>{}))}