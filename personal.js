$(document).ready(function(){

$('#menu').click(function(){
$(this).toggleClass('fa-times');
$('header').toggleClass('toggle');
});

$(window).on('scroll load',function(){
$('#menu').removeClass('fa-times');
$('header').removeClass('toggle');
  if($(window).scrollTop() > 0){
    $('.top').show();
  }else{
    $('.top').hide();
  }
});

  $('a[href*="#"]').on('click',function(e){
  e.preventDefault();
    $('html, body').animate({
    scrollTop : $($(this).attr('href')).offset().top,
    },
        500, 
        'linear'
    );
  });
});

const form = document.getElementById('form');
const username = document.getElementById('Email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
const inputControl = element.parentElement;
const errorDisplay = inputControl.querySelector('.error');

errorDisplay.innerText = message;
inputControl.classList.add('error');
inputControl.classList.remove('success')
}

const setSuccess = element => {
const inputControl = element.parentElement;
const errorDisplay = inputControl.querySelector('.error');

errorDisplay.innerText = '';
inputControl.classList.add('success');
inputControl.classList.remove('error');
};

const isValidEmail = email => {
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
const emailValue = email.value.trim();
const passwordValue = password.value.trim();}

if(emailValue === '') {
    setError(email, 'Email is required');
} else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
} else {
    setSuccess(email);
}

if(passwordValue === '') {
    setError(password, 'Password is required');
} else if (passwordValue.length < 8 ) {
    setError(password, 'Password must be at least 8 character.')
} else {
    setSuccess(password);
}
