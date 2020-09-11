var page = (function () {
  const initPage = function () {
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
