function showAlert() { alert("!Te gusto la informaciòn, cuando quieras puedes volver e informarte mas sobre ella!"); }

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})