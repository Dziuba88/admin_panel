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
          AttributeGroupID: i,
          AttributeGroupName: "Attribute Group Name " + i,
          Actions: null,
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
      // columns definition
      columns: [
        {
          field: "AttributeGroupID",
          title: "#",
          sortable: false,
          width: 20,
          type: "number",
          selector: { class: "" },
          textAlign: "center",
        },
        {
          field: "AttributeGroupName",
          title: "Group Name",
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
            return '<a href="edit-Attributes-group.html" class="btn btn-sm btn-clean btn-outline-primary btn-icon mr-2" data-toggle="tooltip" data-placement="left" title="Edit details"><i class="la la-edit"></i></a><a href="javascript:;" class="btn btn-sm btn-outline-danger btn-icon" data-toggle="tooltip" data-placement="left" title="Delete item"><i class="la la-trash-alt"></i></a>';
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
