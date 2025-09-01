// Animasi muncul link sosial media
window.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".links a");
  links.forEach((link, i) => {
    link.style.opacity = 0;
    link.style.transform = "translateY(30px)";
    setTimeout(() => {
      link.style.transition = "all 0.5s ease";
      link.style.opacity = 1;
      link.style.transform = "translateY(0)";
    }, i * 150);
  });
});

// Smooth scroll untuk link (jika nanti ada navigasi tambahan)
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});