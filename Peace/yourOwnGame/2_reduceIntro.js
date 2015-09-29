(function() {

//Reduce mini-sprint:
// You'll notice that oftentimes what you're doing with for loops and each statements is reducing an entire collection down to a single answer. This is such a common pattern that there's a canonical functional programming tool called reduce. Let's explore what reduce does, and how it boils a collection down to a single answer!
// What reduce does is:
  // 1. Iterate over a collection, and invoke a callback function on each item in that collection. 
  // 2. The callback function takes two parameters: the accumulated result from the previous iteration, and the current item.
  // 3. The callback performs some logic, and 
  // 4. The callback returns a single item, given these two inputs. 
  // 5. The result returned from the previous iteration is now passed in as the accumulated result to the next iteration. 
  // 6. reduce returns the final accumulated value for us. 
  // An obvious way of using reduce is to sum up the values in an array. That would look like so:
  var testArr = [6,7,8,9,10];
  var sum = _.reduce(testArr, function(accumulated, current) {
    return accumulated + current;
  });
  // console.log('the sum returned from reduce is:',sum);
  // Let's break this down for a moment. 
  // We're creating a variable sum, and setting it equal to the result of invoking reduce with some arguments. 
    // Those arguments are the testArr we just created, and a callback function. 
      // The callback function takes in two parameters: the accumulated result from the previous invocation of the callback function, and the current value being iterated over. 
      // The callback then performs some logic on these two things and returns a single thing. 
      // In our case, the callback function adds these two things together and returns the result of that addition. 
      // This result is then passed in as accumulated to our next invocation of the callback. 
      // At the end, reduce returns the accumulated value for us. 
  // Write out your own invocation of reduce that gives you the results of multiplying all the values in testArr together. 
  // Reduce also works on the values stored in an object. 
  var codingPoints = {
    coderByte: 1200,
    eloquentJavaScript: 80,
    codeCademy: 700,
    telegraphPrep: 8000000
  };
  // Let's use reduce to add together all the values in our codingPoints object. 
  // reduce also takes an optional starting value that we haven't been giving it yet. 
    // What is this starting value used for? It's the value that is passed in as "accumulated" on the first iteration. 
    // Let's say that you already came in with 10 codingPoints before starting on coderByte or codeCademy. We can pass that in as the starting value to reduce. All you need to do is put it after a comma after the callback function, like so: 
    var pointTotal = _.reduce(codingPoints, function(accumulated, current) {
      //logic goes here
    }, 10);
    // Try writing a new invocation of reduce that gives yourself 50 starting codingPoints and then sums up the rest of the codingPoints. 
    // Remember that reduce returns a value. Feel free to store it in a variable if you like.
    // Now try writing another invocation of reduce that multiplies the values in testArr together, but starts with the value of 10. 
      // What do you expect to happen?
      // Hint: think through what happens on the first iteration through reduce. 
        // Let's step through it: 10 will be passed in as the value for accumulated, and 6 will be passed in as the value for current. We'll multiply them together, and return the result, 60. 
        // 60 will then be passed in as the value for accumulated on the next iteration, and 7 will be passed in as the value for current. Multiply them together, we get 420, and return that value. 
        // We repeat this through the last item in the array, eventually getting to an answer that is 10x the value we got when we did not pass in 10 as the starting value. 
  // Reduce is super flexible. You can use it like filter if you wanted to. 
  // Let's write out code that reduces the codingPoints object down to just an array of values that are larger than 1000. So we'd expect to get the following: [1200, 8000000]
    // HINT: you can pass in anything you want as a starting value, even an empty array.

  // Now let's think through how we could use reduce to turn an array of nested arrays into a single array. 
    var nestedArrs = [[1,2,3],[4],[5,6,7,8],[9,10]];
    // We can use reduce to simplify that down to a single value of [1,2,3,4,5,6,7,8,9,10].
    // As always, when in doubt, log the variables you're working with to the console with a clear note. 
    // Write out the code to take each value from a nested array and push it into an accumulated array. 
      // When in doubt, pseudocode!
    // Make sure you're using reduce for this!

  // Another interesting use of reduce is with booleans. 
    var friends = {
      rihanna: true,
      taylorSwift: true,
      katyPerry: false
    };
    // Say you have a collection of people, and a true or false value marking whether you're friends with them or not. Maybe you want to iterate through the whole collection and see if you're friends with everyone. We can use reduce for that!
      // Let's think about this for a moment. On each iteration, we want to check two things: 
        // 1. Whether we're friends with the current person (current value)
        // 2. AND whether we're friends with everyone who came before (accumulated value)
      _.reduce(friends, function(accumulated, current) {
        // This will return true ONLY IF both the current value is true, and the result of all accumulated iterations is true too. This will return false if either the current or the accumulated is false. 
        return accumulated && current; 
      }, true); //start with true. What happens if we start with false? 
    // Now let's put this to use another way. 
      var bouncersNightmare= {ashley: 22, bobby:23, camila:25, gabriela:22, ben:21, miranda:24, jayden:22, sofia:23, matias:21, hannah:21, makayla:23, justin:22, isaiah:25, caleb:22, chloe:24};
      // Let's make this poor bouncer's job a bit easier by reducing this collection down to a single true or false value of whether everyone in this group is at least 21 or not. 
        // Use reduce to turn bouncersNightmare into a single boolean value certifying whether everyone in the collection is at least 21. 
        // Test it out by switching one of the ages to be less than 21. Does your function return false now? 
  // Awesome job! You've now covered several different uses of reduce. There's a bit of a running joke amongst programmers that any problem can be solved using reduce. With these tools in your belt, you're going to be well-suited to do just that! 
  
  // CARRY ON...
  // Go ahead and jump back to working no your game board. Continue onto the file called '3_gamePieces.js' in the yourOwnGame folder.
})();
