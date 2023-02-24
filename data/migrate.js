const delay = async (ms = 1000) =>
    new Promise(resolve => setTimeout(resolve, ms))

const uploadFunction = event => {
    const files = event.target.files
    const data = new FormData()
    data.append('file', files[0])
    // data.append('NameSheet', document.getElementById("NameSheet").value)

    const fetchPromise = fetch('https://apipy-dev.saksiam.co.th/File', {
        method: 'POST',
        body: data
    })

    fetchPromise.then(response => {
        if (response.status == 200) {
            Swal.fire(
                'เสร็จสิ้น',
                'สร้างไฟล์เรียบร้อยแล้ว',
                'success'
            )
            return response.json()
        } else {
            Swal.fire(
                'ผิดพลาด',
                'เกิดปัญหาบางอย่าง',
                'error'
            )
        }
    }).then(async data => {
        var json = JSON.parse(data)
        Swal.fire(
            {
                title: 'แจ้งเตือน!',
                text: 'จำนวนโยกย้าย   ' + json.length + '   ราย',
                icon: 'info',
                confirmButtonText: 'รับทราบ',
                showCancelButton: true,
                cancelButtonText: 'ยกเลิก'
            }
        ).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear()
                migrate(json)
            }
        })
        // console.log(json)
    }).catch(error => {
        console.error(error)
    })

    Swal.fire(
        'กรุณารอสักครู่',
        'กำลังสร้างไฟล์',
        'question'
    )
}

document.querySelector('#upload').addEventListener('change', event => {
    uploadFunction(event)
})

const migrate = async json => {
    for (var userID = 0; userID < json.length; userID++) {
        const fetchPromise = fetch('https://apipy-dev.saksiam.co.th/Migrate?' + new URLSearchParams({
            user: json[userID].user,
            branch: json[userID].branch,
            role: json[userID].role,
            startDate: json[userID].startDate,
            endDate: json[userID].endDate,
            reason: json[userID].reason,
        }), {
            method: 'POST',
        })
        fetchPromise.then(response => {
            if (response.status == 200) {
                Swal.fire(
                    {
                        title: 'เสร็จสิ้น',
                        html: json[userID].user + '   โยกย้ายเรียบร้อยแล้ว<br>' + 'รายที่   ' + parseInt(userID + 1) + '   จาก   ' + json.length,
                        icon: 'success',
                        confirmButtonText: 'รับทราบ',
                    }
                )
                return response.text()
            } else {
                Swal.fire(
                    'ผิดพลาด',
                    'เกิดปัญหาโยกย้ายบางอย่าง',
                    'error'
                )
            }
        }).then(data => {
            var jsons = JSON.parse(data)
            var Returndata = ReturnData(jsons)
            localStorage.setItem(json[userID].user, json[userID].user + '|' + Returndata)
            if (parseInt(userID + 1) == json.length) {
                allStorage()
            }
        }).catch(error => console.log(error))

        Swal.fire(
            'กรุณารอสักครู่',
            'กำลังโยกย้าย',
            'question'
        )
        await delay(3000)
    }
}

const ReturnData = jsons => {
    if (jsons == null) {
        return 'success'
    } else {
        return jsons
    }
}

const allStorage = event => {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        values.push(localStorage.getItem(keys[i]));
    }
    console.log([values])
    const csv = listToCSV(values);
    downloadCSV(csv);
}

const listToCSV = values => {
    const rows = values.map(row => row);
    return rows.join('\n');
}

const downloadCSV = csv => {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'data.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    localStorage.clear()
    // document.body.removeChild(link);
}