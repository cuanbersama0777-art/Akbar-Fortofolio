// 🔹 Preloader dengan fade out (lebih cepat)
window.addEventListener("load", function() {
  let preloader = document.getElementById("preloader");

  // Tambah class fade-out biar smooth
  preloader.classList.add("fade-out");

  // Hapus preloader setelah 800ms
  setTimeout(() => {
    preloader.style.display = "none";
  }, 800);
});
