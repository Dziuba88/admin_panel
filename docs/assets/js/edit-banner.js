var KTBootstrapSwitch = (function () {
  var initPage = function () {
    var pageImg = new KTImageInput("kt_image_1");
    pageImg.on("cancel", function (imageInput) {
      swal.fire({
        title: "Image successfully canceled !",
        type: "success",
        buttonsStyling: false,
        confirmButtonText: "Awesome!",
        confirmButtonClass: "btn btn-primary",
      });
    });
    pageImg.on("change", function (imageInput) {
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
    // public functions
    init: function () {
      initPage();
    },
  };
})();

jQuery(document).ready(function () {
  KTBootstrapSwitch.init();
});
