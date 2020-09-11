var page = (function () {
  const mediaItem = document.querySelectorAll(".image-input");

  const uploaderInit = function (id) {
    const image = new KTImageInput(id);
    const emptyImage = "url(assets/media/noimage.jpg)";

    image.on("cancel", function (id) {
      swal.fire({
        title: "Image successfully canceled !",
        type: "success",
        buttonsStyling: false,
        confirmButtonText: "Awesome!",
        confirmButtonClass: "btn btn-primary font-weight-bold",
      });
    });

    image.on("change", function (id) {
      image.element.style.removeProperty("background-image");

      swal.fire({
        title: "Image successfully changed !",
        type: "success",
        buttonsStyling: false,
        confirmButtonText: "Awesome!",
        confirmButtonClass: "btn btn-primary font-weight-bold",
      });
    });

    image.on("remove", function (id) {
      image.element.style.backgroundImage = emptyImage;
      swal.fire({
        title: "Image successfully removed !",
        type: "error",
        buttonsStyling: false,
        confirmButtonText: "Got it!",
        confirmButtonClass: "btn btn-primary font-weight-bold",
      });
    });
  };

  const initPage = function () {
    mediaItem.forEach((inp) => {
      const id = inp.id;
      uploaderInit(id);
    });

    $("#repeater").repeater({
      initEmpty: false,
      show: function () {
        const postfix = $.now();
        const imageUploader = $(this).find(".image-input");
        const tempID = imageUploader.attr("id") + "-" + postfix;
        imageUploader.attr("id", tempID);
        imageUploader.find(".image-input-wrapper").attr("style", "");

        uploaderInit(tempID);
        $(this).slideDown();
      },
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
