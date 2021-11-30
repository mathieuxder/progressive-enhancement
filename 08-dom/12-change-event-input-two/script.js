// 06-dom/12-change-event-input-two/script.js - 6.12: change event (2)


(() => {

    // your code here

    document.getElementById('pass-one').addEventListener('input', () => {
        var pw = document.getElementById('pass-one').value;
        var reg = /^(?=(.*\d){2,})(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}/;
        if(reg.test(pw)){
            document.getElementById('validity').innerHTML =  "ok";
        } else {
            document.getElementById('validity').innerHTML =  "Not ok";
        }
    });

})();
