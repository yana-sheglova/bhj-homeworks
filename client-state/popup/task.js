function setCookie (name, value, days) {
    let d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + (value || "") + ";" + expires + ";path=/";
    console.log(document.cookie);
  };
  
  function getCookie (name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      };
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  };
  
  window.onload = function () {
    const modal = document.getElementById('subscribe-modal');
    if (!getCookie('modalClosed')) {
      modal.classList.add('modal_active');
    }
  
    const closeBtn = document.querySelector('.modal__close');
    closeBtn.onclick = function() {
      modal.classList.remove('modal_active');
      setCookie('modalClosed', 'true', 5)
    };
  };
  