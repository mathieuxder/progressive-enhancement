
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    // your code here
    document.getElementById('run').addEventListener('click', () => {

        let monthFriday13 = [];
        let months = [ "Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let year = new Date(document.getElementById('year').value, 0, '13');

        for (let i = 0; i < 12 ; i++) {
            if(year.getDay() === 5){
                monthFriday13.push(months[i]);
            }
            year = new Date(document.getElementById('year').value, i + 1, '13');
        }
        alert(monthFriday13);
    });
})();
