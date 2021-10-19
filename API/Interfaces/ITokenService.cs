using API.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Interfaces
{
    //Token Interface
    //================
    public interface ITokenService
    {
        //Token Creation method
        //Receivrd user + create Token for user + return user -> Accounts(Login|Register)
        string CreateToken(User user);

    }
}
