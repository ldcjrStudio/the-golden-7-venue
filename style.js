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

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("slides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }

// PHOTO MODAL

// const photos = document.querySelector("#photos a");

// function prepareLinks(actualLinks) {
//   const allPictures = document.getElementsByTagName("a");
//   const modal = document.querySelector("#photos .modal");
//   const modalContent = document.querySelector("#photos .modal-content");
//   const close = document.querySelector("#photos .modal-close");
//   for (let i = 0; i < allPictures.length; i++) {
//     let thisLink = allPictures[i];
//     let source = thisLink.getAttribute("href");

//     if (thisLink.getAttribute("class") == "imgLink") {
//       console.log(source);

//       thisLink.addEventListener("click", function () {
//         preventDefault();
//       });
//     }
//   }
// }

// window.onload = prepareLinks();

// const allPictures = document.getElementsByTagName("a");
// const modal = document.querySelector("#photos .modal");
// const modalContent = document.querySelector("#photos .modal-content");
// const close = document.querySelector("#photos .modal-close");

// console.log(allPictures);

// for (let i = 0; i < allPictures.length; i++) {
//   let thisLink = allPictures[i];
//   let source = thisLink.getAttribute("href");
//   if (thisLink.getAttribute("class") == "imgLink") {
//     thisLink.onclick = function (source) {
//       modal.style.display = "block";

//       modalContent.innerHTML = source;
//     };
//   }
// }

// const modal = document.querySelector("#photos .modal");
// const modalContent = document.querySelector("#photos .modal-content");
// const close = document.querySelector("#photos .modal-close");

// photos.addEventListener("click", function (event) {
//   event.preventDefault();

//   if ((modal.style.display = "none")) {
//     modal.style.display = "block";

//     const content = this.innerHTML;

//     modalContent.innerHTML = content;
//   } else {
//     modal.style.display = "none";
//   }
// });

// close.addEventListener("click", function () {
//   modal.style.display = "none";
// });
