//My version

const sentence = "   Hello world! how's it goings? I got 5 Golf Clubs! My cousin's name is Michael Brown!  "
/**
 * a function that take a sentence and cleans it and finds the longest word
 * @param {*} sentence - this is the sentence sting that it taken by the function
 * @typedef {(string)} 
 */
function getLongestWord(sentence){
    let currentLongWord = '';              
    let currentLongWordLength = 0;
    let tempLongWord = '';   
    // remove punctuation using ascii and trim white space at the end and start    
    const noPunctuation = sentence.replace(/[^a-zA-Z\s]/g, "").trim();
    // Step 1- Get string length
    const sentenceLength = noPunctuation.length;
    console.log(noPunctuation);
    console.log("The sentence length is: ", sentenceLength);

//Hello world hows it goings I got  Golf Clubs

    for(let i of noPunctuation){
        //if i not equal to blank
        if(i != ' '){
            //current work = current world plus what is in i
            currentLongWord = currentLongWord + i;

        }if(i == ' ' && tempLongWord== ''){
            tempLongWord = currentLongWord;
            currentLongWord= '';
            
             }if(i == ' ' && tempLongWord != ''){
                if(currentLongWord.length > tempLongWord.length){
                    tempLongWord=currentLongWord;
                    currentLongWord= '';
                }
                currentLongWord='';
             }
             
            }
        
    
    console.log("The longest word is: ", tempLongWord);
    console.log(tempLongWord + " is " + tempLongWord.length + " Characters Long");
}

getLongestWord(sentence);

// iterate through string counting the chars and saving them and incrementing count and looking for spaces
//when counter gets to a space that is the end of that count for that word store the work if it is longer that the currently stored word
//store that number in variable
// count the next chars till find next space
// check if that number is larger that the one stored in the variable
// return the sting that is the longest word 
// if there is a tie the work that appears first wins




