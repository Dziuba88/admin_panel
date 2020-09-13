"use strict";

var PageScripts = (function () {
  // Private functions

  // demo initializer
  var initScript = function () {
    const rating = document.querySelectorAll("[data-rating]");
    rating.forEach((list) => {
      const count = list.dataset.rating;
      const stars = list.querySelectorAll(".la");
      stars.forEach((star, idx) => {
        console.log(count, idx);
        count > idx
          ? star.classList.add("text-success")
          : star.classList.add("text-muted");
      });
    });
  };

  return {
    init: function () {
      initScript();
    },
  };
})();

jQuery(document).ready(function () {
  PageScripts.init();
});
