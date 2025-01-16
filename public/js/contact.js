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