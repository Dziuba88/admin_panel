var page = (function () {
  const initPage = function () {
    $("[data-switch=true]").bootstrapSwitch();
    $(".selectpicker").selectpicker();
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
