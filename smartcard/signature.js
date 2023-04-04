document.getElementById(
    "190a2a37-0fde-eeb5-fd3e-15c5157f4508_3f1e90f5-b594-f462-ad9a-50a95aa61b2b"
).onclick = function () {
    jQuery(document).ready(function ($) {

        var canvas = document.getElementById("signature");
        var signaturePad = new SignaturePad(canvas);

        $('#clear-signature').on('click', function () {
            signaturePad.clear();
        });

    });
};