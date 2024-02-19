/**
 * Основи запиту
 * - Fetch API
 * - URL запиту
 * - Владка Network
 * - Обробка відповіді response (404 з fetch)
 *
 * https://jsonplaceholder.typicode.com/
 */

const list = document.querySelector(".todo-list");

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        if (!response.ok){
            throw new Error(`Response error with status ${response.status}`)
        }

        return response.json()
    })
    .then(data => {
        
        // let html = '';
        // for (let {title} of data){
        //     html += `<li>${title}</li>`
        // }

        // list.innerHTML = html;

        // list.innerHTML = data.map(({title}) => {
        //     return `<li>${title}</li>`
        // }).join('')



    })
    .catch(error => {
        alert('Incorrect request!')
    })
