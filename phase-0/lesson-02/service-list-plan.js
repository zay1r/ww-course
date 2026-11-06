// 1.What data does it get? (Its props, or what it reads from the content file.)
// 2.What does it show? (The structure, top to bottom.)
// 3.What can the user do? (Clicks, taps, typing, and what changes when they do.)
// 4.What are the edge cases? (Empty lists, missing values, very long text, slow loading.)
// 5.What's out of scope? (What it deliberately doesn't do, so nobody assumes it does.)

//1. the data will come for supabse database or content file:
//2. the open service list will be a card and it will show what the service will cover
//3. the user would be able to click, or tap on the card and it will expand and show service description and price
//4. database error with can cause a empty list but if we use content file we can avoid that
//- text could be long but that why it's going to be an accordian
//-missing valuse should not be an issue as I will get a description list for Brandon
//- accordian can get stuck or start open it should close on page refresh or when it is out of focus
//5. it doesnt pick that service and add it to cart or sign user up for that
