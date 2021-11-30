// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here
    let rand = Math.floor(Math.random() * 10) + 1;
    console.log(rand);
    let userNumber;
    while (userNumber != rand) {
        userNumber = prompt("Please guess the number between 1 and 10:");
        if (userNumber > rand) {
            alert("Lower");
        } else if (userNumber < rand) {
            alert("Higher");
        } else {
            alert("You win!");
        }
    }

})();
