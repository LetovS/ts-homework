export interface IUser {
    gender: string,
    name: string,
    userId: string
}

export interface IUsersDetails {
    userId: string,
    name: string,
    birthdate: string,
    age: number,
    organization:{
        name: string,
        position: string,
    }
}

export interface IUserJobInfo {
    name:string,
    position:string,
    age: number,
    gender: string,
}