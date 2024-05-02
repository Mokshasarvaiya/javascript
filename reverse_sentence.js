var sentence = "Hello, how are you?";
    // Step 1: Split the sentence into an array of words
    var wordsArray = sentence.split(" ");
  
     // Step 2: Reverse the order of the array
  var reversedArray = wordsArray.reverse();

  // Step 3: Join the reversed array back into a sentence
  var join = reversedArray.join(" ")

console.log(join); // Output: "you? are how Hello,"