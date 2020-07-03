// 实现 Promise.retry，成功后 resolve 结果，失败后间隔指定时间重试，尝试超过一定次数才真正的 reject

const sleep = (interval) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, interval);
    });
};

Promise.retry = (fn, times, interval = 1000) => {
    return new Promise(async (resolve, reject) => {
        let rs;
        let error;
        let isSuccess = false;
        while (times) {
            try {
                rs = await fn();
                isSuccess = true;
                break;
            } catch (err) {
                times--;
                error = err;
                console.warn("try again");
                await sleep(interval);
            }
        }
        isSuccess ? resolve(rs) : reject(err);
    });
};

let targetTime = 3;

const test = () => {
    targetTime--;
    return new Promise((resolve, reject) => {
        if (targetTime === 0) {
            resolve("success");
        } else {
            reject("occur error, retry");
        }
    });
};

Promise.retry(test, 5)
    .then((rs) => {
        console.warn(rs);
    })
    .catch((error) => {
        console.warn(error);
    });
