(function() {
	"use strict";

    // My Swiper Blog
	var SwiperTraveler = new Swiper(".mySwiperTestimonials", {
        loop: true,
        spaceBetween: 0,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 1
            },
            1200: {
                slidesPerView: 1
            }
        }
    });

    // My Swiper Partner
	var SwiperTraveler = new Swiper(".mySwiperPartner", {
        loop: true,
        spaceBetween: 20,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 5
            },
            1200: {
                slidesPerView: 5
            }
        }
    });

    // My Swiper Partner Two Logo
	var SwiperTraveler = new Swiper(".mySwiperPartnerTwoLogo", {
        loop: true,
        spaceBetween: 20,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 5
            },
            1200: {
                slidesPerView: 5
            }
        }
    });

    // My Swiper Projects Two
	var SwiperTraveler = new Swiper(".mySwiperProjectsTwo", {
        loop: true,
        spaceBetween: 15,
        centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 3
            }
        }
    });

    // // My Swiper Blog Two
	// var SwiperTraveler = new Swiper(".mySwiperBlogTwo", {
    //     loop: true,
    //     spaceBetween: 24,
    //     centeredSlides: true,
    //     // autoplay: {
    //     //     delay: 2000,
    //     //     disableOnInteraction: false,
    //     // },
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
    //     breakpoints: {
    //         0: {
    //             slidesPerView: 1
    //         },
    //         576: {
    //             slidesPerView: 2
    //         },
    //         768: {
    //             slidesPerView: 2
    //         },
    //         992: {
    //             slidesPerView: 3
    //         },
    //         1200: {
    //             slidesPerView: 3
    //         }
    //     }
    // });

    // My Swiper Testimonials Client
	var SwiperTraveler = new Swiper(".mySwiperTestimonialsClient", {
        loop: true,
        spaceBetween: 0,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 1
            },
            1200: {
                slidesPerView: 1
            }
        }
    });

    // My Swiper Testimonials Three
	var SwiperTraveler = new Swiper(".mySwiperTestimonialsThree", {
        loop: true,
        spaceBetween: 24,
        centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 3
            }
        }
    });

    // My Swiper Instagram
	var SwiperTraveler = new Swiper(".mySwiperInstagram", {
        loop: true,
        spaceBetween: 10,
        centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 5
            },
            1200: {
                slidesPerView: 6
            }
        }
    });

    // Text Animate
    try {
        var string = "UX/UI Designer";
        var str = string.split("");
        var el = document.getElementById('str');
        (function animate() {
            str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
            var running = setTimeout(animate, 250);
        })();
    } catch (err) {}

    // scrollCue Animate
	scrollCue.init();
    
    // Navbar  Sticky
    window.onscroll = function() {myFunction()};
    var navbar = document.getElementById("myHeader");
    var sticky = navbar.offsetTop;
        function myFunction() {
        if (window.pageYOffset > sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }

    // Toggle Menu
    try {
        var navicon = document.getElementById('navicon');
        var navEl = document.getElementById('siteNav');
        function toggleMenu(){
        navEl.classList.toggle('hidden');
        };
        navicon.addEventListener("click", toggleMenu, false);
    
    } catch (err) {}
   

    // Preloader
	const select = (el, all = false) => {
        el = el.trim()
        if (all) {
              return [...document.querySelectorAll(el)]
            } else {
              return document.querySelector(el)
            }
        }
        let preloader = select('#preloader'); 
        if (preloader) {
          window.addEventListener('load', () => {
            preloader.remove()
        });
    }

    // Nav Active Color Js
    try {
        var header = document.getElementById("myHeader");
        var navs = header.getElementsByClassName("nav-link");
        for (var i = 0; i < navs.length; i++) {
            navs[i].addEventListener("click", function() {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
    } catch (err) {}

})();

// ------------------------


let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

let timeRunning = 3000;
let timeAutoNext = 7000;

let runTimeOut;
let runNextAuto;

// Function to show specific slide
function showSliderByIndex(index) {
    let SliderItemsDom = SliderDom.querySelectorAll('.item');

    // Move the clicked item to the first position
    for (let i = 0; i < index; i++) {
        SliderDom.appendChild(SliderItemsDom[0]);
    }

    // Rearrange thumbnails similarly
    let newThumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    for (let i = 0; i < index; i++) {
        thumbnailBorderDom.appendChild(newThumbnailItemsDom[0]);
    }

    carouselDom.classList.add('next');
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        showSliderByIndex(1); // Auto slide
    }, timeAutoNext);
}

// Add click event to each thumbnail
thumbnailItemsDom.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        showSliderByIndex(index);
    });
});

// Auto-play initially
runNextAuto = setTimeout(() => {
    showSliderByIndex(1);
}, timeAutoNext);
function showSliderByIndex(index) {
    let SliderItemsDom = SliderDom.querySelectorAll('.item');
    for (let i = 0; i < index; i++) {
        SliderDom.appendChild(SliderItemsDom[0]);
    }

    let newThumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    for (let i = 0; i < index; i++) {
        thumbnailBorderDom.appendChild(newThumbnailItemsDom[0]);
    }

    // Highlight active thumbnail
    newThumbnailItemsDom.forEach(item => item.classList.remove('active'));
    newThumbnailItemsDom[0].classList.add('active');

    carouselDom.classList.add('next');
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        showSliderByIndex(1); // Auto slide
    }, timeAutoNext);
}
const projectImages = [
    "assets/images/who-ami/1000005081_k7cuq4.jpg",
    "assets/images/who-ami/1000005100_mjdpsb.jpg",
    "assets/images/who-ami/1000005264_ess2u6.jpg",
    "assets/images/who-ami/image.png",
    "assets/images/who-ami/IMG_20250206_210920_qdgzvs.jpg",
    "assets/images/who-ami/IMG-20240922-WA0069_s0nfjs.jpg"
  ];

  const swiperWrapper = document.getElementById("swiperWrapper");

  projectImages.forEach(url => {
    swiperWrapper.innerHTML += `
      <div class="swiper-slide">
        <div class="projects-two-card">
          <div class="projects-img">
           <img src="${url}" alt="projects" style="height: 600px; object-fit:  cover; width: 100%;" onclick="openFullscreen(this)" />

          </div>
        </div>
      </div>
    `;
  });



const blogVideoLinks = [
  "https://youtu.be/AO2scScLG4I?si=kSScXUPF5LjTzq4S",
  "https://youtu.be/MbqkjU_Y5Pw?si=vSDKzsBZjWPp6dtl",
  "https://youtu.be/C1MKVhe0L1U?si=9tD4nJDY7yj_nhGu",
  "https://youtu.be/CkXD26XACdI?si=vsA7NdUuM12-hMBk"
];

const blogWrapper = document.getElementById("blogSwiperWrapper");

blogVideoLinks.forEach(link => {
  const videoId = link.split("youtu.be/")[1].split("?")[0]; // Extract video ID
  blogWrapper.innerHTML += `
    <div class="swiper-slide" style="  height: 30vh;">
      <div class="single-blog-two-card">
        <div class="blog-video">
          <iframe
            width="100%"
            height="250"
            src="https://www.youtube.com/embed/${videoId}"
            title="YouTube video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </div>
  `;
});

  // Initialize Swiper with arrows and optional pagination
  const swiperBlog = new Swiper(".mySwiperBlogTwo", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });

 document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0A%0AMessage:%0A${message}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=shivaa2942000@gmail.com&su=${encodeURIComponent(subject)}&body=${body}`;

    window.open(gmailUrl, "_blank");
  });

  // Initialize Swiper with pagination
 


  var bg = document.querySelector('.item-bg');
var items = document.querySelectorAll('.news__item');
var item = document.querySelector('.news__item');

function cLog(content) {
    console.log(content)
}

if($(window).width() > 800) {
    $(document).on("mouseover", ".news__item", function (_event, _element) {

        var newsItem = document.querySelectorAll('.news__item');
        newsItem.forEach(function (element, index) {
            element.addEventListener('mouseover', function () {
                var x = this.getBoundingClientRect().left;
                var y = this.getBoundingClientRect().top;
                var width = this.getBoundingClientRect().width;
                var height = this.getBoundingClientRect().height;

                $('.item-bg').addClass('active');
                $('.news__item').removeClass('active');
                // $('.news__item').removeClass('active');


                bg.style.width = width + 'px';
                bg.style.height = height + 'px';
                bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
            });

            element.addEventListener('mouseleave', function () {
                $('.item-bg').removeClass('active');
                $('.news__item').removeClass('active');
            });

        });

    });
}


var swiper = new Swiper('.news-slider', {
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    keyboard: true,
    spaceBetween: 0,
    slidesPerView: 'auto',
    speed: 300,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 3,
        slideShadows: false
    },
    breakpoints: {
        480: {
            spaceBetween: 0,
            centeredSlides: true
        }
    },
    simulateTouch: true,
    navigation: {
        nextEl: '.news-slider-next',
        prevEl: '.news-slider-prev'
    },
    pagination: {
        el: '.news-slider__pagination',
        clickable: true
    },
    on: {
        init: function () {
            var activeItem = document.querySelector('.swiper-slide-active');

            var sliderItem = activeItem.querySelector('.news__item');

            $('.swiper-slide-active .news__item').addClass('active');

            var x = sliderItem.getBoundingClientRect().left;
            var y = sliderItem.getBoundingClientRect().top;
            var width = sliderItem.getBoundingClientRect().width;
            var height = sliderItem.getBoundingClientRect().height;


            $('.item-bg').addClass('active');

            bg.style.width = width + 'px';
            bg.style.height = height + 'px';
            bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
        }
    }
});

swiper.on('touchEnd', function () {
    $('.news__item').removeClass('active');
    $('.swiper-slide-active .news__item').addClass('active');
});

swiper.on('slideChange', function () {
    $('.news__item').removeClass('active');
});

swiper.on('slideChangeTransitionEnd', function () {
    $('.news__item').removeClass('active');
    var activeItem = document.querySelector('.swiper-slide-active');

    var sliderItem = activeItem.querySelector('.news__item');

    $('.swiper-slide-active .news__item').addClass('active');

    var x = sliderItem.getBoundingClientRect().left;
    var y = sliderItem.getBoundingClientRect().top;
    var width = sliderItem.getBoundingClientRect().width;
    var height = sliderItem.getBoundingClientRect().height;


    $('.item-bg').addClass('active');

    bg.style.width = width + 'px';
    bg.style.height = height + 'px';
    bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
});



