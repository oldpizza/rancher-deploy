const uploadFunction = event => {
    const files = event.target.files
    const data = new FormData()
    data.append('file', files[0])

    fetch('https://apipy-dev.saksiam.co.th/File', {
        method: 'POST',
        body: data
    })
        .then(response => response.json())
        .then(data => {
            var json = JSON.parse(data)
            var array = json.map(doc => Object.values(doc));
            const result = array.map(subArray => subArray.join('|')).join(',');
            var convert = result.split(',');
            const list = convert.map(x => [x]);

            // downloadCSV(csv)
            // console.log(newArr)
            const csv = listToCSV(list);
            downloadCSV(csv);
        })
        .catch(error => {
            console.error(error)
        })
}

// uploadFunction()
document.querySelector('#upload').addEventListener('change', event => {
    uploadFunction(event)
})

listToCSV = list => {
    const rows = list.map(row => row.join(','));
    return rows.join('\n');
}

downloadCSV = csv => {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'data.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    // document.body.removeChild(link);
}