
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        
        var color ='#'+Math.random().toString(16).substr(2,6);
        document.body.style.backgroundColor = color;
    });

})();
