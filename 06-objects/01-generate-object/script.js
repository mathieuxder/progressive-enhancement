// 06-objects/01-generate-object/script.js - 6.1: genererate an object

    const me = {
        lastname: 'Derieux',
        firstname: 'Mathieu',
        age: '24',
        city: 'Couillet',
        country: 'Belgium'
    };
    
(() => {
    // your code here
    document.getElementById('run').addEventListener('click', () => {
        console.log(me);
    })

})();
