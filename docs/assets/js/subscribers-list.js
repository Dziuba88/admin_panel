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
          ClientID: i,
          ClientMail: `clientmail${i}@email.com`,
          ClientFirstName: `FirstName${i}`,
          ClientLastName: `LastName${i}`,
          SubscribeDate: Date.now() - i * 86400000,
          ClientPhone: `+373 79 
            ${Math.floor(Math.random() * 10) + 10} 
            ${Math.floor(Math.random() * 10) + 10} 
            ${Math.floor(Math.random() * 10) + 10}`,
          ClientLng: i & 2 ? "ru-RU" : "ro-RO",
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
          field: "ClientID",
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
          field: "ClientFirstName",
          title: "First Name",
          autoHide: false,
        },
        {
          field: "ClientLastName",
          title: "Last Name",
          autoHide: false,
        },
        {
          field: "ClientMail",
          title: "e-Mail",
        },
        {
          field: "ClientPhone",
          title: "Phone",
        },
        {
          field: "ClientLng",
          title: "Lang",
          textAlign: "center",
        },
        {
          field: "SubscribeDate",
          title: "Subscribed",
          template: function (row) {
            const d = new Date(row.SubscribeDate);
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
