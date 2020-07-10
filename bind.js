Function.prototype.myBind = function (context) {
    const that = this;
    return function () {
        that.apply(context);
    };
};
const obj = { value: 100 };
function test(a, b) {
    console.warn(this);
    console.warn(arguments);
}
test = test.bind(obj);
console.warn(test(1, 2));
