// 06-dom/06-mini-carousel/script.js - 6.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    let i = 0;
    document.getElementById('next').addEventListener('click', () => {
        i++;
        if(i >= gallery.length){
            i = 0;
            document.getElementsByTagName('img')[0].src = gallery[i];
        } else {
            document.getElementsByTagName('img')[0].src = gallery[i];
        }
    });

})();
