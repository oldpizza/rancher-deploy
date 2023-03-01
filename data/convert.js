const uploadFunction = event => {
    const files = event.target.files
    const data = new FormData()
    data.append('file', files[0])
    // data.append('NameSheet', document.getElementById("NameSheet").value)

    const fetchPromise = fetch('http://localhost:12345/File?' + new URLSearchParams({
        code: '0'
    }), {
        method: 'POST',
        body: data,
        headers: {
            "Access-Control-Request-Private-Network": "true",
            "Content-Length": data.length,
        }
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
    }).then(data => {
        var json = JSON.parse(data)
        var array = json.map(doc => Object.values(doc));
        const result = array.map(subArray => subArray.join('|')).join(':');
        const results = String(result).split(',').join(' ');
        var convert = results.split(':');
        const list = convert.map(x => [x]);

        // downloadCSV(csv)
        // console.log(json)
        const csv = listToCSV(list);
        downloadCSV(csv);
        // console.log(list)
    }).catch(error => {
        console.error(error)
    })

    Swal.fire(
        'กรุณารอสักครู่',
        'กำลังสร้างไฟล์',
        'question'
    )
}

// uploadFunction()
document.querySelector('#upload').addEventListener('change', event => {
    uploadFunction(event)
})

const listToCSV = list => {
    const rows = list.map(row => row.join('""'));
    return rows.join('\n');
}

downloadCSV = csv => {
    const blob = new Blob(["\uFEFF" + csv], { type: 'text/plain; charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'data.txt');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    // document.body.removeChild(link);
}