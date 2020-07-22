function parent() {
    this.a = 1;
    this.b = {
        value: 2,
    };
}
function child() {
    this.a = 111;
}
child.prototype = new parent();
const child1 = new child();
const child2 = new child();

child1.b.value = 22222;
console.warn(child1.b);
console.warn(child2.b);
