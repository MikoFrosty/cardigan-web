import debounce from "./resources/javascript/debounce.js";

/* hide header when scrolling down */
let prevScrollPos = window.pageYOffset;
window.addEventListener(
  "scroll",
  debounce(
    () => {
      let currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 100) {
        if (prevScrollPos > currentScrollPos) {
          document.querySelector("header").style.top = "0";
        } else {
          document.querySelector("header").style.top = "-200px";
        }
      }
      prevScrollPos = currentScrollPos;
    },
    20,
    { leading: true, maxWait: 20, trailing: true }
  )
);
