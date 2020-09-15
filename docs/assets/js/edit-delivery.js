var page = (function () {
  const initPage = function () {
    $("[data-switch=true]").bootstrapSwitch();
    $(".selectpicker").selectpicker();
    $("#kt_repeater").repeater({
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
      initPage();
    },
  };
})();

jQuery(document).ready(function () {
  page.init();
});
