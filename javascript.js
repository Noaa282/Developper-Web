const bouton = document.getElementById("bouton-message");
const message = document.getElementById("message");

bouton.addEventListener("click", function () {
    if (message.hidden) {
        message.hidden = false;
        bouton.textContent = "Cacher l'exemple";
        bouton.setAttribute("aria-expanded", "true");
    } else {
        message.hidden = true;
        bouton.textContent = "Voir un exemple de mission";
        bouton.setAttribute("aria-expanded", "false");
    }
});
