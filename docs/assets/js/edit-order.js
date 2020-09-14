var page = (function () {
  const initPage = function () {
    const itemsCount = 3;

    function createData(count) {
      const data = [];
      for (let i = 0; i < count; i++) {
        data.push({
          ItemID: i,
          Image: `assets/media/stock-600x600/img-${i + 1}.jpg`,
          Title: "Item Title " + i,
          Count: Math.floor(Math.random() * 10) + 1,
          Price: (Math.random() * 100).toFixed(2),
          Actions: null,
        });
      }

      return data;
    }

    var dataJSONArray = createData(itemsCount);

    $("#kt_datatable").KTDatatable({
      data: { type: "local", source: dataJSONArray },
      sortable: false,
      pagination: false,
      columns: [
        {
          field: "Image",
          title: "Image",
          sortable: false,
          width: 80,
          textAlign: "center",
          template: function (row) {
            return `<a href="" class=""><img src="${row.Image}" class="img-thumbnail rounded img-fluid" alt="..."></a>`;
          },
        },
        {
          field: "Title",
          title: "Title",
          autoHide: false,
        },
        {
          field: "Price",
          title: "Price",
          template: function (row) {
            return `<strong>${row.Price}  mdl</strong>`;
          },
        },
        {
          field: "Count",
          title: "Count",
          width: 80,
          textAlign: "center",
          template: function (row) {
            return `<div class="form-group m-0"><input type="number" class="form-control text-center" value="${row.Count}" min="0" step="1"/></div>`;
          },
        },
        {
          field: "",
          title: "Price",
          template: function (row) {
            return `<strong class="font-size-h5">${(
              row.Price * row.Count
            ).toFixed(2)}  mdl</strong>`;
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
              <a href="javascript:;" class="btn btn-sm btn-clean btn-outline-warning btn-icon mr-2" data-toggle="tooltip" data-placement="left" title="Refresh"><i class="la la-refresh"></i></a>
              <a href="javascript:;" class="btn btn-sm btn-danger btn-icon" data-toggle="tooltip" data-placement="left" title="Delete item"><i class="la la-trash-alt"></i></a>
            `;
          },
        },
      ],
    });
    $("[data-switch=true]").bootstrapSwitch();
    $(".selectpicker").selectpicker();
    $(".touchspin").TouchSpin({
      buttondown_class: "btn btn-danger",
      buttonup_class: "btn btn-success",

      min: 0,
      max: 100,
      stepinterval: 1,
      maxboostedstep: 1,
      postfix: "lei",
    });
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
