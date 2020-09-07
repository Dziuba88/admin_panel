"use strict";
// Class definition

var KTDatatableDataLocalDemo = (function () {
  // Private functions

  // demo initializer
  var demo = function () {
    const itemsCount = 100;

    function createData(count) {
      const data = [];
      for (let i = 0; i < count; i++) {
        data.push({
          LanguageID: i,
          LanguageOrder: count - i,
          LanguageName: "Language Name " + i,
          Status: i & 1 ? 1 : 2,
          Type: i & 1 ? 1 : 2,
          Actions: null,
        });
      }

      return data;
    }

    var dataJSONArray = createData(itemsCount);

    var datatable = $("#kt_datatable").KTDatatable({
      data: { type: "local", source: dataJSONArray, pageSize: 10 },
      layout: { scroll: false, footer: false },
      sortable: true,
      pagination: true,
      columns: [
        {
          field: "LanguageID",
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
          field: "LanguageName",
          title: "Language",
          autoHide: false,
        },
        {
          field: "Status",
          title: "Status",
          width: 160,
          template: function (row) {
            var status = {
              1: { title: "Published", class: " label-light-success" },
              2: { title: "Disabled", class: " label-light-danger" },
            };
            return `<span class="label font-weight-bold label-lg ${
              status[row.Status].class
            } label-inline">${status[row.Status].title}</span>`;
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
              <a href="edit-language.html" class="btn btn-sm btn-clean btn-outline-primary btn-icon mr-2" data-toggle="tooltip" data-placement="left" title="Edit item"><i class="la la-edit"></i></a>
              <a href="javascript:;" class="btn btn-sm btn-clean btn-outline-warning btn-icon mr-2" data-toggle="tooltip" data-placement="left" title="Unpublish item"><i class="la la-power-off"></i></a>
              <a href="javascript:;" class="btn btn-sm btn-outline-danger btn-icon" data-toggle="tooltip" data-placement="left" title="Delete item"><i class="la la-trash-alt"></i></a>
            `;
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
