function solve(year, month){
    
    function getDaysInMonth(month,year) {
    
        // Here January is 1 based
    
        //Day 0 is the last day in the previous month
    
       return new Date(year, month, 0).getDate();
    
      // Here January is 0 based
    
      // return new Date(year, month+1, 0).getDate();
    
      };
    
      console.log(getDaysInMonth(month - 1,year)); 


  }
  solve(2, 2021)