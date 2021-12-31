import { random } from "./random";
import uuidv4 from "./uuid";

class Unit {
  public id: string;
  public initiative: number;
  public target?: Unit;
  public maxHealth: number;

  constructor(
    public name: string,
    /** health points of the unit */
    public health: number,
    /** checks whether an attack roll is successful or not */
    public defence: number,
    /** damage modifier vs defence */
    public attack: number,
    /** max damage (subjected to die roll) */
    public damage: number
  ) {
    this.id = uuidv4();
    this.initiative = random(1, 20);
    this.health = health;
    this.maxHealth = health;
    this.defence = defence;
    this.attack = attack;
    this.damage = damage;
  }

  doAttack() {
    let damageModifier = 1;
    if (!this.target) throw new Error("No target");
    console.log(`${this.name} attacks ${this.target.name}`);
    const attackRoll = random(1, 20);
    if (attackRoll === 20) {
      console.log(`  critical hit! ☠`);
      damageModifier = 2;
    }
    if (attackRoll + this.attack < this.target.defence) {
      console.log("  attack misses!");
    } else {
      const damage = random(1, this.damage);
      console.log("  attack deals", damage * damageModifier, "damage!");
      this.target.health -= damage * damageModifier;
      if (this.target.health <= 0) {
        console.log("  target is dead!");
      }
    }
  }

  isAlive() {
    return this.health > 0;
  }
}

export default Unit;
