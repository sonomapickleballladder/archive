function animateLoad() {
  try {
    let ld = document.createElement("p");
    ld.id = "loader";
    ld.style.zIndex = -1;
    try {
      let frame = document.querySelector("iframe");
      let frameSrc = frame.getAttribute("src");
      if (frameSrc === null || frameSrc === "")
        ld.innerHTML = `<span style="font-size: larger">Page will become available once ladder season starts</span>`;
      else ld.innerHTML = `<div class="bigger loader"></div>`;
      frame.classList.add(ladderId.class); // style iframe differently for differently ladders
    } catch (e) {
      ld.innerHTML = `<div class="bigger loader"></div>`;
    }
    // let ifr = document.createElement("iframe");
    document.body.appendChild(ld);
  } catch (error) {}
}

animateLoad();
