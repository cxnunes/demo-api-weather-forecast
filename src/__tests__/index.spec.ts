import { log } from "@utils/logger";

describe("index", () => {
  test("test", () => {
    log("1");
    expect(1).toBe(1);
  });
});
