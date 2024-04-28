import "./style.scss";
import gsap from "gsap";

const avatars = document.querySelectorAll(".avatar");
const texts = document.querySelectorAll(".text");
const images = document.querySelectorAll(".image");

avatars.forEach((avatar, index) => {
  avatar.addEventListener("click", () => {
    gsap.to(texts, {
      duration: 1,
      y: `-${index * 100}%`,
      opacity: 0,
      ease: "power4.out",
    });
    gsap.to(texts[index], {
      duration: 1,
      opacity: 1,
      ease: "power4.out",
    });
    gsap.to(avatars, {
      duration: 1,
      width: 96,
      height: 96,
      ease: "power4.out",
    });
    gsap.to(avatars[index], {
      duration: 1,
      width: 128,
      height: 128,
      ease: "power4.out",
    });
    gsap.to(images, {
      duration: 1,
      y: `-${index * 100}%`,
      ease: "power4.out",
    });
  });
});
