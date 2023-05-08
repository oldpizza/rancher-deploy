let input = document.getElementById("inputTag");
let imageName = document.getElementById("f41ea8a5-fc0c-5824-b7b0-ed6229f31640_bca605c6-a29b-a237-12bf-d0a3618cc788")
// width = screen.availWidth;
// height = screen.availHeight;
// popW = 640, popH = 480;
// left = (width - popW) / 2;
// top = (height - popH) / 2;

input.addEventListener("change", () => {
    let inputImage = document.querySelector("input[type=file]").files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        // var proImage = new Image();
        // proImage.src = reader.result;
        // proImage.width = 640;
        // proImage.height = 480;
        imageName.value.focus();
        imageName.innerHTML = reader.result;

        // popWindow = window.open('', 'popup', 'width=' + popW + ',height=' + popH +
        //     ',top=' + top + ',left=' + left + ', scrollbars=yes');

        // popWindow.document.body.appendChild(proImage);
        document.getElementById('f41ea8a5-fc0c-5824-b7b0-ed6229f31640_74c8f94d-26fa-8ee9-f6fd-1d017102a329_Picture').focus();
        document.getElementById('f41ea8a5-fc0c-5824-b7b0-ed6229f31640_74c8f94d-26fa-8ee9-f6fd-1d017102a329_Picture').src = reader.result;
    }

    reader.readAsDataURL(inputImage);
})