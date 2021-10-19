using API.Entities;
using API.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace API.Services
{

    //Token Interface Implementation
    //===============================
    //NugetPackage:[System.IdentityModel.Tokens.Jwt 6.1.3]
    public class TokenService : ITokenService
    {
        
        //Symmetric Key (bytes[])
        //Symmetric Key => same key used for Encryption|Decryption
        private readonly SymmetricSecurityKey _key;

        //Constructor
        //____________
        public TokenService(IConfiguration config)
        {
            //read TokenKey from appSettings.json (using IConfiguration object)
            _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["TokenKey"]));
        }


        //Interface method Implementation
        //________________________________
        //:::::Steps:::::
        //1.Create CLAIMS
        //2.CREATE CREDENTIALS
        //3.DESCRIBE Token
        //4.CREATE TOKEN HANDLER
        //5.CREATE TOKEN via TOKEN HANDLER
        //6.RETURN Token via TOKEN HANDLER 
        public string CreateToken(User user)
        {
            //1.Create CLAIMS 
            //NameId -> to store UserName
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.NameId,user.UserName)
            };

            //2.CREATE CREDENTIALS(Signature(key,algorithm))
            var creds = new SigningCredentials(_key, SecurityAlgorithms.HmacSha512Signature);

            //3.DESCRIBE Token
            //Subject = claims
            //Expire = how long tokne is valid for
            //SigningCredentials = credentials
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(7),
                SigningCredentials = creds
            };

            //4.CREATE TOKEN HANDLER
            var tokenHandler = new JwtSecurityTokenHandler();

            //5.CREATE TOKEN via TOKEN HANDLER
            var token = tokenHandler.CreateToken(tokenDescriptor);

            //6.RETURN Token via TOKEN HANDLER 
            return tokenHandler.WriteToken(token);
            
        }
    }
}
