const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const { elements: { email, password },
    } = event.currentTarget;
    const inputsEl = {
        Email: `${email.value}`, 
        Password: `${password.value}`
    }
    console.log(inputsEl);
    
    if (email.value === '' || password.value === '') {
        window.alert('Всі поля повинні бути заповнені');
    }
    
    event.target.reset();
})
