document.getElementById('start').onclick = () => {
    document.getElementById('text').focus();
    document.getElementById('text').value = 'start';
    let enhancer = null;
    (async () => {
        enhancer = await Dynamsoft.DCE.CameraEnhancer.createInstance();
        document.getElementById("enhancerUIContainer").appendChild(enhancer.getUIElement());
        await enhancer.open(true);
    })();
}

document.getElementById('capture').onclick = () => {
    if (enhancer) {
        let frame = enhancer.getFrame();

        let width = screen.availWidth;
        let height = screen.availHeight;
        let popW = 640, popH = 640;
        let left = (width - popW) / 2;
        let top = (height - popH) / 2;

        popWindow = window.open('', 'popup', 'width=' + popW + ',height=' + popH +
            ',top=' + top + ',left=' + left + ', scrollbars=yes');

        popWindow.document.body.appendChild(frame.canvas);
    }
};