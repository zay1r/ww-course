4 steps of pseudocode-first planning:

1. Write code in plane english no code jargin
2. refine the steps of the commented code line till it is easy to code (this is key to having clear defined logic)
3. write code under each step
4. clean up comments that are not nessicary like "declare variables for x and y values"

5. Places Developer write for each other:
6. Comment - This is reserved for devleopers that are trying to understand a particular chunk of code
7. JSDOC - this is for assisting developes to prevent using the wrong types in the code and make sure the correct types and logic is upheld and returned
8. Commit Message - This explains what changes were made when the code was pushed to the PR request
9. PR Message - it is for the reviewer of you code and explains what the reviewer need to keep an eye out for
10. ReadMe - This is a document that capture a detailed description of the whole code and what important information needs to be know about the doc and how to exceute the code and what it was built for. this can be a great doc for a new comer to read to understand at a high level the system that they are looking at.

11. committing the plan before the code is good practice so the if someone get the code after then can see what you were trying to do in plain english before it got messy with code

12. good descriptive variable in code mean that comments are not really needed but are still nice and usefull to have
13. returning null the code can still continue but returning and error indicates an issue, it can be nice to return something nice when it wont break the code like when doing a calculation when zero will scue the numbers but null will be skipped and not impact the calculation
14. a- README, b- a comment, c- a commit message, d- a comment
15. git branch to see what branch, then git switch branch -c lesson/0.3
16. git commit prepare a files to get pushed while push actually pushes the file to github
17. env is in gitignore so it does not get complied when the code it run I do not think deleting it in the next commit is enough
18. this error signals an issue with a a variable that is expecting one type but another is presented
19. the code might that a number sting not a number literal returned, or a variable stored as something that is not a number
