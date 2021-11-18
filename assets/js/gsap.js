// GSAP Animation

var tl = gsap.timeline();


tl.from(".bgImg", {
    duration: 1,
    y: 200,
    scale: 0,
    duration: 2,
    ease: "back"
});

tl.from(".content", {
    duration: 1,
    y: 300,
    opacity: 0
});

tl.from(".header", {
    opacity: 0
});

tl.from(".icon-scroll", {
    x: -20,
    opacity: 0
});

tl.from(".icon-chat", {
    x: 20,
    opacity: 0
});