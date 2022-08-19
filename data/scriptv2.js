const idinput = [
  "98d29eb7-7464-db14-3dd6-007095a4cd74_337d88f3-70f1-b9cc-0682-7e6646d88226", //เลขบัตรประจำตัวประชาชน
  "98d29eb7-7464-db14-3dd6-007095a4cd74_860491af-79df-b6ed-66c3-c7c9132e1dc2", //คำนำหน้า
  "98d29eb7-7464-db14-3dd6-007095a4cd74_2437ba59-0172-e3be-043c-8d13ee9617c5", //ชื่อ
  "98d29eb7-7464-db14-3dd6-007095a4cd74_32e05691-7af4-0e90-3d44-916618fca2e6", //ชื่อ สกุล
  "98d29eb7-7464-db14-3dd6-007095a4cd74_d5fd6725-83c5-b13d-0249-88865551881d", //วันหมดอายุบัตร
  "98d29eb7-7464-db14-3dd6-007095a4cd74_05405d63-9b83-55ff-e97e-c2efaed99a9a", //บ้านเลขที่
  "98d29eb7-7464-db14-3dd6-007095a4cd74_41e0e6a9-09cf-fc0c-6aba-53347c51cfe9", //ถนน
  "98d29eb7-7464-db14-3dd6-007095a4cd74_386be4e3-7f21-777e-8371-5d4fb84b46ab", //อำเภอ
  "98d29eb7-7464-db14-3dd6-007095a4cd74_e1d2e017-0694-578d-282f-c338970e43c3", //หมู่
  "98d29eb7-7464-db14-3dd6-007095a4cd74_fdb589e7-4664-ae42-9149-83f0f409b430", //ตำบล
  "98d29eb7-7464-db14-3dd6-007095a4cd74_0556ee07-0046-5ee0-d82d-ece4af4e0a1b", //จังหวัด
  "98d29eb7-7464-db14-3dd6-007095a4cd74_abf591d7-e82e-517c-a1b9-132b4ab34e28", //ชื่อEH
  "98d29eb7-7464-db14-3dd6-007095a4cd74_5abb7be6-6b36-d29b-a382-be4d7bdd1e9f", //ชื่อนามสกุลEN
  "98d29eb7-7464-db14-3dd6-007095a4cd74_de95905e-8412-f297-81e1-3ec2a65792be_Picture", //รูปภาพ
  "98d29eb7-7464-db14-3dd6-007095a4cd74_a4b2e9e7-84c2-126d-872a-7d2e86910c63", //inputรูปภาพ
  "98d29eb7-7464-db14-3dd6-007095a4cd74_a467810d-bc7d-47ab-ff07-84456edb53d9",
];

document.getElementById(
  "98d29eb7-7464-db14-3dd6-007095a4cd74_910170ba-6fdf-6b74-d8af-0f45f1087963_ToolbarButton"
).onclick = function () {
  load_data();
};

function load_data() {
  console.log("function is working");

  fetchJsonp(
    "https://local.saksiam.co.th:8182/thaiid/read.jsonp?section1=true&section2a=true&section2b=true&section2c=true"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {

      var Roads = isNull(json.Road);
      var expDate = getFormatedDateOfBirth(json.ExpiryDate); //วันหมดอาุยุบัตร
      let preN = json.TitleNameTh;
      var repreN = preN.replace(/น.ส./g, "นางสาว"); //คำนำหน้า

      document.getElementById(idinput[0]).focus();
      document.getElementById(idinput[0]).value = json.CitizenNo;
      document.getElementById(idinput[0]).disabled = true;

      document.getElementById(idinput[1]).focus();
      document.getElementById(idinput[1]).value = repreN;
      document.getElementById(idinput[1]).disabled = true;

      document.getElementById(idinput[2]).focus();
      document.getElementById(idinput[2]).value = json.FirstNameTh;
      document.getElementById(idinput[2]).disabled = true;

      document.getElementById(idinput[3]).focus();
      document.getElementById(idinput[3]).value = json.LastNameTh;
      document.getElementById(idinput[3]).disabled = true;

      document.getElementById(idinput[4]).focus();
      document.getElementById(idinput[4]).value = expDate;
      document.getElementById(idinput[4]).disabled = true;

      document.getElementById(idinput[5]).focus();
      document.getElementById(idinput[5]).value = json.HomeNo;
      document.getElementById(idinput[5]).disabled = true;

      document.getElementById(idinput[6]).focus();
      document.getElementById(idinput[6]).value = Roads;
      document.getElementById(idinput[6]).disabled = true;

      document.getElementById(idinput[7]).focus();
      document.getElementById(idinput[7]).value = json.Amphur;
      document.getElementById(idinput[7]).disabled = true;

      document.getElementById(idinput[8]).focus();
      document.getElementById(idinput[8]).value = json.Moo.substring(7);
      document.getElementById(idinput[8]).disabled = true;

      document.getElementById(idinput[9]).focus();
      document.getElementById(idinput[9]).value = json.Tumbol;
      document.getElementById(idinput[9]).disabled = true;

      document.getElementById(idinput[10]).focus();
      document.getElementById(idinput[10]).value = json.Province;
      document.getElementById(idinput[10]).disabled = true;

      document.getElementById(idinput[11]).focus();
      document.getElementById(idinput[11]).value = json.FirstNameEn;
      document.getElementById(idinput[11]).disabled = true;

      document.getElementById(idinput[12]).focus();
      document.getElementById(idinput[12]).value = json.LastNameEn;
      document.getElementById(idinput[12]).disabled = true;

      document.getElementById(idinput[13]).focus();
      document.getElementById(idinput[13]).src =
        "data:image/png;base64," + json.Photo;
      document.getElementById(idinput[13]).disabled = true;

      document.getElementById(idinput[14]).focus();
      document.getElementById(idinput[14]).value = json.Photo;
      document.getElementById(idinput[14]).disabled = true;

      document.getElementById(idinput[15]).focus();

      console.log("function is end");
    })
    .catch(function (ex) {
      console.log("parsing failed", ex);
    });
}

function isNull(Roads) {
  if (Roads == "") {
    var nullroad = "-";
    return nullroad;
  } else {
    return Roads;
  }
}

function getFormatedDateOfBirth(expDate) {
  var yearExpire = expDate.slice(0, 4) - 543;
  var monthExpire = expDate.slice(4, 6);
  var dateExpire = expDate.slice(6, 8);

  return dateExpire + "/" + monthExpire + "/" + yearExpire;
}
