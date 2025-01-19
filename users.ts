import {IUser} from './interfaces'

class User implements IUser{
    constructor(public userId: string,
                public name: string,
                public gender: string){}

}


let array: Array<User> = [
    new User('127e4567-e89b-12d3-a458-426614174000',
        'John',
         'man'),
     new User('127e4567-e89a-12f3-a458-327395154000',
         'Anna',
        'woman')
]

export function getUsers() : Array<IUser> {
    return array;
}