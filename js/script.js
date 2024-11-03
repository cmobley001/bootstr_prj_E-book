function userScroll() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-dark");
      navbar.classList.add("sticky-dark");
    } else {
      navbar.classList.remove("bg-dark");
      navbar.classList.remove("sticky-dark");
    }
  });
}

// load scroll function when DOM is active
document.addEventListener("DOMContentLoaded", userScroll);
