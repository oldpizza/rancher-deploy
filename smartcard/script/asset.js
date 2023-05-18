const uploadFunction = event => {
    const files = event.target.files
    const data = new FormData()
    data.append('file', files[0])

    const fetchPromise = fetch('https://apipy-dev.saksiam.co.th/FileAssets', {
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
        // const jsons = JSON.parse(data)
        // // var json = JSON.stringify(jsons)
        // jsons.forEach((item, index) => {
        //     localStorage.setItem(`${index + 1}`, JSON.stringify(item));
        // });
        // document.getElementById('66182208-4758-115d-d357-8f032bc5ec5b_358b57c7-9307-4b8a-d0a1-e6279ee5b59b').focus();
        // document.getElementById('66182208-4758-115d-d357-8f032bc5ec5b_358b57c7-9307-4b8a-d0a1-e6279ee5b59b').value = json;
        // console.log(json)
        const list = JSON.parse(data);
        const chunks = [];

        list.forEach((item, index) => {
            const chunkIndex = Math.floor(index / 3);
            if (!chunks[chunkIndex]) {
                chunks[chunkIndex] = [];
            }
            chunks[chunkIndex].push(item);
        });

        chunks.forEach((chunkIndex, chunk) => {
            const key = `chunk_${chunkIndex}`;
            // const chunkJSON = JSON.stringify(chunk);
            localStorage.setItem(`${chunk + 1}`, key);
        });
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


