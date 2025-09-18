function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Register end");
            resolve();
        }, 2000);
    });
}

function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Email send end");
            resolve();
        }, 2000);
    });
}

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Login end");
            resolve();
        }, 2000);
    });
}

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data Received");
            resolve();
        }, 2000);
    });
}

function displayData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data Displayed");
            resolve();
        }, 2000);
    });
}

// Promise chaining
register()
    .then(sendEmail)
    .then(login)
    .then(getData)
    .then(displayData)
    .catch((err) => {
        console.log("Error:", err);
    });

console.log("Call other Application");