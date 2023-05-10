export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    // /^[a-z]+[[a-z|\-_]*[\d]{0,3}[a-z|\-_]*[[\d]{0,3}]*]*+[a-z]$/i - есть еще второй вариант

    return (/^[a-z]+[[a-z|\-_]*[[\w|-]{0,3}]*[[a-z|\-_]*[a-z]$/i.test(this.name));
  }
}
