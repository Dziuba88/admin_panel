var KTBootstrapSwitch = (function () {
  var demos = function () {
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
  };

  return {
    init: function () {
      demos();
    },
  };
})();

jQuery(document).ready(function () {
  KTBootstrapSwitch.init();
});
