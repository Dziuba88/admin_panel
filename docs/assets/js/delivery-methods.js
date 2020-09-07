"use strict";
// Class definition

var KTDatatableDataLocalDemo = (function () {
  // Private functions

  // demo initializer
  var demo = function () {
    const itemsCount = 5;

    function createData(count) {
      const data = [];
      for (let i = 0; i < count; i++) {
        data.push({
          MethodID: i,
          MethodName: "Method Name " + i,
          Status: i & 1 ? 1 : 2,
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
          field: "MethodID",
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
          field: "MethodName",
          title: "Method Name",
          autoHide: false,
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
          field: "Actions",
          title: "Actions",
          sortable: false,
          width: 80,
          overflow: "visible",
          autoHide: false,
          template: function () {
            return '<a href="edit-Method.html" class="btn btn-sm btn-clean btn-outline-primary btn-icon mr-2" data-toggle="tooltip" data-placement="left" title="Edit details"><i class="la la-edit"></i></a><a href="javascript:;" class="btn btn-sm btn-outline-warning btn-icon" data-toggle="tooltip" data-placement="left" title="Delete item"><i class="la la-power-off"></i></a>';
          },
        },
      ],
    });
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
