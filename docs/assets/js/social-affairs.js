var page = (function () {
  const _COUNT = 10;
  const _USERS = [
    "Alabama Alaska",
    "Arizona Arkansas",
    "California Colorado",
    "Connecticut Delaware",
    "Florida Georgia",
    "Hawaii Idaho Illinois",
    "Indiana Iowa",
    "Kansas Kentucky",
    "Louisiana Maine",
    "Maryland Massachusetts",
    "Michigan Minnesota",
    "Mississippi Missouri",
    "Montana Nebraska",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Oklahoma Oregon",
    "Pennsy lvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
  ];
  const substringMatcher = function (strs) {
    return function findMatches(q, cb) {
      var matches, substringRegex;
      matches = [];
      substrRegex = new RegExp(q, "i");
      $.each(strs, function (i, str) {
        if (substrRegex.test(str)) {
          matches.push(str);
        }
      });
      cb(matches);
    };
  };

  function createData(count) {
    const data = [];
    for (let i = 0; i < _COUNT; i++) {
      data.push({
        ID: i,
        avatar: `assets/media/users/100_${i + 1}.jpg`,
        email: `email${i}@email.com`,
        firstName: `FirstName`,
        lastName: `LastName`,
        company: `company`,
        phone: `+373 79 
            ${Math.floor(Math.random() * 10) + 10} 
            ${Math.floor(Math.random() * 10) + 10} 
            ${Math.floor(Math.random() * 10) + 10}`,
        Actions: null,
      });
    }

    return data;
  }

  var dataJSONArray = createData(_COUNT);

  const initPage = function () {
    $("#typeahead").typeahead(
      { hint: true, highlight: true, minLength: 1 },
      { name: "users", source: substringMatcher(_USERS) }
    );

    $("#kt_datatable").KTDatatable({
      data: { type: "local", source: dataJSONArray },
      layout: { scroll: false, footer: false },
      sortable: false,
      pagination: false,
      columns: [
        {
          field: "ID",
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
          field: "avatar",
          title: "Photo",
          width: 80,
          autoHide: false,
          template: function (row) {
            return `<img src="${row.avatar}" class="img-thumbnail rounded-circle img-fluid" alt="${row.firstName} ${row.lastName}" />`;
          },
        },
        {
          field: "firstName",
          title: "Full Name",
          template: function (row) {
            return `${row.firstName} ${row.lastName}`;
          },
        },
        {
          field: "company",
          title: "company",
        },
        {
          field: "email",
          title: "e-Mail",
        },
        {
          field: "phone",
          title: "Phone",
        },
        {
          field: "Actions",
          title: "",
          sortable: false,
          width: 78,
          textAlign: "center",
          overflow: "visible",
          autoHide: false,
          template: function () {
            return `<a href="javascript:;" class="btn btn-sm btn-outline-danger btn-icon" data-toggle="tooltip" data-placement="left" title="Delete user"><i class="la la-trash-alt"></i></a>`;
          },
        },
      ],
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
