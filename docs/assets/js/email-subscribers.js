"use strict";
var pageScript = (function () {
  const initScript = function () {
    const itemsCount = 100;
    const createData = function (count) {
      const data = [];
      for (let i = 0; i < count; i++) {
        data.push({
          ClientID: i,
          ClientMail: `clientmail${i}@email.com`,
          ClientFirstName: `FirstName`,
          ClientLastName: `LastName`,
          ClientPhone: `+373 79 
            ${Math.floor(Math.random() * 10) + 10} 
            ${Math.floor(Math.random() * 10) + 10} 
            ${Math.floor(Math.random() * 10) + 10}`,
        });
      }

      return data;
    };
    const dataJSONArray = createData(itemsCount);
    $("#kt_datatable").KTDatatable({
      data: { type: "local", source: dataJSONArray, pageSize: 100 },
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
          template: function (row) {
            return `${row.ClientLastName} ${row.ClientFirstName}`;
          },
        },
        {
          field: "ClientMail",
          title: "e-Mail",
        },
        {
          field: "ClientPhone",
          title: "Phone",
        },
      ],
    });
  };
  return {
    init: function () {
      initScript();
    },
  };
})();

jQuery(document).ready(function () {
  pageScript.init();
});
