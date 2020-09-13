var page = (function () {
  const initPage = function () {
    $("[data-switch=true]").bootstrapSwitch();
    $(".selectpicker").selectpicker();
    var logoImg = new KTImageInput("kt_image_1");
    logoImg.on("cancel", function (logoImg) {
      swal.fire({
        title: "Image successfully canceled !",
        type: "success",
        buttonsStyling: false,
        confirmButtonText: "Awesome!",
        confirmButtonClass: "btn btn-primary",
      });
    });
    logoImg.on("change", function (logoImg) {
      swal.fire({
        title: "Image successfully changed !",
        type: "success",
        buttonsStyling: false,
        confirmButtonText: "Awesome!",
        confirmButtonClass: "btn btn-primary",
      });
    });
    var faviconImg = new KTImageInput("kt_image_2");
    faviconImg.on("cancel", function (faviconImg) {
      swal.fire({
        title: "Image successfully canceled !",
        type: "success",
        buttonsStyling: false,
        confirmButtonText: "Awesome!",
        confirmButtonClass: "btn btn-primary",
      });
    });
    faviconImg.on("change", function (faviconImg) {
      swal.fire({
        title: "Image successfully changed !",
        type: "success",
        buttonsStyling: false,
        confirmButtonText: "Awesome!",
        confirmButtonClass: "btn btn-primary",
      });
    });
  };

  return {
    init: function () {
      initPage();
    },
  };
})();

jQuery(document).ready(function () {
  page.init();
});
