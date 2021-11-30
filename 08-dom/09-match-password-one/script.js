// 06-dom/09-match-password-one/script.js - 6.9: password verification (1)


(() => {

    // your code here
    document.getElementById('run').addEventListener('click', () => {
    let password1 = document.getElementById('pass-one');
    let password2 = document.getElementById('pass-two');
    if(password1.value != password2.value){
        password1.style.borderColor = "red";
        password2.style.borderColor = "red";
    }
    });
})();
