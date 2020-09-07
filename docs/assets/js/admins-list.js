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
          AdminID: i,
          AdminMail: `adminmail${i}@email.com`,
          AdminFirstName: `FirstName${i}`,
          AdminLastName: `LastName${i}`,
          AdminStatus: i & 5 ? 0 : 1,
          Type: i & 5 ? 0 : 1,
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
          field: "AdminID",
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
          field: "AdminFirstName",
          title: "First Name",
          autoHide: false,
        },
        {
          field: "AdminLastName",
          title: "Last Name",
          autoHide: false,
        },
        {
          field: "AdminMail",
          title: "e-Mail",
        },
        {
          field: "AdminStatus",
          title: "Status",
          width: 160,
          template: function (row) {
            var status = {
              0: {
                title: "Enabled",
                class: " label-light-success",
              },
              1: {
                title: "Disabled",
                class: " label-light-danger",
              },
            };
            return `<span class="label font-weight-bold label-lg ${
              status[row.AdminStatus].class
            } label-inline">${status[row.AdminStatus].title}</span>`;
          },
        },
        {
          field: "Actions",
          title: "Actions",
          sortable: false,
          width: 140,
          template: function (row) {
            if (row.Type) {
              return `
                <a href="users-group.html" class="btn btn-sm btn-clean btn-outline-primary btn-icon mr-2" data-toggle="tooltip" data-placement="left" title="Edit user"><i class="la la-edit"></i></a>
                <a href="javascript:;" class="btn btn-sm btn-outline-danger btn-icon" data-toggle="tooltip" data-placement="left" title="Delete user"><i class="la la-trash-alt"></i></a>
              `;
            }
            return "";
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
