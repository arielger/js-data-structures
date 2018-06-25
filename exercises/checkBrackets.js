const Stack = require("../structures/Stack");

const openingBrackets = ["[", "(", "{"];
const closingBrackets = ["]", ")", "}"];

const getBracketsList = code => {
  const bracketsRegex = /(\[)|(\])|(\()|(\))|(\{)|(\})/g;
  const brackets = [];
  let match;

  while ((match = bracketsRegex.exec(code)) !== null) {
    brackets.push({
      text: match[0],
      index: match.index + 1
    });
  }
  return brackets;
};

const getMatchingClosingBracket = openingBracket => {
  const openingBracketIndex = openingBrackets.indexOf(openingBracket);
  return closingBrackets[openingBracketIndex];
};

const checkBrackets = code => {
  const brackets = getBracketsList(code);
  const bracketsStack = new Stack();

  for (let i = 0; i < brackets.length; i++) {
    const bracket = brackets[i];
    const isOpeningBracket = openingBrackets.includes(bracket.text);

    if (isOpeningBracket) {
      bracketsStack.push(bracket);
    } else {
      // If the stack is empty there is no opening bracket matching the closing bracket
      if (bracketsStack.empty()) return bracket.index;

      // Check if it matches the correct opening bracket
      const lastOpeningBracket = bracketsStack.top().text;
      if (getMatchingClosingBracket(lastOpeningBracket) !== bracket.text) {
        return bracket.index;
      }

      // If it matches the correct opening bracket
      bracketsStack.pop();
    }
  }

  if (bracketsStack.empty()) return "Success";

  // Find first unmatched opening bracket without corresponding closing bracket
  let firstUnmatchedOpeningBracket;
  while (!bracketsStack.empty()) {
    firstUnmatchedOpeningBracket = bracketsStack.pop();
  }
  return firstUnmatchedOpeningBracket.index;
};

module.exports = {
  getBracketsList,
  getMatchingClosingBracket,
  checkBrackets
};
