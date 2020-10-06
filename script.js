// Animation of navigation section

var previousScrollTop;
var isScrolling;
var nav = document.getElementById('nav-anime');

function hasScrolled() {

    var scrollTop = window.scrollY;

    if (scrollTop > previousScrollTop) {
        nav.classList.add('nav-up');
    } else {
        nav.classList.remove('nav-up');
    }

    if (scrollTop < previousScrollTop) {
        nav.classList.add('nav-down');
    } else {
        nav.classList.remove('nav-down');
    }

    previousScrollTop = scrollTop;

}

document.addEventListener('scroll', function () {
    isScrolling = true;
}, false);

setInterval(function () {
    if (isScrolling) {
        hasScrolled();
        isScrolling = false;
    }
}, 200);


$(window).on("scroll", function () {
    if ($(window).scrollTop() < 110) {
        $('nav').addClass('default');
    } else {
        $('nav').removeClass('default');
    }
})

// Animation of up icon

$(window).on("scroll", function () {

    if ($(window).scrollTop() > 500) {
        $('i.fa-angle-up').addClass('show-up');

    } else {
        $('i.fa-angle-up').removeClass('show-up');
    };
})

const up = document.querySelector(".fa-angle-up");

up.addEventListener("click", function () {
    $("html, body").animate({
        scrollTop: 0
    }, 500);
    column.classList.remove("show")
})

// Animation of chapters section

$(document).on('scroll', function () {

    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();

    //Link boxes section

    const $boxes1 = $('.boxes1');
    const boxes1FromTop = $boxes1.offset().top;
    const boxes1Height = $boxes1.innerHeight();

    if (scrollValue > boxes1FromTop - windowHeight) {
        $boxes1.addClass('activeLink');
    };
    //Cleaner
    if (scrollValue < 100) {
        $('.boxes1').removeClass('activeLink');
    }

    const $boxes2 = $('.boxes2');
    const boxes2FromTop = $boxes2.offset().top;
    const boxes2Height = $boxes2.innerHeight();

    if (scrollValue > boxes2FromTop - windowHeight) {
        $boxes2.addClass('activeLink');
    }
    //Cleaner
    if (scrollValue < 100) {
        $('.boxes2').removeClass('activeLink');
    }

    const $boxes3 = $('.boxes3');
    const boxes3FromTop = $boxes3.offset().top;
    const boxes3Height = $boxes3.innerHeight();

    if (scrollValue > boxes3FromTop - windowHeight) {
        $boxes3.addClass('activeLink');
    }
    //Cleaner
    if (scrollValue < 100) {
        $('.boxes3').removeClass('activeLink');
    }

    const $boxes4 = $('.boxes4');
    const boxes4FromTop = $boxes4.offset().top;
    const boxes4Height = $boxes4.innerHeight();

    if (scrollValue > boxes4FromTop - windowHeight) {
        $boxes4.addClass('activeLink');
    }
    //Cleaner
    if (scrollValue < 100) {
        $('.boxes4').removeClass('activeLink');
    }

    const $boxes5 = $('.boxes5');
    const boxes5FromTop = $boxes5.offset().top;
    const boxes5Height = $boxes5.innerHeight();

    if (scrollValue > boxes5FromTop - windowHeight) {
        $boxes5.addClass('activeLink');
    }
    //Cleaner
    if (scrollValue < 100) {
        $('.boxes5').removeClass('activeLink');
    }

    // Vertical line section

    const $line1 = $('.line1');
    const line1FromTop = $line1.offset().top;
    const line1Height = $line1.outerHeight() * 1.5;

    if (scrollValue > line1FromTop + line1Height - windowHeight) {
        $line1.addClass('activeLine');
    }
    //Cleaner
    if (scrollValue < 100) {
        $('.line1').removeClass('activeLine');
    }

    const $line2 = $('.line2');
    const line2FromTop = $line2.offset().top;
    const line2Height = $line2.outerHeight() * 1.5;

    if (scrollValue > line2FromTop + line2Height - windowHeight) {
        $line2.addClass('activeLine');
    }
    //Cleaner
    if (scrollValue < 100) {
        $('.line2').removeClass('activeLine');
    }

    const $line3 = $('.line3');
    const line3FromTop = $line3.offset().top;
    const line3Height = $line3.outerHeight() * 1.5;

    if (scrollValue > line3FromTop + line3Height - windowHeight) {
        $line3.addClass('activeLine');
    }
    //Cleaner
    if (scrollValue < 100) {
        $('.line3').removeClass('activeLine');
    }

    const $line4 = $('.line4');
    const line4FromTop = $line4.offset().top;
    const line4Height = $line4.outerHeight() * 1.5;

    if (scrollValue > line4FromTop + line4Height - windowHeight) {
        $line4.addClass('activeLine');
    }
    //Cleaner
    if (scrollValue < 100) {
        $('.line4').removeClass('activeLine');
    }

    const $line5 = $('.line5');
    const line5FromTop = $line5.offset();
    const line5Height = $line5.outerHeight() * 1.5;

    if (scrollValue > line5FromTop + line5Height - windowHeight) {
        $line5.addClass('activeLine');
    }
    //Cleaner
    if (scrollValue < 100) {
        $('.line5').removeClass('activeLine');
    }
})

// Cookie alert
function WHCheckCookies() {
    if (!localStorage.cookies_accepted) {
        var cookies_message = document.getElementById("cookies-message");
        cookies_message.style.display = "block"
    }
}
window.onload = WHCheckCookies;

function WHCloseCookiesWindow() {
    localStorage.cookies_accepted = true;
    document.getElementById("cookies-message-container").removeChild(document.getElementById("cookies-message"));
}

// Hamburger menu
const burger = document.querySelector(".burger");
const iconX = document.querySelector(".fa-times");
const column = document.querySelector(".nav_aside");
const header = document.querySelector("header");
const section = document.querySelector("section");
const article = document.querySelector("article");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const aside = document.querySelector("aside");
const p = document.querySelectorAll("p");

burger.addEventListener("click", function () {
    column.classList.toggle("show")
})

iconX.addEventListener("click", function () {
    column.classList.remove("show")
})

header.addEventListener("touchstart", function () {
    column.classList.remove("show")
})

article.addEventListener("touchstart", function () {
    column.classList.remove("show")
})
main.addEventListener("touchstart", function () {
    column.classList.remove("show")
})
article.addEventListener("touchstart", function () {
    column.classList.remove("show")
})
footer.addEventListener("click", function () {
    column.classList.remove("show")
})
aside.addEventListener("click", function () {
    column.classList.remove("show")
})
p.addEventListener("touchstart", function () {
    column.classList.remove("show")
})