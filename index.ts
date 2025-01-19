import {getUsers} from './users'
import {getUsersDetails} from './userInfo'
import {IUser, IUserJobInfo, IUsersDetails} from "./interfaces";

const users = getUsers();
const usersDetail = getUsersDetails();

const usersJobDetail = getUsersJobPositions(users);
console.log(usersJobDetail);

function getUsersJobPositions(usersArray: Array<IUser>): Array<IUserJobInfo> {
    return usersArray.map(x => {
        const details = usersDetail.filter(y => y.userId == x.userId)[0];
        return {
            name: x.name,
            age: details.age,
            position: details.organization.position,
            gender: x.gender
        }
    })
}