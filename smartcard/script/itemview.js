const idinput = [
    "00000000-0000-0000-0000-000000000000_14b6a755-1792-e54a-a088-e80052ba9232", //คำนำหน้า
    "00000000-0000-0000-0000-000000000000_3220969b-452b-660d-1e67-764160938769", //ชื่อ
    "00000000-0000-0000-0000-000000000000_024430f2-edd5-6a9e-1f8c-af577a19e7e9", //นามสกุล
    "00000000-0000-0000-0000-000000000000_eaf34785-2bb7-80fd-9920-b6697e448ad2", //เพศ
    "00000000-0000-0000-0000-000000000000_21bab37a-9249-0878-fd53-bec0a8cf6096", //เลขที่
    "00000000-0000-0000-0000-000000000000_43a76498-e314-ef00-f264-af001e32b88e", //ถนน
    "00000000-0000-0000-0000-000000000000_d4932828-5146-e0cb-25ee-a2293ba79fff", //อำเภอ
    "00000000-0000-0000-0000-000000000000_294f4e9b-50fc-1ee7-cf27-6bb5297ec854", //วันเกิด
    "00000000-0000-0000-0000-000000000000_4f2833d6-08b9-abd7-9aec-9a2e37031793", //วันออกบัตร
    "00000000-0000-0000-0000-000000000000_9f74da93-effb-f520-50b1-6a7b63060c35", //วันหมดอายุ 9
    "00000000-0000-0000-0000-000000000000_de8eaddd-49dc-0333-3185-a645c91b1aa9", //หมู่
    "00000000-0000-0000-0000-000000000000_02a552a6-cd7f-2934-dace-f6b091263b65", //ตำบล
    "00000000-0000-0000-0000-000000000000_3032b9c7-91c7-f8fa-20f0-7740dd454799", //จังหวัด
];

document.getElementById(
    "00000000-0000-0000-0000-000000000000_ef8b39a4-b57d-6524-6a77-07f8280b43bd"
).onclick = function () {
    load_data();
};

function load_data() {
    const fetchPromise = fetch('https://local.saksiam.co.th.:9998/get_data',
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
    fetchPromise.then(response => {
        if (response.status == 200) {
            return response.json()
        } else {
            Swal.fire(
                'ผิดพลาด',
                'ไม่สามารถอ่านบัตรประชาชนได้',
                'error'
            )
        }
    }).then(async json => {
        if (json.status == "inactive") {
            Swal.fire(
                'แจ้งเตือน',
                'กรุณาเสียบบัตรประชาชน',
                'question'
            )
        } else {
            GetFnameTH(json.CMD_THFULLNAME)
            Getaddress(json.CMD_ADDRESS)
            const sex = GetSex(json.CMD_GENDER)
            const BirthDate = getFormatedDateOfBirth(json.CMD_BIRTH); //วันเกิด
            const IssueDate = getFormatedDateOfIssue(json.CMD_ISSUE); //วันที่ออกบัตร
            const expDate = getFormatedDateOfExp(json.CMD_EXPIRE); //วันที่บัตรหมดอายุ

            document.getElementById(idinput[3]).focus();
            document.getElementById(idinput[3]).value = sex;
            document.getElementById(idinput[3]).disabled = true;

            document.getElementById(idinput[7]).focus();
            document.getElementById(idinput[7]).value = BirthDate;
            document.getElementById(idinput[7]).disabled = true;

            document.getElementById(idinput[8]).focus();
            document.getElementById(idinput[8]).value = IssueDate;
            document.getElementById(idinput[8]).disabled = true;

            document.getElementById(idinput[9]).focus();
            document.getElementById(idinput[9]).value = expDate;
            document.getElementById(idinput[9]).disabled = true;
        }
    })
}

const GetFnameTH = async data => {
    let txt = data;
    const name = txt.split('#');

    document.getElementById(idinput[1]).focus();
    document.getElementById(idinput[1]).value = name[0];
    document.getElementById(idinput[1]).disabled = true;

    document.getElementById(idinput[2]).focus();
    document.getElementById(idinput[2]).value = name[1];
    document.getElementById(idinput[2]).disabled = true;

    document.getElementById(idinput[3]).focus();
    document.getElementById(idinput[3]).value = name[3];
    document.getElementById(idinput[3]).disabled = true;
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

const Getaddress = async data => {
    let txt = data
    const address = txt.split('#');
    const Roads = GetRoads(address[2]);

    document.getElementById(idinput[4]).focus();
    document.getElementById(idinput[4]).value = address[0];
    document.getElementById(idinput[4]).disabled = true;

    document.getElementById(idinput[5]).focus();
    document.getElementById(idinput[5]).value = Roads;
    document.getElementById(idinput[5]).disabled = true;

    document.getElementById(idinput[6]).focus();
    document.getElementById(idinput[6]).value = address[6].substring(5);
    document.getElementById(idinput[6]).disabled = true;

    document.getElementById(idinput[10]).focus();
    document.getElementById(idinput[10]).value = address[1].substring(8);
    document.getElementById(idinput[10]).disabled = true;

    document.getElementById(idinput[11]).focus();
    document.getElementById(idinput[11]).value = address[5].substring(4);
    document.getElementById(idinput[11]).disabled = true;

    document.getElementById(idinput[12]).focus();
    document.getElementById(idinput[12]).value = address[7].substring(7);
    document.getElementById(idinput[12]).disabled = true;
}

const GetSex = data => {
    if (data == '1') {
        const data = "ชาย";
        return data;
    } else if (data = '2') {
        const data = 'หญิง'
        return data
    }
}

const GetRoads = data => {
    if (data == "") {
        const data = "-";
        return data;
    } else {
        return data;
    }
}

const getFormatedDateOfBirth = data => {
    const yearExpire = data.slice(0, 4) + 543;
    const monthExpire = data.slice(4, 6);
    const dateExpire = data.slice(6, 8);

    return dateExpire + "/" + monthExpire + "/" + yearExpire;
}
const getFormatedDateOfIssue = data => {
    const yearIssue = data.slice(0, 4);
    const monthIssue = data.slice(4, 6);
    const dateIssue = data.slice(6, 8);

    return dateIssue + "/" + monthIssue + "/" + yearIssue;
}
const getFormatedDateOfExp = data => {
    const yearExpire = data.slice(0, 4);
    const monthExpire = data.slice(4, 6);
    const dateExpire = data.slice(6, 8);

    return dateExpire + "/" + monthExpire + "/" + yearExpire;
}