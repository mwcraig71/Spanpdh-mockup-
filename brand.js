// ===== Swap the brand here (one place). =====
window.BRAND = { name: "SpanPDH", tagline: "Continuing education by bridge engineers, for bridge professionals." };
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".brand").forEach(e => e.textContent = BRAND.name);
  document.querySelectorAll(".tagline").forEach(e => e.textContent = BRAND.tagline);
  const nav=document.querySelector("header.top nav");
  if(nav){const b=document.createElement("button");b.className="menu-btn";b.setAttribute("aria-label","Menu");b.setAttribute("aria-expanded","false");b.textContent="☰";
    b.onclick=()=>{const o=nav.classList.toggle("open");b.setAttribute("aria-expanded",o);b.textContent=o?"✕":"☰";};nav.parentNode.appendChild(b);}
  document.title = document.title.replace("SpanPDH", BRAND.name);
});
