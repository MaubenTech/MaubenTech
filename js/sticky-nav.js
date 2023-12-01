$(function () {
  window.onscroll = function () {
    const mediaQuery = window.matchMedia("(max-width: 1199px)");

    if (!mediaQuery.matches) {
      if (
        document.body.scrollTop >= 100 ||
        document.documentElement.scrollTop >= 100
      ) {
        $("nav").css("top", "-80px");
      } else {
        $("nav").css("top", "45px");
      }

      if (
        document.body.scrollTop >= 400 ||
        document.documentElement.scrollTop >= 400
      ) {
        // $("nav .logo img").attr("src", "images/logo_black.png");
        $("nav .logo img").attr("src", "images/mauben-icon-dt-svg.svg");
        $("nav").addClass("sticky");
      } else {
        $("nav .logo img").attr("src", "images/mauben-icon-lt.svg");
        $("nav").removeClass("sticky");
      }
    }
  };
});
