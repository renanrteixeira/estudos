class Person {
  constructor(name) {
    this.Name = name;
  }

  sayMyName() {
    return `Meu nome é ${this.Name}`;
  }
}

module.exports = {
  Person,
};
