// FAQ ACCORDION

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// const animatedTags = document.querySelectorAll(
//   "h2, h3, p, section img, a.button"
// );

// // fade out on load
// animatedTags.forEach((tag) => {
//   tag.style.opacity = 0;
// });

// const fadeIn = function () {
//   // look through all the animated tags and see
//   // with the getBoundingClientRect if it's in the window

//   let delay = 0.2;

//   animatedTags.forEach((tag) => {
//     const tagTop = tag.getBoundingClientRect().top;
//     const tagBottom = tag.getBoundingClientRect().bottom;

//     if (tagTop < window.innerHeight && tagBottom > 0) {
//       tag.style.animation = `fadein 1s ${delay}s both`;
//       delay = delay + 0.2;
//     } else {
//       tag.style.opacity = 0;
//       tag.style.animation = "";
//     }
//   });
// };

// // on load, run fadeIn
// fadeIn();

// // on scroll, run fadeIn
// document.addEventListener("scroll", function () {
//   fadeIn();
// });

// // on browser resize, run fadeIn
// window.addEventListener("resize", function () {
//   fadeIn();
// });
