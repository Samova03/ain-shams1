//سهم الرجوع للاعلي
// احصل على السهم
const backToTopButton = document.getElementById('back-to-top');

// عند التمرير، تحقق من المسافة
window.onscroll = function () {
    // إذا نزل المستخدم 100px أو أكثر، يظهر السهم
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// عند الضغط على السهم، عد إلى أعلى الصفحة
backToTopButton.addEventListener('click', function (e) {
    e.preventDefault(); // منع السلوك الافتراضي للرابط
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // للانتقال الناعم
    });
});
//صور المعهد 
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
//سهم الرجوع للاعلي
// احصل على السهم
const backToTopButton = document.getElementById('back-to-top');

// عند التمرير، تحقق من المسافة
window.onscroll = function () {
    // إذا نزل المستخدم 100px أو أكثر، يظهر السهم
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// عند الضغط على السهم، عد إلى أعلى الصفحة
backToTopButton.addEventListener('click', function (e) {
    e.preventDefault(); // منع السلوك الافتراضي للرابط
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // للانتقال الناعم
    });
});
//صور المعهد 
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
const carousel = document.getElementById('imageCarousel');

document.querySelectorAll('.main-carousel-image').forEach((image) => {
    image.addEventListener('click', () => {
        const bootstrapCarousel = new bootstrap.Carousel(carousel);
        bootstrapCarousel.next();
    });
});
