let input = document.getElementById("inputTag");
let imageName = document.getElementById("imageName")
width = screen.availWidth;
height = screen.availHeight;
popW = 640, popH = 480;
left = (width - popW) / 2;
top = (height - popH) / 2;

input.addEventListener("change", () => {
    let inputImage = document.querySelector("input[type=file]").files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        var proImage = new Image();
        proImage.src = reader.result;
        proImage.width = 640;
        proImage.height = 480;
        imageName.innerText = reader.result;

        popWindow = window.open('', 'popup', 'width=' + popW + ',height=' + popH +
            ',top=' + top + ',left=' + left + ', scrollbars=yes');

        popWindow.document.body.appendChild(proImage);
    }

    reader.readAsDataURL(inputImage);
})