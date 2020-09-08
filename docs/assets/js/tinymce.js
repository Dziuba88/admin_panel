var KTTinymce = (function () {
  // Private functions
  var demo = function () {
    tinymce.init({
      selector: "#kt-tinymce-4",
      menubar: false,
      toolbar: [
        "styleselect fontselect fontsizeselect",
        "undo redo | cut copy paste | bold italic | link image | alignleft aligncenter alignright alignjustify",
        "bullist numlist | outdent indent | blockquote subscript superscript | advlist | autolink | lists charmap | print preview |  code",
      ],
      plugins: "advlist autolink link image lists charmap print preview code",
    });
  };

  return {
    // public functions
    init: function () {
      demo();
    },
  };
})();

// Initialization
jQuery(document).ready(function () {
  KTTinymce.init();
});
