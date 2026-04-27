document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
      function showMessage() {
  alert("Thank you");
}
document.getElementById("hireBtn").addEventListener("click", showMessage);

  });
});
