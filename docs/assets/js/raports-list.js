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
          RaportID: i,
          RaportAuthor: `Author Name ${i}`,
          RaportAuthorMail: i & 5 ? `raportautor${i}@email.com` : "",
          RaportVendor: `Vendor Name ${i}`,
          RaportDate: Date.now() - i * 86400000,
          RaportText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio beatae placeat dolorum, nemo repellat cupiditate voluptatibus expedita, repudiandae officiis facilis odio eaque nobis eius ipsa, quia magnam nesciunt alias cumque natus nam quo eum quasi quisquam! Unde voluptatibus magni fuga laboriosam omnis debitis dolorem aspernatur asperiores labore? Quo praesentium cumque architecto repellendus perferendis, doloremque fugit veniam molestiae commodi dolorum officiis ab asperiores quasi? Quasi, nihil! Suscipit est temporibus consequuntur provident eum reprehenderit aliquam, quia, accusamus tenetur dignissimos impedit architecto necessitatibus ea nam nulla sint aperiam. Nisi nostrum omnis rerum incidunt consectetur fugit laboriosam dicta. Magni id dolore esse adipisci neque nulla, a aspernatur mollitia sint atque? Vel accusamus aliquid neque dicta? Cum repellendus corporis, sapiente quo magnam possimus doloremque cumque consequuntur aliquid doloribus tenetur, necessitatibus quibusdam ipsam iste deleniti dolores earum assumenda? Laborum voluptas minus, nisi blanditiis assumenda, sunt recusandae in dignissimos accusamus vero ipsa eius, hic enim quibusdam! Cum perspiciatis debitis repellendus iusto accusantium iure dolores ratione, amet quibusdam sint pariatur aspernatur voluptatum recusandae impedit perferendis ab sapiente repudiandae labore aliquid, ullam nihil dignissimos cumque quasi minus. Tempore, quos quidem! Itaque quasi, soluta odio rem cupiditate expedita officiis doloremque asperiores. Eum officia cumque eligendi veniam adipisci quos delectus, natus aut cupiditate tempora suscipit quod ad omnis blanditiis beatae magni error consequuntur perferendis deserunt vitae nihil! Vitae voluptates alias temporibus quasi quia delectus dicta laboriosam praesentium numquam, deleniti fugit maxime odio omnis asperiores facilis laudantium veniam, est, distinctio veritatis nemo. Architecto ut quas, totam, unde in voluptates nesciunt dolores nemo vero nostrum reprehenderit facere eius eveniet repellat facilis natus quaerat explicabo non officia? Doloribus culpa consequuntur ipsam, ex provident similique quasi nisi sapiente suscipit ab repudiandae dolorum, deleniti aut cum voluptate reiciendis veniam quia ducimus fugit excepturi quae nostrum eligendi eum non? Qui quos asperiores molestias voluptatum vitae fuga quae.",
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
          field: "RaportID",
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
          field: "RaportAuthor",
          title: "Author",
          autoHide: false,
        },
        {
          field: "RaportAuthorMail",
          title: "Author Mail",
        },
        {
          field: "RaportVendor",
          title: "Vendor",
        },
        {
          field: "RaportText",
          title: "Text",
          template: function (row) {
            console.log(row.RaportText);
            return row.RaportText.length < 50
              ? row.RaportText
              : row.RaportText.slice(0, 50) + " ...";
          },
        },
        {
          field: "RaportDate",
          title: "Published",
          template: function (row) {
            const d = new Date(row.RaportDate);
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

    $("#kt_datatable_search_status").on("change", function () {
      datatable.search($(this).val().toLowerCase(), "RaportStatus");
    });

    $("#kt_datatable_search_type").on("change", function () {
      datatable.search($(this).val(), "RaportType");
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
