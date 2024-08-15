const { add, subtract, divide, multiply } = require("./math");

describe("Math.js tests", () => {
    it("should test  add  ", () => {
        expect(add(2, 3)).toBe(5);
    });

    it("Should test subtract", () => {
        expect(subtract(2, 2)).toBe(0);
    });

    it("Should test divide", () => {
        expect(divide(2, 2)).toBe(1);
    });

    it("Should test multiply", () => {
        expect(multiply(2, 2)).toBe(4);
    });
});