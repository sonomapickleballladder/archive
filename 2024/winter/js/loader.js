function animateLoad() {
    try {
      let ld = document.createElement('p');
      ld.id='loader';
      ld.style.zIndex = 0;
      ld.innerHTML = `<div class="bigger loader"></div>`
      let ifr = document.createElement('iframe');
      document.body.appendChild(ld);
    } catch (error) {
        
    }
}

animateLoad()