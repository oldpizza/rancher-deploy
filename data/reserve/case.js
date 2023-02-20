const idinput = [
    '1ce03232-5edc-54ad-176a-f7892853fbc3_2bfb0c3c-8166-45da-8a23-febdfae13ba3', //บัตรปะชาชน
    '1ce03232-5edc-54ad-176a-f7892853fbc3_3c802fad-198d-4111-ace5-e6e6cd48f46a', //ชื่อ
    '1ce03232-5edc-54ad-176a-f7892853fbc3_c2171907-afc3-48a6-970b-e963daeebb2f', //นามสกุล
    '1ce03232-5edc-54ad-176a-f7892853fbc3_aad4bf19-dd28-45db-8e49-ebcd92c082e7', //ที่อยู่
    '1ce03232-5edc-54ad-176a-f7892853fbc3_dac93b7f-5f66-419a-b948-644108aa2bd8', //หมู่
    '1ce03232-5edc-54ad-176a-f7892853fbc3_bca5e948-c258-48b6-9fbf-7dd7d2e1e24c', //ถนน
    '1ce03232-5edc-54ad-176a-f7892853fbc3_e031eefb-373f-4df1-acfb-1a82fc4bf6a3', //ตำบล
    '1ce03232-5edc-54ad-176a-f7892853fbc3_136a4e12-7347-4a20-b6e6-de0f5841712e', //อำเภอ
    '1ce03232-5edc-54ad-176a-f7892853fbc3_3eba5869-02af-4c72-8c7e-aa6f52716b86', //จังหวัด
];


document.getElementById(
    "1ce03232-5edc-54ad-176a-f7892853fbc3_7b896526-49db-b32f-bab6-2316b0b3fdce_ToolbarButton"
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

    // document.getElementById(idinput[1]).focus();
    // document.getElementById(idinput[1]).value = nameth[0];

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