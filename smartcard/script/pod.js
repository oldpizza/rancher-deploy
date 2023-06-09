const uploadFunction = event => {
    const files = event.target.files
    const data = new FormData()
    data.append('file', files[0])

    const fetchPromise = fetch('https://apipy.saksiam.co.th/FilePOD', {
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
        const json = JSON.stringify(data)

        document.getElementById('a793659f-9f03-b706-b925-29f73d62cf7c_0f881473-7111-3e34-e3a0-0d21d3c3aa2b').focus();
        // document.getElementById('a793659f-9f03-b706-b925-29f73d62cf7c_43ebbc71-096c-2b27-681f-d9e54f33ce63_TextArea').innerHTML = "Data";
        document.getElementById('a793659f-9f03-b706-b925-29f73d62cf7c_0f881473-7111-3e34-e3a0-0d21d3c3aa2b').value = json;
        // console.log(data[0])
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