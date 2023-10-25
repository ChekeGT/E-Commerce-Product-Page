// This functionality determines how many items you will add to your cart.

const stock_selector_div = document.querySelector('.stock-selector')

stock_selector_div.addEventListener('click', function(e){
    // I use classes because by using id the user could select the a
    // element or the image and that will generate problems.
    e.preventDefault()
    // The counter elements refers to the p element that has the number of items we have
    const counter = document.querySelector('.stock-selector .stock-counter')

    // Here we select depending on the class a functionality or another
    // That means substracting or adding
    const target = e.target
    if (target.className == 'minus-button'){
        console.log('hola')
        if (!(counter.textContent == '0')){
            counter.textContent = parseInt(counter.textContent) - 1
        }
    }
    if (target.className == 'plus-button'){
        console.log('hola')
        counter.textContent = parseInt(counter.textContent) + 1
    }
})