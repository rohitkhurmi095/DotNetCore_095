//=================
// BASE API PATH 
//=================
//BASE API URL is kept here
//use static keword => access directly as className.BASE_API_URL;
//dont need to create class instance

//NOTE:
//This url can also be kept in environments - production,development depending upon the use case 
//but here we need to specify if we want to use that url for production mode

export class Global{

    public static BASE_API_PATH = "http://localhost:1472/api/";
}