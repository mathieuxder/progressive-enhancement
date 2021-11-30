// 06-dom/07-generate-table-one/script.js - 6.7: creating a table (1)


(() => {

    // your code here
    let table = '<table>';
    for(let row = 1; row < 11; row++){
        table += '<tr><td></td></tr>';
    }
    table += '</table>';
    
    document.getElementById('target').innerHTML = table;

})();
