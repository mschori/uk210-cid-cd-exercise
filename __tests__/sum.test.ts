import {sum} from "../src/sum";

test("test sum-function", () => {
    expect(sum(9, 11)).toBe(20);
});