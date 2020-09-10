var KTBootstrapSwitch = (function () {
  var demos = function () {
    $(".kt-selectpicker").selectpicker();
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
