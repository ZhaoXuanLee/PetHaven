var buttons = document.querySelectorAll('.btn');
var cards = document.querySelectorAll('.item');
var changetext = document.querySelector('.change');
//console.log(buttons[1])

var searchBar = document.querySelector('input');
console.log(searchBar)
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        var btnClick = button.textContent.toLowerCase();
        if (btnClick == 'all') {
            cards.forEach(function (card) {
                card.style.display = 'block';
                changetext.textContent = "MembER";

            })
        } else {
            cards.forEach(function (card) {
                if (card.classList.contains(btnClick)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                    changetext.textContent = btnClick.charAt(0).toUpperCase() + btnClick.slice(1);

                }
            })
        }
    });
});

searchBar.addEventListener('keyup', function (e) {
    var userInput = e.target.value.toLowerCase().trim();
    cards.forEach(function (card) {
        if (card.textContent.toLowerCase().trim().includes(userInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    })
});

console.log(cards[0].textContent.toLowerCase().trim());


