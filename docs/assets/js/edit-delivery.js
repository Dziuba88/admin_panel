var page = (function () {
  const initPage = function () {
    const itemsCount = 10;

    function createData(count) {
      const data = [];
      for (let i = 0; i < count; i++) {
        data.push({
          ID: i,
          Name: `Region ${i}`,
          Price: "123.25",
          Free: "300.00",
          Actions: null,
        });
      }

      return data;
    }

    var dataJSONArray = createData(itemsCount);

    $("#kt_datatable").KTDatatable({
      data: { type: "local", source: dataJSONArray, pageSize: 5 },
      //pagination: true,
      columns: [
        {
          field: "Name",
          title: "Region",
          autoHide: false,
        },
        {
          field: "Price",
          title: "Price",
          template: function (row) {
            return `${row.Price} mdl`;
          },
        },
        {
          field: "Free",
          title: "Free delivery",
          template: function (row) {
            return `${row.Free} mdl`;
          },
        },
        {
          field: "Actions",
          title: "Actions",
          sortable: false,
          textAlign: "center",
          width: 118,
          template: function (row) {
            return `
                <a href="javascript:;" class="btn btn-sm btn-outline-danger btn-icon" data-toggle="tooltip" data-placement="left" title="Delete Status"><i class="la la-trash-alt"></i></a>
            `;
          },
        },
      ],
    });

    $("[data-switch=true]").bootstrapSwitch();
    $(".selectpicker").selectpicker();
  };

  return {
    init: function () {
      initPage();
    },
  };
})();

jQuery(document).ready(function () {
  page.init();
});
