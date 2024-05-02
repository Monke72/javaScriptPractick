class Character {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  attack(target) {
    console.log(`${this.name} атакует ${target}!`);
  }
}

class Warrior extends Character {
  constructor(name, health, weapon) {
    super(name, health);
    this.weapon = weapon;
  }

  useSpecialAttack(target) {
    console.log(
      `${this.name} выполняет специальную атаку на ${target} с помощью ${this.weapon}!`
    );
  }
}

class Mage extends Character {
  constructor(name, health, spell) {
    super(name, health);
    this.spell = spell;
  }

  castSpell(target) {
    console.log(
      `${this.name} применяет заклинание ${this.spell} на ${target}!`
    );
  }
}

let warrior = new Warrior("Воин", 100, "Меч");
warrior.attack("Враг"); // Воин атакует Враг!
warrior.useSpecialAttack("Враг"); // Воин выполняет специальную атаку на Враг с помощью Меча!

let mage = new Mage("Маг", 80, "Огненный шар");
mage.attack("Враг"); // Маг атакует Враг!
mage.castSpell("Враг"); // Маг применяет заклинание Огненный шар на Врага!
