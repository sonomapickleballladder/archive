function load() {
    let hash = location.hash
    let faqs = document.querySelectorAll('details')
    for (let i = 0; i < faqs.length; i++) {
        const el = faqs[i];
        const id = `#${el.name}`;
        if (id == hash) {
            el.scrollIntoView()
            el.open = true
        }   
    }
}

function removeHash () { 
    history.replaceState(null, document.title, window.location.pathname + window.location.search);
}

function mark(el) {
    console.log(el);
    window.location.replace(`#${el.name}`);
    
}

load()

document.querySelectorAll('details').forEach(details => {
    details.addEventListener('toggle', (event) => {
        if (event.target === details) {
            event.target.open ? mark(details) : removeHash()
            // console.log(event.target.open ? 'Details opened' : 'Details closed');
        }
    })
})   