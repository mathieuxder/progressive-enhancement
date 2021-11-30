// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    // your code here
    document.getElementById('fix-part-one').addEventListener('click', myFunc);
    document.getElementById('fix-part-two').addEventListener('click', myFunc);
    document.getElementById('fix-part-three').addEventListener('click', myFunc);
    document.getElementById('fix-part-four').addEventListener('click', myFunc);

    function myFunc() {
        let currentId = event.currentTarget.getAttribute('id');
        let newId =  currentId.slice(4);
        let min = parseInt(document.getElementById(newId).getAttribute('data-min'));
        let max = parseInt(document.getElementById(newId).getAttribute('data-max'));
        let rand = Math.floor(Math.random() * (max - min + 1) ) + min ;
        document.getElementById(newId).value = rand;

        btn1 = document.getElementById('part-one').value;
        btn2 = document.getElementById('part-two').value;
        btn3 = document.getElementById('part-three').value;
        btn4 = document.getElementById('part-four').value;
        document.getElementById('target').innerHTML = '0' + btn1 + btn2 + btn3 + btn4;
    }

})();
