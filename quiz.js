
let visitorCount = 0;
const form = document.getElementById('contact-form');
const visitorCountDisplay = document.getElementById('visitor-count');
form.addEventListener('submit', function (event) {
    event.preventDefault();  
    visitorCount++;

    visitorCountDisplay.textContent = visitorCount;
    form.reset();
});
