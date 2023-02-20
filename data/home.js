const idinput = [
    '5fc85ea1-4f52-3aec-bae9-7e7bbeaf1345_b3d4c63f-c43e-945e-ee32-0885354bfc59', //บัตรปะชาชน
    '5fc85ea1-4f52-3aec-bae9-7e7bbeaf1345_f65360d2-a7b0-be76-10c3-136ee57eb769', //ชื่อ
    '5fc85ea1-4f52-3aec-bae9-7e7bbeaf1345_f2de37ae-b525-c4f1-d67c-c0e5bdf475ca', //นามสกุล
    '5fc85ea1-4f52-3aec-bae9-7e7bbeaf1345_a30dd292-1345-cdd1-950a-952aaa40aaeb', //ที่อยู่
    '5fc85ea1-4f52-3aec-bae9-7e7bbeaf1345_bdc18b82-ed95-cefa-e686-2fcfdb84beee', //หมู่
    '5fc85ea1-4f52-3aec-bae9-7e7bbeaf1345_66090592-7695-54fc-c148-013b4111d41a', //ถนน
    '5fc85ea1-4f52-3aec-bae9-7e7bbeaf1345_1ca923f6-802c-9201-df0b-6e5f6c12f6cf', //ตำบล
    '5fc85ea1-4f52-3aec-bae9-7e7bbeaf1345_147346c7-b882-78f3-39d7-db8292313554', //อำเภอ
    '5fc85ea1-4f52-3aec-bae9-7e7bbeaf1345_01d897b9-806e-3e0d-eeee-10eaf72c706a', //จังหวัด
    '5fc85ea1-4f52-3aec-bae9-7e7bbeaf1345_ed8fd95d-4496-c2bb-a8ed-fbcdd8aa79e2' //คำนำหน้า
];


document.getElementById(
    "5fc85ea1-4f52-3aec-bae9-7e7bbeaf1345_53efa043-9a2a-a0c7-9027-ba94676cdf6d_ToolbarButton"
).onclick = function () {
    load_data();
};
function load_data() {
    console.log('function is working')

    fetch('https://local.saksiam.co.th:9998/get_data',
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "GET",
                "Access-Control-Request-Private-Network": "true",
            }
        }
    ).then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json)

        if (json.status == "inactive") {

        } else {
            GetFnameTH(json.CMD_THFULLNAME)
            Getaddress(json.CMD_ADDRESS)

            document.getElementById(idinput[0]).focus();
            document.getElementById(idinput[0]).value = json.CID;
        }
    })
}

function GetFnameTH(FnameTH) {
    // console.log(FnameTH)
    let txt = FnameTH
    const nameth = txt.split('#');
    // console.log(nameth[1])

    document.getElementById(idinput[9]).focus();
    document.getElementById(idinput[9]).value = nameth[0];

    document.getElementById(idinput[1]).focus();
    document.getElementById(idinput[1]).value = nameth[1];

    document.getElementById(idinput[2]).focus();
    document.getElementById(idinput[2]).value = nameth[3];
}

// address[0] == เลขที่
// address[1] == หมู่ที่
// address[2] == 
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

    document.getElementById(idinput[3]).focus();
    document.getElementById(idinput[3]).value = address[0];

    document.getElementById(idinput[5]).focus();
    document.getElementById(idinput[5]).value = Roads;

    document.getElementById(idinput[7]).focus();
    document.getElementById(idinput[7]).value = address[6].substring(5);

    document.getElementById(idinput[4]).focus();
    document.getElementById(idinput[4]).value = address[1].substring(8);

    document.getElementById(idinput[6]).focus();
    document.getElementById(idinput[6]).value = address[5].substring(4);


    document.getElementById(idinput[8]).focus();
    document.getElementById(idinput[8]).value = address[7].substring(7);
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