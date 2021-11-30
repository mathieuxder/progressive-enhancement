// 06-dom/04-attr-create/script.js - 6.4: manipulating attributes and creating elements


(() => {

    // your code here
    var x = document.getElementById('source').getAttribute('data-image');
    document.getElementById('target').innerHTML = "<img src=" + x +'>';
    document.getElementById('source').remove();

})();
