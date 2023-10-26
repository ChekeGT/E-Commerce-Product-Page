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
