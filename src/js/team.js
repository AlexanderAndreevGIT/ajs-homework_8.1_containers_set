export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error(`игрок ${character.name} уже есть в комнаде`);
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    characters.forEach((item) => {
      this.add(item);
    });
  }

  toArray() {
    const result = [];
    this.members.forEach((item) => {
      result.push(item);
    });
    return result;
  }
}
