var page = (function () {
  const initPage = function () {
    $(".kt-selectpicker").selectpicker();
    $("[data-switch=true]").bootstrapSwitch();
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
