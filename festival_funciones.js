const cards = document.querySelectorAll(".cardg");

// Función para activar las tarjetas en bucle
function activateCardsInLoop() {
    let index = 0;

    setInterval(() => {
        cards.forEach(card => card.classList.remove("active"));
        cards[index].classList.add("active");
        index = (index + 1) % cards.length; // Cuando llegue al último, regresa al primero
    }, 3000); // Cada 2 segundos
}

// Evento manual si el usuario hace clic
cards.forEach(function (card) {
    card.addEventListener('click', function () {
        cards.forEach(function (otherCard) {
            otherCard.classList.remove("active");
        });
        this.classList.add("active");
    });
});

// Ejecutar automáticamente cuando cargue la página
window.addEventListener('load', activateCardsInLoop);
