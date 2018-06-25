const getMatchingClosingBracket = require("./checkBrackets")
  .getMatchingClosingBracket;
const checkBrackets = require("./checkBrackets").checkBrackets;

describe("getMatchingClosingBracket", () => {
  it("should return matching close bracket", () => {
    expect(getMatchingClosingBracket("(")).toBe(")");
    expect(getMatchingClosingBracket("{")).toBe("}");
    expect(getMatchingClosingBracket("[")).toBe("]");
  });
});

describe("checkBrackets", () => {
  // Valid input

  test("should return success with valid input: []", () => {
    const input = "[]";
    expect(checkBrackets(input)).toBe("Success");
  });

  test("should return success with valid input: ()", () => {
    const input = "()";
    expect(checkBrackets(input)).toBe("Success");
  });

  test("should return success with valid input: {}", () => {
    const input = "{}";
    expect(checkBrackets(input)).toBe("Success");
  });

  test("should return success with valid input: {}()[]", () => {
    const input = "{}()[]";
    expect(checkBrackets(input)).toBe("Success");
  });

  test("should return success with valid input: [{()}]", () => {
    const input = "[{()}]";
    expect(checkBrackets(input)).toBe("Success");
  });

  test("should return success with valid input: {[]}()", () => {
    const input = "{[]}()";
    expect(checkBrackets(input)).toBe("Success");
  });

  // Unmatched closing brackets

  test("should return first unmatched closing bracket pos: ]()", () => {
    const input = "]()";
    expect(checkBrackets(input)).toBe(1);
  });

  test("should return first unmatched closing bracket pos: ()]", () => {
    const input = "()]";
    expect(checkBrackets(input)).toBe(3);
  });

  test("should return first unmatched closing bracket pos: {()]", () => {
    const input = "{()]";
    expect(checkBrackets(input)).toBe(4);
  });

  test("should return first unmatched closing bracket pos: foo(bar[i);", () => {
    const input = "foo(bar[i);";
    expect(checkBrackets(input)).toBe(10);
  });

  // Unmatched opening brackets

  test("should return first unmatched opening bracket pos: ([[]{}]", () => {
    const input = "([[]{}]";
    expect(checkBrackets(input)).toBe(1);
  });

  test("should return first unmatched opening bracket pos: {[}", () => {
    const input = "{[}";
    expect(checkBrackets(input)).toBe(3);
  });
});
