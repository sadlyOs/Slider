const track = document.getElementById('track');
const slides = Array.from(track.children);
const counter = document.getElementById('counter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const totalSlides = slides.length;
let currentIndex = 0;

function updateSlider() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  counter.textContent = `Изображение ${currentIndex + 1} из ${totalSlides}`;
}

function showNext() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}

function showPrev() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
}

nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') showNext();
  if (event.key === 'ArrowLeft') showPrev();
});

updateSlider();
