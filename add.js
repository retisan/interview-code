function add(...param) {
    if (param.length === 1) {
        return (y) => {
            return y + param[0];
        };
    } else {
        const total = param.reduce((total, value) => {
            return total + value;
        }, 0);
        return total;
    }
}
console.log(add(1)(2));
