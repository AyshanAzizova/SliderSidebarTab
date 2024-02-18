let ham = document.querySelector(".ham")
let tabUl = document.querySelector(".tabUl")
ham.addEventListener("click", () => {
    let navBar = document.querySelector(".navBar")
    let ul = document.querySelector("ul")
    navBar.style.height = "240px"
    ul.style.opacity = "1"

})

const header = document.getElementById("header")
const stickyStart = 200;
function stickyNavbar() {
    if (window.pageYOffset > stickyStart) {
        header.classList.add("sticky");
    }
    else{
        header.classList.remove("sticky");
    }
}
window.onscroll = function () {
    stickyNavbar();
}

// slider
let slideIndex = 0;

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.querySelectorAll('.slide');
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
  


function Showtab(tabId) {
    const tabs = document.querySelectorAll(".cards")
    tabs.forEach(tab => {
        tab.style.display = "none"
    })
    const selectedTab = document.getElementById(tabId)
    selectedTab.style.display = "flex"

}
document.getElementById("tab1Btn").addEventListener("click", () => {
    Showtab('tab1')
})
document.getElementById("tab2Btn").addEventListener("click", () => {
    Showtab('tab2')
})
document.getElementById("tab3Btn").addEventListener("click", () => {
    Showtab('tab3')
})