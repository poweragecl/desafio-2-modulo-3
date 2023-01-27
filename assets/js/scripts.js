//Ejercicio 1

const image = document.querySelector('#clickeable-image');

image.addEventListener('click', function(){
    this.classList.toggle('addBorder');
});


//Ejercicio 2

const stickersAlert = document.querySelector('.stickers-alert');
const stickersButton = document.querySelector('.stickers-btn');

stickersButton.addEventListener('click', function(){
    
    let a = Number(document.querySelector('#sticker-1').value);
    let b = Number(document.querySelector('#sticker-2').value);
    let c = Number(document.querySelector('#sticker-3').value);
    let total = a + b + c;

    if(total <= 10){
        stickersAlert.textContent = `Llevas ${total} stickers en total`;
        stickersAlert.classList.remove('error');
        stickersAlert.classList.add('success');
    }else{
        stickersAlert.textContent = "Llevas demasiados stickers bro 💀💀";
        stickersAlert.classList.remove('success');
        stickersAlert.classList.add('error');
    }

});

// clear button (extra)

const stickersButtonClear = document.querySelector('.stickers-btn-clear');

stickersButtonClear.addEventListener('click', function(){
    
    let inputs = document.querySelectorAll('.stickers .sticker input');

    inputs.forEach(input => {
        input.value = 0;
    });

    stickersAlert.textContent = "";

});


//Ejercicio 3

const loginButton = document.querySelector('#login');
const loginAlert = document.querySelector('.login-alert');

loginButton.addEventListener('click',() => {
    
    let inputs = document.querySelectorAll('.password-inputs input');

    let pass = '';
    inputs.forEach(input => {
        pass+= input.value;
    });

    if(pass === '911'){

        loginAlert.textContent = 'Ingresada correctamente la Password 1';
        loginAlert.classList.remove('error');
        loginAlert.classList.add('success');

    }else if(pass === '714'){

        loginAlert.textContent = 'Ingresada correctamente la Password 2';
        loginAlert.classList.remove('error');
        loginAlert.classList.add('success');

    }else if(pass === '192'){

        loginAlert.textContent = 'Esta es la contraseña de Pedrito, intenta una distinta 🐒';
        loginAlert.classList.remove('success');
        loginAlert.classList.add('error');
    }else{
        
        loginAlert.textContent = 'Contraseña Incorrecta';
        loginAlert.classList.remove('success');
        loginAlert.classList.add('error');

    }

});