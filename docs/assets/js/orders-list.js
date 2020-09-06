"use strict";
// Class definition

var KTDatatableDataLocalDemo = (function () {
  // Private functions
  // demo initializer
  var demo = function () {
    const OrdersCount = 18;

    function createData(count) {
      const data = [];
      for (let i = 1; i <= count; i++) {
        data.push({
          OrderID: i,
          OrderTitle: `1568-89${i}`,
          OrderClient: `Lorem ipsum ${i}`,
          OrderCompany: `Company Name ${i}`,
          OrderSumm: (Math.random() * 100).toFixed(2),
          PublishDate: Date.now() - i * 86400000,
          OrderStatus: i & 1 ? 1 : 2,
          Actions: null,
        });
      }

      return data;
    }

    var dataJSONArray = createData(OrdersCount);

    var datatable = $("#kt_datatable").KTDatatable({
      data: {
        type: "local",
        source: dataJSONArray,
        pageSize: 10,
      },
      layout: {
        scroll: false,
        footer: false,
      },
      sortable: true,
      pagination: true,
      columns: [
        {
          field: "OrderID",
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
          field: "OrderTitle",
          title: "ID",
          autoHide: false,
        },
        {
          field: "OrderClient",
          title: "Client",
        },
        {
          field: "OrderCompany",
          title: "Company",
        },
        {
          field: "OrderSumm",
          title: "Order Summ",
          template: function (row) {
            return `<strong>${row.OrderSumm}  mdl</strong>`;
          },
        },
        {
          field: "PublishDate",
          title: "Published",
          width: 160,
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
          field: "OrderStatus",
          title: "Status",
          width: 160,
          template: function (row) {
            var status = {
              1: {
                title: "Complete",
                class: " label-light-success",
              },
              2: {
                title: "Refunded",
                class: " label-light-danger",
              },
            };
            return (
              '<span class="label font-weight-bold label-lg ' +
              status[row.OrderStatus].class +
              ' label-inline">' +
              status[row.OrderStatus].title +
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
              <a href="edit-info-page.html" class="btn btn-sm btn-clean btn-outline-primary btn-icon mr-2" data-toggle="tooltip" data-placement="left" title="Edit Order"><i class="la la-edit"></i></a>
              <a href="javascript:;" class="btn btn-sm btn-clean btn-outline-success btn-icon mr-2" data-toggle="tooltip" data-placement="left" title="Preview Order"><i class="la la-eye"></i></a>
              <a href="javascript:;" class="btn btn-sm btn-clean btn-outline-danger btn-icon" data-toggle="tooltip" data-placement="left" title="Delete Order"><i class="la la-trash-alt"></i></a>
            `;
          },
        },
      ],
    });

    $("#kt_datatable_search_query").on("change", function () {
      datatable.search($(this).val(), "OrderTitle");
    });
    $("#kt_datatable_search_Client").on("change", function () {
      datatable.search($(this).val(), "OrderClient");
    });

    $("#kt_datatable_search_status").on("change", function () {
      datatable.search($(this).val().toLowerCase(), "OrderStatus");
    });

    $("#kt_datepicker_5").datepicker({});

    $(
      "#kt_datatable_search_status, #kt_datatable_change_category"
    ).selectpicker();

    $("[data-toggle=filters]").on("click", function (evt) {
      evt.preventDefault();
      $(this).toggleClass("active");
      $("#filters ").toggleClass("d-none");

      return false;
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
