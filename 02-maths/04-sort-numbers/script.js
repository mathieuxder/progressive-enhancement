// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        var numbers = document.getElementById('numbers').value;
        
        var numbersArray = numbers.split(',');
        numbersArray.sort(function(a, b) {
            return a - b;
          });

        window.alert(numbersArray.toString());

    });

})();