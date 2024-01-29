/*
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на слухачі якого спіймали подію
 */

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const innerChild = document.querySelector("#inner-child");


let clickCounter = 0;

document.addEventListener('click', (event) => {
    clickCounter++;
    console.log('Clicks:', clickCounter)
})

parent.addEventListener('click', (event) => {
    console.log('Parent')
    // console.log('Target: ', event.target)
    // console.log('CurrentTarget: ', event.currentTarget)
})

child.addEventListener('click', (event) => {
    console.log('Child')
    event.stopImmediatePropagation()
    // event.stopPropagation()
    
    // console.log('Target: ', event.target)
    // console.log('CurrentTarget: ', event.currentTarget)
})

child.addEventListener('click', (event) => {
    console.log('Second click on child!')
})

innerChild.addEventListener('click', (event) => {
    console.log('Inner child!')
    
    // console.log('Target: ', event.target)
    // console.log('CurrentTarget: ', event.currentTarget)
})