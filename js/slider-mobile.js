const imgProduct = document.querySelector('#imgProduct');
const nextBtn = document.querySelector('#nextBtn');
const previousBtn = document.querySelector('#previousBtn');

const imgsContainerDesktop = document.querySelector('#imgs-left-side-main');

let cont = 1;
changeImgProduct();

nextBtn.addEventListener('click', () => {
    cont++;
    changeImgProduct();
} )

previousBtn.addEventListener('click', () => {
    cont--;
    changeImgProduct();
})


function changeImgProduct() {
    const numImages = 4;

    if(cont < 1) {
        cont = numImages;
    } else if (cont > numImages) {
        cont = 1;
    }
    const path = `../images/image-product-${cont}.jpg`;
    imgProduct.src = path;
}

//Lightbox in 
imgsContainerDesktop.addEventListener('click', (e) => {
    const images = imgsContainerDesktop.querySelectorAll('img');
    images.forEach(image => {
        if(image === e.target){
            const { src } = e.target;
            image.classList.add('selected-image');
            imgProduct.src = src;
        } else {
            image.classList.remove('selected-image');
        }
    })
})

const closeIcon = document.querySelector('#close-icon');
const lbContainer = document.querySelector('#lb-container');

// OPEN AND CLOSE LIGHTBOX FUNCTIONALITY

imgProduct.addEventListener('click', () => {
    let screenWidth = window.innerWidth
    if (screenWidth >= 1000){
        lbContainer.classList.remove('disable-fixed');
    }
})
closeIcon.addEventListener('click', () => {
    lbContainer.classList.add('disable-fixed');
})

const lightboxNextBtn = document.querySelector('#lightbox-next-button');
const lightboxPreviousBtn = document.querySelector('#lightbox-previous-button');

const lightboxContainerImagesBottom = document.querySelector('#lightbox-images-bottom');
const lightboxPrincipalImage = document.querySelector('#lighbox-principal-image');
const lightboxUpperContainer = document.querySelector('#lighbox-selector-image');


// CHANGE THE MAIN IMAGE WITH CLICK ON ANY IMAGE ON THE BOTTOM SIDE
lightboxContainerImagesBottom.addEventListener('click', (e) => {
    const images = lightboxContainerImagesBottom.querySelectorAll('img');
    images.forEach(image => {
        if(image === e.target){
            const { src } = e.target;
            image.classList.add('selected-image');
            lightboxPrincipalImage.src = src;
        } else {
            image.classList.remove('selected-image');
        }
    })
})


// FUNCIONALITY  LIGHTBOX BUTTONS NEXT AND PREVIOUS 

let contImg = 1
LightboxChangeImgProduct()

lightboxNextBtn.addEventListener('click', () => {
    contImg++;
    LightboxChangeImgProduct();
    
});

lightboxPreviousBtn.addEventListener('click', () => {
    contImg--;
    LightboxChangeImgProduct();
});

function LightboxChangeImgProduct() {
    const numImages = 4;

    if(contImg < 1) {
        contImg = numImages;
    } else if (contImg > numImages) {
        contImg = 1;
    }
    const imageUrl = lightboxUpperContainer.firstElementChild;
    const path = `./images/image-product-${contImg}.jpg`
    imageUrl.src = path;
}

//LIGHTBOX IMAGES BOTTOM SIDE, ADDED SELECTED CLASS
lightboxUpperContainer.addEventListener('click', (e) => {
    const images = lightboxContainerImagesBottom.querySelectorAll('img');
    const imageUrl = lightboxUpperContainer.firstElementChild;

    images.forEach(image => {
        if(image.src === imageUrl.src) {
            image.classList.add('selected-image');
        } else {
            image.classList.remove('selected-image');
        }
    })
})