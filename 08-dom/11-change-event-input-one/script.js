// 06-dom/11-change-event-input-one/script.js - 6.11: change event (1)


(() => {

    // your code here
    document.getElementById('pass-one').addEventListener('input', () => {
        var pw = document.getElementById('pass-one').value;
        var pwlength = pw.length;
        console.log(pw);
        document.getElementById('counter').innerHTML =  pwlength + '/10';
        if(pwlength > 10){
            
        }
    })

})();
