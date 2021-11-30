
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let date = new Date;
    let formatted_date = days[date.getDay()] + " " + date.getDate() + " " + months[date.getMonth()] + " " +date.getFullYear() + ", " + date.getHours() + "h" + date.getMinutes();
    document.getElementById("target").innerHTML = formatted_date;


})();
