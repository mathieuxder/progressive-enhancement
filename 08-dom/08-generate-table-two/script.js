// 06-dom/08-generate-table-two/script.js - 6.8: creating a table (2)

(() => {

    // your code here
    let table = '<table>';
    for(let row = 1; row < 11; row++){
        table += '<tr></tr>';

        for(let col =1; col < 11; col++){
            table += '<td>' + row + " * " + col +' = ' + (row*col) + '</td>'
        }
    }
    table += '</table>';

    document.getElementById('target').innerHTML = table;

})();
