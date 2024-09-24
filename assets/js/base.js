const openPoster=document.getElementsByClassName("openPoster");
const closePoster=document.getElementsByClassName("closePoster");
// const Poster=document.getElementById("Poster");


const divsToHide = document.getElementsByClassName("poster"); //divsToHide is an array
for(var i = 0; i < divsToHide.length; i++){
    divsToHide[i].style.display = "none";
} 
     
function openModal(divId) {
    for(var i = 0; i < divsToHide.length; i++){
        if(divsToHide[i].style.display === "block"){
            divsToHide[i].style.display = "none";
        }
    }
    var modal = document.getElementById(divId);
    modal.style.display = "block";
    
}
  
function closeModal(divId) {
    var modal = document.getElementById(divId);
    modal.style.display = "none";
}


// function open() {
//     var x = document.getElementById("poster1");
//     x.style.display = "block";
//   }

// function close() {
//     var x = document.getElementByclass("closePoster");
//     x.style.display = "none";
// }


// for(var i=0; i< openPoster.length; i++){
//     openPoster[i].addEventListener('click', function() {
//         divsToHide[i].style.display = 'block';
//     });
// }





// for(var i=0; i< closePoster.length; i++){
//     closePoster[i].addEventListener('click', function() {
//         divsToHide[i].style.display = 'none';
//     });
// }
  
    

// Function to scroll to a tag given its cssSelector
const scrollto = (el) => {
    let elementPos = document.querySelector(el).offsetTop;
    window.scroll({
        top: elementPos,
        behavior: 'smooth'
    });
}

// Function to check if mobile menu is active
let mobileMenuActive = function (){
    let body = document.querySelector("body");
    return(body.classList.contains("mobile-menu-active"))
}

// Making the navigation menu responsive
let navMenuAs = document.querySelectorAll("#header a");
navMenuAs.forEach((navMenuA) => {
    navMenuA.addEventListener("mouseenter", (event) => {
        if (!mobileMenuActive()){
            let target = event.target;
            let span = target.querySelector("span");
            let moveLen = span.offsetWidth;

            target.style.transform = `translateX(-${moveLen}px)`;
            span.classList.remove("visibility-hidden");
            span.classList.add("visibility-visible");
        }
    })
    navMenuA.addEventListener("mouseleave", (event) => {
        if (!mobileMenuActive()){
            let target = event.target;
            let span = target.querySelector("span");

            target.style.transform = `translateX(0)`;
            span.classList.remove("visibility-visible");
            span.classList.add("visibility-hidden");
        }
    })
})

// Functioning of nav menu button in mobile
let mobileMenuBtn = document.querySelector(".mobile-menu-button");
mobileMenuBtn.addEventListener("click", (event) => {
    document.querySelector("body").classList.toggle("mobile-menu-active");

    navMenuAs.forEach((navMenuA) => {
        navMenuA.querySelector("span").classList.toggle("visibility-hidden");
    });

    mobileMenuBtn.classList.toggle("bi-list");
    mobileMenuBtn.classList.toggle("bi-x");
})

// Scrolling to various sections on clicking nav
let navLinks = document.querySelectorAll("#header .nav-menu a");
navLinks.forEach((navLink) => {
    navLink.addEventListener('click', function(event) {
        if (this.hash){
            event.preventDefault();
            if (mobileMenuActive()){
                document.querySelector("body").classList.toggle("mobile-menu-active");

                navMenuAs.forEach((navMenuA) => {
                    navMenuA.querySelector("span").classList.toggle("visibility-hidden");
                });

                mobileMenuBtn.classList.toggle("bi-list");
                mobileMenuBtn.classList.toggle("bi-x");
            }
            scrollto(this.hash);
        }
    })
})

// Scrolling to from Useful Links in footer
// Add the "scroll-to" class to any link in the
// website that should scroll to some section
// using the '#id' href when clicked
let scrollLinks = document.querySelectorAll(".scroll-to");
scrollLinks.forEach((scrollLink) => {
    scrollLink.addEventListener('click', function(event){
        if (this.hash){
            event.preventDefault();
            scrollto(this.hash);
        }
    })
})

// Highlighting current section in navigation bar
const navbarLinksActive = () => {
    let position = window.scrollY + 200;
    navLinks.forEach(navLink => {
        if (!navLink.hash) return;
        let section = document.querySelector(navLink.hash);
        if (!section) return;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    })
}
window.addEventListener('load', navbarLinksActive);
document.addEventListener('scroll', navbarLinksActive);

// Initialising swiper bundle coverflow effect for announcments
// https://swiperjs.com/demos#slides-per-view
var announcementSwiper = new Swiper(".announcement-swiper", {
    effect: "slide",
    grabCursor: true,
    slidesPerView: 3,
    navigation: {
        prevEl: ".announcement-swiper-prev-btn",
        nextEl: ".announcement-swiper-next-btn"
    },
    keyboard: {
        enabled: true
    },
    pagination: {
        el: ".announcement-swiper-pagination",
        clickable: true
    }
});

// Initialising swiper bundle coverflow effect for testimonial images
// https://swiperjs.com/swiper-api#coverflow-effect-parameters
var testSwiper = new Swiper(".testimonials-swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    rewind: true,
    coverflowEffect: {
        depth: 400,
        modifier: 1,
        rotate: 0,
        scale: 1,
        slideShadows: true,
        stretch: 0
    },
    navigation: {
        prevEl: ".testimonials-swiper-prev-btn",
        nextEl: ".testimonials-swiper-next-btn"
    },
    keyboard: {
        enabled: true
    }
})

let testVisibilityFunc = function (){
    testSwiper.slides.forEach((slide) => {
        if (slide.style["z-index"] <= -1){
            slide.classList.add("visibility-hidden");
            slide.classList.remove("visibility-visible");
        } else {
            slide.classList.add("visibility-visible");
            slide.classList.remove("visibility-hidden");
        }
    })
};

testVisibilityFunc();
testSwiper.on("activeIndexChange", testVisibilityFunc);

// Initialising swiper bundle coverflow effect for testimonial images
// https://swiperjs.com/demos#effect-fade
var testTextSwiper = new Swiper(".test-text-swiper", {
    effect: "slde",
    grabCursor: true,
    centeredSlides: true,
    rewind: true,
    pagination: {
        el: ".testimonials-swiper-pagination",
        clickable: true
    },
    autoplay: {
        delay: 4500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
    }
})


testSwiper.controller.control = testTextSwiper;
testTextSwiper.controller.control = testSwiper;

// Animation on Scroll initialisation
window.addEventListener('load', () => {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    })
});

// Preloader
let preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
        preloader.remove()
    });
}
