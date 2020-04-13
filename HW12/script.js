function getTime() {
    let time = new Date(),
        hours = (time.getHours() < 10) ? '0' + time.getHours() : time.getHours(),
        minutes = (time.getMinutes() < 10) ? '0' + time.getMinutes() : time.getMinutes(),
        seconds = (time.getSeconds() < 10) ? '0' + time.getSeconds() : time.getSeconds();
    console.clear();
    console.log(hours + ':' + minutes + ':' + seconds);
}
// setInterval(getTime, 1000);