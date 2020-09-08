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
          ItemID: i,
          ItemTitle:
            "Unde voluptatibus magni fuga laboriosam omnis debitis dolorem aspernatur asperiores labore?",
          ItemOrder: `${count - i}`,
          ItemStatus: i & 1 ? 1 : 2,
          Actions: null,
          PublishDate: Date.now() - i * 86400000,
          ItemCategory: "Category " + i,
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
          field: "ItemID",
          title: "#",
          sortable: false,
          width: 20,
          type: "number",
          selector: {
            class: "",
          },
          textAlign: "center",
        },
        { field: "ItemTitle", title: "Title", autoHide: false },
        { field: "ItemCategory", title: "Category" },
        {
          field: "ItemOrder",
          title: "order",
          type: "number",
          width: 80,
          textAlign: "center",
        },
        {
          field: "PublishDate",
          title: "Published",
          template: function (row) {
            const d = new Date(row.PublishDate);
            const m = [
              "Jan.",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ];
            return `${m[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
          },
        },
        {
          field: "ItemStatus",
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
              status[row.ItemStatus].class +
              ' label-inline">' +
              status[row.ItemStatus].title +
              "</span>"
            );
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
              <a href="edit-category.html" class="btn btn-sm btn-clean btn-outline-primary btn-icon mr-2" data-toggle="tooltip" data-placement="left" title="Edit details"><i class="la la-edit"></i></a>
              <a href="javascript:;" class="btn btn-sm btn-outline-danger btn-icon" data-toggle="tooltip" data-placement="left" title="Delete item"><i class="la la-trash-alt"></i></a>
            `;
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
