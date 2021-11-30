// 06-dom/05-hover-image/script.js - 6.5: image hover


(() => {

    // your code here
    let srcOver = document.getElementsByTagName('img')[0].getAttribute('data-hover');
    let src = document.getElementsByTagName('img')[0].getAttribute('src');
    document.getElementsByTagName('figure')[0].innerHTML = '<img src=' + src + ' onmouseover=' + 'this.src=\'' + srcOver + '\''+ ' onmouseout='  + 'this.src=\'' + src + '\'>';


})();
