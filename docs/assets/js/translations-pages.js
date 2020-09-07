"use strict";
var KTDatatableDataLocalDemo = (function () {
  var demo = function () {
    const itemsCount = 100;
    function createData(count) {
      const data = [];
      for (let i = 0; i < count; i++) {
        data.push({
          TranslationsID: i,
          TranslationsName: "Translations of page " + i,
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
      layout: { scroll: false, footer: false },
      sortable: true,
      pagination: true,
      search: { input: $("#kt_datatable_search_query"), key: "generalSearch" },
      columns: [
        {
          field: "TranslationsID",
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
          field: "TranslationsName",
          title: "Page Title",
          autoHide: false,
        },
        {
          field: "Actions",
          title: "Actions",
          sortable: false,
          width: 80,
          overflow: "visible",
          autoHide: false,
          template: function () {
            return '<a href="translations.html" class="btn btn-sm btn-clean btn-outline-primary btn-icon mr-2" data-toggle="tooltip" data-placement="left" title="Edit details"><i class="la la-edit"></i></a>';
          },
        },
      ],
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
