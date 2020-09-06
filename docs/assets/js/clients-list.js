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
          ClientID: i,
          ClientMail: `clientmail${i}@email.com`,
          ClientFirstName: `FirstName${i}`,
          ClientLastName: `LastName${i}`,
          ClientPhone: `+373 79 
            ${Math.floor(Math.random() * 10) + 10} 
            ${Math.floor(Math.random() * 10) + 10} 
            ${Math.floor(Math.random() * 10) + 10}`,
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
      search: { input: $("#kt_datatable_search_query"), key: "generalSearch" },
      columns: [
        {
          field: "ClientID",
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
          field: "ClientFirstName",
          title: "First Name",
          autoHide: false,
        },
        {
          field: "ClientLastName",
          title: "Last Name",
          autoHide: false,
        },
        {
          field: "ClientMail",
          title: "e-Mail",
        },
        {
          field: "ClientPhone",
          title: "Phone",
        },
        {
          field: "Actions",
          title: "Actions",
          sortable: false,
          width: 140,
          //overflow: "visible",
          //autoHide: false,
          template: function () {
            return `
              <a href="" class="btn btn-success btn-sm" data-toggle="tooltip" data-placement="left" title="Export Selected to CSV"><i class="la la-file-csv"></i> Export to Csv</a>
            `;
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
