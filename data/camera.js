let input = document.getElementById("inputTag");
let imageName = document.getElementById("imageName")

input.addEventListener("change", () => {
    let inputImage = document.querySelector("input[type=file]").files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        console.log('RESULT', reader.result)
        imageName.innerText = reader.result;
    }
    reader.readAsDataURL(inputImage);
})