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
          VendorID: i,
          VendorCompany: `Vendor Company ${i}`,
          VendorMail: `vendor_mail${i}@email.com`,
          VendorPhone: `+373 79 
            ${Math.floor(Math.random() * 10) + 10} 
            ${Math.floor(Math.random() * 10) + 10} 
            ${Math.floor(Math.random() * 10) + 10}`,
          VendorFirstName: `FirstName${i}`,
          VendorLastName: `LastName${i}`,
          VendorStatus: i & 5 ? 1 : 2,
          VendorType: i & 5 ? 1 : 2,
          PublishDate: Date.now() - i * 86400000,
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
          field: "VendorID",
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
          field: "VendorLastName",
          title: "Vendor Name",
          autoHide: false,
          template: function (row) {
            return `${row.VendorLastName} ${row.VendorFirstName}`;
          },
        },
        {
          field: "VendorCompany",
          title: "Company",
        },
        {
          field: "VendorType",
          title: "Type",
          width: 160,
          textAlign: "center",
          template: function (row) {
            console.log(row.VendorType);
            var status = {
              1: { title: "—", state: "muted" },
              2: { title: "Participant IarmarEco", state: "success" },
            };
            return (
              '<span class="font-weight-bold text-' +
              status[row.VendorType].state +
              '">' +
              status[row.VendorType].title +
              "</span>"
            );
          },
        },

        {
          field: "VendorMail",
          title: "e-Mail",
        },
        {
          field: "VendorPhone",
          title: "Phone",
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
          field: "VendorStatus",
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
              status[row.VendorStatus].class
            } label-inline">${status[row.VendorStatus].title}</span>`;
          },
        },
        {
          field: "Actions",
          title: "Actions",
          sortable: false,
          width: 165,
          template: function (row) {
            return `
                <a href="edit-vendor.html" class="btn btn-sm btn-clean btn-outline-primary btn-icon mr-2" data-toggle="tooltip" data-placement="left" title="Edit Vendor"><i class="la la-edit"></i></a>
                <a href="javascript:;" class="btn btn-sm btn-outline-success btn-icon mr-2" data-toggle="tooltip" data-placement="left" title="Participant IarmarEco"><i class="far fa-handshake"></i></a>
                <a href="javascript:;" class="btn btn-sm btn-outline-warning btn-icon mr-2" data-toggle="tooltip" data-placement="left" title="Toggle Vendor"><i class="la la-power-off"></i></a>
                <a href="javascript:;" class="btn btn-sm btn-outline-danger btn-icon" data-toggle="tooltip" data-placement="left" title="Delete Vendor"><i class="la la-trash-alt"></i></a>
            `;
          },
        },
      ],
    });

    $("#kt_datatable_search_status").on("change", function () {
      datatable.search($(this).val().toLowerCase(), "VendorStatus");
    });

    $("#kt_datatable_search_type").on("change", function () {
      datatable.search($(this).val(), "VendorType");
    });

    $("#kt_datatable_search_status, #kt_datatable_search_type").selectpicker();
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
