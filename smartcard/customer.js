const idinput = [
    "e8d81019-03b4-4396-bf0b-856e51edeea7_eeb34b7c-23a1-49ae-8887-42820c275428", // เลขบัตรประจำตัว
    "e8d81019-03b4-4396-bf0b-856e51edeea7_26e3c4c8-69c8-49f5-89c5-72904b90dad0_TextBox", // วันเกิด
    "e8d81019-03b4-4396-bf0b-856e51edeea7_e1a08241-60a7-4f47-b641-899a132820c7_TextBox", //วันออกบัตร
    "e8d81019-03b4-4396-bf0b-856e51edeea7_9c5dd8cf-b3cf-42f0-8985-34c2ccfb0959_TextBox", // วันหมดอายุบัตร
    "c66f0566-bff3-49d8-bef5-64460f6108ea_a5c60dab-9c59-4a67-ae65-c8ef295233c1", // ชื่อ
    "c66f0566-bff3-49d8-bef5-64460f6108ea_b0edfa1f-a977-443d-ae0e-f78312042b87", // นามสกุล
    "a8a5ecc1-7a50-49ae-8b9f-0b2b34e214d8_c827d296-9ee5-421a-beb3-0376b8cea65b", //เลขที่
    "a8a5ecc1-7a50-49ae-8b9f-0b2b34e214d8_063026ec-bd67-4f43-b4dc-be809686e8c3", // หมู่
    "a8a5ecc1-7a50-49ae-8b9f-0b2b34e214d8_a0c03ebd-e999-428e-b095-05a722189076", //ซอย
    "a8a5ecc1-7a50-49ae-8b9f-0b2b34e214d8_7dabbe21-5e28-4414-a6a4-3d8cc4761384", //ถนน
    "a8a5ecc1-7a50-49ae-8b9f-0b2b34e214d8_4d43c6c3-ad79-44ad-b4e0-dff49c0285e0", // ตำบล
    "a8a5ecc1-7a50-49ae-8b9f-0b2b34e214d8_b6766f8f-a5bf-dfa7-dd71-584941221a59", // อำเภอ
    "a8a5ecc1-7a50-49ae-8b9f-0b2b34e214d8_84849231-1860-cebb-8a1f-cf5d5ea40c7f", // จังหวัด
    "fac4cfa6-e7ce-4987-9252-c00b262fe085_e7af9302-2d43-404f-97d3-320887a687ee",  // ที่อยู่1 13
    "fac4cfa6-e7ce-4987-9252-c00b262fe085_e4a5172a-1e34-48db-a3eb-67f2286e8806", // หมู่1
    "fac4cfa6-e7ce-4987-9252-c00b262fe085_f3d8eb96-28fa-4a4c-a854-36caaed19a4a", // ซอย1
    "fac4cfa6-e7ce-4987-9252-c00b262fe085_98cdeaba-1463-4766-a0bd-9fd1e7468abf", //ถนนๅ1
    "fac4cfa6-e7ce-4987-9252-c00b262fe085_29dedd81-2632-46e5-8d91-f965bee2fc57", // ตำบล1
    "fac4cfa6-e7ce-4987-9252-c00b262fe085_2849ed18-3767-4976-bd5d-d9de5a5b1418", // อำเภอ1
    "fac4cfa6-e7ce-4987-9252-c00b262fe085_015965db-faf8-4457-a98c-6d79ffe89ddb", // จังหวัด1
];

document.getElementById(
    "00000000-0000-0000-0000-000000000000_143d4cf9-2a07-83c6-7a31-492e01892636"
).onclick = function () {
    load_data();
};

function load_data() {
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

        GetGenDer(json.CMD_GENDER)
        GetFnameTH(json.CMD_THFULLNAME)
        Getaddress(json.CMD_ADDRESS)

        var BirthDate = getFormatedDateOfBirth(json.CMD_BIRTH); //วันเกิด
        var IssueDate = getFormatedDateOfIssue(json.CMD_ISSUE); //วันที่ออกบัตร
        var expDate = getFormatedDateOfBirth(json.CMD_EXPIRE); //วันที่บัตรหมดอายุ

        document.getElementById(idinput[0]).focus();
        document.getElementById(idinput[0]).value = json.CID;

        document.getElementById(idinput[1]).focus();
        document.getElementById(idinput[1]).value = BirthDate;

        document.getElementById(idinput[2]).focus();
        document.getElementById(idinput[2]).value = IssueDate;

        document.getElementById(idinput[3]).focus();
        document.getElementById(idinput[3]).value = expDate;
    });
}

function getFormatedDateOfBirth(BirthDate) {
    var yearExpire = BirthDate.slice(0, 4) + 543;
    var monthExpire = BirthDate.slice(4, 6);
    var dateExpire = BirthDate.slice(6, 8);

    return dateExpire + "/" + monthExpire + "/" + yearExpire;
}

function getFormatedDateOfIssue(IssueDate) {
    var yearIssue = IssueDate.slice(0, 4);
    var monthIssue = IssueDate.slice(4, 6);
    var dateIssue = IssueDate.slice(6, 8);

    return dateIssue + "/" + monthIssue + "/" + yearIssue;
}

function getFormatedDateOfBirth(expDate) {
    var yearExpire = expDate.slice(0, 4);
    var monthExpire = expDate.slice(4, 6);
    var dateExpire = expDate.slice(6, 8);

    return dateExpire + "/" + monthExpire + "/" + yearExpire;
}

function GetGenDer(GenDer) {
    if (GenDer == '1') {
        console.log('1')
        // document.getElementById('e8d81019-03b4-4396-bf0b-856e51edeea7_6dddfcc4-4464-4526-98aa-33971faae135_radioButtonItem_0').focus();
        document.getElementById('e8d81019-03b4-4396-bf0b-856e51edeea7_6dddfcc4-4464-4526-98aa-33971faae135_radioButtonItem_0').checked = true
        // document.getElementById('e8d81019-03b4-4396-bf0b-856e51edeea7_6dddfcc4-4464-4526-98aa-33971faae135_radioButtonItem_1').focus();
        // document.getElementById('e8d81019-03b4-4396-bf0b-856e51edeea7_6dddfcc4-4464-4526-98aa-33971faae135_radioButtonItem_1').checked = false
    }
    else {
        console.log('2')
        // document.getElementById('e8d81019-03b4-4396-bf0b-856e51edeea7_6dddfcc4-4464-4526-98aa-33971faae135_radioButtonItem_0').focus();
        // document.getElementById('e8d81019-03b4-4396-bf0b-856e51edeea7_6dddfcc4-4464-4526-98aa-33971faae135_radioButtonItem_0').checked = false
        // document.getElementById('e8d81019-03b4-4396-bf0b-856e51edeea7_6dddfcc4-4464-4526-98aa-33971faae135_radioButtonItem_1').focus();
        document.getElementById('e8d81019-03b4-4396-bf0b-856e51edeea7_6dddfcc4-4464-4526-98aa-33971faae135_radioButtonItem_1').checked = true
    }
}

function GetFnameTH(FnameTH) {
    // console.log(FnameTH)
    let txt = FnameTH
    const nameth = txt.split('#');
    // console.log(nameth[1])

    // document.getElementById(idinput[1]).focus();
    // document.getElementById(idinput[1]).value = nameth[0];

    document.getElementById(idinput[4]).focus();
    document.getElementById(idinput[4]).value = nameth[1];

    document.getElementById(idinput[5]).focus();
    document.getElementById(idinput[5]).value = nameth[3];

}
// address[0] == เลขที่
// address[1] == หมู่ที่
// address[2] == ถนน
// address[3] == ซอย
// address[4] == 
// address[5] == ตำบล
// address[6] == อำเภอ
// address[7] == จังหวัด
//

function Getaddress(Address) {
    let txt = Address
    const address = txt.split('#');
    var Roads = isNull(address[2]);

    document.getElementById(idinput[6]).focus();
    document.getElementById(idinput[6]).value = address[0];

    document.getElementById(idinput[9]).focus();
    document.getElementById(idinput[9]).value = Roads;

    document.getElementById(idinput[11]).focus();
    document.getElementById(idinput[11]).value = address[6].substring(5);

    document.getElementById(idinput[7]).focus();
    document.getElementById(idinput[7]).value = address[1].substring(8);

    document.getElementById(idinput[10]).focus();
    document.getElementById(idinput[10]).value = address[5].substring(4);

    document.getElementById(idinput[12]).focus();
    document.getElementById(idinput[12]).value = address[7].substring(7);
    //
    //
    document.getElementById(idinput[13]).focus();
    document.getElementById(idinput[13]).value = address[0];

    document.getElementById(idinput[16]).focus();
    document.getElementById(idinput[16]).value = Roads;

    document.getElementById(idinput[18]).focus();
    document.getElementById(idinput[18]).value = address[6].substring(5);

    document.getElementById(idinput[14]).focus();
    document.getElementById(idinput[14]).value = address[1].substring(8);

    document.getElementById(idinput[17]).focus();
    document.getElementById(idinput[17]).value = address[5].substring(4);

    document.getElementById(idinput[19]).focus();
    document.getElementById(idinput[19]).value = address[7].substring(7);

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