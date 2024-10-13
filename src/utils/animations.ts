import { gsap } from "gsap";

export const slowEase = "slow(0.3,0.3,false)";

export const slideIn = (selector: string, delay: number = 0) => {
  gsap.fromTo(
    selector,
    { y: 75 },
    { y: 0, duration: 0.7, ease: slowEase, delay }
  );
};

export const slideInWithFade = (selector: string, delay: number = 0) => {
  gsap.fromTo(
    selector,
    { y: 75, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7, ease: slowEase, delay }
  );
};
