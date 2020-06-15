function throttle(fn, interval) {
    let timer;
    return function() {
        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                fn.apply(this, arguments);
            }, interval);
        }
    }
}