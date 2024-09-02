
// function lifeInWeeks(age) {
//     /************Don't change the code above************/
//     const yourAge = Number(prompt("Your Age?"));
//     const ageInDays = (90 - yourAge) * 365;
//     const ageInWeeks = (90 - yourAge) * 52;
//     const ageInMonths = (90 - yourAge) * 12;

//     alert(`You have ${ageInDays} days, ${ageInWeeks} Weeks and, ${ageInMonths} ,Months and you are ${yourAge}, Years Old`);

//     /*************Don't change the code below**********/
// };

// lifeInWeeks();

//  to run queston1 comment Question2 out.
// Question2


// console.log(love_calculator());
// const prompt = require('prompt-sync')({sigint: true});
function calculateLove() {
    const name1 = prompt("Enter Your Name");
    const name2 = prompt("Enter Your Partner Name");
    var result;
    
    if (name1 === '' || name2 === '') {
        alert('Please enter both names.');
        return;
    }

    const matchPercentage = Math.floor(Math.random() * 101);

   result =  `${name1} and ${name2} are ${matchPercentage}% match!!`;

    alert (result);
};

   calculateLove();