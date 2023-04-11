const uploadFunction = event => {
    const files = event.target.files
    const data = new FormData()
    data.append('file', files[0])

    const fetchPromise = fetch('https://apipy-dev.saksiam.co.th/FilePOD', {
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
        // var json = JSON.parse(data)

        document.getElementById('a793659f-9f03-b706-b925-29f73d62cf7c_a982e546-5eda-9202-c166-e9bbec702208').focus();
        document.getElementById('a793659f-9f03-b706-b925-29f73d62cf7c_a982e546-5eda-9202-c166-e9bbec702208').value = data;

        console.log(data)
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