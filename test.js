/*const bcrypt = require('bcrypt');

userObj = {
    password: 'mydubmpass0',
    username: 'jeff',
    favColor: 'grey'
};

bcrypt.hash(userObj.password, 10).then(newUserData => {
    console.log(newUserData);
});

let promiseFirst = () => {
    return new Promise((resolve, reject) => {
        //reject if there is error
        resolve("I am printed first");
    });
}

async function printStuff() {};

{
    hooks: {
        async function printStuff() {
            try {
                let response = await promiseFirst();
                console.log(response);
            } catch (error) {
                console.error(`ERROR: ${error}`);
            }
            console.log("I am printed second");
            return;
        };
    }
}

printStuff();*/

let myHooker = {
    printStuff: () => { },
    otherthings: 0,
};

myHooker = {
    printStuff(input) {
        console.log(input);
    },
    otherthings: 0
}

myHooker.printStuff("test");