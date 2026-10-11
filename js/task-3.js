'use strict'
const nameInp = document.querySelector('#name-input')
const nameOut = document.querySelector('#name-output')

nameInp.addEventListener('input', (event) => { 

const trimValue = event.target.value.trim();

nameOut.textContent = trimValue
if(trimValue === ''){
    nameOut.textContent = 'Anonymous'
}

})