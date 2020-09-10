// Class definition

var KTCkeditorDocument = (function () {
  // Private functions
  var demos = function () {
    $("[data-switch=true]").bootstrapSwitch();
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

    DecoupledEditor.create(document.querySelector("#kt-ckeditor-2"), {
      heading: {
        options: [
          {
            model: "paragraph",
            title: "Paragraph",
            class: "ck-heading_paragraph",
          },
          {
            model: "heading1",
            view: "h1",
            title: "Heading 1",
          },
          {
            model: "heading2",
            view: "h2",
            title: "Heading 2",
          },
          {
            model: "heading3",
            view: "h3",
            title: "Heading 3",
          },
          {
            model: "heading4",
            view: "h4",
            title: "Heading 4",
          },
        ],
      },
      fontColor: {
        colors: [
          {
            color: "hsl(0, 0%, 0%)",
            label: "Black",
          },
          {
            color: "hsl(0, 0%, 30%)",
            label: "Dim grey",
          },
          {
            color: "hsl(0, 0%, 60%)",
            label: "Grey",
          },
          {
            color: "hsl(0, 0%, 90%)",
            label: "Light grey",
          },
          {
            color: "hsl(0, 0%, 100%)",
            label: "White",
            hasBorder: true,
          },
        ],
      },
      fontBackgroundColor: {
        colors: [
          {
            color: "hsl(0, 75%, 60%)",
            label: "Red",
          },
          {
            color: "hsl(30, 75%, 60%)",
            label: "Orange",
          },
          {
            color: "hsl(60, 75%, 60%)",
            label: "Yellow",
          },
          {
            color: "hsl(90, 75%, 60%)",
            label: "Light green",
          },
          {
            color: "hsl(120, 75%, 60%)",
            label: "Green",
          },
        ],
      },
    })
      .then((editor) => {
        const toolbarContainer = document.querySelector(
          "#kt-ckeditor-2-toolbar"
        );
        toolbarContainer.appendChild(editor.ui.view.toolbar.element);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return {
    // public functions
    init: function () {
      demos();
    },
  };
})();

// Initialization
jQuery(document).ready(function () {
  KTCkeditorDocument.init();
});
