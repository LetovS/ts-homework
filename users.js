"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = getUsers;
class User {
    constructor(userId, name, gender) {
        this.userId = userId;
        this.name = name;
        this.gender = gender;
    }
}
let array = [
    new User('127e4567-e89b-12d3-a458-426614174000', 'John', 'man'),
    new User('127e4567-e89a-12f3-a458-327395154000', 'Anna', 'woman')
];
function getUsers() {
    return array;
}
