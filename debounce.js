// 非立即执行
function debounce(fn, interval) {
    let timer;
    return function() {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            // 绑定this的原因：1.在原生dom事件中可通过this获取dom元素
            // 在箭头函数中也可使用arguments的原因: 箭头函数本身没有arguments，但可通过作用域链查找外部的arguments
            fn.apply(this, arguments);
        }, interval);
    }
}

// 立即执行
function debounceImmediate(fn, interval) {
    let timer;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        let callNow = !timer;
        timer = setTimeout(() => {
            timer = null;
        }, interval);
        if (callNow) {
            fn.apply(this, arguments);
        }
    }
}