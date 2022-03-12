export function feedback(correct, guess) {
  if (correct.length === guess.length) {
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
        // If right letter in wrong place, set results to "misplaced" and "found"
        else if (
          correctLetter.letter === guessLetter.letter &&
          correctLetter.result !== "correct" &&
          correctLetter.result !== "found" &&
          guessLetter.result !== "correct"
        ) {
          correctLetter.result = "found";
          guessLetter.result = "misplaced";
        }
        // If wrong letter, set result to "incorrect"
        else if (guessLetter.result === "null") {
          guessLetter.result = "incorrect";
        }
      });
    });

    // Loop through a second time to fix "misplaced" errors steming from
    // multiples of same letter in guess
    correctArr.forEach((correctLetter) => {
      guessArr.forEach((guessLetter) => {
        if (
          guessLetter.result === "misplaced" &&
          correctLetter.result !== "found" &&
          guessLetter.letter === correctLetter.letter
        ) {
          guessLetter.result = "incorrect";
        }
      });
    });

    console.log(guessArr);
    console.log(correctArr);
  } else {
    console.log("ERROR! The words must be the same length!");
  }
}
feedback("cykla", "hallå");
