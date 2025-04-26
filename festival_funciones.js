const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
    card.addEventListener('click', function () {
        cards.forEach(function (otherCard) {
            otherCard.classList.remove("active")
        });
        this.classList.add("active");
    });
})