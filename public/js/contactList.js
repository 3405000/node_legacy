
// 게시물 읽음 처리
async function updateContact(contactId) {
    try {
        const response = await fetch(`/api/contactUpdate/${contactId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) throw new Error('업데이트 오류');
        alert('문의사항이 업데이트되었습니다.');
        location.reload();
    } catch (error) {
        console.error('업데이트 오류:', error);
    }
}

// 게시물 삭제 처리
function deleteContact(contactId) {
    $.ajax({
        url: `/api/contactDelete/${contactId}`,
        type: 'DELETE',
        success: function() {
            alert('문의사항이 삭제되었습니다.');
            location.reload();
        },
        error: function(error) {
            console.error('삭제 오류:', error);
        }
    });
}

// 시간 차이를 계산해서 '분 전', '시간 전' 형식으로 반환
function timeAgo(dateString) {
    const now = new Date();
    const date = new Date(dateString);
    const diffInSeconds = Math.floor((now - date) / 1000); // 초 단위 차이

    if (diffInSeconds < 60) {
        return `${diffInSeconds}초 전`; // 1분 미만일 때
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60); // 분 단위 차이
    if (diffInMinutes < 60) {
        return `${diffInMinutes}분 전`; // 1시간 미만일 때
    }

    const diffInHours = Math.floor(diffInMinutes / 60); // 시간 단위 차이
    if (diffInHours < 24) {
        return `${diffInHours}시간 전`; // 24시간 미만일 때
    }

    const diffInDays = Math.floor(diffInHours / 24); // 일 단위 차이
    return `${diffInDays}일 전`; // 1일 이상일 때
}

// 페이지 로드 후 날짜 포맷 적용
window.addEventListener('DOMContentLoaded', function() {
    const createAtElements = document.querySelectorAll('.create-at');
    const modifyAtElements = document.querySelectorAll('.modify-at');

    createAtElements.forEach(function(element) {
        element.textContent = timeAgo(element.textContent);
    });

    modifyAtElements.forEach(function(element) {
        element.textContent = timeAgo(element.textContent);
    });
});