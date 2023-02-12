import debounce from "./resources/javascript/debounce.js";

const overlay = document.querySelector("#video-overlay");
overlay.style.opacity = "0.7";

/* hide header when scrolling down */
let prevScrollPos = window.pageYOffset;
window.addEventListener(
  "scroll",
  debounce(
    () => {
      let currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 100) {
        if (prevScrollPos > currentScrollPos) {
          //document.querySelector("header").style.top = "0";
        } else {
          //document.querySelector("header").style.top = "-200px";
        }
      }
      prevScrollPos = currentScrollPos;
    },
    20,
    { leading: true, maxWait: 20, trailing: true }
  )
);

document.querySelector("#hero img").style.opacity = "1";

// vertically Center hero img for mobile with browser bars //

const heroImg = document.querySelector("#hero img");
const innerHeight = window.innerHeight;
const heroImgHeight = heroImg.clientHeight;
const heroImgMargin = (innerHeight - heroImgHeight) / 2;
heroImg.style.marginTop = `${heroImgMargin}px`;

// CONTACT FORM //

const contactButtons = document.querySelectorAll(".card button");
const form = document.querySelector("#contact-modal");
const formCloseButton = document.querySelector("#contact-form-close");
// const name = document.querySelector("#name");
// const email = document.querySelector("#email");
// const message = document.querySelector("#message");
// const submit = document.querySelector("#submit");

contactButtons.forEach((button) => {
  button.addEventListener("click", () => {
    form.classList.add("show");
    setTimeout(() => {
      form.style.opacity = "1";
    }, 0);
  });
});

formCloseButton.addEventListener("click", () => {
  form.classList.remove("show");
  form.style.opacity = "0";
});

form.addEventListener("click", (e) => {
  if (e.target === form) {
    form.classList.remove("show");
    form.style.opacity = "0";
  }
});

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   checkInputs();
// });

// function checkInputs() {
//   const nameValue = name.value.trim();
//   const emailValue = email.value.trim();
//   const messageValue = message.value.trim();

//   if (nameValue === "") {
//     setErrorFor(name, "Name cannot be blank");
//   } else {
//     setSuccessFor(name);
//   }

//   if (emailValue === "") {
//     setErrorFor(email, "Email cannot be blank");
//   } else if (!isEmail(emailValue)) {
//     setErrorFor(email, "Not a valid email");
//   } else {
//     setSuccessFor(email);
//   }

//   if (messageValue === "") {
//     setErrorFor(message, "Message cannot be blank");
//   } else {
//     setSuccessFor(message);
//   }
// }

// function setErrorFor(input, message) {
//   const formControl = input.parentElement;
//   const small = formControl.querySelector("small");
//   formControl.className = "form-control error";
//   small.innerText = message;
// }

// function setSuccessFor(input) {
//   const formControl = input.parentElement;
//   formControl.className = "form-control success";
// }

// function isEmail(email) {
//   return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
// }

// END CONTACT FORM //