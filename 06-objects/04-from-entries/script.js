// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here

    document.getElementById('run').addEventListener('click', () => {

        let arr = [];

        for (let i = 0; i < arr.length; i++) {
            arr.push([keys[i], values[i]]);
        }

        let arrEntries = Object.fromEntries(arr);

        console.log(Object.keys(arrEntries));
        console.log(Object.values(arrEntries));
    })
})();
