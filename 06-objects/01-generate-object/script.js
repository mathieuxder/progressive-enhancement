// 06-objects/01-generate-object/script.js - 6.1: genererate an object

    const me = {
        lastname: 'Duquaine',
        firstname: 'Simon',
        age: '25',
        city: 'Charleroi',
        country: 'Belgium'
    };
    
(() => {
    // your code here
    document.getElementById('run').addEventListener('click', () => {
        console.log(me);
    })

})();
