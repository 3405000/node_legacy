let currentIndex = 0;
const slides = document.querySelectorAll('.image-slide');
const slider = document.getElementById('slider');
const totalSlides = slides.length;

// 이미지 전환 함수 (2초마다 자동으로 이동)
function changeSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// 2초마다 자동으로 슬라이드를 전환
setInterval(changeSlide, 2000);

// 마우스 스크롤로 이미지 슬라이드 이동
let scrollPosition = 0;
slider.addEventListener('wheel', (e) => {
    e.preventDefault();  // 페이지 스크롤을 방지하고 이미지 슬라이드만 동작하도록 합니다.

    if (e.deltaY > 0) {
        // 아래로 스크롤 시, 다음 이미지로 이동
        scrollPosition++;
    } else {
        // 위로 스크롤 시, 이전 이미지로 이동
        scrollPosition--;
    }

    // 범위 체크 후 이미지 전환
    if (scrollPosition < 0) scrollPosition = totalSlides - 1;
    if (scrollPosition >= totalSlides) scrollPosition = 0;
    
    slider.style.transform = `translateX(-${scrollPosition * 100}%)`;
});
