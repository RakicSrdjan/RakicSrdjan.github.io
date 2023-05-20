// ------------- SETTINGS --------------//
const desktopDistanceMultiplayer = 2;
const mobileDistanceMultiplayer = 6;
const isMobile = $(window).width() <= 767;

// rings configs
const roundRingMobileSettings = {
  opacity: 1,
  //ako ocete odozgore da padaju, sto bi zapravo bio moj predlog mozda,
  //ovde cemo promeniti xPercent u yPercent i onda cemo u css-u da promenimo,
  //round_rings classu left: -50%; u top: -50%;
  //i predlozio bih da se proba ease: Power2.easeInOut
  //evo ga i link od liba, odmah na pocetku pokazuje video sa animacijama https://greensock.com/get-started/
  xPercent: 50,
  ease: "back",
};
const animationDuration = 4;
const textFreezeDuration = animationDuration - 1;
// yPosition za text
const yPosition = 40;

// ne bih preporucio da se dira
const numberOfRingsBetweenText = 3;
const nextRingDelay = 0;
// ------------- END OF SETTINGS -------------- //

$(document).ready(function () {
  var loop = 1;
  $("#logoVideo").on("ended", function () {
    if (loop--) {
      this.play();
    }
  });
});

if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

gsap.registerPlugin(ScrollTrigger);

// animations for first section
gsap.set(".digital_prime_header", { scale: 1 });

let logoTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".dp_top_section",
    start: 0,
    pin: true,
    end: () => window.innerHeight * 2.2,
    scrub: 1,
  },
});

logoTl.to(".digital_prime_header", {
  top: "0%",
  position: "fixed",
  yPercent: 0,
  duration: 2,
  scale: 0.8,
});

logoTl.fromTo(
  ".digital_prime_logo_container",
  { xPercent: 0, scale: 1, duration: 2 },
  { yPercent: 0, xPercent: 0, scale: 0.8, duration: 2 },
  "-=1"
);

logoTl.fromTo(
  ".dp-section1-content",
  { top: "50%", yPercent: -50, scale: 0.9, opacity: 0 },
  { top: "50%", yPercent: -50, opacity: 0.7, scale: 1, duration: 1 },
  "-=1"
);
logoTl.fromTo(
  ".dp-section1-content",
  { top: "50%", yPercent: -50, opacity: 0.7, scale: 1, duration: 1 },
  { top: "50%", yPercent: -50, opacity: 1, scale: 1, duration: 2 },
  "+=1"
);

let logoTl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".round_vector",
    start: "top bottom",
    end: () => "+=" + window.innerHeight / 5,
    scrub: 0,
  },
});

logoTl1.to(".digital_prime_header", { opacity: 0 });

// ------ ring animations ------ //
let r_rings = gsap.timeline({
  scrollTrigger: {
    trigger: ".round_vector",
    start: "top top",
    end: "bottom bottom",
    end:
      "+=" +
      window.innerHeight *
        (isMobile ? mobileDistanceMultiplayer : desktopDistanceMultiplayer),
    scrub: true,
    pin: true,
  },
});

const initializeDesktopAnimations = () => {
  r_rings.to(
    ".round_ring1",
    { opacity: 1, xPercent: 32, ease: "back", duration: 1 },
    "-=1"
  );
  r_rings.to(
    ".round_ring2",
    { opacity: 1, xPercent: 32, ease: "back", duration: 1 },
    "+=0.5"
  );
  r_rings.to(
    ".round_ring3",
    { opacity: 1, xPercent: 32, ease: "back", duration: 1 },
    "+=0.5"
  );
  r_rings.fromTo(
    ".right_text1",
    { opacity: 0, duration: 2, top: "50%", yPercent: -50 },
    { opacity: 1, duration: 2, top: "50%", yPercent: -50 },
    "-=3"
  );
  r_rings.fromTo(
    ".right_text1",
    { opacity: 1, duration: 2, top: "50%", yPercent: -50 },
    { opacity: 0, duration: 2, top: "0%", yPercent: 0 },
    "-=1"
  );
  r_rings.to(
    ".round_ring4",
    { opacity: 1, xPercent: 32, ease: "back", duration: 1 },
    "+=0.5"
  );
  r_rings.to(
    ".round_ring5",
    { opacity: 1, xPercent: 32, ease: "back", duration: 1 },
    "+=0.5"
  );
  r_rings.to(
    ".round_ring6",
    { opacity: 1, xPercent: 32, ease: "back", duration: 1 },
    "+=0.5"
  );
  r_rings.fromTo(
    ".right_text2",
    { opacity: 0, duration: 2, top: "100%", yPercent: -100 },
    { opacity: 1, duration: 2, top: "50%", yPercent: -50 },
    "-=4"
  );
  r_rings.fromTo(
    ".right_text2",
    { opacity: 1, duration: 1, delay: 1, top: "50%", yPercent: -50 },
    { opacity: 0, duration: 2, top: "0%", yPercent: 0 },
    "-=1"
  );
  r_rings.to(
    ".round_ring7",
    { opacity: 1, xPercent: 32, ease: "back", duration: 0.5 },
    "+=0.5"
  );
  r_rings.to(
    ".round_ring8",
    { opacity: 1, xPercent: 32, ease: "back", duration: 0.5 },
    "+=0.5"
  );
  r_rings.to(
    ".round_ring9",
    { opacity: 1, xPercent: 32, ease: "back", duration: 0.5 },
    "+=0.5"
  );
  r_rings.fromTo(
    ".right_text3",
    { opacity: 0, duration: 2, top: "100%", yPercent: -100 },
    { opacity: 1, duration: 2, top: "50%", yPercent: -50 },
    "-=4"
  );
  r_rings.fromTo(
    ".right_text3",
    { opacity: 1, duration: 1, delay: 1, top: "50%", yPercent: -50 },
    { opacity: 0, duration: 2, top: "0%", yPercent: 0 },
    "-=1"
  );
  r_rings.to(
    ".round_ring10",
    { opacity: 1, xPercent: 32, ease: "back", duration: 0.5 },
    "+=0.5"
  );
  r_rings.to(
    ".round_ring11",
    { opacity: 1, xPercent: 32, ease: "back", duration: 0.5 },
    "+=0.5"
  );
  r_rings.to(
    ".round_ring12",
    { opacity: 1, xPercent: 32, ease: "back", duration: 0.5 },
    "+=0.5"
  );
  r_rings.fromTo(
    ".right_text4",
    { opacity: 0, duration: 2, top: "100%", yPercent: -100 },
    { opacity: 1, duration: 2, top: "50%", yPercent: -50 },
    "-=4"
  );
  r_rings.fromTo(
    ".right_text4",
    { opacity: 1, duration: 1, delay: 1, top: "50%", yPercent: -50 },
    { opacity: 0, duration: 2, top: "0%", yPercent: 0 },
    "-=1"
  );
  r_rings.to(
    ".round_ring13",
    { opacity: 1, xPercent: 32, ease: "back", duration: 0.5 },
    "+=0.5"
  );
  r_rings.to(
    ".round_ring14",
    { opacity: 1, xPercent: 32, ease: "back", duration: 0.5 },
    "+=0.5"
  );
  r_rings.to(
    ".round_ring15",
    { opacity: 1, xPercent: 32, ease: "back", duration: 0.5 },
    "+=0.5"
  );
  r_rings.fromTo(
    ".right_text5",
    { opacity: 0, duration: 1, delay: 1, top: "100%", yPercent: -100 },
    { opacity: 1, duration: 2, top: "50%", yPercent: -50 },
    "-=4"
  );
};

const initializeMobileRingAnimations = () => {
  let j = 1;
  // v1
  for (let i = 1; i <= 15; i++) {
    // rings animation
    r_rings.to(
      ".round_ring" + i,
      { ...roundRingMobileSettings, duration: animationDuration },
      `+=${nextRingDelay}`
    );
    if (i % 3 === 0) {
      // fade in text animation
      r_rings.fromTo(
        ".right_text" + j,
        { opacity: 0, duration: animationDuration, y: yPosition },
        { opacity: 1, duration: animationDuration, y: yPosition },
        `-=${animationDuration * numberOfRingsBetweenText}`
      );
      // fade out text animation
      r_rings.fromTo(
        ".right_text" + j,
        { opacity: 1, duration: animationDuration, y: yPosition },
        { opacity: 0, duration: animationDuration, y: yPosition },
        `+=${textFreezeDuration}`
      );
      j++;
    }
  }
  // stari krugovi
  // r_rings.to(".round_ring1", { ...roundRingMobileSettings, duration: 1 }, '-=1');
  // r_rings.to(".round_ring2", { ...roundRingMobileSettings, duration: 1 }, '+=0.5');
  // r_rings.to(".round_ring3", { ...roundRingMobileSettings, duration: 1 }, '+=0.5');
  // r_rings.fromTo(".right_text1", { opacity: 0, duration: 2, y: 100 }, { opacity: 1, duration: 2, y: 100 }, '-=3');
  // r_rings.fromTo(".right_text1", { opacity: 1, duration: 2, y: 100 }, { opacity: 0, duration: 2, y: 100 }, '-=1');
  // r_rings.to(".round_ring4", { ...roundRingMobileSettings, duration: 1 }, '+=0.5');
  // r_rings.to(".round_ring5", { ...roundRingMobileSettings, duration: 1 }, '+=0.5');
  // r_rings.to(".round_ring6", { ...roundRingMobileSettings, duration: 1 }, '+=0.5');
  // r_rings.fromTo(".right_text2", { opacity: 0, duration: 2, y: 100 }, { opacity: 1, duration: 2, y: 100 }, '-=4');
  // r_rings.fromTo(".right_text2", { opacity: 1, duration: 2, y: 100 }, { opacity: 0, duration: 2, y: 100 }, '-=1');
  // r_rings.to(".round_ring7", { ...roundRingMobileSettings, duration: 0.5 }, '+=0.5');
  // r_rings.to(".round_ring8", { ...roundRingMobileSettings, duration: 0.5 }, '+=0.5');
  // r_rings.to(".round_ring9", { ...roundRingMobileSettings, duration: 0.5 }, '+=0.5');
  // r_rings.fromTo(".right_text3", { opacity: 0, duration: 2, y: 100 }, { opacity: 1, duration: 2, y: 100 }, '-=4');
  // r_rings.fromTo(".right_text3", { opacity: 1, duration: 2, y: 100 }, { opacity: 0, duration: 2, y: 100 }, '-=1');
  // r_rings.to(".round_ring10", { ...roundRingMobileSettings, duration: 0.5 }, '+=0.5');
  // r_rings.to(".round_ring11", { ...roundRingMobileSettings, duration: 0.5 }, '+=0.5');
  // r_rings.to(".round_ring12", { ...roundRingMobileSettings, duration: 0.5 }, '+=0.5');
  // r_rings.fromTo(".right_text4", { opacity: 0, duration: 2, y: 100 }, { opacity: 1, duration: 2, y: 100 }, '-=4');
  // r_rings.fromTo(".right_text4", { opacity: 1, duration: 2, y: 100 }, { opacity: 0, duration: 2, y: 100 }, '-=1');
  // r_rings.to(".round_ring13", { ...roundRingMobileSettings, duration: 0.5 }, '+=0.5');
  // r_rings.to(".round_ring14", { ...roundRingMobileSettings, duration: 0.5 }, '+=0.5');
  // r_rings.to(".round_ring15", { ...roundRingMobileSettings, duration: 0.5 }, '+=0.5');
  // r_rings.fromTo(".right_text5", { opacity: 0, duration: 2, y: 100 }, { opacity: 1, duration: 2, y: 100 }, '-=4');
};

if (!isMobile) {
  initializeDesktopAnimations();
} else {
  initializeMobileRingAnimations();
}


let ultra_graph = gsap.timeline({
  scrollTrigger: {
    trigger: ".ultra_graph",
    start: "top",
    pin: true,
    end: () => window.innerHeight * 10,
    scrub: 1,
    ease: "power4.out",
    onUpdate: ({ progress }) => {
      console.log(progress);
      endValue = transitionValue(progress);
      updateChart();
    },
  },
});

//get all vids
var video = document.querySelectorAll("video");

//add source to video tag
function addSourceToVideo(element, src, folder) {
  var base = "videos/" + folder + "/" + src;
  var mov = document.createElement("source");
  mov.src = base + ".mov";
  mov.type = 'video/mp4; codecs="hvc1"';
  element.appendChild(mov);
  var webm = document.createElement("source");
  webm.src = base + ".webm";
  webm.type = "video/webm";
  element.appendChild(webm);
  console.log(src);
}

//determine screen size and select mobile or desktop vid
function whichSizeVideo(element, src) {
  var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
  if (windowWidth > 767) {
    addSourceToVideo(element, src.dataset.videoId, "h");
  } else {
    addSourceToVideo(element, src.dataset.videoId, "v");
  }
}

//init only if page has videos
function videoSize() {
  if (video !== undefined) {
    video.forEach(function (element, index) {
      whichSizeVideo(
        element, //element
        element //src locations
      );
    });
  }
}
videoSize();

//NAPOMENA ! ----- osaviti ove animacije poslednje u JS-u, svoj code pisite iznad njih
// morphing shapes animations
[".morphshapePrime", ".morphshapeCard", ".morphshapeFooter"].forEach(
  (selector) => {
    const t = gsap.timeline({
      scrollTrigger: {
        trigger: selector,
        start: "top 80px",
        end: "80px top",
        scrub: true,
      },
    });
    t.to(selector, { borderRadius: "0%", duration: 5, ease: "linear" });
  }
);