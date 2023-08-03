let userList = [
  {
    id: 1,
    name: "Rikkei",
    age: 30,
  },
  {
    id: 2,
    name: "Academy",
    age: 20,
  },
  {
    id: 3,
    name: "Academy",
    age: 20,
  },
];


let option = prompt('Enter your choice:');

function createUser() {
    let newObj = {};
    newObj.id = userList.length + 1;
    newObj.name = prompt('Enter your user name:');
    newObj.age = +prompt('Enter your user age:');

    userList.push(newObj);
}

function updateUser() {
    let id = +prompt("Enter your id user want to update:");
    
    let isTrue = false;
    for(let i = 0; i < userList.length; i++) {
        if(userList[i].id === id) {
            userList[id].name = prompt('Update your user name:');
            isTrue = true;
        }
    }
    if(isTrue === false) {
        console.log("User not found");
    }
}


function deleteUser() {
    let id = +prompt("Enter your id user want to delete:");
    let isTrue = false;
    for(let i = 0; i < userList.length; i++) {
        if(userList[i].id === id) {
            userList.splice(i, 1);
            isTrue = true;
        }
    }
    if(isTrue === false) {
        console.log("User not found");
    }
}



if(option === "C") {
    createUser();
    console.table(userList);
} else if (option === "R") {
    console.table(userList);
} else if(option === "U") {
    updateUser();
    console.table(userList);
} else if(option === "D") {
    deleteUser();
    console.table(userList);
}
