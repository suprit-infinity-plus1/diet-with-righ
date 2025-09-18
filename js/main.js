/*-----------------------------------------------------------------------------------

    Theme Name: Diet With Right
    Description: Nutrition Health and Diet HTML Template
    Author: Website Design Templates
    Version: 2.1
        
    ---------------------------------- */

!(function (e) {
  "use strict";
  var t = e(window);
  e("#preloader").fadeOut("normall", function () {
    e(this).remove();
  }),
    t.on("scroll", function () {
      var s = t.scrollTop(),
        a = e(".navbar-brand img"),
        o = e(".navbar-brand.logodefault img");
      s <= 175
        ? (e("header").removeClass("scrollHeader").addClass("fixedHeader"),
          a.attr("src", "img/logos/logo-inner.png"),
          o.attr("src", "img/logos/create_logo_Diet_Wit-removebg-preview.png"))
        : (e("header").removeClass("fixedHeader").addClass("scrollHeader"),
          a.attr("src", "img/logos/create_logo_Diet_Wit-removebg-preview.png"),
          o.attr("src", "img/logos/create_logo_Diet_Wit-removebg-preview.png"));
    }),
    (() => {
      let t = () => {
        let t = document.documentElement.scrollTop,
          s =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight,
          a = Math.round((t / s) * 100),
          o = e(".scroll-top-percentage");
        o.css("background", `conic-gradient( #fec44a ${a}%, #57aa46 ${a}%)`),
          t > 100 ? o.addClass("active") : o.removeClass("active"),
          a < 96
            ? e("#scroll-value").text(`${a}%`)
            : e("#scroll-value").html('<i class="fa-solid fa-angle-up"></i>');
      };
      (window.onscroll = t),
        (window.onload = t),
        e(".scroll-top-percentage").on("click", function e() {
          document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
        });
    })(),
    e(".parallax,.bg-img").each(function (t) {
      e(this).attr("data-background") &&
        e(this).css(
          "background-image",
          "url(" + e(this).data("background") + ")"
        );
    }),
    e(".story-video").magnificPopup({ delegate: ".video", type: "iframe" }),
    e(".source-modal").magnificPopup({
      type: "inline",
      mainClass: "mfp-fade",
      removalDelay: 160,
    }),
    e(".form_date").datetimepicker({
      language: "en",
      weekStart: 1,
      todayBtn: 1,
      autoclose: 1,
      todayHighlight: 1,
      startView: 2,
      minView: 2,
      forceParse: 0,
    }),
    e(".form_time").datetimepicker({
      language: "en",
      weekStart: 1,
      todayBtn: 1,
      autoclose: 1,
      todayHighlight: 1,
      startView: 1,
      minView: 0,
      maxView: 1,
      forceParse: 0,
    }),
    0 !== e(".copy-clipboard").length &&
      (new ClipboardJS(".copy-clipboard"),
      e(".copy-clipboard").on("click", function () {
        var t = e(this);
        t.text(),
          t.text("Copied"),
          setTimeout(function () {
            t.text("Copy");
          }, 2e3);
      })),
    e(document).ready(function () {
      e(".service-carousel").owlCarousel({
        loop: !0,
        responsiveClass: !0,
        autoplay: !0,
        smartSpeed: 1500,
        nav: !1,
        dots: !0,
        center: !1,
        margin: 0,
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          992: { items: 2 },
          1200: { items: 3 },
        },
      }),
        e(".client-style1").owlCarousel({
          loop: !0,
          nav: !1,
          dots: !1,
          autoplay: !0,
          smartSpeed: 800,
          autoplayTimeout: 3e3,
          responsiveClass: !0,
          autoplayHoverPause: !1,
          responsive: {
            0: { items: 2, margin: 10 },
            481: { items: 2, margin: 15 },
            576: { items: 4, margin: 20 },
            992: { items: 5, margin: 30 },
            1200: { items: 6, margin: 50 },
          },
        }),
        e(".testimonial-style1").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          thumbs: !0,
          thumbsPrerendered: !0,
          smartSpeed: 1e3,
          nav: !1,
          dots: !1,
          center: !0,
          items: 1,
          margin: 0,
        }),
        e(".blog-client").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          thumbs: !0,
          thumbsPrerendered: !0,
          smartSpeed: 800,
          nav: !1,
          dots: !1,
          center: !0,
          items: 1,
          margin: 0,
        }),
        e(".certificate-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          smartSpeed: 1500,
          nav: !1,
          dots: !0,
          center: !1,
          margin: 15,
          responsive: {
            0: { items: 1, margin: 0 },
            768: { items: 2 },
            1200: { items: 3 },
          },
        }),
        e(".portfolio-details-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          smartSpeed: 800,
          nav: !1,
          dots: !0,
          center: !1,
          margin: 0,
          responsive: {
            0: { items: 1 },
            767: { items: 2 },
            768: { items: 2 },
            992: { items: 3 },
          },
        }),
        e(".portfolio-carousel1").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          smartSpeed: 1500,
          nav: !1,
          dots: !0,
          center: !1,
          margin: 20,
          responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 2 },
            1200: { items: 3 },
          },
        }),
        e(".testimonial-style2").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          smartSpeed: 1500,
          nav: !1,
          dots: !0,
          center: !1,
          margin: 0,
          responsive: {
            0: { items: 1 },
            768: { items: 1 },
            992: { items: 1 },
            1200: { items: 1 },
          },
        }),
        e(".testimonial-carousel1").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          smartSpeed: 1500,
          nav: !0,
          dots: !1,
          thumbs: !0,
          thumbsPrerendered: !0,
          center: !1,
          margin: 50,
          responsive: {
            0: { items: 1, margin: 0, nav: !1, thumbs: !1 },
            575: { items: 1, nav: !1, thumbs: !1 },
            768: { items: 1, nav: !1 },
            992: { items: 1 },
            1200: { items: 1 },
          },
        }),
        e(".testimonial-style4").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          smartSpeed: 1500,
          nav: !1,
          dots: !0,
          thumbs: !0,
          thumbsPrerendered: !0,
          center: !1,
          margin: 50,
          responsive: {
            0: { items: 1, margin: 0 },
            768: { items: 1 },
            992: { items: 1 },
            1200: { items: 1 },
          },
        }),
        e(".testimonial-style5").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          smartSpeed: 1500,
          nav: !1,
          dots: !0,
          thumbs: !0,
          thumbsPrerendered: !0,
          center: !1,
          margin: 90,
          responsive: {
            0: { items: 1, margin: 50, dots: !1 },
            575: { items: 1, dots: !1 },
            992: { items: 1, dots: !1 },
            1200: { items: 2 },
          },
        }),
        e(".featured-style").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          smartSpeed: 1500,
          nav: !1,
          dots: !1,
          thumbs: !0,
          thumbsPrerendered: !0,
          center: !0,
          margin: 30,
          responsive: {
            0: { items: 1, margin: 0 },
            576: { items: 2 },
            992: { items: 3 },
            1399: { items: 4 },
          },
        }),
        e(".client-style").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          smartSpeed: 1500,
          nav: !1,
          dots: !1,
          thumbs: !0,
          thumbsPrerendered: !0,
          center: !1,
          margin: 50,
          responsive: {
            0: { items: 2, margin: 0 },
            575: { items: 3 },
            991: { items: 4 },
            1200: { items: 4 },
          },
        }),
        e(".process-slider").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          smartSpeed: 1500,
          nav: !1,
          dots: !1,
          center: !1,
          margin: 0,
          responsive: {
            0: { items: 1 },
            575: { items: 2 },
            992: { items: 3 },
            1200: { items: 4 },
          },
        }),
        e(".service-slider").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          smartSpeed: 1500,
          nav: !1,
          dots: !1,
          center: !1,
          margin: 0,
          responsive: {
            0: { items: 1 },
            991: { items: 2 },
            1399: { items: 3 },
            1599: { items: 4 },
          },
        }),
        e(".slider-fade-02").owlCarousel({
          items: 1,
          loop: !0,
          dots: !1,
          margin: 0,
          nav: !1,
          navText: [
            "<i class='ti-angle-left'></i>",
            "<i class='ti-angle-right'></i>",
          ],
          autoplay: !0,
          smartSpeed: 1500,
          mouseDrag: !1,
          animateIn: "fadeIn",
          animateOut: "fadeOut",
          responsive: { 767: { nav: !1 }, 992: { nav: !0, dots: !1 } },
        }),
        e(".slider-fade").owlCarousel({
          items: 1,
          loop: !0,
          dots: !1,
          margin: 0,
          nav: !1,
          navText: [
            "<i class='ti-angle-left'></i>",
            "<i class='ti-angle-right'></i>",
          ],
          autoplay: !0,
          smartSpeed: 1500,
          mouseDrag: !1,
          animateIn: "fadeIn",
          animateOut: "fadeOut",
          responsive: { 767: { nav: !1 }, 992: { nav: !0, dots: !1 } },
        }),
        e(".owl-carousel").owlCarousel({
          items: 1,
          loop: !0,
          dots: !1,
          margin: 0,
          autoplay: !0,
          smartSpeed: 500,
        }),
        0 !== e(".horizontaltab").length &&
          e(".horizontaltab").easyResponsiveTabs({
            type: "default",
            width: "auto",
            fit: !0,
            tabidentify: "hor_1",
            activate: function (t) {
              var s = e(this),
                a = e("#nested-tabInfo");
              e("span", a).text(s.text()), a.show();
            },
          }),
        0 !== e(".verticaltab").length &&
          e(".verticaltab").easyResponsiveTabs({
            type: "vertical",
            width: "auto",
            fit: !0,
            closed: "accordion",
            tabidentify: "hor_1",
            activate: function (t) {
              var s = e(this),
                a = e("#nested-tabInfo2");
              e("span", a).text(s.text()), a.show();
            },
          }),
        e(".countdown").countdown({
          date: "01 Dec 2027 00:01:00",
          format: "on",
        }),
        e(".current-year").text(new Date().getFullYear()),
        e(".odometer").waypoint(
          function (t) {
            if ("down" === t) {
              let s = e(this.element).attr("data-count");
              e(this.element).html(s);
            }
          },
          { offset: "80%" }
        );
    }),
    e(document).ready(function () {
      e(".wlt-btn, .wlt-overlay-bg").on("click", function () {
        e(".wlt-overlay-bg").hasClass("active")
          ? e(".wlt-overlay-bg").animate({ opacity: "0" }, 500, function () {
              e(".wlt-overlay-bg").removeClass("active").hide();
            })
          : e(".wlt-overlay-bg")
              .addClass("active")
              .show()
              .animate({ opacity: "1" }, 500, function () {}),
          e(".wlt-sidebar-main").toggleClass("active");
      }),
        e(".wlt-sidebar-inner").scrollbar();
    }),
    t.on("load", function () {
      var t = e(".portfolio-gallery-isotope").isotope({});
      e(".filtering").on("click", "span", function () {
        var s = e(this).attr("data-filter");
        t.isotope({ filter: s });
      }),
        e(".filtering").on("click", "span", function () {
          e(this).addClass("active").siblings().removeClass("active");
        }),
        e(".portfolio-link").on("click", (e) => {
          e.stopPropagation();
        }),
        e(".portfolio-gallery,.portfolio-gallery-isotope").lightGallery();
    });
})(jQuery);
