// Hamburger button functionality
function getAllParents(child){
    let parentElements = []
    
    let parent_element = child.parentNode
    while (parent_element){
        parentElements.push(parent_element)
        parent_element = parent_element.parentNode
    }
    return parentElements
}
function isInHtmlCollection(c, e){
    for (let i = 0; i < c.length; i++){
        let element = c[i]
        if (e == element){
            return true
        }
    }
    return false
}
function blur_everything_except_links_container(links_container){
    // element should not be the link container check
    // it shouldnt be a parent
    // it shouldnt be a child, children: li &a 
    const allElements = document.querySelectorAll('*')
    const parents = getAllParents(hamburger_button)
    const children = document.querySelectorAll('.pages-links-container *')
    allElements.forEach( element => {
        if ((element != links_container && !parents.includes(element) && !isInHtmlCollection(children, element))){
            element.classList.add('blur')
        }
    })
}
function unblur_everything(){
    const allElements = document.querySelectorAll('*')
    allElements.forEach(element => {
        element.classList.remove('blur')
    })
}
const hamburger_button = document.querySelector('#hamburger-button')

const links_div = document.querySelector('.pages-links-container')



hamburger_button.addEventListener('click', function(e){
    e.preventDefault()
    links_div.classList.add('reveal-hidden-links')
    blur_everything_except_links_container(links_div)
    e.stopPropagation()
})

const body = document.body

links_div.addEventListener('click', function(e){
    e.stopPropagation()
})
body.addEventListener('click', function(e){
    unblur_everything()
    links_div.classList.remove('reveal-hidden-links')
})

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
        if (!(counter.textContent == '0')){
            counter.textContent = parseInt(counter.textContent) - 1
        }
    }
    if (target.className == 'plus-button'){
        counter.textContent = parseInt(counter.textContent) + 1
    }
})


function addElementsToCart(itemObj){
    // ItemObj should have the following structure
    // {price, title, image(url or image)}

    // More work should be done on this, regarding css classes.
    let displayCart = document.querySelector('.cart-product-container')
    // Creating the checkout div.
    if (document.querySelector('#product')){
        let itemsInCart = parseInt(document.querySelector('.units').innerText)
        let newTotal = itemObj.n + itemsInCart
        document.querySelector('.price').innerHTML = `$${itemObj.price} x <span class="units">${newTotal}</span> <span class="total-price">$${newTotal * itemObj.price}</span>`

    }else{
        let itemDiv = document.createElement('div')
        itemDiv.classList.add('cart')
        itemDiv.setAttribute('id', 'product')

        // Creating the price element
        let priceElement = document.createElement('p')
        priceElement.classList.add('price')
        priceElement.innerHTML = `$${itemObj.price} x <span class="units">${itemObj.n}</span> <span class="total-price">$${itemObj.n * itemObj.price}</span>`
        // Creating the title element
        let titleElement = document.createElement('p')
        titleElement.innerText = itemObj.title

        // Creating an information div.

        let informationDiv = document.createElement('div')
        informationDiv.appendChild(titleElement)
        informationDiv.appendChild(priceElement)
        informationDiv.classList.add('article-information-container')

        // Creating the img element
        let imgElement = document.createElement('img')
        imgElement.setAttribute('src', itemObj.image)
        imgElement.classList.add('thumbnail-product')

        // Garbage can element
        let garbageCan = document.createElement('img')
        garbageCan.setAttribute('src', './images/icon-delete.svg');
        garbageCan.classList.add('gargabe-can');


        // Putting all together
        itemDiv.appendChild(imgElement)
        itemDiv.appendChild(informationDiv)
        itemDiv.appendChild(garbageCan)

        // Removing the your cart is empty display.
        let emptyCarItem = document.querySelector('#empty-car')
        emptyCarItem.classList.add('hidden')

        // Appending the item to the display cart

        displayCart.appendChild(itemDiv)

        // Creating the button.
        let checkoutButton = document.createElement('button')
        checkoutButton.classList.add('checkout-button')

        checkoutButton.innerText = 'Checkout'

        displayCart.appendChild(checkoutButton)

    }
    // Resseting the counter of items
    const counter = document.querySelector('.stock-selector .stock-counter')
    counter.innerText = 0

}
// Add to cart button functionality
const add_to_cart_button = document.querySelector('#add-to-cart')
const notification = document.querySelector('#notification-cart');
let totalNotifications = 0;

add_to_cart_button.addEventListener('click', function(e){
    e.preventDefault()
    const counter = document.querySelector('.stock-selector .stock-counter')
    
    const howManyItems = parseInt(counter.textContent)
    
    


    if (howManyItems <= 0){
        alert('You can not add 0 or less items to the cart.')
    }else{
        const itemObj = {
            price: 125,
            title: 'Fall Limited Edition Sneakers',
            image: 'images/image-product-2-thumbnail.jpg',
            n: howManyItems
        }
        addElementsToCart(itemObj);
        notification.classList.add('notification-cart');
        totalNotifications += howManyItems;
        notification.textContent = totalNotifications;

    }



})

// Delete products from the cart (Garbage Can button)
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('gargabe-can')) {
        const emptyCar = document.querySelector('#empty-car');
        
        const itemDiv = e.target.parentElement;
        const cartContainer = itemDiv.parentElement;
        const checkoutBtn = cartContainer.lastElementChild;

        checkoutBtn.remove();
        itemDiv.remove();    
        emptyCar.classList.remove('hidden')
    }
});

//Show/Hidden displayCart with icon cart button  
const cartBtn = document.querySelector('#cart-button');
const displayCart = document.querySelector('.display-cart');
cartBtn.addEventListener('click', function() {
    if(displayCart.classList.contains('hidden')){
        notification.classList.remove('notification-cart');
        notification.textContent = ''
        displayCart.classList.remove('hidden');
    } else {
        displayCart.classList.add('hidden');
    }
})
