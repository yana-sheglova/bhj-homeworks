document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    let fileInput = document.getElementById('file');
    let progress = document.getElementById('progress');
    const formData = new FormData(this);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', this.action, true);

    xhr.upload.addEventListener('progress', function (event) {
        if (event.lengthComputable) {
            const percentComplete = (event.loaded / event.total) * 100;
            progress.value = percentComplete;
        }
    });
    xhr.onload = function () {
        if(xhr.status === 200) {
            console.log('Загрузка завершена успешно!');
            progress.value = 100;
        } else {
            console.error('Ошибка во время загрузки: ', xhr.status, xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error('Ошибка сети');
    };
    xhr.send(formData);
});