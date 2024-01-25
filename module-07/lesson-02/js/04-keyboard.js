/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */

/**
 * Обробка комбінацій клавіш
 */

// const keyContainer = document.querySelector('.key');

// function pressHandler(event){
//     if (event.key !== ' '){
//         keyContainer.textContent = event.key
//     }
//     else {
//         keyContainer.textContent = 'SPACE'; 
//     }
       
// }

// function upHandler(){
//     keyContainer.textContent = null;
// }

// document.addEventListener('keydown', pressHandler)
// document.addEventListener('keyup', upHandler)


function comboHandler(event){
    // console.log(event)
    if (event.code === 'KeyG' && event.ctrlKey){
        console.log('OK')
    }
}

document.addEventListener('keypress', comboHandler)