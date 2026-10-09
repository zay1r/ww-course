const x = { a: 1, b: 2 };

 const array = [{day:"Monday", PlannedHours:3, focus:"JavaScript" }
,{day:"Tuesday", PlannedHours:2, focus:"TypeScript" },{day:"Thursday", PlannedHours: 4, focus:"Setup Code" }];

console.log("The first day is", array[1].day);
console.table(array);

let hours = 0;

const test = array[0].PlannedHours;
console.log(test);



for(i=0; i < array.length; i++){
    
    let temphours= hours+array[i].PlannedHours; 
    hours = temphours; 
    console.log("This is passover", i);
    console.log("Hours is", hours);
    console.log("Temp hours is", temphours);
}

console.log("Total hours: ", hours);