"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./users");
const userInfo_1 = require("./userInfo");
const users = (0, users_1.getUsers)();
const usersDetail = (0, userInfo_1.getUsersDetails)();
const usersJobDetail = getUsersJobPositions(users);
console.log(usersJobDetail);
function getUsersJobPositions(usersArray) {
    return usersArray.map(x => {
        const details = usersDetail.filter(y => y.userId == x.userId)[0];
        return {
            name: x.name,
            age: details.age,
            position: details.organization.position,
            gender: x.gender
        };
    });
}
