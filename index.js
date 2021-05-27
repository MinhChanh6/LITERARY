const tl = gsap.timeline({
    defaults: { ease: "power1.out" } 
});
tl.to(".text-animation", { y: "0%", duration: 1, stagger: 0.5 });
tl.to(".slider", { y: "-100%", duration: 1, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo(".img", { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.2 });
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".sroll", { opacity: 0 }, { opacity: 1, duration: 1 }, "=-1");
tl.from(".line span", 1.8, {
    y: 300,
    ease: "power4.out",
    skewY: 10,
    stagger: {
        amount: 0.4,
    },
})
var tl1 = new TimelineMax({ paused: true });
tl1.to(".menu", 2, {
    top: "0%",
    ease: Expo.easeInOut,
},
    "-=0.1"
);
tl1.from(
    ".menu-close",
    1,
    {
        scale: 0,
        opacity: 1,
        ease: Expo.easeInOut,
    },
    "-=.2"
);
tl1.staggerFrom(".menu ul li", 2, {
    x: "-50%",
    ease: Expo.easeInOut,
    opacity: 0,
}, ".2", "-=1.8");

tl1.reverse();
$(document).on("click", ".burger", function () {
    tl1.reversed(!tl1.reversed());
});
$(document).on("click", ".menu-close", function () {
    tl1.reversed(!tl1.reversed());
});

$(document).on("click", "a", function () {
    tl1.reversed(!tl1.reversed());
});


var cursor = $(".cursor"),
    follower = $(".cursor-follower");

var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;
        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

$(document).on("mousemove", function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});
$("header").on("mouseenter", function () {
    cursor.addClass("active");
    follower.addClass("active");
});
$("header").on("mouseleave", function () {
    cursor.removeClass("active");
    follower.removeClass("active");
});
$("div").on("mouseenter", function () {
    cursor.addClass("active");
    follower.addClass("active");
});
$("div").on("mouseleave", function () {
    cursor.removeClass("active");
    follower.removeClass("active");
});

const sroll = gsap.timeline({
    scrollTrigger: {
        trigger: '.section-two',
        start: 'top 90%',
        end:'bottom bottom',
        markers: true,
    }
})
sroll.from('.section-two',2.5,{ opacity: 0})

sroll.from('.rectangle',{ opacity: 0, duration: 1}, '=-2')
sroll.from('.text-sub',{y:'80', opacity: 0 , duration: 1},'-=1.5')
sroll.from('.text-title',{y:'100%', opacity: 0 , duration: 1},'.5','-=2')
sroll.from('.text-desc',{y:'100%', opacity: 0 , duration: 1},'1','-=1.5')
sroll.from('.text-year',{y:'100%', opacity: 0 , duration: 1},'.5','-=1')
sroll.from('.image-one', { opacity: 0, y: '-500', duration:1})
sroll.from('.image-two',{ opacity: 0, x: '-350', duration:1},'2','-=1')
sroll.from('.image-three',{ opacity: 0, x: '350', duration:1},'2','-=1')
var sections = gsap.utils.toArray(".panel");
const scrollhrz = gsap.timeline();
scrollhrz.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".container").offsetWidth
  }
});
