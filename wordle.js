function feedback(correct, guess) {
  // Create arrays and map with propertys
  const correctArr = Array.from(correct).map((letter, index) => {
    return { id: index, letter, result: "null" };
  });

  const guessArr = Array.from(guess).map((letter, index) => {
    return { id: index, letter, result: "null" };
  });

  // Loop through arrays
  correctArr.forEach((correctLetter) => {
    guessArr.forEach((guessLetter) => {
      // If same letter in same place, set results to "correct"
      if (
        correctLetter.letter === guessLetter.letter &&
        correctLetter.id === guessLetter.id
      ) {
        correctLetter.result = "correct";
        guessLetter.result = "correct";
      }
    });
  });

  console.log(guessArr);
  console.log(correctArr);
}

feedback("birdy", "birdy");
