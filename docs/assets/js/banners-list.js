"use strict";
// Class definition

var KTDatatableDataLocalDemo = (function () {
  // Private functions

  // demo initializer
  var demo = function () {
    const itemsCount = 72;

    function createData(count) {
      const data = [];
      for (let i = 1; i <= count; i++) {
        data.push({
          BannerID: i,
          BannerImg: i,
          BannerTitle: "Banner Title " + i,
          BannerPage: "banner_page_" + i + ".html",
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
          field: "BannerID",
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
          field: "BannerImg",
          title: "Image",
          sortable: false,
          width: 160,
          textAlign: "center",
          template: function (row) {
            return `<a href="edit-banner-page.html" class=""><img src="assets/media/stock-600x400/img-${row.BannerImg}.jpg" class="img-thumbnail rounded img-fluid" alt="..."></a>`;
          },
        },
        {
          field: "BannerTitle",
          title: "Title",
          autoHide: false,
        },
        {
          field: "BannerPage",
          title: "Page",
          template: function (row) {
            return `<a href="${row.BannerPage}" target="_blank"><i class="la la-link"></i> ${row.BannerPage}</a>`;
          },
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
          width: 118,
          overflow: "visible",
          autoHide: false,
          template: function () {
            return `
              <a href="edit-Banner.html" class="btn btn-sm btn-clean btn-outline-primary btn-icon mr-2" data-toggle="tooltip" data-placement="left" title="Edit Banner"><i class="la la-edit"></i></a>
              <a href="javascript:;" class="btn btn-sm btn-clean btn-outline-warning btn-icon mr-2" data-toggle="tooltip" data-placement="left" title="Unpublish Banner"><i class="la la-power-off"></i></a>
              <a href="javascript:;" class="btn btn-sm btn-outline-danger btn-icon" data-toggle="tooltip" data-placement="left" title="Delete Banner"><i class="la la-trash-alt"></i></a>
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
