// 헤더 메뉴 열고 닫기
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("nav ul");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navMenu.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navMenu.classList.remove("open");
    menuOpen = false;
  }
});

// 스크롤 이벤트 핸들러
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
