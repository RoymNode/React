var x = 5;
var y;
y = 10;
y = "hello";

const a1 = 20;
let a2 = 50;


function add(x, y) {
    return x + y;
}

const sub = (x, y) => { return x - y };

const myFunc = (cb) => { cb() };

const anotherFunc = () => {
    console.log("hello from callback");
};

myFunc(anotherFunc);


function doSomthing() {

    function doAnotherThing() {
        const z = 2;
        if (z < 6) {
            const t = 10;
        }
        console.log(t);
    }
}

function demoSynch() {
    console.log("one");
    setTimeout(() => { console.log("helllllo"); }, 0);
    console.log("two");
}

//demoSynch();

function getThePeople() {
    fetch("https://randomuser.me/api/?results=5")
        .then((dataFromAPI) => { return dataFromAPI.json(); })
        .then((dataAsObj) => {
            console.log(dataAsObj);
            document.querySelector("#myDiv").innerText =
                dataAsObj.results[0].name.first;
            //document.querySelector("#myDiv").innerHTML = `<h2>${dataAsObj.results[0].name.first}</h2>`;  
        });
}

function myCreatePromise() {
    return new Promise((resolve, reject) => {
        const b = ((Math.floor(Math.random() * 100) % 2) === 0);
        setTimeout(() => {
            if (b) {
                resolve("We got even");
            } else {
                reject("oh no its odd");
            }
        }, 3000);
    });
}

function tryThePromiseFunction() {
    myCreatePromise()
        .then((msg) => {
            console.log(msg);
        })
        .catch((err) => {
            console.log(err);

        })

}


function promiseAllDemo() {
    const task1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Task 1 completed!"), 1000);
    });
    const task2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Task 2 completed!"), 2000);
    }); const task3 = new Promise((resolve, reject) => {
        setTimeout(() => reject("Task 3 failed!"), 1500);
    });
    // Promise.all example 
    console.log("Running Promise.all...");
    Promise.all([task1, task2, task3])
        .then(results => {
            console.log("All tasks completed:", results);

        })
        .catch(error => {
            console.error("One of the tasks failed:", error);

        });
}

function promiseAnyDemo() {
    const task1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Task 1 completed!"), 1000);
    });
    const task2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Task 2 completed!"), 2000);
    }); const task3 = new Promise((resolve, reject) => {
        setTimeout(() => reject("Task 3 failed!"), 1500);
    });
    // Promise.all example 
    console.log("Running Promise.any...");
    Promise.any([task1, task2, task3])
        .then(result => {
            console.log("At least one task succeeded:", result);

        })
        .catch(error => {
            console.error("All tasks failed:", error);

        });
}