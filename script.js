ScrollTrigger.defaults({
  scroller: "#main"
});


// Stabilize styles on fullscreen change
function stabilizeStyles() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}

// Set custom --vh variable
stabilizeStyles();
window.addEventListener('resize', stabilizeStyles);

// Prevent fullscreen-specific adjustments
document.addEventListener('fullscreenchange', () => {
    console.log('Fullscreen toggled. No layout changes will occur.');
    stabilizeStyles();
});

function init(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init();


let t1 = gsap.timeline(); 

// Start left, right, square, and PNG animations at the same time
// Initial animations
t1.to(".left", { x: "-2rem", duration: 0.5, delay: 1 },0) // Starts first
  .to(".right", { x: "2rem", duration: 0.5,delay:1},0)        // Starts at the same time as ".left"
  .to(".page1 .PNG", { scale: 0.18, y: -419, duration: 0.5,delay:1 },0) // Starts at the same time as ".left"
  .from(".page1 .square", { scale: 0, duration: 0.5,delay:1},0);       // Starts at the same time as ".left"

// Heading animations, aligned to start after the previous animations finish
t1.from('.heading h1', { duration: 0.7, opacity: 0, y: 100, scale: 0 })
  .to('.heading h1', { scale: 1 }, '>') // Start after h1 animation
  .from('.heading h2', { duration: 0.1, opacity: 0, y: 100,scale:0}) // Start after h1 animation finishes
  .to('.heading h2', { scale: 1 },'>') // Start after h1 animation



  

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page2",
        // scroller:"#main",
        markers:true,
        start:"top 27%",
        end:"top 0%",
        scrub:3
    }
})
tl.from(".page2 h1",{opacity:0,rotate:-60,scale:0},{x:100,opacity:1,scale:1,rotate:0,},"anim")
  .from(".page2 h2",{opacity:0,rotate:60,scale:0},{x:-100,scale:1,opacity:1,rotate:0,},"anim")
tl.from(".page2 video",{width:"0%"},)
tl.to(".page2 video",{
   width:"50%",
  },)




var p4 = gsap.timeline({
  scrollTrigger:{
      trigger:"#element4",
      markers:true,
      scrub:3,
      start: "top 27%", 
      end: "top",
  }
})

  p4.to(
    ".upward-v4",
    { x:-20,y: 20, opacity: 1,delay:1,duration: 1,rotation:-88, ease: "power2.out" }
  );

  p4.to(
    ".downward-v4",
    { x:150,y:-150, opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }
  );

  // Transform circle into rectangle
  p4.to(".circle4", {
 
    x:20,
    y:20,      // New width
    height: 100,      // New height
    borderRadius: 0,  // Remove rounded corners
    duration: 1.5,    // Duration of animation
    ease: "power2.inOut",
    });





