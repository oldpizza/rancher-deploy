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
          "3674b278-8bb0-531f-c614-b60361240658_99e39c73-3e97-42d3-836e-094a5718b85b"
        ).value = '';
        document.getElementById(
          "3674b278-8bb0-531f-c614-b60361240658_a3ca9a0b-12af-453f-9e76-fde1f6dd3d3b"
        ).value = '';
        document.getElementById(
          "3674b278-8bb0-531f-c614-b60361240658_19a58dca-4c1e-4bbd-b138-2cef954e6f49"
        ).value = '';
        document.getElementById(
          "3674b278-8bb0-531f-c614-b60361240658_f866bd7e-befc-4903-aec0-bc5b70645e9a"
        ).value = '';
        document.getElementById(
          "3674b278-8bb0-531f-c614-b60361240658_7c3099db-0d23-4f80-956c-a42897cca1b4"
        ).value = '';
        document.getElementById(
          "3674b278-8bb0-531f-c614-b60361240658_b1b437bd-e327-4741-a0fb-2d05b30c260d"
        ).value = '';
        document.getElementById(
          "3674b278-8bb0-531f-c614-b60361240658_be700b56-d4da-4806-9d0c-26d44ae60c84"
        ).value = '';
        document.getElementById(
          "3674b278-8bb0-531f-c614-b60361240658_0c529f50-e0dd-495c-89d7-a7543abd2a5a"
        ).value = '';
        document.getElementById(
          "3674b278-8bb0-531f-c614-b60361240658_a58e8d56-9843-44fc-8b67-569d397529f8"
        ).value = '';
        document.getElementById(
          "3674b278-8bb0-531f-c614-b60361240658_1ff81879-fdc8-40ba-aaea-3e6b550a5221"
        ).value = '';
        document.getElementById(
          "3674b278-8bb0-531f-c614-b60361240658_0d21b1b0-d701-4fc8-8a2e-33fa38c8a365"
        ).value = '';
        document.getElementById(
          "3674b278-8bb0-531f-c614-b60361240658_f9838f19-429b-4d5a-8922-43122a97c8aa"
        ).value = '';
        document.getElementById(
          "3674b278-8bb0-531f-c614-b60361240658_fe0995a5-e23b-42a2-b3bd-f3b4a18ae66e"
        ).value = '';
        document.getElementById(
          "3674b278-8bb0-531f-c614-b60361240658_2741992e-470f-7740-cbc7-83bc4fc7dd86_Picture"
        ).src = "/Runtime/Image.ashx?ImID=";

        console.log("function is end");
      } else {
        var expDate = getFormatedDateOfBirth(data.ExpiryDate); //วันหมดอาุยุบัตร
        let preN = data.TitleNameTh;
        var repreN = preN.replace(/น.ส./g, "นางสาว"); //คำนำหน้า
        document.getElementById(
          "3674b278-8bb0-531f-c614-b60361240658_99e39c73-3e97-42d3-836e-094a5718b85b"
        ).value = data.CitizenNo;
        document.getElementById(
          "3674b278-8bb0-531f-c614-b60361240658_a3ca9a0b-12af-453f-9e76-fde1f6dd3d3b"
        ).value = repreN;
        document.getElementById(
          "3674b278-8bb0-531f-c614-b60361240658_19a58dca-4c1e-4bbd-b138-2cef954e6f49"
        ).value = data.FirstNameTh;
        document.getElementById(
          "3674b278-8bb0-531f-c614-b60361240658_f866bd7e-befc-4903-aec0-bc5b70645e9a"
        ).value = data.LastNameTh;
        document.getElementById(
          "3674b278-8bb0-531f-c614-b60361240658_7c3099db-0d23-4f80-956c-a42897cca1b4"
        ).value = expDate;
        document.getElementById(
          "3674b278-8bb0-531f-c614-b60361240658_b1b437bd-e327-4741-a0fb-2d05b30c260d"
        ).value = data.HomeNo;
        document.getElementById(
          "3674b278-8bb0-531f-c614-b60361240658_be700b56-d4da-4806-9d0c-26d44ae60c84"
        ).value = data.Road;
        document.getElementById(
          "3674b278-8bb0-531f-c614-b60361240658_0c529f50-e0dd-495c-89d7-a7543abd2a5a"
        ).value = data.Amphur;
        document.getElementById(
          "3674b278-8bb0-531f-c614-b60361240658_a58e8d56-9843-44fc-8b67-569d397529f8"
        ).value = data.Moo.substring(7);
        document.getElementById(
          "3674b278-8bb0-531f-c614-b60361240658_1ff81879-fdc8-40ba-aaea-3e6b550a5221"
        ).value = data.Tumbol;
        document.getElementById(
          "3674b278-8bb0-531f-c614-b60361240658_0d21b1b0-d701-4fc8-8a2e-33fa38c8a365"
        ).value = data.Province;
        document.getElementById(
          "3674b278-8bb0-531f-c614-b60361240658_f9838f19-429b-4d5a-8922-43122a97c8aa"
        ).value = data.FirstNameEn;
        document.getElementById(
          "3674b278-8bb0-531f-c614-b60361240658_fe0995a5-e23b-42a2-b3bd-f3b4a18ae66e"
        ).value = data.LastNameEn;
        document.getElementById(
          "3674b278-8bb0-531f-c614-b60361240658_2741992e-470f-7740-cbc7-83bc4fc7dd86_Picture"
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
