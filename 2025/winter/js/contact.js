function loadContactInfo() {
  try{hide(0)} catch(ex){}
  let ld = document.createElement('p');
  ld.id='loader';
  ld.innerHTML = `<div class="bigger loader"></div>`
  document.body.appendChild(ld);
  ptc('contact', '*', 'common', 1).then(function(res){
    if (res) {
    res = res.data.sort(function(a, b) {
      return a.name.localeCompare(b.name);
    });
      try{displayContactInfo(res);}catch(ex){console.log(`Unable to fetch contact information: ${ex}`)};
    }
  })
  
  loadComplete();
}

function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    var intlCode = (match[1] ? '+1 ' : '');
    return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
  }
  return null;
}

function displayContactInfo(info) {
  for (let i = 0; i < info.length; i++) {
    let person = info[i]
    let row = document.createElement("tr")
    let name = document.createElement("td")
    let email = document.createElement("td")
    let phone = document.createElement("td")
    let prefer = document.createElement("td")
    let nametext = document.createTextNode(person.name)
    let emailtext = document.createTextNode(`<a href="mailto:${person.email}">${person.email}</a>`)
    let phonetext = ""
    if (typeof person.phone == "string") {
      phonetext = `<a href="tel:${person.phone}" class=${(person.prefer == "Text") ? "highlight" : "standard"}>${formatPhoneNumber(person.phone)}</a>`
    }
    let prefertext = document.createTextNode(person.prefer)
    name.appendChild(nametext)
    email.innerHTML = `<a href="mailto:${person.email}" class=${(person.prefer == "Email") ? "highlight" : "standard"}>${person.email}</a>`
    phone.innerHTML = phonetext
    prefer.appendChild(prefertext)
    row.appendChild(name)
    row.appendChild(email)
    row.appendChild(phone)
    row.appendChild(prefer)
    byId("contact_table").appendChild(row)
  }
}

function loadComplete() {
  try{document.getElementById('loader').classList.add('h');}catch(ex){}
  try{document.querySelector('iframe').classList.remove('h'); unfade(document.querySelector('iframe'),10)}catch(ex){}
  try{document.querySelector('iframe').focus()}catch(ex){}
}

document.addEventListener("DOMContentLoaded", loadContactInfo)