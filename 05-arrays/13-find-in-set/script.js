// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    // your code here
    document.getElementById('run').addEventListener('click', () => {
        let nbrPeople = 0;
        let alex = 0;
        people.forEach(el => {
            nbrPeople++;
            if(el === "Alexandre"){
                alex++
            }
        });
        if(alex > 0){
            console.log('There are ' + nbrPeople + ' people and there is an Alexandre');
        } else {
            console.log('There are ' + nbrPeople + ' people and there is no Alexandre');
        }
    });
})();
