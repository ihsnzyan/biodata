window.onload = () => { 
    setTimeout(() => {
  document.body.classList.add("fade-in");         
    }, 100); };

  document.querySelectorAll("a.tomb").forEach(tomb => {
  tomb.addEventListener("click", function(e) {
    e.preventDefault();
    document.body.classList.remove("fade-in"); 
    setTimeout(() => {
      document.body.classList.add("fade-out");
    }, 10);
    setTimeout(() => {
      window.location = this.href;
    }, 1000);
    setTimeout(() => {
      
  document.body.classList.add("fade-in");
    }, 50)
  });
});