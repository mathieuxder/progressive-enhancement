// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here
    document.getElementById('run').addEventListener('click', () => {

        function rand10(){
            return Math.floor(Math.random() * 100) + 1;
        }

        let tab = [];
        for (let i = 0; i < 10; i++) {
            tab[i] = rand10();
            document.getElementById('n-' + (i+1)).innerHTML = tab[i];
        }

        document.getElementById('min').innerHTML = Math.min(...tab);
        document.getElementById('max').innerHTML = Math.max(...tab);
        const tabSum = array => array.reduce((a, b) => a + b, 0);
        document.getElementById('sum').innerHTML = tabSum(tab);
        document.getElementById('average').innerHTML = (tabSum(tab) / tab.length);
    });

})();
