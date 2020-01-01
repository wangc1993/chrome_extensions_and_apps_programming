function my_clock(el) {
    const today = new Date();
    const h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = m >= 10 ? m : ('0' + m);
    s = s >= 10 ? s : ('0' + s);
    el.innerHTML = h + ":" + m + ":" + s;
    setTimeout(function() {
        my_clock(el)
    }, 1000);
}

const clock_div = document.getElementById('clock_div');
my_clock(clock_div);