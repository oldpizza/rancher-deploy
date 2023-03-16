const delay = async (ms = 1000) =>
    new Promise(resolve => setTimeout(resolve, ms))

const uploadFunction = event => {
    const files = event.target.files
    const data = new FormData()
    data.append('file', files[0])

    const fetchPromise = fetch('http://localhost:12345/File?' + new URLSearchParams({
        code: '0'
    }), {
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
                text: 'จำนวน   ' + json.length + '   รายการ',
                icon: 'info',
                confirmButtonText: 'รับทราบ',
                showCancelButton: true,
                cancelButtonText: 'ยกเลิก'
            },
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
        var plntType = PlntType(json[userID].Plnt)
        var dateType = DateType(json[userID].create_date)
        var asset_StatusType = Asset_StatusType(json[userID].Asset_Status)
        console.log(userID)
        const fetchPromise = fetch('http://localhost:12345/Migrate_No_Assets?' + new URLSearchParams({
            p_CoCd: json[userID].CoCd
            , p_Class: json[userID].Class
            , p_Asset: json[userID].Asset
            , p_SNo: json[userID].SNo
            , p_Asset_description: json[userID].Asset_description
            , p_create_date: dateType
            , p_Quantity: json[userID].Quantity
            , p_BUn: json[userID].BUn
            , p_Cost_Ctr: json[userID].Cost_Ctr
            , p_Plnt: plntType
            , p_Asset_Status: asset_StatusType
            , p_Original_value: json[userID].Original_value
            , p_Serial_no: json[userID].Serial_no
        }), {
            method: 'POST',
        })
        fetchPromise.then(response => {
            if (response.status == 200) {
                // Swal.fire(
                //     {
                //         title: 'เสร็จสิ้น',
                //         html: json[userID].user + '   โยกย้ายเรียบร้อยแล้ว<br>' + 'รายที่   ' + parseInt(userID + 1) + '   จาก   ' + json.length,
                //         icon: 'success',
                //         confirmButtonText: 'รับทราบ',
                //     }
                // )
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
            // localStorage.setItem(json[userID].user, json[userID].user + '|' + Returndata)
            if (parseInt(userID + 1) == json.length) {
                Swal.fire(
                    {
                        title: 'เสร็จสิ้น',
                        html: userID,
                        icon: 'success',
                        confirmButtonText: 'รับทราบ',
                    }
                )
            }
        }).catch(error => console.log(error))

        // Swal.fire(
        //     'กรุณารอสักครู่',
        //     'กำลังโยกย้าย',
        //     'question'
        // )
        await delay(15)
    }
}

const PlntType = data => {
    var dataType = String(data)
    if (dataType.length == 4) {
        return data
    }
    else if (dataType.length == 3) {
        return '0' + data
    }
    else if (dataType.length == 2) {
        return '00' + data
    }
    else {
        return '000' + data
    }
}

const Asset_StatusType = data => {
    var dataType = String(data)
    if (dataType.length == 1) {
        return '0' + data
    } else {
        return data
    }
}

const DateType = data => {
    if (data == null) {
        return data
    } else {
        return moment(data).format("YYYY-MM-DD")
    }
}

const ReturnData = jsons => {
    if (jsons == null) {
        return 'success'
    } else {
        return jsons
    }
}