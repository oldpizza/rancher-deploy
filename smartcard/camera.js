let input = document.getElementById("inputTag");
let imageName = document.getElementById("f41ea8a5-fc0c-5824-b7b0-ed6229f31640_d34ddfbb-6d39-b713-2f39-8312a3f0c458")
// width = screen.availWidth;
// height = screen.availHeight;
// popW = 640, popH = 480;
// left = (width - popW) / 2;
// top = (height - popH) / 2;
document.getElementById("00000000-0000-0000-0000-000000000000_3aa60b05-adcd-f4b1-3206-50e36f2e161b").style.visibility = "hidden";

input.addEventListener("change", () => {
    let inputImage = document.querySelector("input[type=file]").files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        var dateImg = reader.result.toString().replace(/^data:(.*,)?/, '');
        // var proImage = new Image();
        // proImage.src = reader.result;
        // proImage.width = 640;
        // proImage.height = 480;
        document.getElementById("00000000-0000-0000-0000-000000000000_3aa60b05-adcd-f4b1-3206-50e36f2e161b").style.visibility = "visible";
        document.getElementById("00000000-0000-0000-0000-000000000000_3aa60b05-adcd-f4b1-3206-50e36f2e161b").focus();
        document.getElementById("00000000-0000-0000-0000-000000000000_3aa60b05-adcd-f4b1-3206-50e36f2e161b").value = 'test';
        document.getElementById("00000000-0000-0000-0000-000000000000_3aa60b05-adcd-f4b1-3206-50e36f2e161b").disabled = true;

        // popWindow = window.open('', 'popup', 'width=' + popW + ',height=' + popH +
        //     ',top=' + top + ',left=' + left + ', scrollbars=yes');

        // popWindow.document.body.appendChild(proImage);
        document.getElementById('f41ea8a5-fc0c-5824-b7b0-ed6229f31640_74c8f94d-26fa-8ee9-f6fd-1d017102a329_Picture').focus();
        document.getElementById('f41ea8a5-fc0c-5824-b7b0-ed6229f31640_74c8f94d-26fa-8ee9-f6fd-1d017102a329_Picture').src = reader.result;

    }

    reader.readAsDataURL(inputImage);
})