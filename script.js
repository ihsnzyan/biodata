function showPage() {
  document.body.classList.remove("fade-out"); 
  document.body.classList.add("fade-in");
}

window.addEventListener("pageshow", (event) => {
  // Kalo balik dari bfcache (persisted) atau reload biasa
  if (event.persisted || performance.getEntriesByType("navigation")[0].type === "back_forward") {
    showPage();
  } else {
    setTimeout(showPage, 50); // normal load
  }
});

document.querySelectorAll("a.tomb").forEach(tomb => {
  tomb.addEventListener("click", function(e) {
    e.preventDefault();
    document.body.classList.remove("fade-in"); 
    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location = this.href;
    }, 1000);
  });
});
