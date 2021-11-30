// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    // your code here
    let text = document.getElementById('target').innerHTML;
    let position = 0;
    let ToucheLeFond = false;

    function wavingText(index) {
        let wavetext = text.substring(0, index) +
            '<span style="font-size:1.2em">' + text.substring(index, index + 1) +
            '<span style="font-size:1.2em">' + text.substring(index + 1, index + 2) +
            '<span style="font-size:1.2em">' + text.substring(index + 2, index + 3) +
            '<span style="font-size:1.2em">' + text.substring(index + 3, index + 4) +
            '<span style="font-size:1.2em">' + text.substring(index + 4, index + 5) +
            '</span>' + text.substring(index + 5, index + 6) +
            '</span>' + text.substring(index + 6, index + 7) +
            '</span>' + text.substring(index + 7, index + 8) +
            '</span>' + text.substring(index + 8, index + 9) +
            '</span>' + text.substring(index + 9);
        document.getElementById('target').innerHTML = wavetext;
    }

    function avanceRetour() {
        wavingText(position);
        if (ToucheLeFond == false) {
            if (position < (text.length - 5)) {
                position++;
            } else {
                ToucheLeFond = true;
            }
        } else {
            if (position > (-4)) {
                position--;
            } else {
                ToucheLeFond = false;
            }
        }
    }
    setInterval(avanceRetour, 60);
})();