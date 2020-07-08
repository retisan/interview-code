class LazyMan {
    constructor() {
        this.taskList = [];
        setTimeout(() => {
            this.next();
        });
    }
    next = () => {
        const fn = this.taskList.shift();
        fn && fn();
    };
    eat = (value) => {
        const fn = () => {
            console.warn(value);
            this.next();
        };
        this.taskList.push(fn);
        return this;
    };
    sleep = (time) => {
        const fn = () => {
            setTimeout(() => {
                console.warn(`暂停 ${time}s`);
                this.next();
            }, time);
        };
        this.taskList.push(fn);
        return this;
    };
    sleepFirst = (time) => {
        const fn = () => {
            setTimeout(() => {
                console.warn(`first 暂停 ${time}s`);
                this.next();
            }, time);
        };
        this.taskList.unshift(fn);
        return this;       
    };
}
const man = new LazyMan();
man.eat("apple").sleep(3000).eat("orange").sleepFirst(2000);
