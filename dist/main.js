(()=>{"use strict";(()=>{const t=document.querySelector("#content"),e=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div");e.setAttribute("id","home-btn"),n.setAttribute("id","menu-btn"),d.setAttribute("id","contact-btn"),e.classList.add("tab"),n.classList.add("tab"),d.classList.add("tab"),e.textContent="Home",n.textContent="Menu",d.textContent="Contact",t.appendChild(e),t.appendChild(n),t.appendChild(d)})(),(()=>{const t=document.querySelector("#content"),e=document.createElement("div");e.classList.add("page-content");const n=document.createElement("img");n.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkpDiqZrUmWZKoAPLkTWBt_eV1WGmCR9lp50yLpJK1zQ&s",n.height="300",e.appendChild(n);const d=document.createElement("h1");d.textContent="Welcome to our restaurant!",e.appendChild(d);const c=document.createElement("p");c.textContent="We serve the best food in town. Come and dine with us!",e.appendChild(c),t.appendChild(e)})()})();