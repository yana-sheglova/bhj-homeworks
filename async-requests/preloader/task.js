document.addEventListener("DOMContentLoaded", function() {
    let loader = document.getElementById('loader');
    let itemsContainer = document.getElementById('items');

    function loadCurrencyRates() {
        loader.classList.add('loader_active');

        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
        xhr.onload = function() {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                const valutes = data.response.Valute;

                for (let key in valutes) {
                    const currency = valutes[key];
                    const currencyHTML = `
                    <div class="item">
                        <div class="item__code">${currency.CharCode}</div>
                        <div class="item__value">${currency.Value}</div>
                        <div class="item__currency">руб.</div>
                    </div>
                    `;
                    itemsContainer.insertAdjacentHTML('beforeend', currencyHTML);
                }
            } else {
                console.error('Ошибка загрузки данных: ' + xhr.status);
            }
            loader.classList.remove('loader_active');
        };
        xhr.send();
    }
    loadCurrencyRates();
});