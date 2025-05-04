const dropdownTriggers = document.querySelectorAll('.dropdown > span');
const dropdownContents = document.querySelectorAll('.dropdown-content');

dropdownTriggers.forEach((trigger, index) => {
    trigger.addEventListener('click', function(event) {
        event.preventDefault(); // Hinzugefügt: Verhindert die Standardaktion des Klicks

        dropdownContents.forEach((content, i) => {
            if (i !== index && content.classList.contains('show')) {
                content.classList.remove('show');
            }
        });

        dropdownContents[index].classList.toggle('show');
    });
});

window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropdown > span') && !event.target.matches('.dropdown-content *')) {
        dropdownContents.forEach(content => {
            if (content.classList.contains('show')) {
                content.classList.remove('show');
            }
        });
    }
});