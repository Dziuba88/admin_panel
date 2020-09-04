"use strict";
// Class definition

var KTDatatableDataLocalDemo = (function () {
  // Private functions

  // demo initializer
  var demo = function () {
    const itemsCount = 100;

    console.log(Date.now());

    console.log(1000 * 60 * 24);

    function createData(count) {
      const data = [];
      for (let i = 0; i < count; i++) {
        data.push({
          CategoryID: i,
          CategoryOrder: count - i,
          CategoryName: "Category Name " + i,
          Status: i & 1 ? 1 : 2,
          Type: i & 1 ? 1 : 2,
          Actions: null,
          PublishDate: Date.now() - i * 86400000,
        });
      }

      return data;
    }

    var dataJSONArray = createData(itemsCount);

    var datatable = $("#kt_datatable").KTDatatable({
      // datasource definition
      data: {
        type: "local",
        source: dataJSONArray,
        pageSize: 10,
      },

      // layout definition
      layout: {
        scroll: false,
        // enable/disable datatable scroll both horizontal and vertical when needed.
        // height: 450, // datatable's body's fixed height
        footer: false,
        // display/hide footer
      },

      // column sorting
      sortable: true,

      pagination: true,

      search: {
        input: $("#kt_datatable_search_query"),
        key: "generalSearch",
      },

      // columns definition
      columns: [
        {
          field: "CategoryID",
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
          field: "CategoryName",
          title: "Title",
          autoHide: false,
        },
        {
          field: "CategoryOrder",
          title: "Order",
          width: 80,
          textAlign: "center",
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
            return `${d.getDate()} / ${m[d.getMonth()]} / ${d.getFullYear()}`;
          },
        },
        {
          field: "Status",
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
              status[row.Status].class +
              ' label-inline">' +
              status[row.Status].title +
              "</span>"
            );
          },
        },
        {
          field: "Type",
          title: "Type",
          width: 160,
          template: function (row) {
            var status = {
              1: {
                title: "Service",
                state: "secondary",
              },
              2: {
                title: "Product",
                state: "secondary",
              },
            };
            return (
              '<span class="font-weight-bold text-' +
              status[row.Type].state +
              '">' +
              status[row.Type].title +
              "</span>"
            );
          },
        },
        {
          field: "Actions",
          title: "Actions",
          sortable: false,
          width: 80,
          overflow: "visible",
          autoHide: false,
          template: function () {
            return '<a href="edit-category.html" class="btn btn-sm btn-clean btn-outline-primary btn-icon mr-2" data-toggle="tooltip" data-placement="left" title="Edit details"><i class="la la-edit"></i></a><a href="javascript:;" class="btn btn-sm btn-outline-danger btn-icon" data-toggle="tooltip" data-placement="left" title="Delete item"><i class="la la-trash-alt"></i></a>';
          },
        },
      ],
    });

    $("#kt_datatable_search_status").on("change", function () {
      datatable.search($(this).val().toLowerCase(), "Status");
    });

    $("#kt_datatable_search_type").on("change", function () {
      datatable.search($(this).val().toLowerCase(), "Type");
    });

    $("#kt_datatable_search_status, #kt_datatable_search_type").selectpicker();
  };

  return {
    // Public functions
    init: function () {
      // init dmeo
      demo();
    },
  };
})();

jQuery(document).ready(function () {
  KTDatatableDataLocalDemo.init();
});
