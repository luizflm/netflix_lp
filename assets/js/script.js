let input = document.querySelector('.input');

input.addEventListener('focus', (e)=>{
    let span = e.target.previousElementSibling;
    span.classList.add('active');
});

input.addEventListener('focusout', (e)=>{
    let span = e.target.previousElementSibling;
    let inputValue = input.value;
    if(inputValue == '') {
        span.classList.remove('active');
    }
 
});