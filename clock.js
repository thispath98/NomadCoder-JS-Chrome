const clockContainer = document.querySelector('.js-clock'),
    clockTitle = clockContainer.querySelector('.js-title'),
    clockDay = clockContainer.querySelector('.js-day');

function getTime() {
    const today = new Date();

    // 시간 구하기
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    clockTitle.innerHTML = `${hours < 12 ? `오전 ${hours}` : `오후 ${hours - 12}`} :
        ${minutes > 9 ? minutes : `0${minutes}`} :
        ${seconds > 9 ? seconds : `0${seconds}`}`;

    // 날짜 구하기
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    const day = today.getDay();

    const DAYS = ['일', '월', '화', '수', '목', '금', '토'];
    clockDay.innerHTML = `${year}년 ${month + 1}월
    ${date < 10 ? `0${date}` : date}일 ${DAYS[day]}요일`;
}

function init() {
    setInterval(getTime, 1000);
}

init();
