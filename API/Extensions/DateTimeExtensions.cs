using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Extensions
{
    public static class DateTimeExtensions
    {
        //this DateTime => use this method directly with DateTime type
        //Eg: use as Dob.calculateAge()
        public static int calculateAge(this DateTime Dob)
        {

            //CurrentDate year
            var todayYear = DateTime.Today.Year;
            //Dob year
            var dobYear = Dob.Year;

            //Age = TodayYear - DobYear
            //but there can be difference in todatDate & DobDate => year not completed
            var age = todayYear - dobYear;

            //Condition**
            //TodayDate - Age < DobDate => age is 1 less than calculated
            if(Dob.Date > DateTime.Today.AddYears(-age))
            {
                age--;
            }

            return age;
        }
    }
}
