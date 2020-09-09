var KTBootstrapSwitch = (function () {
  var states = [
    "-- NONE --",
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  var substringMatcher = function (strs) {
    return function findMatches(q, cb) {
      var matches, substringRegex;
      matches = [];
      substrRegex = new RegExp(q, "i");
      $.each(strs, function (i, str) {
        if (substrRegex.test(str)) {
          matches.push(str);
        }
      });
      cb(matches);
    };
  };

  var demos = function () {
    var image1 = new KTImageInput("kt_image_1");

    const mediaItem = document.querySelectorAll(".media-item");
    mediaItem.forEach((imageInput) => {
      const image = new KTImageInput(imageInput);

      image.on("cancel", function (imageInput) {
        swal.fire({
          title: "Image successfully canceled !",
          type: "success",
          buttonsStyling: false,
          confirmButtonText: "Awesome!",
          confirmButtonClass: "btn btn-primary font-weight-bold",
        });
      });

      image.on("change", function (imageInput) {
        swal.fire({
          title: "Image successfully changed !",
          type: "success",
          buttonsStyling: false,
          confirmButtonText: "Awesome!",
          confirmButtonClass: "btn btn-primary font-weight-bold",
        });
      });

      image.on("remove", function (imageInput) {
        swal.fire({
          title: "Image successfully removed !",
          type: "error",
          buttonsStyling: false,
          confirmButtonText: "Got it!",
          confirmButtonClass: "btn btn-primary font-weight-bold",
        });
      });
    });

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

    $(".kt-selectpicker").selectpicker();
    $("[data-switch=true]").bootstrapSwitch();

    $(
      "#kt_typeahead_1, #kt_typeahead_2, #kt_typeahead_3, .typeahead-input"
    ).typeahead(
      { hint: true, highlight: true, minLength: 1 },
      { name: "states", source: substringMatcher(states) }
    );

    $("#kt_repeater_1").repeater({
      initEmpty: false,

      defaultValues: {
        "text-input": "foo",
      },

      show: function () {
        $(this).slideDown();
      },

      hide: function (deleteElement) {
        $(this).slideUp(deleteElement);
      },
    });

    $("#kt_repeater_2").repeater({
      initEmpty: false,

      show: function () {
        $(this).slideDown();
      },

      hide: function (deleteElement) {
        $(this).slideUp(deleteElement);
      },
    });

    $("#kt_repeater_3").repeater();

    $("#kt_touchspin_1, #kt_touchspin_2").TouchSpin({
      buttondown_class: "btn btn-light-danger",
      buttonup_class: "btn btn-light-success",
      min: 0,
      max: 1000,
      step: 0.1,
      decimals: 2,
      boostat: 5,
      maxboostedstep: 10,
    });
    $("#kt_touchspin_3, #kt_touchspin_4").TouchSpin({
      buttondown_class: "btn btn-light-danger",
      buttonup_class: "btn btn-light-success",
      min: 0,
      max: 10000,
      step: 1,
      decimals: 0,
    });
    $("#kt_select_1").select2({
      placeholder: "Select categories",
    });
    $("#kt_select_2").select2({
      placeholder: "Select products",
    });
  };

  return {
    // public functions
    init: function () {
      demos();
    },
  };
})();

jQuery(document).ready(function () {
  KTBootstrapSwitch.init();
});
