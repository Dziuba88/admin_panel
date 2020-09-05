"use strict";
// Class definition

var KTDatatableDataLocalDemo = (function () {
  // Private functions
  // demo initializer
  var demo = function () {
    const itemsCount = 18;

    function createData(count) {
      const data = [];
      for (let i = 1; i <= count; i++) {
        data.push({
          ItemID: i,
          ItemImage: i,
          ItemTitle: ` ${i} Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
          ItemAuthor: `Lorem ipsum ${i}`,
          ItemStock: Math.floor(Math.random() * 100) + 1,
          PublishDate: Date.now() - i * 86400000,
          ModifedDate: Date.now() - i * 86400000 * 0.5,
          ItemCategory: "Category " + i,
          ItemStatus: i & 1 ? 1 : 2,
          Actions: null,
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
            return `<a href="edit-info-page.html" class=""><img src="assets/media/stock-600x600/img-${row.ItemImage}.jpg" class="img-thumbnail rounded img-fluid" alt="..."></a>`;
          },
        },
        {
          field: "ItemTitle",
          title: "Title",
          autoHide: false,
        },
        {
          field: "ItemAuthor",
          title: "Author",
        },
        {
          field: "PublishDate",
          title: "Published",
          width: 160,
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
          field: "ModifedDate",
          title: "Modifed",
          width: 160,
          template: function (row) {
            const d = new Date(row.ModifedDate);
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
          width: 118,
          overflow: "visible",
          autoHide: false,
          template: function () {
            return `
              <a href="edit-info-page.html" class="btn btn-sm btn-clean btn-outline-primary btn-icon mr-2" data-toggle="tooltip" data-placement="left" title="Edit details"><i class="la la-edit"></i></a>
              <a href="javascript:;" class="btn btn-sm btn-outline-warning btn-icon mr-2" data-toggle="tooltip" data-placement="left" title="Unpublish item"><i class="la la-power-off"></i></a>
              <a href="javascript:;" class="btn btn-sm btn-outline-danger btn-icon" data-toggle="tooltip" data-placement="left" title="Delete item"><i class="la la-trash-alt"></i></a>
            `;
          },
        },
      ],
    });

    $("#kt_datatable_search_query").on("change", function () {
      datatable.search($(this).val(), "ItemTitle");
    });
    $("#kt_datatable_search_author").on("change", function () {
      datatable.search($(this).val(), "ItemAuthor");
    });

    $("#kt_datatable_search_stock").on("change", function () {
      datatable.search($(this).val(), "ItemStock");
    });

    $("#kt_datatable_search_status").on("change", function () {
      datatable.search($(this).val().toLowerCase(), "ItemStatus");
    });

    $("#kt_datepicker_5, #kt_datepicker_6").datepicker({});

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

  return {
    init: function () {
      demo();
    },
  };
})();

jQuery(document).ready(function () {
  KTDatatableDataLocalDemo.init();
});
