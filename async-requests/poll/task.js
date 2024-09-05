document.addEventListener('DOMContentLoaded', function () {
    function loadPool () {
        let poolTitle = document.getElementById('poll__title');
        let poolAnswers = document.getElementById('poll__answers');

        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

        xhr.onload = function () {
            if (xhr.status === 200) {
                const poolData = JSON.parse(xhr.responseText);
                poolTitle.textContent = poolData.data.title;

                poolData.data.answers.forEach(answer => {
                    let bottonHTML = `
                    <botton class="poll__answer">${answer}</botton>
                    `;
                    poolAnswers.insertAdjacentHTML('beforeend', bottonHTML);
                });
                const bottons = document.querySelectorAll('.poll__answer');
                bottons.forEach(botton => {
                    botton.onclick = function () {
                        alert('Спасибо, ваш голос засчитан!');
                        location.reload();
                    };
                });
            } else {
                console.error('Ошибка загрузки опроса: ' + xhr.status)
            }
        };
        xhr.onerror = function () {
            console.error('Ошибка сети.');
        };
        xhr.send();
    };
    loadPool();
});