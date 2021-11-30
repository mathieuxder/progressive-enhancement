
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {

        // your code here
        var dayUser= document.getElementById("dob-day").value;
        var monthUser = document.getElementById("dob-month").value;
        var yearUser = document.getElementById("dob-year").value;

        var date = new Date();
        var dayNow = date.getDate();
        var monthNow = date.getMonth() + 1; 
        var yearNow = date.getFullYear();

        var age = yearNow - yearUser;
        if( () && mont)
        alert(age);

    });

})();
