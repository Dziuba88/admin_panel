"use strict";
// Class definition

var KTDatatableDataLocalDemo = (function () {
  // Private functions

  // demo initializer
  var demo = function () {
    const itemsCount = 100;

    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function createData(count) {
      const data = [];
      for (let i = 0; i < count; i++) {
        data.push({
          ReviewID: i,
          ReviewAuthor: `Author Name ${i}`,
          ReviewVendor: `Vendor Name ${i}`,
          ReviewRate: getRndInteger(1, 5),
          ReviewDate: Date.now() - i * 86400000,
          ReviewText:
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
          field: "ReviewID",
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
          field: "ReviewAuthor",
          title: "Author",
          autoHide: false,
        },
        {
          field: "ReviewVendor",
          title: "Vendor",
        },
        {
          field: "ReviewRate",
          title: "Rating",
          width: 160,
          textAlign: "center",
          template: function (row) {
            var output = "";
            for (let i = 1; i <= 5; i++) {
              if (i <= row.ReviewRate) {
                output += '<i class="text-success la la-star"></i>';
              } else {
                output += '<i class="text-muted la la-star"></i>';
              }
            }

            return `
              <div class="text-nowrap">${output} (${row.ReviewRate})</div>
            `;
          },
        },

        {
          field: "ReviewText",
          title: "Text",
          template: function (row) {
            console.log(row.ReviewText);
            return row.ReviewText.length < 50
              ? row.ReviewText
              : row.ReviewText.slice(0, 50) + " ...";
          },
        },
        {
          field: "ReviewDate",
          title: "Published",
          template: function (row) {
            const d = new Date(row.ReviewDate);
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
          field: "Actions",
          title: "Actions",
          width: 64,
          textAlign: "center",
          sortable: false,
          template: function (row) {
            return `
                <a href="javascript:;" class="btn btn-sm btn-clean btn-outline-primary btn-icon mr-2" data-toggle="tooltip" data-placement="left" title="Preview Review"><i class="la la-eye"></i></a>
            `;
          },
        },
      ],
    });

    $("#kt_datatable_search_status").on("change", function () {
      datatable.search($(this).val().toLowerCase(), "ReviewStatus");
    });

    $("#kt_datatable_search_type").on("change", function () {
      datatable.search($(this).val(), "ReviewType");
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
