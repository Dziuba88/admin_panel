var KTBootstrapSwitch = (function () {
  var states = [
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
    var avatar1 = new KTImageInput("kt_image_1");

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

    $("#kt_typeahead_1, #kt_typeahead_2").typeahead(
      { hint: true, highlight: true, minLength: 1 },
      { name: "states", source: substringMatcher(states) }
    );

    $("#kt_repeater_1").repeater({
      initEmpty: false,
      show: function () {
        $(this).slideDown();
      },
      hide: function (deleteElement) {
        $(this).slideUp(deleteElement);
      },
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
