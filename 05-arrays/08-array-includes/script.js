// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

(() => {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    // your code here
    document.getElementById('run').addEventListener('click', () => {
        let isThere = 0;
        for (let i = 0; i < fruits.length; i++) {
            if (fruits[i] === 'apple') {
                isThere++;
            }
        }
        if(isThere > 0){
            console.log("Yes");
        } else {
            console.log('No');
        }
    });

})();
