function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("load", () => {
  scrollToTop();
});
function gra() {
  let element = document.getElementById("lioimg");
  if (element.classList.contains("grab-cursor")) {
    element.classList.remove("grab-cursor");
    element.classList.add("grabbing-cursor");
  } else if (element.classList.contains("grabbing-cursor")) {
    element.classList.remove("grabbing-cursor");
    element.classList.add("grab-cursor");
  }
}

function gsap1() {
  let tl = gsap.timeline();
  tl.to(".load", {
    y: -720,
    scale: 0,
    duration: 5,
    delay: 5,
  });
  tl.to("body", {
    overflow: "visible",
    duration: 0.1,
  });
  tl.from(".line", {
    duration: 1,
    opacity: 0,
  });
  tl.from("#navbar div", {
    y: 30,
    opacity: 0,

    stagger: 0.3,
  });
  tl.from(".page1 h1", {
    scale: 0,
  });
  tl.from(".page1 img", {
    opacity: 0,
    duration: 1,
    filter: "blur(10px)",
  });

  gsap.to("#arrow", {
    rotate: 90,
    scrollTrigger: {
      scroll: "body",
      trigger: ".page2",
      start: "top 500",
      end: "top 500",
      scrub: 2,
    },
  });
  gsap.to(".page2 .lio", {
    x: -1400,
    scrollTrigger: {
      scroll: "body",
      trigger: ".page2",
      start: "top 500",
      scrub: 2,
    },
  });
  gsap.from(".talk h1", {
    y: 30,
    duration: 0.3,
    opacity: 0,
    scrollTrigger: {
      scroll: "body",
      trigger: ".talk",
      scrub: 2,
      start: "bottom 100%",
      end: "bottom 100%",
    },
  });
  gsap.from(".talk h3", {
    y: 30,
    stagger: 0.5,
    duration: 0.3,
    opacity: 0,
    scrollTrigger: {
      scroll: "body",
      trigger: ".talk",
      scrub: 2,
      start: "bottom 100%",
      end: "bottom 100%",
    },
  });
  gsap.from(".talk2 h1", {
    y: 30,
    stagger: 0.5,
    duration: 0.3,
    opacity: 0,
    scrollTrigger: {
      scroll: "body",
      trigger: ".talk",
      scrub: 2,
      start: "bottom 100%",
      end: "bottom 100%",
    },
  });
  gsap.from(".talk2 h3", {
    y: 30,
    scale: 0,
    opacity: 0,
    stagger: 0.5,
    duration: 1.4,
    opacity: 0,
    scrollTrigger: {
      scroll: "body",
      trigger: ".talk",
      scrub: 4,
      start: "bottom 100%",
      end: "top 10%",
    },
  });
  gsap.from(".talk2 button", {
    y: -30,
    opacity: 0,
    filter: "blur(10px)",
    duration: 1.4,
    opacity: 0,
    scrollTrigger: {
      scroll: "body",
      trigger: ".talk",
      scrub: 4,
      start: "top 10%",
      end: "top 10%",
    },
  });
  gsap.from(".thinks ", {
    y: -30,
    opacity: 0,
    filter: "blur(10px)",
    duration: 1.4,
    opacity: 0,
    scrollTrigger: {
      scroll: "body",
      trigger: ".thinks",
      scrub: 3,
      start: "top 70%",
      end: "top 70%",
    },
  });
  gsap.from(".develop h5 ", {
    y: 30,
    opacity: 0,
    scale: 0,
    duration: 0.9,
    opacity: 0,
    scrollTrigger: {
      scroll: "body",
      trigger: ".develop",
      scrub: 2,
      start: "top 70%",
      end: "top 70%",
    },
  });
  gsap.from(".imgs div ", {
    x: 20,
    stagger: 0.9,
    opacity: 0,
    duration: 0.9,
    scale: 0,
    duration: 0.9,
    opacity: 0,
    scrollTrigger: {
      scroll: "body",
      trigger: ".develop",
      scrub: 4,
      start: "top 70%",
      end: "top 70%",
    },
  });
}
gsap1();
gsap.from(".projects h1", {
  x: -30,
  opacity: 0,
  scrollTrigger: {
    scroll: "#scro",
    trigger: ".projects",
    scrub: 2,
    start: "top 70%",
    end: "top 70%",
  },
});
gsap.from(".projects", {
  y: 60,
  duration: 1,
  stagger: 1,
  scrollTrigger: {
    scroll: "#scro",
    trigger: ".pro1",
    scrub: 2,
    start: "top 70%",
    end: "top 0%",
  },
});
gsap.from(".pro1", {
  duration: 1,
  opacity: 0,
  stagger: 1,
  scrollTrigger: {
    scroll: "#scro",
    trigger: ".pro1",
    scrub: 2,
    start: "top 70%",
    end: "top 70%",
  },
});
gsap.from(".page5 h1", {
  duration: 3,
  opacity: 0,
  filter: "blur(15px)",

  scrollTrigger: {
    scroll: "#scro",
    trigger: ".page5",
    scrub: 2,
    start: "top 70%",
    end: "top 70%",
  },
});
gsap.from(".page6 h1", {
  duration: 3,
  opacity: 0,
  scale: 0.7,

  scrollTrigger: {
    scroll: "#scro",
    trigger: ".page6",
    scrub: 2,
    start: "top 70%",
    end: "top 70%",
  },
});
gsap.from(".icons span i", {
  duration: 3,
  opacity: 0,
  y: -30,
  stagger: 0.9,

  scrollTrigger: {
    scroll: "#scro",
    trigger: ".page7",
    scrub: 2,
    start: "top 70%",
    end: "top 70%",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.getElementById("sec");

  document.addEventListener("mousemove", function (event) {
    cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    cursor.style.opacity = "1";
  });

  document.addEventListener("mouseout", function () {
    cursor.style.opacity = "0";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.getElementById("sec2");

  document.addEventListener("mousemove", function (event) {
      cursor.style.transform = `translate(${event.clientX + -16}px, ${
        event.clientY - 14
      }px)`;
    cursor.style.opacity = "1";
  });

  document.addEventListener("mouseout", function () {
    cursor.style.opacity = "0";
  });
});
