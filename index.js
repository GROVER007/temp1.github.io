const tl1 = gsap.timeline({ defaults: { ease: "power1.out" } });

tl1.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl1.to(".slider", { y: "-100%", duration: 1.5, delay: 0.8 });
tl1.to(".intro", { y: "-100%", duration: 1 }, "-=1");



let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".front-page",
      start: "top",
      end: "100%",
      scrub: "true",
      pin: true,
    },
  });
  
  tl.fromTo(
    ".container",
    {
      clipPath: "circle(0%)",
    },
    {
      clipPath: "circle(75%)",
      duration: 2,
    }
  );
  