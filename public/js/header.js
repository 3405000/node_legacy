$(document).ready(function() {
    var currentUrl = window.location.pathname;
    $('.nav-link').each(function() {
        var linkPage = $(this).attr('data-page');
        if (currentUrl.includes(linkPage)) {
            $(this).addClass('active'); // 현재 페이지와 일치하는 링크에 'active' 클래스 추가
        }
    });
});
