const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".text-animation", { y: "0%", duration: 1, stagger: 0.5 });
tl.to(".slider", { y: "-100%", duration: 1, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo(".img", { opacity: 0 }, { opacity: 1, duration: 1, delay:0.2});
tl.fromTo("nav",  { opacity: 0 }, { opacity: 1, duration: 1});
tl.fromTo(".sroll",  { opacity: 0 }, { opacity: 1, duration: 1}, "=-1");


TweenMax.from(".desc", 1.5, {
    delay: 5.5,
    x: "-100%",
    ease: Expo.easeInOut
});
var tl1 = new TimelineMax({ paused: true });
tl1.to(".menu", 2, {
    top:"0%",
    ease: Expo.easeInOut,
},
"-=0.8"
);
tl1.from(
    ".menu-close",
    1,
    {
        scale: 0,
        opacity: 1,
        ease: Expo.easeInOut,
    },
    "-=1"
);
tl1.staggerFrom(".menu ul li", 2, {
    x:"-50%",
    ease: Expo.easeInOut,
    opacity: 0,
},"0.5","-=1");
tl1.reverse(-1);
$(document).on("click", ".burger" ,function(){
    tl1.reversed(!tl1.reversed());
});
$(document).on("click", ".menu-close" ,function(){
    tl1.reversed(!tl1.reversed());
});

$(document).on("click", "a" ,function(){
    tl1.reversed(!tl1.reversed());
});


