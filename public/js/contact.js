// 게시물 추가 처리
async function createContact() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const memo = document.getElementById('memo').value;

    const data = {
        name: name,
        email: email,
        phone: phone,
        memo: memo,
    }

    try {
        const response = await fetch(`/api/contact/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error('데이터 추가 오류');
        alert('문의사항이 추가되었습니다.');
        location.reload();
    } catch (error) {
        console.error('추가 오류:', error);
    }
}

function validateForm() {
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    
    const memoInput = document.getElementById('memo');
    const memoError = document.getElementById('memo-error');

    var isCompleted = true;

    // 이름 필드 확인
    if (!nameInput.value.trim()) {
        nameError.style.display = 'block';  // 오류 메시지 표시
        nameInput.style.borderColor = 'red';  // 입력창 테두리 색 변경
        isCompleted = false;  // 폼 제출 방지
    } else {
        nameError.style.display = 'none';  // 오류 메시지 숨기기
        nameInput.style.borderColor = '';  // 입력창 테두리 색 초기화
    }

    // 메모 필드 확인
    if (!nameInput.value.trim()) {
        memoError.style.display = 'block';  // 오류 메시지 표시
        memoInput.style.borderColor = 'red';  // 입력창 테두리 색 변경
        isCompleted = false;  // 폼 제출 방지
    } else {
        memoError.style.display = 'none';  // 오류 메시지 숨기기
        memoInput.style.borderColor = '';  // 입력창 테두리 색 초기화
    }

    return isCompleted;  // 폼 제출 허용
}