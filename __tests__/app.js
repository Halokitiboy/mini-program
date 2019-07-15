"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-zt-miniprogram:app", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ someAnswer: true });
  });

  it("creates files", () => {
    assert.file(["miniprogram/app.js"]);
    assert.file([".commitlintrc.js"]);
    assert.file([".editorconfig"]);
    assert.file([".eslintignore"]);
    assert.file([".eslintrc.js"]);
    assert.file([".gitignore"]);
    assert.file([".stylelintrc"]);
    assert.file([".prettierrc"]);
    assert.file(["gulpfile.js"]);
    assert.file(["package.json"]);
    assert.file(["postcss.config.js"]);
    assert.file(["README.md"]);
    assert.file([".gitignore"]);
  });
});
