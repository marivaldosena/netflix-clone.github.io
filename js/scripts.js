document.addEventListener( 'DOMContentLoaded', function () {
    setupCarouselItems(feedImagesArray(), '.splide');
    setupCarousel('.splide');
});

function feedImagesArray() {
    return [
        {
            title: 'Expresso do Amanhã',
            imagePath: 'img/expresso-do-amanha.jpg',
        },
        {
            title: 'Flash',
            imagePath: 'img/flash.jpg',
        },
        {
            title: 'Game of Thrones',
            imagePath: 'img/game-of-thrones.jpg',
        },
        {
            title: 'The Good Doctor',
            imagePath: 'img/good-doctor.jpg',
        },
        {
            title: 'House of Cards',
            imagePath: 'img/house-of-cards.jpg',
        },
        {
            title: 'Nova Ordem Espacial',
            imagePath: 'img/nova-ordem-espacial.jpg',
        },
        {
            title: 'Sobrenatural',
            imagePath: 'img/sobrenatural.jpg',
        },
        {
            title: 'Soul',
            imagePath: 'img/soul.jpg',
        }
    ];
}

function setupCarousel(carouselId) {
    new Splide(carouselId, {
        type: 'loop',
        perPage: 2,
        height: '15rem',
        cover: true,
        breakpoints: {
            640: {
                height: '10rem'
            }
        }
    }).mount();
}

function setupCarouselItems(images, carouselId) {
    for (image of images) {
        insertItemInCarousel(image.title, image.imagePath, carouselId);
    }
}

function insertItemInCarousel(title, imagePath, carouselId) {
    var carouselContainer = document.querySelector(carouselId + " .splide__list");

    var liTag = document.createElement('li');
    liTag.classList.add('splide__slide');
    carouselContainer.appendChild(liTag);

    var divTag = document.createElement('div');
    divTag.classList.add('splide__slide__container');
    divTag.textContent = title;
    liTag.appendChild(divTag);

    var imgTag = document.createElement('img');
    imgTag.src = imagePath;
    imgTag.alt = title;
    divTag.appendChild(imgTag);
}
