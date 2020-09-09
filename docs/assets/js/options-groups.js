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
          OptionGroupID: i,
          OptionGroupOrder: count - i,
          OptionGroupName: "Option Group Name " + i,
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
          field: "OptionGroupID",
          title: "#",
          sortable: false,
          width: 20,
          type: "number",
          selector: {
            class: "",
          },
          textAlign: "center",
        },
        { field: "OptionGroupName", title: "Title", autoHide: false },
        {
          field: "OptionGroupOrder",
          title: "Order",
          width: 80,
          textAlign: "center",
        },
        {
          field: "Actions",
          title: "",
          sortable: false,
          width: 40,
          textAlign: "right",
          overflow: "visible",
          autoHide: false,
          template: function () {
            return '<a href="javascript:;" class="btn btn-sm btn-clean btn-outline-primary btn-icon" data-toggle="tooltip" data-placement="left" title="Edit details"><i class="la la-edit"></i></a>';
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
