// Class definition

var editMenu = (function () {
  // Private functions
  var initFn = function () {
    $(".dd").nestable({ maxDepth: 3 });
    $(".dd").nestable("collapseAll");

    $("[data-switch=true]").bootstrapSwitch();
  };

  return {
    // public functions
    init: function () {
      initFn();
    },
  };
})();

// Initialization
jQuery(document).ready(function () {
  editMenu.init();
});
