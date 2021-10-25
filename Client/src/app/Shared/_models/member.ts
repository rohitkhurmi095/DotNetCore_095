import { Photo } from "./photo";

//MEMBER Interface
//=================
//use "http://json2ts.com/" to convert API data -> TS_Interface
export interface Member {
    userId: number;
    username: string;
    gender: string;
    age: number;
    knownAs: string;
    city: string;
    country: string;
    created: Date;
    lastActive: Date;
    introduction: string;
    interests: string;
    lookingFor: string;
    photoUrl: string;
    photos: Photo[];
}
