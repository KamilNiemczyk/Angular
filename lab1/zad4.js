const a = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 100);
});

const b = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 200);
});

const c = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    }, 300);
});
const tasks = [a, b, c];

const processQueue = async (tasks, maxConcurrent) => {
    return new Promise((resolve, reject) => {
        const results = [];
        let running = 0;
        let current = 0;
        const runTask = async (taskIndex) => {
            try {
                const result = await tasks[taskIndex];
                results.push(result);
                running--;
                if (results.length === tasks.length) {
                    resolve(results);
                } else if (current < tasks.length) {
                    runTask(current++);
                }
            } catch (error) {
                reject(error);
            }
        };
        while (current < tasks.length && running < maxConcurrent) {
            running++;
            runTask(current++);
        }
    });
};


processQueue(tasks, 2).then((results) => {
    console.log(results);
});