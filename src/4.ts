interface KeyObj {
  key: number;
}

interface HouseObj {
  key: number;
  openDoor: (key: number) => boolean;
  comeIn: (person: PersonObj) => boolean;
}

interface PersonObj {
  key: number;
  name: string;
  getKey: () => number;
}

class Key implements KeyObj {
  public key = Math.round(Math.random() * (10 - 1 + 1) + 1);
  constructor() {}
}

class MyHouse extends Key implements HouseObj {
  public key: number;
  private isOpenedDoor: boolean = false;
  private isComeIn: string[] = [];
  constructor(key: KeyObj) {
    super();
    this.key = key.key;
  }

  openDoor(key: number) {
    this.isOpenedDoor = this.key === key;
    return this.isOpenedDoor;
  }

  comeIn(person: PersonObj) {
    if (this.isOpenedDoor && this.key === person.key) {
      this.isComeIn.push(person.name);
      return true;
    }
    return false;
  }
}

class Person extends Key {
  public key: number;
  public name: string = Date.now().toString();
  constructor(key: KeyObj) {
    super();
    this.key = key.key;
  }

  getKey() {
    return this.key;
  }
}

const key = new Key();

console.log(key);

const house = new MyHouse(key);

const person = new Person(key);

console.log(person);

house.openDoor(person.getKey());

house.comeIn(person);

console.log(house);

export {};
