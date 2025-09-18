// function register(){
//     waitfortwosec();
//     console.log("Register end");
// }
// function sendEmail(){
//     waitfortwosec();
//     console.log("Email send end");
// }
// function login(){
//     waitfortwosec();
//     console.log("login end");
// }
// function getData(){
//     waitfortwosec();
//     console.log("Data received");
// }
// function displayData(){
//     waitfortwosec();
//     console.log("Data is diplayed");
// }

// function waitfortwosec(){
//     const ms=new Date().getTime()+2000;
//     while(new Date().getTime()<ms);
// }


// register();
// sendEmail();
// login();
// getData;
// displayData();
// console.log('Call other Application');



function register(cb) {
    setTimeout(() => {
        console.log("Register end");
        cb();
    }, 2000);
}

function sendEmail(cb) {
    setTimeout(() => {
        console.log("Email send end");
        cb();
    }, 2000);
}

function login(cb) {
    setTimeout(() => {
        console.log("login end");
        cb();
    }, 2000);
}

function getData(cb) {
    setTimeout(() => {
        console.log("Data Received");
        cb();
    }, 2000);
}

function displayData(cb) {
    setTimeout(() => {
        console.log("Data Displayed");
        cb();
    }, 2000);
}

// register();
// sendEmail();
// login();
// getData;
// displayData();
// console.log('Call other Application');

// Callback Hell (fixed)
register(function () {
    sendEmail(function () {
        login(function () {
            getData(function () {
                displayData();
            });
        });
    });
});

console.log("Call other Application");