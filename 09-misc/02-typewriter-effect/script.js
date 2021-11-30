// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    // your code here
    let text = document.getElementById('target').innerHTML;
    let typeText = "";
    let i = 0;


    function rand(){
        return Math.floor(Math.random() * (100 - 50 + 1) ) + 50 ;
    }

    function typeWriter() {
        if(typeText.length < text.length){
        typeText += text[i];
        document.getElementById('target').innerHTML = typeText;
        i++;
        }
    }
    setInterval(typeWriter, rand());

})();
