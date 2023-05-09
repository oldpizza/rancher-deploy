let input = document.getElementById("inputTag");
// width = screen.availWidth;
// height = screen.availHeight;
// popW = 640, popH = 480;
// left = (width - popW) / 2;
// top = (height - popH) / 2;

input.addEventListener("change", () => {
    let inputImage = document.querySelector("input[type=file]").files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        var dateImg = reader.result.toString().replace(/^data:(.*,)?/, '');
        // var proImage = new Image();
        // proImage.src = reader.result;
        // proImage.width = 640;
        // proImage.height = 480;`
        const imageName = document.getElementById("00000000-0000-0000-0000-000000000000_ec66b509-ea94-7abe-7e1c-d7e7b290fc69");
        // imageName.setAttribute("title", "Some additional information");
        // document.getElementById('00000000-0000-0000-0000-000000000000_def00b94-958a-bfb7-93ba-7daadbbf358a').textContent = dateImg;
        imageName.innerHTML = dateImg;
        // document.body.appendChild(imageName);
        // imageName.innerText = dateImg;

        // popWindow = window.open('', 'popup', 'width=' + popW + ',height=' + popH +
        //     ',top=' + top + ',left=' + left + ', scrollbars=yes');

        // popWindow.document.body.appendChild(proImage);
        document.getElementById('f41ea8a5-fc0c-5824-b7b0-ed6229f31640_74c8f94d-26fa-8ee9-f6fd-1d017102a329_Picture').focus();
        document.getElementById('f41ea8a5-fc0c-5824-b7b0-ed6229f31640_74c8f94d-26fa-8ee9-f6fd-1d017102a329_Picture').src = reader.result;

    }

    reader.readAsDataURL(inputImage);
})