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

new Swiper(".section-signature .swiper", {
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

const $btnSwitchers = $(".js-switch");

$btnSwitchers.click(function (e) {
  const $btnRef = $(e.target).closest("button");

  if ($btnRef.length) {
    const $btnContainerRef = $btnRef.closest(".js-switch");
    if (!$btnRef.hasClass("active")) {
      $btnContainerRef.children().each(function (_, el) {
        if ($(el).hasClass("active")) {
          $(el).removeClass("active");
        }
      });
      $btnRef.addClass("active");
    }

    const $closestBannerSwitchContainer = $(e.target).closest(
      ".section-banner-switch-js"
    );
    if ($closestBannerSwitchContainer.length) {
      const $seriesRefs = $closestBannerSwitchContainer.find(".img-container");

      $btnContainerRef.children().each(function (index, el) {
        if ($(el).hasClass("active")) {
          $seriesRefs.eq(index).addClass("active");
        } else {
          $seriesRefs.eq(index).removeClass("active");
        }
      });
    }
  }
});
