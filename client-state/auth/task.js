document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signin__form');
    const welcomBlock = document.getElementById('welcome');
    const userIdSpan = document.getElementById('user_id');
    const singinBlock = document.getElementById('signin');
    
    const storeduserId = localStorage.getItem('user_id');
    if (storeduserId) {
      displayWelcome(storeduserId);
    } else {
      showSigninForm();
    }
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const data = {
        login: formData.get('logon'),
        password: formData.get('password'),
      };
      
      try {
        const response = await fetch ('https://students.netoservices.ru/nestjs-backend/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        const result = await response.json();
        if (response.ok && result.success) { //авторизация успешна
          localStorage.setItem('user_id', result.user_id);
          displayWelcome(result.user_id);
        } else {
          alert('Неверный логин/пароль');
        }
      } catch (error) {
        console.error('Ошибка сети:', error);
        alert('Ошибка сети. Пожалуйста, попробуйте позже.')
      }
    });
  
    function displayWelcome(userId) {
      userIdSpan.textContent = userId;
      welcomBlock.classList.add('welcome_active');
      singinBlock.classList.remove('signin_active');
    };
  
    function showSinginForm() {
      welcomeBlock.classList.remove('welcome_active');
      signinBlock.classList.add('signin_active');
    };
  });