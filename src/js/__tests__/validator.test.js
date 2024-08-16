import isValide from "./../validator";

test("American Express card example", () => {
  const result = isValide("378282246310005");
  expect(result).toBe(true);
});
