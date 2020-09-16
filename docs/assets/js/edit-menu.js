// Class definition

var editMenu = (function () {
  // Private functions
  var initFn = function () {
    $("[data-switch=true]").bootstrapSwitch();

    var nestedSortables = [].slice.call(
      document.querySelectorAll(".nested-sortable")
    );

    for (var i = 0; i < nestedSortables.length; i++) {
      new Sortable(nestedSortables[i], {
        handle: ".handle",
        group: "nested",
        animation: 150,
        fallbackOnBody: true,
        swapThreshold: 0.65,
      });
    }
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
