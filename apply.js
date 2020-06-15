Function.prototype.myApply = function (context = window, args = []) {
    const fn = Symbol("fn");
    context[fn] = this;
    const result = context[fn](...args);
    delete context[fn];
    return result;
};

const obj = { value: 100 };
function test(a, b) {
    console.log(this.value + a + b);
}
test.myApply(obj, [1, 2]);
