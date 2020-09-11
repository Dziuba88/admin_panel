var page = (function () {
  const initPage = function () {
    $(".select2").select2({ placeholder: "Select category" });
    $("[data-switch=true]").bootstrapSwitch();

    tinymce.init({
      selector: "#kt-tinymce-ru",
      menubar: false,
      toolbar: [
        "styleselect fontselect fontsizeselect",
        "undo redo | cut copy paste | bold italic | link image | alignleft aligncenter alignright alignjustify",
        "bullist numlist | outdent indent | blockquote subscript superscript | advlist | autolink | lists charmap | print preview |  code",
      ],
      plugins: "advlist autolink link image lists charmap print preview code",
    });

    tinymce.init({
      selector: "#kt-tinymce-ro",
      menubar: false,
      toolbar: [
        "styleselect fontselect fontsizeselect",
        "undo redo | cut copy paste | bold italic | link image | alignleft aligncenter alignright alignjustify",
        "bullist numlist | outdent indent | blockquote subscript superscript | advlist | autolink | lists charmap | print preview |  code",
      ],
      plugins: "advlist autolink link image lists charmap print preview code",
    });

    tinymce.init({
      selector: "#kt-tinymce-en",
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
    init: function () {
      initPage();
    },
  };
})();

jQuery(document).ready(function () {
  page.init();
});
