class HelloTest {
  constructor(message) {
    this.message = message;
  }

  greeting() {
    return `Hello ${this.message}`;
  }

  addNumbers(...vals) {
    return vals.reduce((sum, currValue) => sum + currValue);
  }
}

module.exports = new HelloTest("Michael");
