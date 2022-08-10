const idinput = [
  "b2c24703-767b-477b-8eba-e2d207224ab5_9981f2f1-a4da-4837-8ad4-4b597342d7d9", //เลขบัตรประจำตัวประชาชน
  "b2c24703-767b-477b-8eba-e2d207224ab5_0802ca17-6c15-4dba-b6e9-55efa54028a4", //คำนำหน้า
  "b2c24703-767b-477b-8eba-e2d207224ab5_194194b7-33b6-4879-81ec-d838bb99e032", //ชื่อ
  "b2c24703-767b-477b-8eba-e2d207224ab5_ccd5792e-75ac-4253-8ba1-2d07536b315f", //ชื่อ สกุล
  "b2c24703-767b-477b-8eba-e2d207224ab5_4c692083-2774-48ed-9f20-28febc0ce5a5", //วันหมดอายุบัตร
  "b2c24703-767b-477b-8eba-e2d207224ab5_01504f39-7907-419f-8dc5-a9214e68abf7", //บ้านเลขที่
  "b2c24703-767b-477b-8eba-e2d207224ab5_b2f938e7-69f0-41f4-84ec-5f1f5680b18a", //ถนน
  "b2c24703-767b-477b-8eba-e2d207224ab5_e6a7b1de-445c-48e6-ad94-f314c17d9cdb", //อำเภอ
  "b2c24703-767b-477b-8eba-e2d207224ab5_6a8f2ded-27b3-4e85-a6bf-6573a8dfe1fe", //หมู่
  "b2c24703-767b-477b-8eba-e2d207224ab5_80f5a33e-edcb-43a2-901d-c51e0fab498f", //ตำบล
  "b2c24703-767b-477b-8eba-e2d207224ab5_6c313718-269f-4a04-a4ad-8e402eae6d73", //จังหวัด
  "b2c24703-767b-477b-8eba-e2d207224ab5_42acaf2d-f67a-44de-9b19-edd0ee282fb0", //ชื่อEH
  "b2c24703-767b-477b-8eba-e2d207224ab5_21ccc8f7-53a6-4cbb-ba8e-2abcea8d06a7", //ชื่อนามสกุลEN
  "b2c24703-767b-477b-8eba-e2d207224ab5_66d5ea3e-e5ea-4219-a6fc-779ef60d11f3",
];

function load_data() {
  console.log("function is working");

  $.ajax({
    url: "https://local.saksiam.co.th:8182/thaiid/read.jsonp?callback=callback&section1=true&section2a=true&section2b=true",
    dataType: "jsonp",
    crossDomain: true,
    type: "GET",
    jsonpCallback: "callback",

    success: function (data) {
      console.log(data);
      if (data == null) {
        document.getElementById(idinput[0]).focus();
        document.getElementById(idinput[0]).value = "";
        document.getElementById(idinput[0]).disabled = false;

        document.getElementById(idinput[1]).focus();
        document.getElementById(idinput[1]).value = "";
        document.getElementById(idinput[1]).disabled = false;

        document.getElementById(idinput[2]).focus();
        document.getElementById(idinput[2]).value = "";
        document.getElementById(idinput[2]).disabled = false;

        document.getElementById(idinput[3]).focus();
        document.getElementById(idinput[3]).value = "";
        document.getElementById(idinput[3]).disabled = false;

        document.getElementById(idinput[4]).focus();
        document.getElementById(idinput[4]).value = "";
        document.getElementById(idinput[4]).disabled = false;

        document.getElementById(idinput[5]).focus();
        document.getElementById(idinput[5]).value = "";
        document.getElementById(idinput[5]).disabled = false;

        document.getElementById(idinput[6]).focus();
        document.getElementById(idinput[6]).value = "";
        document.getElementById(idinput[6]).disabled = false;

        document.getElementById(idinput[7]).focus();
        document.getElementById(idinput[7]).value = "";
        document.getElementById(idinput[7]).disabled = false;

        document.getElementById(idinput[8]).focus();
        document.getElementById(idinput[8]).value = "";
        document.getElementById(idinput[8]).disabled = false;

        document.getElementById(idinput[9]).focus();
        document.getElementById(idinput[9]).value = "";
        document.getElementById(idinput[9]).disabled = false;

        document.getElementById(idinput[10]).focus();
        document.getElementById(idinput[10]).value = "";
        document.getElementById(idinput[10]).disabled = false;

        document.getElementById(idinput[11]).focus();
        document.getElementById(idinput[11]).value = "";
        document.getElementById(idinput[11]).disabled = false;

        document.getElementById(idinput[12]).focus();
        document.getElementById(idinput[12]).value = "";
        document.getElementById(idinput[12]).disabled = false;

        document.getElementById(idinput[13]).focus();

        console.log("function is end");
      } else {
        var Roads = isNull(data.Road);
        var expDate = getFormatedDateOfBirth(data.ExpiryDate); //วันหมดอาุยุบัตร
        let preN = data.TitleNameTh;
        var repreN = preN.replace(/น.ส./g, "นางสาว"); //คำนำหน้า

        document.getElementById(idinput[0]).focus();
        document.getElementById(idinput[0]).value = data.CitizenNo;
        document.getElementById(idinput[0]).disabled = true;

        document.getElementById(idinput[1]).focus();
        document.getElementById(idinput[1]).value = repreN;
        document.getElementById(idinput[1]).disabled = true;

        document.getElementById(idinput[2]).focus();
        document.getElementById(idinput[2]).value = data.FirstNameTh;
        document.getElementById(idinput[2]).disabled = true;

        document.getElementById(idinput[3]).focus();
        document.getElementById(idinput[3]).value = data.LastNameTh;
        document.getElementById(idinput[3]).disabled = true;

        document.getElementById(idinput[4]).focus();
        document.getElementById(idinput[4]).value = expDate;
        document.getElementById(idinput[4]).disabled = true;

        document.getElementById(idinput[5]).focus();
        document.getElementById(idinput[5]).value = data.HomeNo;
        document.getElementById(idinput[5]).disabled = true;

        document.getElementById(idinput[6]).focus();
        document.getElementById(idinput[6]).value = Roads;
        document.getElementById(idinput[6]).disabled = true;

        document.getElementById(idinput[7]).focus();
        document.getElementById(idinput[7]).value = data.Amphur;
        document.getElementById(idinput[7]).disabled = true;

        document.getElementById(idinput[8]).focus();
        document.getElementById(idinput[8]).value = data.Moo.substring(7);
        document.getElementById(idinput[8]).disabled = true;

        document.getElementById(idinput[9]).focus();
        document.getElementById(idinput[9]).value = data.Tumbol;
        document.getElementById(idinput[9]).disabled = true;

        document.getElementById(idinput[10]).focus();
        document.getElementById(idinput[10]).value = data.Province;
        document.getElementById(idinput[10]).disabled = true;

        document.getElementById(idinput[11]).focus();
        document.getElementById(idinput[11]).value = data.FirstNameEn;
        document.getElementById(idinput[11]).disabled = true;

        document.getElementById(idinput[12]).focus();
        document.getElementById(idinput[12]).value = data.LastNameEn;
        document.getElementById(idinput[12]).disabled = true;

        document.getElementById(idinput[13]).focus();

        console.log("function is end");
      }
    },
    error: function (error) {
      console.log(error);
    },
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
setInterval(load_data, 3000);
