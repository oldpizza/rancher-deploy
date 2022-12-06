const idinput = [
  "98d29eb7-7464-db14-3dd6-007095a4cd74_337d88f3-70f1-b9cc-0682-7e6646d88226", //เน€เธฅเธเธเธฑเธ•เธฃเธเธฃเธฐเธเธณเธ•เธฑเธงเธเธฃเธฐเธเธฒเธเธ
  "98d29eb7-7464-db14-3dd6-007095a4cd74_860491af-79df-b6ed-66c3-c7c9132e1dc2", //เธเธณเธเธณเธซเธเนเธฒ
  "98d29eb7-7464-db14-3dd6-007095a4cd74_2437ba59-0172-e3be-043c-8d13ee9617c5", //เธเธทเนเธญ
  "98d29eb7-7464-db14-3dd6-007095a4cd74_32e05691-7af4-0e90-3d44-916618fca2e6", //เธเธทเนเธญ เธชเธเธธเธฅ
  "98d29eb7-7464-db14-3dd6-007095a4cd74_d5fd6725-83c5-b13d-0249-88865551881d", //เธงเธฑเธเธซเธกเธ”เธญเธฒเธขเธธเธเธฑเธ•เธฃ
  "98d29eb7-7464-db14-3dd6-007095a4cd74_05405d63-9b83-55ff-e97e-c2efaed99a9a", //เธเนเธฒเธเน€เธฅเธเธ—เธตเน
  "98d29eb7-7464-db14-3dd6-007095a4cd74_41e0e6a9-09cf-fc0c-6aba-53347c51cfe9", //เธ–เธเธ
  "98d29eb7-7464-db14-3dd6-007095a4cd74_386be4e3-7f21-777e-8371-5d4fb84b46ab", //เธญเธณเน€เธ เธญ
  "98d29eb7-7464-db14-3dd6-007095a4cd74_e1d2e017-0694-578d-282f-c338970e43c3", //เธซเธกเธนเน
  "98d29eb7-7464-db14-3dd6-007095a4cd74_fdb589e7-4664-ae42-9149-83f0f409b430", //เธ•เธณเธเธฅ
  "98d29eb7-7464-db14-3dd6-007095a4cd74_0556ee07-0046-5ee0-d82d-ece4af4e0a1b", //เธเธฑเธเธซเธงเธฑเธ”
  "98d29eb7-7464-db14-3dd6-007095a4cd74_abf591d7-e82e-517c-a1b9-132b4ab34e28", //เธเธทเนเธญEH
  "98d29eb7-7464-db14-3dd6-007095a4cd74_5abb7be6-6b36-d29b-a382-be4d7bdd1e9f", //เธเธทเนเธญเธเธฒเธกเธชเธเธธเธฅEN
  "98d29eb7-7464-db14-3dd6-007095a4cd74_cd6a2146-cb4e-1369-e962-975cd70d5bdf", //เธงเธฑเธเน€เธเธดเธ”
  "98d29eb7-7464-db14-3dd6-007095a4cd74_de95905e-8412-f297-81e1-3ec2a65792be_Picture", //เธฃเธนเธเธ เธฒเธ
  "98d29eb7-7464-db14-3dd6-007095a4cd74_a4b2e9e7-84c2-126d-872a-7d2e86910c63", //inputเธฃเธนเธเธ เธฒเธ
  "98d29eb7-7464-db14-3dd6-007095a4cd74_a467810d-bc7d-47ab-ff07-84456edb53d9",
];


document.getElementById(
  "98d29eb7-7464-db14-3dd6-007095a4cd74_910170ba-6fdf-6b74-d8af-0f45f1087963_ToolbarButton"
).onclick = function () {
  load_data();
};

function inputhide() {
  document.getElementById(idinput[0]).style.visibility = 'hidden';

  document.getElementById(idinput[1]).style.visibility = 'hidden';

  document.getElementById(idinput[2]).style.visibility = 'hidden';

  document.getElementById(idinput[3]).style.visibility = 'hidden';

  document.getElementById(idinput[4]).style.visibility = 'hidden';

  document.getElementById(idinput[5]).style.visibility = "hidden";

  document.getElementById(idinput[6]).style.visibility = "hidden";

  document.getElementById(idinput[7]).style.visibility = "hidden";

  document.getElementById(idinput[8]).style.visibility = "hidden";

  document.getElementById(idinput[9]).style.visibility = "hidden";

  document.getElementById(idinput[10]).style.visibility = "hidden";

  document.getElementById(idinput[11]).style.visibility = "hidden";

  document.getElementById(idinput[12]).style.visibility = "hidden";

  document.getElementById(idinput[13]).style.visibility = "hidden";

  document.getElementById(idinput[14]).style.visibility = "hidden";

  document.getElementById(idinput[15]).style.visibility = "hidden";

  document.getElementById(idinput[16]).style.visibility = "hidden";
  console.log("function is hide");
}

function load_data() {
  console.log("function is working");

  fetch("https://local.saksiam.co.th.:9998/get_data",
      {
          method: "GET",
          mode: "cors",
          // cache: "no-cache",
          //   credentials: 'include',
          headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "*",
              "Access-Control-Allow-Methods": "GET",
              "Access-Control-Request-Private-Network": "true",
              // " Access-Control-Allow-Private-Network": "true",
          },
      }
  ).then(function (response) {
      return response.json();
  }).then(function (json) {
      console.log(json.status)

      if (json.status == "inactive") {
          document.getElementById(idinput[0]).style.visibility = 'hidden';

          document.getElementById(idinput[1]).style.visibility = 'hidden';

          document.getElementById(idinput[2]).style.visibility = 'hidden';

          document.getElementById(idinput[3]).style.visibility = 'hidden';

          document.getElementById(idinput[4]).style.visibility = 'hidden';

          document.getElementById(idinput[5]).style.visibility = "hidden";

          document.getElementById(idinput[6]).style.visibility = "hidden";

          document.getElementById(idinput[7]).style.visibility = "hidden";

          document.getElementById(idinput[8]).style.visibility = "hidden";

          document.getElementById(idinput[9]).style.visibility = "hidden";

          document.getElementById(idinput[10]).style.visibility = "hidden";

          document.getElementById(idinput[11]).style.visibility = "hidden";

          document.getElementById(idinput[12]).style.visibility = "hidden";

          document.getElementById(idinput[13]).style.visibility = "hidden";

          document.getElementById(idinput[14]).style.visibility = "hidden";

          document.getElementById(idinput[15]).style.visibility = "hidden";

          document.getElementById(idinput[16]).style.visibility = "hidden";

          console.log("function is end");
      } else {
          // var FnameTH = 
          GetFnameTH(json.CMD_THFULLNAME)
          // var FnameEN = 
          GetFnameEN(json.CMD_ENFULLNAME)
          var expDate = GetFormatedDateOfBirth(json.CMD_EXPIRE);
          Getaddress(json.CMD_ADDRESS)

          document.getElementById(idinput[0]).style.visibility = "visible";
          document.getElementById(idinput[0]).focus();
          document.getElementById(idinput[0]).value = json.CID;
          document.getElementById(idinput[0]).disabled = true;

          document.getElementById(idinput[4]).style.visibility = "visible";
          document.getElementById(idinput[4]).focus();
          document.getElementById(idinput[4]).value = expDate;
          document.getElementById(idinput[4]).disabled = true;

          document.getElementById(idinput[13]).style.visibility = "visible";
          document.getElementById(idinput[13]).focus();
          document.getElementById(idinput[13]).value = json.CMD_BIRTH;
          document.getElementById(idinput[13]).disabled = true;

          document.getElementById(idinput[14]).style.visibility = "visible";
          document.getElementById(idinput[14]).focus();
          document.getElementById(idinput[14]).src =
              "data:image/png;base64," + json.CMD_PHOTO;
          document.getElementById(idinput[14]).disabled = true;

          document.getElementById(idinput[15]).style.visibility = "visible";
          document.getElementById(idinput[15]).focus();
          document.getElementById(idinput[15]).value = json.CMD_PHOTO;
          //  document.getElementById(idinput[15]).disabled = true;

          document.getElementById(idinput[16]).style.visibility = "visible";
          document.getElementById(idinput[16]).focus();

          console.log("function is end");
      }
  })
}

function GetFnameTH(FnameTH) {
  // console.log(FnameTH)
  let txt = FnameTH
  const nameth = txt.split('#');
  // console.log(nameth[1])

  document.getElementById(idinput[1]).style.visibility = "visible";
  document.getElementById(idinput[1]).focus();
  document.getElementById(idinput[1]).value = nameth[0];
  document.getElementById(idinput[1]).disabled = true;

  document.getElementById(idinput[2]).style.visibility = "visible";
  document.getElementById(idinput[2]).focus();
  document.getElementById(idinput[2]).value = nameth[1];

  document.getElementById(idinput[2]).disabled = true;

  document.getElementById(idinput[3]).style.visibility = "visible";
  document.getElementById(idinput[3]).focus();
  document.getElementById(idinput[3]).value = nameth[3];
  document.getElementById(idinput[3]).disabled = true;
}

function GetFnameEN(FnameEN) {
  let txt = FnameEN
  const nameen = txt.split('#');

  document.getElementById(idinput[11]).style.visibility = "visible";
  document.getElementById(idinput[11]).focus();
  document.getElementById(idinput[11]).value = nameen[1];
  document.getElementById(idinput[11]).disabled = true;

  document.getElementById(idinput[12]).style.visibility = "visible";
  document.getElementById(idinput[12]).focus();
  document.getElementById(idinput[12]).value = nameen[3];
  document.getElementById(idinput[12]).disabled = true;
}

function GetFormatedDateOfBirth(expDate) {
  if (expDate == 9999999) {
      var yearExpire = 9999;
      var monthExpire = 12;
      var dateExpire = 31;
      return dateExpire + "/" + monthExpire + "/" + yearExpire;
  } else {
      var yearExpire = expDate.slice(0, 4) - 543;
      var monthExpire = expDate.slice(4, 6);
      var dateExpire = expDate.slice(6, 8);

      return dateExpire + "/" + monthExpire + "/" + yearExpire;
  }
}

function Getaddress(Address) {
  let txt = Address
  const address = txt.split('#');
  var Roads = isNull(address[3]);

  document.getElementById(idinput[5]).style.visibility = "visible";
  document.getElementById(idinput[5]).focus();
  document.getElementById(idinput[5]).value = address[0];
  document.getElementById(idinput[5]).disabled = true;

  document.getElementById(idinput[6]).style.visibility = "visible";
  document.getElementById(idinput[6]).focus();
  document.getElementById(idinput[6]).value = Roads;
  document.getElementById(idinput[6]).disabled = true;

  document.getElementById(idinput[7]).style.visibility = "visible";
  document.getElementById(idinput[7]).focus();
  document.getElementById(idinput[7]).value = address[6].substring(5);
  document.getElementById(idinput[7]).disabled = true;

  document.getElementById(idinput[8]).style.visibility = "visible";
  document.getElementById(idinput[8]).focus();
  document.getElementById(idinput[8]).value = address[1].substring(8);
  document.getElementById(idinput[8]).disabled = true;

  document.getElementById(idinput[9]).style.visibility = "visible";
  document.getElementById(idinput[9]).focus();
  document.getElementById(idinput[9]).value = address[5].substring(4);
  document.getElementById(idinput[9]).disabled = true;


  document.getElementById(idinput[10]).style.visibility = "visible";
  document.getElementById(idinput[10]).focus();
  document.getElementById(idinput[10]).value = address[7].substring(7);
  document.getElementById(idinput[10]).disabled = true;
}

function isNull(Roads) {
  // console.log(Roads)
  if (Roads == "") {
      var nullroad = "-";
      return nullroad;
  } else {
      return Roads;
  }
}

inputhide()