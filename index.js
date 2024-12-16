const slider = document.getElementById('news-slider');
const items = slider.getElementsByClassName('news-item');
let currentIndex = 0;

function showNextNews() {
    items[currentIndex].style.transform = 'translateY(-100%)';
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].style.transform = 'translateY(0)';
}

setInterval(showNextNews, 3000);
