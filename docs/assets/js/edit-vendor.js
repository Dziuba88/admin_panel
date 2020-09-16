"use strict";
var pageScripts = (function () {
  const mediaItem = document.querySelectorAll(".image-input");
  const uploaderInit = function (id) {
    const image = new KTImageInput(id);
    const emptyImage = "url(assets/media/noimage.jpg)";

    image.on("cancel", function (id) {
      swal.fire({
        title: "Image successfully canceled !",
        type: "success",
        buttonsStyling: false,
        confirmButtonText: "Awesome!",
        confirmButtonClass: "btn btn-primary font-weight-bold",
      });
    });

    image.on("change", function (id) {
      image.element.style.removeProperty("background-image");

      swal.fire({
        title: "Image successfully changed !",
        type: "success",
        buttonsStyling: false,
        confirmButtonText: "Awesome!",
        confirmButtonClass: "btn btn-primary font-weight-bold",
      });
    });

    image.on("remove", function (id) {
      image.element.style.backgroundImage = emptyImage;
      swal.fire({
        title: "Image successfully removed !",
        type: "error",
        buttonsStyling: false,
        confirmButtonText: "Got it!",
        confirmButtonClass: "btn btn-primary font-weight-bold",
      });
    });
  };
  const initScript = function () {
    uploaderInit("brand-img");
    uploaderInit("company-poster");
    $("[data-switch=true]").bootstrapSwitch();
    $("#delivery-repeater").repeater({
      show: function () {
        $(this).slideDown();
      },
      hide: function (deleteElement) {
        $(this).slideUp(deleteElement);
      },
    });

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

    $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
      //e.target; // newly activated tab
      const href = $(e.target).attr("href");

      if (href === "#locations") {
        ymaps.ready(initMap);
      }
    });

    function initMap() {
      var map, myPlacemark;

      map = new ymaps.Map("map", { center: [47.000346, 28.85762], zoom: 15 });

      map.events.add("click", function (e) {
        var coords = e.get("coords");
        if (myPlacemark) {
          myPlacemark.geometry.setCoordinates(coords);
        } else {
          myPlacemark = createPlacemark(coords);
          map.geoObjects.add(myPlacemark);
          myPlacemark.events.add("dragend", function () {
            getAddress(myPlacemark.geometry.getCoordinates());
          });
        }
        getAddress(coords);
      });

      function createPlacemark(coords) {
        return new ymaps.Placemark(
          coords,
          { iconCaption: "поиск..." },
          { preset: "islands#geolocationIcon", draggable: true }
        );
      }

      function getAddress(coords) {
        myPlacemark.properties.set("iconCaption", "поиск...");

        ymaps.geocode(coords).then(function (res) {
          var firstGeoObject = res.geoObjects.get(0);
          myPlacemark.properties.set({
            iconCaption: [
              firstGeoObject.getLocalities().length
                ? firstGeoObject.getLocalities()
                : firstGeoObject.getAdministrativeAreas(),
              firstGeoObject.getThoroughfare() || firstGeoObject.getPremise(),
            ]
              .filter(Boolean)
              .join(", "),
            balloonContent: firstGeoObject.getAddressLine(),
          });

          document.querySelector("#placemark").innerHTML = `
          <ul>
            <li>coord: [${coords[0]}, ${coords[1]}]</li>
            <li>address: ${myPlacemark.properties.get("balloonContent")}]</li>
          </ul>
          `;
        });
      }
    }
  };

  return {
    init: function () {
      initScript();
    },
  };
})();

jQuery(document).ready(function () {
  pageScripts.init();
});
