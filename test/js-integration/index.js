const assert = require("assert");

describe("Javascript integration", function() {
  it("should work with default require statement", function() {
    const JsonToClasses = require("../../build/src/index");

    const expected0 = `class RootObject {
  constructor(
    private cats: Cat[],
    private favoriteNumber: number,
    private favoriteWord: string,
  ){}
}`;

    const expected1 = `class Cat {
  constructor(
    private name: string,
  ){}
}`;

    const json = {
      cats: [{ name: "Kittin" }, { name: "Mittin" }],
      favoriteNumber: 42,
      favoriteWord: "Hello"
    };

    const output = JsonToClasses(json);
    // const asd = [0,1,2];
    // asd.forEach
    output.forEach((o, index) => console.log(`▼${index}\n${o}\n`));
    // .reduce((type1, type2) => {
    //   return `${type1}\n${type2}`;
    // })
    // .trim();
    console.log(JSON.stringify(output));

    console.log(output[0]);
    console.log(output[1]);

    assert.strictEqual(output[0], expected0);
    // assert.strictEqual(output[1], expected1);
  });
});
