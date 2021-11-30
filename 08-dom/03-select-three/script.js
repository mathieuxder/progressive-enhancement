// 06-dom/03-select-three/script.js - 6.3: select multiple elements by css selector


(() => {

    // your code here
    for (let i = 0; i <= 4; i++) {
        document.getElementsByClassName('material')[0].getElementsByTagName('p')[i].innerHTML = 'owned';
    }

})();
