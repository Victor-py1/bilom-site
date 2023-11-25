// toggling mobile navigation
const toggleButton = document.querySelector(".menu");

toggleButton.addEventListener("click", () => {
  document.querySelector("header nav").classList.toggle("visible");
  toggleButton.classList.toggle("close");
});

// change background of header when scrolling
const header = document.querySelector("header");
const banner = document.querySelector("section.opening");

const bannerObserver = new IntersectionObserver(
  (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      header.classList.remove("is-scrolling");
    } else {
      header.classList.toggle("is-scrolling");
    }
  },
  {
    threshold: 0.85,
  }
);
bannerObserver.observe(banner);

// displaying reservation modal
const reservationBtns = [...document.querySelectorAll(".reservation")];
const closeModalBtn = document.querySelector(".close");

reservationBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector("body").classList.add("showing");
  });
});
closeModalBtn.addEventListener("click", () => {
  document.querySelector("body").classList.remove("showing");
});
