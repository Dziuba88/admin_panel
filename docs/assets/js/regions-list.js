"use strict";
// Class definition

var KTDatatableDataLocalDemo = (function () {
  // Private functions

  // demo initializer
  var demo = function () {
    const itemsCount = 220;

    function createData(count) {
      const data = [];
      for (let i = 0; i < count; i++) {
        data.push({
          ID: i,
          Name: `Region ${i}`,
          Order: count - i,
          Status: i & 5 ? 1 : 2,
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
          field: "ID",
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
          field: "Name",
          title: "Status Name",
          autoHide: false,
        },
        {
          field: "Order",
          title: "Order",
          width: 80,
          textAlign: "center",
        },
        {
          field: "Status",
          title: "Status",
          width: 160,
          template: function (row) {
            var status = {
              1: {
                title: "Enabled",
                class: " label-light-success",
              },
              2: {
                title: "Disabled",
                class: " label-light-danger",
              },
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
          width: 165,
          template: function (row) {
            return `
                <a href="javascript:;" class="btn btn-sm btn-clean btn-outline-primary btn-icon mr-2" data-toggle="tooltip" data-placement="left" title="Edit Status"><i class="la la-edit"></i></a>
                <a href="javascript:;" class="btn btn-sm btn-outline-warning btn-icon mr-2" data-toggle="tooltip" data-placement="left" title="Toggle Status"><i class="la la-power-off"></i></a>
                <a href="javascript:;" class="btn btn-sm btn-outline-danger btn-icon" data-toggle="tooltip" data-placement="left" title="Delete Status"><i class="la la-trash-alt"></i></a>
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
