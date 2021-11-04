using API.Data.Repositories;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace API.Helpers
{
    //ACTION FILTER
    //**************
    //ActionFilter - applies before|after request is executed

    //===============================
    //UPDATING User's LastActive time using IAsyncActionFilter
    //===============================
    //LogUserActivity:IAsyncActionFilter Interface
    public class LogUserActivity : IAsyncActionFilter
    {
        //____________________
        //Implement Interface
        //____________________
        //context: context of action that is executing 
        //next: what is going to happen next after action is executed - to execute action, do something after this is executed
        //returns (after) actionExecutedContext 
        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            //context of action being executed
            //----------------------------------
            var resultContext = await next();


            //Check if user is authenticated
            //-------------------------------
            //if user is NOT AUTHENTICATED - do nothing
            //           ==================
            if (!resultContext.HttpContext.User.Identity.IsAuthenticated) return;


            //if user is AUTHENTICATED - update LastActive property
            //           =============
            //1.Get CurrentUserId -> using claims
            var userId = int.Parse(resultContext.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier)?.Value);

            //2.Get User Repository
            var repo = resultContext.HttpContext.RequestServices.GetService<IUserRepository>();

            //2.Get user by userId
            var user = await repo.GetUserByIdAsync(userId);

            //4.Update LastActive property to currentDateTime
            user.LastActive = DateTime.Now;

            //5.SaveChanges to repository
            await repo.SaveAllAsync();
        }
    }
}
