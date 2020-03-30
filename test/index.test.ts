import { HelloWorld } from "../src/index";

describe("HelloWorld", () => {
  it("returns hello world", async () => {
    expect(await HelloWorld()).toEqual("hello, world");
  });
});
