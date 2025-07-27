const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function image1animation() {
    var image1 = document.querySelector("#image-container")
    var playbtn = document.querySelector("#play")
    image1.addEventListener("mouseenter", function () {
        // playbtn.style.opacity = 1
        // playbtn.style.scale = 1
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1,

        })
    })

    image1.addEventListener("mouseleave", function (dets) {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0
        })
    })
    image1.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
            left: dets.x - 70,
            top: dets.y - 90
        })
    })

}
image1animation()


function loadinganimatio() {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.2
    })
    gsap.from("#page1 #image-container ", {
        y: 50,
        opacity: 0,
        delay: 1,
        duration: 0.9,

    })
    gsap.from("#page2 h1,p", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.2
    })
}
loadinganimatio()

// function loading2animatio() {


// }
// loading2animatio()

document.addEventListener("mousemove", function (dets) {

    gsap.to(".cursor", {
        left: dets.x,
        top: dets.y
    })

})
document.addEventListener("mouseleave", function (dets) {

    gsap.to("#child1", {
        transform: ' translate(-50%,-50%)'
    })

})

document.querySelector("#child").addEventListener("mouseenter",function(){
    gsap.to(".cursor", {
       transform:'translate(-50%,-50%) scale(1)'
    })

})
document.querySelector("#child1").addEventListener("mouseleave",function(){
    gsap.to(".cursor", {
       transform:'translate(-50%,-50%) scale(0)'
    })

})

// document.querySelectorAll(".child")
// elem.forEach(function (elem) {
//     addEventListener.addEventListener(("mouseleave", function () {
//         gsap.to(".cursor", {
//             transform: 'translate(-50%,-50%) scale(1)'
//         })
//     }))

//     addEventListener.addEventListener(("mousemove", function () {
//         gsap.to(".cursor", {
//             transform: 'translate(-50%,-50%) scale(0)'
//         })
//     }))

// })