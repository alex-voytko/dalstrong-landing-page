new Swiper(".section-series-slider .swiper", {
  slidesPerView: "auto",
  spaceBetween: 3,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breapoints: {
    1024: {
      loop: true,
    },
  },
});

new Swiper(".section-signature-collaborations .swiper", {
  slidesPerView: "auto",
  spaceBetween: 10,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    1024: {
      spaceBetween: 20,
    },
  },
});

new Swiper(".section-collections-slider .swiper", {
  slidesPerView: "auto",
  spaceBetween: 10,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    1024: {
      loop: true,
    },
  },
});

const refs = {
  btnSwitchers: document.querySelectorAll(".js-switch"),
  scrollDownBtn: document.getElementById("scroll-down-btn"),
  signatureCollaborationSection: document.querySelector(
    "section.section-signature-collaborations"
  ),
};

refs.btnSwitchers.forEach((el) => {
  el.addEventListener("click", (e) => {
    const btnRef = e.target.closest("button");
    if (btnRef) {
      if (!btnRef.classList.contains("active")) {
        for (const child of el.children) {
          if (child.classList.contains("active")) {
            child.classList.remove("active");
          }
        }
        btnRef.classList.add("active");
      }
    }
  });
});
