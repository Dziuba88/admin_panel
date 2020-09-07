"use strict";
// Class definition

var KTDatatableDataLocalDemo = (function () {
  var demo = function () {
    const itemsCount = 5;
    function createData(count) {
      const data = [];
      for (let i = 0; i < count; i++) {
        data.push({
          GroupID: i,
          GroupName: "Users Group Name " + i,
          Status: i,
          Type: i,
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
          field: "GroupID",
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
          field: "GroupName",
          title: "Title",
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
            if (row.Type) {
              return `<span class="label font-weight-bold label-lg ${status[1].class} label-inline">${status[1].title}</span>`;
            } else {
              return `<span class="label font-weight-bold label-lg ${status[2].class} label-inline">${status[2].title}</span>`;
            }
          },
        },
        {
          field: "Type",
          title: "Type",
          width: 160,
          template: function (row) {
            var status = {
              1: {
                title: "Other type",
                state: "secondary",
              },
              2: {
                title: "Admin",
                state: "primary",
              },
            };
            if (row.Type) {
              return `<span class="font-weight-bold text-${status[1].state}">${status[1].title}</span>`;
            } else {
              return `<span class="font-weight-bold text-${status[2].state}">${status[2].title}</span>`;
            }
          },
        },
        {
          field: "Actions",
          title: "Actions",
          sortable: false,
          width: 118,
          overflow: "visible",
          autoHide: false,
          template: function (row) {
            if (!row.Type) {
              return `
                <a href="users-group.html" class="btn btn-sm btn-clean btn-outline-primary btn-icon mr-2" data-toggle="tooltip" data-placement="left" title="Edit group"><i class="la la-edit"></i></a>
                <a href="javascript:;" class="btn btn-sm btn-clean btn-outline-warning btn-icon mr-2" data-toggle="tooltip" data-placement="left" title="Unpublish group"><i class="la la-power-off"></i></a>
                <a href="javascript:;" class="btn btn-sm btn-outline-danger btn-icon" data-toggle="tooltip" data-placement="left" title="Delete group"><i class="la la-trash-alt"></i></a>
              `;
            }
            return "";
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
