function  setrefresh() {
    try{hide(0)} catch(ex){}
    let ld = document.createElement('p');
    ld.id='loader';
    ld.innerHTML = `<div class="bigger loader"></div>`//<span style="position: absolute; top: 0.25em; right: 0.25em; padding: 0.5em; cursor: pointer;" onclick="loadcomplete()">×</span> <br> Loading content. Please be super patient.<span id="view"></span>`;
    let ifr = document.createElement('iframe');
    document.body.appendChild(ld);
    setInterval(refresh, 600000)
    refresh()
    function refresh() {
      let burl = byId('link').getAttribute('url');
      try{if(burl.length < 1) { let ms = 'This page will be available once the Ladder Season is underway.'; let tt = document.title; document.body.innerHTML = ms; document.title = tt; hide(0); return false}}catch(ex){}
      let dt = byId('link').getAttribute('append')?byId('link').getAttribute('append').trim():'&widget=false&headers=false&gridlines=true&chrome=false';
      ifr.referrerpolicy = byId('link').getAttribute('referrerpolicy')?byId('link').getAttribute('referrerpolicy').trim():'no-referrer';
      ifr.sandbox = byId('link').getAttribute('sandbox')?byId('link').getAttribute('sandbox').trim():'allow-scripts';
      try{thisLadder == 'Womens' && (ifr.classList.add('wml'))} catch(ex){}
      ifr.src=burl+dt;
      ifr.classList.add('h');
      document.body.appendChild(ifr);
      document.querySelector('iframe').addEventListener('load', loadcomplete)
    }
  }
  function loadcomplete() {
    try{document.getElementById('loader').classList.add('h');}catch(ex){}
    try{document.querySelector('iframe').classList.remove('h'); unfade(document.querySelector('iframe'),10)}catch(ex){}
    try{document.querySelector('iframe').focus()}catch(ex){}
  }

  document.addEventListener("DOMContentLoaded", setrefresh)