"use strict";
// Class definition

var pageScripts = (function () {
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
          ClientFirstName: `FirstName`,
          ClientLastName: `LastName${i}`,
          ClientPhone: `+373 79 
            ${Math.floor(Math.random() * 10) + 10} 
            ${Math.floor(Math.random() * 10) + 10} 
            ${Math.floor(Math.random() * 10) + 10}`,
          ClientSocial: i & 5 ? null : "#linktosocialprofile",
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
          title: "Full Name",
          autoHide: false,
          template: function (row) {
            return `${row.ClientFirstName} ${row.ClientLastName}`;
          },
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
          field: "ClientSocial",
          title: "Social",
          template: function (row) {
            return row.ClientSocial
              ? `<a href="${row.ClientSocial}" class="btn btn-icon btn-xs btn-facebook" ><i class="socicon-facebook"></i></a>`
              : "";
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
              <a href="javascript:;" class="btn btn-sm btn-clean btn-outline-primary btn-icon mr-2" data-toggle="tooltip" data-placement="left" title="Edit details"><i class="la la-edit"></i></a>
              <a href="javascript:;" class="btn btn-sm btn-outline-danger btn-icon" data-toggle="tooltip" data-placement="left" title="Delete user"><i class="la la-trash-alt"></i></a>
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
  pageScripts.init();
});
