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


// navigation

var manu = document.querySelector('#nav-part2');
var toggleButton = document.querySelector('#circle');

let isOpen = false;

toggleButton.addEventListener('click', () => {
    if (!isOpen) {
        gsap.to(manu,{
            display:'block',
            duration:1.2,
          })
          isOpen = true;

    } else {
        gsap.to(manu,{
            display:'none',
            duration:.2,

          })
          isOpen = false;
    }
});




function page1() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page1 h1",
      scroller: "#main",
      // markers: true,
      start: "top 30%",
      end: "top 0",
      scrub: 3,
    },
  });

  tl.to(
    "#page1 h1",
    {
      y: 10,
      x: -100,
    },
    "anim"
  );

  tl.to(
    "#page1 h2",
    {
      y: -10,
      x: 90,
    },
    "anim"
  );

  tl.to(
    "#page1 video",
    {
      width: "90%",
      height:"700px",
      borderRadius: "20px",
    //   border: "2px solid #5050505a",
    },
    "anim"
  );
}
page1();

function page2() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2 h1",
      scroller: "#main",
      //   markers: true,
      start: "top 10%",
      end: "top 20",
      scrub: 3,
    },
  });

  tl2.to("#main", {
    backgroundColor: "#fff",
    duration: 1,
    scrub: 1,
  });

  tl2.to("#main #page2 h1", {
    color: "#0F0D0D",
    duration: 1,
  });
  tl2.to("#main #page2-left h2", {
    color: "#0F0D0D",
    scale: 1,
    scrub: 2,
  });
  tl2.to("#main #page2-right p", {
    color: "#0F0D0D",
    duration: 1,
  });
  tl2.to("#main #page2-right button", {
    scale: 1,
  });
}
page2();

function page4() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "#main",
      // markers: true,
      start: "top 40%",
      end: "top 40%",
      scrub: 3,
    },
  });

  // tl3.to('#main #page3 #page3-part3 h1' ,{
  //     color:'#',
  // })

  tl3.to("#main #page3 #page3-part3 button", {
    backgroundColor: "#EDBFFF",
  });

  tl3.to("#main #page4", {
    backgroundColor: "#0F0D0D",
  });
}

page4();

function page5() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      // markers: true, 
      start: "top 80%",
      end: "top 80%",
      scrub: 3,
    },
  });

  tl3.to("#main #page5", {
    backgroundColor: "#0F0D0D",
  });

  let clients = document.querySelectorAll(".clients");

  clients.forEach(function (val) {
    val.addEventListener("mouseenter", function () {
      val.childNodes[3].style.opacity = 0.7;
    });

    val.addEventListener("mouseleave", function () {
      val.childNodes[3].style.opacity = 0;
    });

    val.addEventListener("mousemove", function (dets) {
      val.childNodes[3].style.left = dets.x + "px";
    });
  });
}
page5();

