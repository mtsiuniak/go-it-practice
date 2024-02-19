/**
 * Авторизація запитів з ключами
 * Які бувають:
 * - у query string
 * - у хедерах
 *
 * Для прикладу використовуємо https://pixabay.com/api/docs/
 */


const KEY = '42457252-8d703b698c8e019830d95e145';
const BASE_URI = 'https://pixabay.com/api/';
const QUERY = 'forest+mountains'
const LINK = `${BASE_URI}?key=${KEY}&q=${QUERY}`;


function getImages(){
    return fetch(LINK)
        .then(response => {
            if (!response.ok){
                throw new Error('Image error!')
            }

            return response.json()
        })
        .catch(error => {
            alert('Error while fetching images from pixabay!')
        })
}

getImages().then(data => {
    const images = data.hits.slice(0, 3);
    
    document.body.innerHTML = images.map(({webformatURL}) => {
            return `<img src="${webformatURL}">`
        }).join('')

})

