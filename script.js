// ------------- SETTINGS --------------
const desktopDistanceMultiplayer = 3;
const mobileDistanceMultiplayer = 6;
const isMobile = $(window).width() <= 767;

// rings configs
const roundRingMobileSettings = {
  opacity: 1,
  xPercent: 50,
  ease: "back",
};
const animationDuration = 4;
const nextRingDelay = 0;
const numberOfRingsBetweenText = 3;
const textFreezeDuration = animationDuration - 1;
const yPosition = 40;
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
let logoTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".dp_top_section",
    start: 0,
    pin: true,
    end: () => window.innerHeight * 1.2,
    scrub: 1,
  },
});

// ------ first screen animations ------ //
logoTl.fromTo(
  ".digital_prime_header",
  { yPercent: 0, position: "absolute", height: "100%", delay: 0.5 },
  {
    yPercent: 0,
    //OVO SI MENJAO, TO TREBA NAZAD fixed
    position: "flex",
    height: "56px",
    duration: 1,
    backgroundColor: "black",
  }
);
logoTl.fromTo(
  ".digital_prime_logo_container",
  { xPercent: 0, yPercent: 45, scale: 1, delay: 1 },
  { yPercent: 0, xPercent: 0, scale: 0.6, duration: 1 },
  "-=1"
);
logoTl.fromTo(
  ".digital_prime_logo_container",
  { opacity: 1, delay: 1 },
  { opacity: 1, duration: 1 },
  "-=0.5"
);
logoTl.fromTo(
  ".dp-section1-content",
  { top: "50%", yPercent: -50, scale: 0.5, opacity: 0 },
  { top: "50%", yPercent: -50, opacity: 1, scale: 1, duration: 1 },
  "-=1"
);
logoTl.fromTo(
  ".dp-section1-content",
  { top: "50%", yPercent: -50, opacity: 1, scale: 1, delay: 2 },
  { top: "50%", yPercent: -50, opacity: 1, scale: 0.9, duration: 1 }
);

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
};

if (!isMobile) {
  initializeDesktopAnimations();
} else {
  initializeMobileRingAnimations();
}

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