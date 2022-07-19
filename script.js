function load_data() {
  console.log("function is working");

  $.ajax({
    url: "https://smartcard.saksiam.co.th:8182/thaiid/read.jsonp?callback=callback&section1=true&section2a=true&section2b=true&section2c=true",
    dataType: "jsonp",
    crossDomain: true,
    type: "GET",
    jsonpCallback: "callback",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    success: function (data) {
      console.log(data);
      if (data == null) {
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_6374425a-f47b-8396-b3f8-d3246e96583f"
        ).value = "";
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_2e1f70d8-c270-b441-c3d2-fb7f3a055413"
        ).value = "";
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_c9e08b1b-561b-b643-7e5b-8b17ea18c2a9"
        ).value = "";
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_ab669fbf-e964-4cce-b904-498fcbe9762c"
        ).value = "";
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_ee635376-333b-2191-c035-288e2f1fd500"
        ).value = "";
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_1766a43f-ebd3-90e2-74ec-fc6f0a1d6a68"
        ).value = "";
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_a6b9c865-193d-1432-fb4d-1e1602981e4f"
        ).value = "";
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_defeb7d4-27ef-f765-20e6-de2633eb2e60"
        ).value = "";
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_33a76390-0da2-d76d-1bb9-3263298fbc7b"
        ).value = "";
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_57f0ff5c-de5c-f8ef-4331-2e7a359787fa"
        ).value = "";
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_92788352-da37-9f12-40f7-5715edeea5e2"
        ).value = "";
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_59429f9f-6657-6966-9ebd-89aa19a4774d"
        ).value = "";
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_03e18d21-17f4-57f7-c8f9-416b3e1ef108"
        ).value = "";
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_893e6618-32d5-61c0-bbd8-208b5a3ba32d"
        ).value = "";
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_919539a4-1c3a-d25c-e08e-b15e4b334524_Picture"
        ).src = "/Runtime/Image.ashx?ImID=";

        console.log("function is end");
      } else {
        var expDate = getFormatedDateOfBirth(data.ExpiryDate); //วันหมดอาุยุบัตร
        let preN = data.TitleNameTh;
        var repreN = preN.replace(/น.ส./g, "นางสาว"); //คำนำหน้า
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_6374425a-f47b-8396-b3f8-d3246e96583f"
        ).value = data.CitizenNo;
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_2e1f70d8-c270-b441-c3d2-fb7f3a055413"
        ).value = repreN;
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_c9e08b1b-561b-b643-7e5b-8b17ea18c2a9"
        ).value = data.FirstNameTh;
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_ab669fbf-e964-4cce-b904-498fcbe9762c"
        ).value = data.LastNameTh;
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_ee635376-333b-2191-c035-288e2f1fd500"
        ).value = expDate;
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_1766a43f-ebd3-90e2-74ec-fc6f0a1d6a68"
        ).value = "";
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_a6b9c865-193d-1432-fb4d-1e1602981e4f"
        ).value = data.HomeNo;
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_defeb7d4-27ef-f765-20e6-de2633eb2e60"
        ).value = data.Road;
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_33a76390-0da2-d76d-1bb9-3263298fbc7b"
        ).value = data.Amphur;
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_57f0ff5c-de5c-f8ef-4331-2e7a359787fa"
        ).value = data.Moo.substring(7);
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_92788352-da37-9f12-40f7-5715edeea5e2"
        ).value = data.Tumbol;
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_59429f9f-6657-6966-9ebd-89aa19a4774d"
        ).value = data.Province;
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_03e18d21-17f4-57f7-c8f9-416b3e1ef108"
        ).value = data.FirstNameEn;
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_893e6618-32d5-61c0-bbd8-208b5a3ba32d"
        ).value = data.LastNameEn;
        document.getElementById(
          "16a404c4-756e-eac5-49ef-49708eb66b2d_919539a4-1c3a-d25c-e08e-b15e4b334524_Picture"
        ).src = "data:image/png;base64," + data.Photo;

        console.log("function is end");
      }
    },
  });
}
function getFormatedDateOfBirth(expDate) {
  var yearExpire = expDate.slice(0, 4);
  var monthExpire = expDate.slice(4, 6);
  var dateExpire = expDate.slice(6, 8);

  return dateExpire + "/" + monthExpire + "/" + yearExpire;
}
setInterval(load_data, 2000);
