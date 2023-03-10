let input = document.getElementById("inputTag");
let imageName = document.getElementById("imageName")
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
        imageName.innerText = reader.result;

        // popWindow = window.open('', 'popup', 'width=' + popW + ',height=' + popH +
        //     ',top=' + top + ',left=' + left + ', scrollbars=yes');

        // popWindow.document.body.appendChild(proImage);
        document.getElementById('9c5cb48c-cec4-e77e-221e-7a9c537967ec_d96771e3-3754-6b57-3a21-0a05d8bd60d9_Picture').focus();
        document.getElementById('9c5cb48c-cec4-e77e-221e-7a9c537967ec_d96771e3-3754-6b57-3a21-0a05d8bd60d9_Picture').src = reader.result;
    }

    reader.readAsDataURL(inputImage);
})