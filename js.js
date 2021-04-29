const videosec = document.querySelector(".videosec");
const video = videosec.querySelector("video");
const text = videosec.querySelector("h1");

const section = document.querySelector("section");
const headline = section.querySelector("h1");

const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElemnt: videosec,
    triggerHook: 0
})

.addIndicators()
.setPin(videosec)
.addTo(controller);

const textAnim = TweenMax.fromTo(text, 3, { opacity: 0 }, { opacity: 1 });

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: videosec,
    triggerHook: 0
  })
    .setTween(textAnim)
    .addTo(controller);

    
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
});


setInterval(() => {
    delay += (scrollpos - delay) * accelamount
    console.log(scrollpos, delay);

    video.currentTime = delay;
}, 33,3);
