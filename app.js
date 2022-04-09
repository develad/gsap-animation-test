let tl = new gsap.timeline({ defaults: { ease: Circ.easeOut } });

let cta = document.querySelector(".cta");

const player = document.querySelector(".lottie");

tl.paused(true);

tl.to(".seq", { y: 40, opacity: 0, stagger: 0.05 });
tl.to(".form-container", { opacity: 0 }, "-=0.4");
tl.to("h2", { opacity: 1, y: 20, duration: 2 }, "+=1");

cta.addEventListener("click", () => {
  tl.play();
  setTimeout(() => {
    player.play();
  }, 2000);
});
