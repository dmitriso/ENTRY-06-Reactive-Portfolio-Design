

// GSAP ANIMATIONS & FUNCTIONS
gsap.registerPlugin(ScrollTrigger);
let welcomeTl = gsap.timeline({
    delay: 1,
})
gsap.from('.layer-1', { duration: 1, opacity: 0, xPercent: -200 })
gsap.from('.layer-2', { duration: 1, opacity: 0, xPercent: 200 })
// gsap.from('.welcome-btn', { duration: 1, delay: 1.5, opacity: 0, xPercent: -200 })
// gsap.from('.welcome-msg', { duration: 1, delay: 1.5, opacity: 0, xPercent: 200 })
gsap.fromTo('.welcome-btn', {ease:'back', duration: 2, opacity: 0, scale: 0, }, {ease:'back', delay:1.7, opacity: 1, scale: 1 })
gsap.fromTo('.welcome-msg', {ease:'back', duration: 2, opacity: 0, scale: 0, }, {ease:'back', delay: 1.7, opacity: 1, scale: 1 })
gsap.fromTo('.logo-spinner', {ease:'back', duration: 2, opacity: 0, scale: 0, }, {ease:'back', delay: 2, opacity: 1, scale: 1 })
gsap.to('.logo-spinner', { ease: 'none', duration: 90, rotate: 360, repeat: -1, })

function scene2() {
    gsap.to('.layer-1', { duration: 1, opacity: 0, xPercent: -200, scale: 5 })
    gsap.to('.layer-2', { duration: 1, opacity: 0, xPercent: 200, scale: 5 })
    // gsap.to('.welcome-btn, .welcome-msg', { duration: .5, delay: 0, opacity: 0, scale:7, zIndex:0, })
    gsap.fromTo('.navbar', { y: -100, opacity: 0, }, { duration: 1, delay: 1, opacity: 1, y: 0 })
    gsap.fromTo('.brand-name , .site-logo', { y: -100, opacity: 0, }, { duration: 1, delay: 1, opacity: 1, y: 0, })
    gsap.to('.showcase', { opacity: 1 })
    gsap.fromTo('.welcome', { scale: 1, ease: 'none', }, { duration: 2, scale: .2, opacity:.788, xPercent:-45, yPercent:-360})
}

function galleryTl() {
gsap.timeline({
    scrollTrigger: {
      trigger: ".grid-container",
      start: "top top",
      end: () => innerHeight * 3,
      scrub: true,
      pin: ".grid",
      anticipatePin: 1,
    }
  })
  .set(".gridBlock:not(.centerBlock)", {autoAlpha: 0})
  .to(".gridBlock:not(.centerBlock)", {duration: 0.1, autoAlpha: 1}, 0.001)
  .from(".gridLayer", {
    scale: 3.3333,
    ease: "none",
  }); 
}

gsap.to('.header', {
    scrollTrigger: {
        trigger:'.showcase',
        start:'center center',
        scrub:true,
        pin:'.header'
    },
    y:-300,

})

const welcomeEl = $('.welcome-btn');
welcomeEl.click(function () {
    if (welcomeEl.hasClass('inactive')) {
        return;
    } else {
        welcomeEl.addClass('inactive');
        console.log('this worked');
        scene2();
        galleryTl();
    }
})