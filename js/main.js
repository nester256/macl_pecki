$(function () {
  $("input[type=tel]").mask("9(999) 999-9999");
});

$(function () {
  setTimeout(function () {
    $("#sutki24").show();
    setInterval(function () {
      $("#sutki24").toggle();
    }, 5000);
  }, 30000);
});

$(function () {
  AOS.init({ offset: 100, duration: 1000, easing: "ease-out-quad", once: !0 });
  window.addEventListener("load", AOS.refresh);
});
