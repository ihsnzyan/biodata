window.onload = () => { 
    setTimeout(() => {
  document.body.classList.add("fade-in");         
    }, 100); };

  document.querySelectorAll("a.tomb").forEach(tomb => {
  tomb.addEventListener("click", function(e) {
    e.preventDefault();
    document.body.classList.remove("fade-in"); // biar balik 0
    setTimeout(() => {
      document.body.classList.add("fade-out");
    }, 10);
    setTimeout(() => {
      window.location = this.href;
    }, 1000); // harus sama kayak durasi transition
  });
});