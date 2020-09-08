"use strict";
// Class definition

var KTDatatableDataLocalDemo = (function () {
  // Private functions
  // demo initializer
  var demo = function () {
    const itemsCount = 18;

    function createData(count) {
      const data = [];
      for (let i = 0; i < count; i++) {
        data.push({
          ItemID: i,
          ItemImage: `assets/media/stock-600x600/img-${i + 1}.jpg`,
          ItemTitle: "Item Title " + i,
          ItemStock: Math.floor(Math.random() * 100) + 1,
          ItemPrice: (Math.random() * 100).toFixed(2),
          ItemStatus: i & 1 ? 1 : 2,
          Actions: null,
          PublishDate: Date.now() - i * 86400000,
          ItemCategory: "Category " + i,
        });
      }

      return data;
    }

    var dataJSONArray = createData(itemsCount);

    var datatable = $("#kt_datatable").KTDatatable({
      data: {
        type: "local",
        source: dataJSONArray,
        pageSize: 10,
      },
      layout: {
        scroll: false,
        footer: false,
      },
      sortable: true,
      pagination: true,
      columns: [
        {
          field: "ItemID",
          title: "#",
          sortable: false,
          width: 20,
          type: "number",
          selector: {
            class: "",
          },
          textAlign: "center",
        },
        {
          field: "ItemImage",
          title: "Image",
          sortable: false,
          width: 80,
          textAlign: "center",
          template: function (row) {
            return `<a href="" class=""><img src="${row.ItemImage}" class="img-thumbnail rounded img-fluid" alt="..."></a>`;
          },
        },
        {
          field: "ItemTitle",
          title: "Title",
          autoHide: false,
        },
        {
          field: "ItemCategory",
          title: "Category",
        },
        {
          field: "ItemStock",
          title: "In Stock",
          width: 80,
          textAlign: "center",
        },
        {
          field: "ItemPrice",
          title: "Price",
          template: function (row) {
            return `<strong>${row.ItemPrice}  mdl</strong>`;
          },
        },
        {
          field: "PublishDate",
          title: "Published",
          template: function (row) {
            const d = new Date(row.PublishDate);
            const m = [
              "Jan.",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ];
            return `${m[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
          },
        },
        {
          field: "ItemStatus",
          title: "Status",
          width: 160,
          template: function (row) {
            var status = {
              1: {
                title: "Published",
                class: " label-light-success",
              },
              2: {
                title: "Disabled",
                class: " label-light-danger",
              },
            };
            return (
              '<span class="label font-weight-bold label-lg ' +
              status[row.ItemStatus].class +
              ' label-inline">' +
              status[row.ItemStatus].title +
              "</span>"
            );
          },
        },
        {
          field: "Actions",
          title: "Actions",
          sortable: false,
          width: 78,
          overflow: "visible",
          autoHide: false,
          template: function () {
            return `
              <a href="edit-category.html" class="btn btn-sm btn-clean btn-outline-primary btn-icon mr-2" data-toggle="tooltip" data-placement="left" title="Edit details"><i class="la la-edit"></i></a>
              <a href="javascript:;" class="btn btn-sm btn-outline-danger btn-icon" data-toggle="tooltip" data-placement="left" title="Delete item"><i class="la la-trash-alt"></i></a>
            `;
          },
        },
      ],
    });

    $("#kt_datatable_search_query").on("change", function () {
      datatable.search($(this).val(), "ItemTitle");
    });

    $("#kt_datatable_search_stock").on("change", function () {
      datatable.search($(this).val(), "ItemStock");
    });

    $("#kt_datatable_search_status").on("change", function () {
      datatable.search($(this).val().toLowerCase(), "ItemStatus");
    });

    $("#kt_datepicker_5").datepicker({});

    $(
      "#kt_datatable_search_status, #kt_datatable_change_category"
    ).selectpicker();

    $("[data-toggle=filters]").on("click", function (evt) {
      evt.preventDefault();
      $(this).toggleClass("active");
      $("#filters ").toggleClass("d-none");

      return false;
    });
  };

  var demo3 = function () {
    // init slider
    var slider = document.getElementById("kt_nouislider_3");

    noUiSlider.create(slider, {
      start: [220, 670],
      connect: true,
      tooltips: [true, wNumb({ decimals: 2 })],
      range: {
        min: [0],
        max: 1000,
      },
    });

    // init slider input
    var sliderInput0 = document.getElementById("kt_nouislider_3_input");
    var sliderInput1 = document.getElementById("kt_nouislider_3.1_input");
    var sliderInputs = [sliderInput1, sliderInput0];

    slider.noUiSlider.on("update", function (values, handle) {
      sliderInputs[handle].value = values[handle];
    });
  };

  return {
    // Public functions
    init: function () {
      // init dmeo
      demo();
      demo3();
    },
  };
})();

jQuery(document).ready(function () {
  KTDatatableDataLocalDemo.init();
});
