/* funktioniert noch nicht for some reason */

const videosec = document.querySelector(".videosec");
const video = videosec.querySelector("video");
const video = videosec.querySelector("h1");

const section = document.querySelector("section");
const headline = section.querySelector("h1");

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 2000,
    triggerElemnt: videosec,
    triggerHook: 0
})

.addIndicators()
.setPin(videosec)
.addTo(controller);

let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => )
    scrollpos = e.scrollPos / 1000;
    console.log(e)

setInterval(() => {
    delay += (scrollpos - delay) * accelamount
    console.log(scrollpos, delay);
}. 33,3);