//Class for userParams 
//=====================
import { User } from "./user";

//userParams = queryParams => pass as an object in API (better way if more params are there)
export class UserParams {

    //PAGINATION(defaults)
    //***********
    pageNumber:number = 1;
    pageSize:number = 5;

    //AGE(defaults)
    //**** 
    minAge:number = 18;
    maxAge:number = 99;

    //GENDER - Show opposite gender members to user(Filter)
    //********
    gender:string;

    //Create an instance of UserParams class + pass currentUser in it 
    //To Search for users opposite to currentUser gender
    constructor(user:User){
        this.gender = user.gender === 'male' ? 'female' : 'male';
    }
    
}
