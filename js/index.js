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
      if (e.target.closest(".section-banner-switch-js")) {
        const seriesRefs = document.querySelectorAll(
          ".section-banner-switch-js .img-container"
        );
        const btns = document.querySelectorAll(
          ".section-banner-switch-js .btn-switcher-container button"
        );
        for (let i = 0; i < btns.length; i++) {
          if (btns[i].classList.contains("active")) {
            seriesRefs[i].classList.add("active");
          } else {
            seriesRefs[i].classList.remove("active");
          }
        }
      }
    }
  });
});
