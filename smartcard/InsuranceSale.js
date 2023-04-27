const idinput = [
    "fd65acce-3794-e98b-239d-f36fae07861e_eeb34b7c-23a1-49ae-8887-42820c275428", //เลขบัตรประจำตัวประชาชน
    "fd65acce-3794-e98b-239d-f36fae07861e_26e3c4c8-69c8-49f5-89c5-72904b90dad0_TextBox", //วันเกิด
    "fd65acce-3794-e98b-239d-f36fae07861e_e1a08241-60a7-4f47-b641-899a132820c7_TextBox", //วันที่ออกบัตร
    "fd65acce-3794-e98b-239d-f36fae07861e_9c5dd8cf-b3cf-42f0-8985-34c2ccfb0959_TextBox", //วันที่หมดอายุบัตร
    "6cbf406c-0010-143a-5c26-fa114861f686_a5c60dab-9c59-4a67-ae65-c8ef295233c1", //ชื่อ
    "6cbf406c-0010-143a-5c26-fa114861f686_b0edfa1f-a977-443d-ae0e-f78312042b87", //นามสกุล
    "d428b545-5309-cce3-7ef1-b5bc43cb2b34_c827d296-9ee5-421a-beb3-0376b8cea65b", //เลขที่
    "d428b545-5309-cce3-7ef1-b5bc43cb2b34_063026ec-bd67-4f43-b4dc-be809686e8c3", //หมู่
    "d428b545-5309-cce3-7ef1-b5bc43cb2b34_a0c03ebd-e999-428e-b095-05a722189076", //ซอย
    "d428b545-5309-cce3-7ef1-b5bc43cb2b34_7dabbe21-5e28-4414-a6a4-3d8cc4761384", //ถนน
    "d428b545-5309-cce3-7ef1-b5bc43cb2b34_4d43c6c3-ad79-44ad-b4e0-dff49c0285e0", //ตำบล
    "d428b545-5309-cce3-7ef1-b5bc43cb2b34_b6766f8f-a5bf-dfa7-dd71-584941221a59", //อำเภอ
    "d428b545-5309-cce3-7ef1-b5bc43cb2b34_84849231-1860-cebb-8a1f-cf5d5ea40c7f", //จังหวัด
    "6cbf406c-0010-143a-5c26-fa114861f686_d9ed639a-8def-433b-88fe-3b7ddbef93f8", //คำนำหน้า
];

document.getElementById(
    "00000000-0000-0000-0000-000000000000_a95246bf-e45f-3dd8-f90a-f1a64402fae9"
).onclick = function () {
    load_data();
};

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
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {

            var Roads = isNullRoads(json.Road);
            var Sois = isNullSois(json.Soi);
            var Moos = isNullMoos(json.Moo.substring(7));
            let preN = json.TitleNameTh;
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

            document.getElementById(idinput[4]).focus();
            document.getElementById(idinput[4]).value = json.FirstNameTh;

            document.getElementById(idinput[5]).focus();
            document.getElementById(idinput[5]).value = json.LastNameTh;

            document.getElementById(idinput[6]).focus();
            document.getElementById(idinput[6]).value = json.HomeNo;

            document.getElementById(idinput[7]).focus();
            document.getElementById(idinput[7]).value = Moos;

            document.getElementById(idinput[8]).focus();
            document.getElementById(idinput[8]).value = Sois;

            document.getElementById(idinput[9]).focus();
            document.getElementById(idinput[9]).value = Roads;

            document.getElementById(idinput[10]).focus();
            document.getElementById(idinput[10]).value = json.Tumbol;

            document.getElementById(idinput[11]).focus();
            document.getElementById(idinput[11]).value = json.Amphur;

            document.getElementById(idinput[12]).focus();
            document.getElementById(idinput[12]).value = json.Province;

            document.getElementById(idinput[13]).focus();
            document.getElementById(idinput[13]).innerHTML = repreN;

            var Gender = isNullRoads(json.CMD_GENDER);

            if (Gender == "1") {
                console.log("1")
                document.getElementById("fd65acce-3794-e98b-239d-f36fae07861e_6dddfcc4-4464-4526-98aa-33971faae135_radioButtonItem_0_base").focus();
                document.getElementById("fd65acce-3794-e98b-239d-f36fae07861e_6dddfcc4-4464-4526-98aa-33971faae135_radioButtonItem_0_base").checked = true;
            } else {
                console.log("2")
                document.getElementById("fd65acce-3794-e98b-239d-f36fae07861e_6dddfcc4-4464-4526-98aa-33971faae135_radioButtonItem_1_base").focus();
                document.getElementById("fd65acce-3794-e98b-239d-f36fae07861e_6dddfcc4-4464-4526-98aa-33971faae135_radioButtonItem_1_base").checked = true;

            }

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
    if (expDate == 9999999) {
        var yearExpire = 9999;
        var monthExpire = 12;
        var dateExpire = 31;
        return dateExpire + "/" + monthExpire + "/" + yearExpire;
    } else {
        var yearExpire = expDate.slice(0, 4);
        var monthExpire = expDate.slice(4, 6);
        var dateExpire = expDate.slice(6, 8);

        return dateExpire + "/" + monthExpire + "/" + yearExpire;
    }
}

function isNullRoads(Roads) {
    if (Roads == "") {
        var nullroad = "-";
        return nullroad;
    } else {
        return Roads;
    }
}

function isNullSois(Sois) {
    if (Sois == "") {
        var nullsoi = "-";
        return nullsoi;
    } else {
        return Sois;
    }
}

function isNullMoos(Moos) {
    if (Moos == "") {
        var nullmoo = "-";
        return nullmoo;
    } else {
        return Moos;
    }
}

function getFormatedDateOfBirth(BirthDate) {
    var yearExpire = BirthDate.slice(0, 4);
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
