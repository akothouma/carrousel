const slides=document.querySelectorAll(".slide");
const carousel=document.getElementById("carousel");
const left=document.getElementById('left');
const right=document.getElementById('right');

const SLIDESCOUNT=slides.length;
let currentSlide=0;

left.addEventListener("click",function() {
    currentSlide--;
    if (currentSlide<0)
    {
        currentSlide=SLIDESCOUNT-1;
    }
    updateCarousel();
});

right.addEventListener("click",function() {
    currentSlide++;
    if (currentSlide>SLIDESCOUNT-1)
    {
        currentSlide=0;
    }
    updateCarousel();
});

function updateCarousel() {
    carousel.style.transform=`translateX(${
        -currentSlide * slides[0].offsetWidth
    }px)`;

    document.body.style.background=`#${slides[currentSlide].getAttribute("data-bg")}`
}