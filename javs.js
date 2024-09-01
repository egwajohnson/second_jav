function lifeInWeeks(yourAge) {
    const now = new Date();
    /************Don't change the code above************/    
      const yourAge=prompt("Your Age?");
      const ageInDays= (90-yourAge)*365;
      const ageInWeeks= (90-yourAge)*52;
      const ageInMonths=(90-yourAge)*12;  

      alert(`You have ${ageInDays} days, ${ageInWeeks} Weeks and, ${ageInMonths} Months`);
       
    /*************Don't change the code below**********/
    };

    lifeInWeeks();

