***Pseudocode Programming Process***
1. Write the function as plain-English steps.
2. Refine the steps until each one is obvious to code.
3. Write the code under each step.
4. Clean up the comments.

Example. 
**Step 1**: write the plan.
The problem: get the class average from a list of quiz scores. Students who were absent have a score of null.
// getClassAverage(scores)
// 1. Ignore null scores (the student was absent)
// 2. Add up the remaining scores
// 3. Divide the total by how many scores there are

**Step 2**: question the plan. Read each line and ask two things: is this one clear action? and what could go wrong?
// getClassAverage(scores)
// 1. Ignore null scores (the student was absent)
// 2. If nobody has a score, return 0
// 3. Add up the remaining scores
// 4. Divide the total by how many scores there are

**Step 3**: write the code under each step.
function getClassAverage(scores) {
  // 1. Ignore null scores (the student was absent)
  const takenScores = scores.filter((score) => score !== null);

  // 2. If nobody has a score, return 0
  if (takenScores.length === 0) return 0;

  // 3. Add up the remaining scores
  const total = takenScores.reduce((sum, score) => sum + score, 0);

  // 4. Divide the total by how many scores there are
  return total / takenScores.length;
}

**Step 4**: the comment pass.
The plan was scaffolding. It helped you build, and now most of it comes down. Keep only the comments that explain something the code can't:

***Planning a component***

1.What data does it get? (Its props, or what it reads from the content file.)
2.What does it show? (The structure, top to bottom.)
3.What can the user do? (Clicks, taps, typing, and what changes when they do.)
4.What are the edge cases? (Empty lists, missing values, very long text, slow loading.)
5.What's out of scope? (What it deliberately doesn't do, so nobody assumes it does.)

***What makes a good comment***
Why, or a business rule	-  Stripe sends amounts in cents, so divide by 100 before displaying
Warning	- Don't sort this in place. The chart reads the same array.
A decision that isn't obvious - Using a Map, not an object, because customer names can be any string
A TODO tied to a ticket	- TODO(CP01-6): replace with the booking form once Supabase is ready
Function docs (JSDoc) - Section 5

***JSDoc: documenting functions***

A comment that starts with /** (two stars) is a JSDoc comment. It sits directly above a function and describes how to use it: what goes in, what comes out, and anything that could surprise the caller.

The tags you'll use most
Tag	                 Use	                  Example
______________________________________________________________________
@param	    | A parameter	                | @param {string} id - 
            |                               | The order ID to look up        
____________|_______________________________|__________________________
@param with |  [ ]	An optional parameter, 	| @param {number} [limit=5] 
            |        with its default       | - How many to return  
____________|_______________________________|__________________________
@returns	|  What comes back	            |@returns {Order | undefined} The  
            |                               |order, or undefined if not found
____________|_______________________________|__________________________
@throws	    |  When it throws an error	    |@throws {Error} If the 
            |                               |number isn't 10 digits
____________|_______________________________|_________________________
@example	|  An example of using it	    |getClassAverage([80, 90]); 
            |                               |// 85
____________|_______________________________|__________________________
@typedef	| Describes the shape of an 	|See below
            |  object                       |


***Leaving review comments***

Label	             Meaning	                                     Example
praise:	       Something done well. Say it; it matters.	     praise: the why-comment on the null check saved me a question.
nitpick:	   Tiny and optional, often style	             nitpick: "calc" → "calculateCartTotal"?
suggestion:	   A proposed improvement, with the reason	     suggestion: name the 1.13 as HST_RATE, so it's searchable when the rate changes.
issue:	       A real problem that needs fixing	             issue: this comment says top 3, but the default limit is 5.
question:	   You're not sure, so you ask	                 question: should an empty cart be 0, or should it throw?
todo:          Todo small trivial but needs to be done       Todo: Need to add condition to stop crash
thought:       Thoughts that pop up during review            thought: it would be nice to add a theme changer
Chore:         simple tasks that must be done                Large task that needs to be done
Type:          main issue is misspelling
Polish:       Suggestion but not necessarily wrong 

***Learning comments vs. production comments***

These are two different things, so keep them apart:
- Learning comments explain every line to yourself. They're a great study tool. Use them freely in practice files, or keep them in notes.md.
- Production comments are for teammates. They're sparse, and they focus on why.

***An example of JSDoc tag/comments***

Adding more information with tags
/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @typedef {(object)} - collection of books 
 * @returns
 * @callback
 */
function Book(title, author) {
}

