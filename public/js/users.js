document.querySelectorAll('.image-item').forEach(item => {
    item.addEventListener('click', function() {
        // 모달을 표시
        const imageSrc = item.querySelector('img').src;
        const imageName = item.dataset.name;
        const imageDescription = item.dataset.description;

        // 모달 내용 업데이트
        document.getElementById('modal-image').src = imageSrc;
        document.getElementById('modal-title').innerText = imageName;
        document.getElementById('modal-description').innerText = imageDescription;

        // 모달 열기
        document.getElementById('image-modal').style.display = 'flex';
    });
});

// 모달 닫기 기능
document.getElementById('image-modal').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});