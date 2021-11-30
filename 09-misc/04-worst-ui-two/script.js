// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    // your code here
    document.getElementById('part-one').addEventListener('click', myFunc);
    document.getElementById('part-two').addEventListener('click', myFunc);
    document.getElementById('part-three').addEventListener('click', myFunc);
    document.getElementById('part-four').addEventListener('click', myFunc);

    function myFunc() {
        let min = parseInt(event.currentTarget.getAttribute('data-min'));
        let max = parseInt(event.currentTarget.getAttribute('data-max'));
        let currentValue = parseInt(event.currentTarget.innerHTML);
        if (currentValue < max) {
            if (currentValue < 9) {
                event.currentTarget.innerHTML = "0" + (currentValue + 1);
            } else {
                event.currentTarget.innerHTML = currentValue + 1;
            }
        } else {
            currentValue = min;
            event.currentTarget.innerHTML = '0' + currentValue;
        }
        
        btn1 = document.getElementById('part-one').innerHTML;
        btn2 = document.getElementById('part-two').innerHTML;
        btn3 = document.getElementById('part-three').innerHTML;
        btn4 = document.getElementById('part-four').innerHTML;
        document.getElementById('target').innerHTML = '0' + btn1 + btn2 + btn3 + btn4;
    }


})();
