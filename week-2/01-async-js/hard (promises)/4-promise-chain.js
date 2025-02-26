/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
function delay(t) {
        return new Promise((resolve)=>{
                setTimeout(resolve, t*1000);
        });
}
function wait1(t) {
        return delay(t);
}

function wait2(t) {
        return delay(t);
}

function wait3(t) {
        return delay(t);
}

function calculateTime(t1, t2, t3) {
        let d = new Date();
        let startTime = d.getTime();
        return new Promise((resolve)=>{
                return wait1(t1).then(()=>{
                        return wait2(t2).then(()=>{
                                return wait3(t3).then(()=>{
                                        d = new Date();
                                        let endTime = d.getTime();
                                        resolve(endTime-startTime);
                                });
                        });
                });
        });
}

module.exports = calculateTime;
