import { TeamFormValues } from "./TeamFormValues";
import Unit from "./Unit";

class Team {
  private killedUnits: Unit[] = [];

  constructor(public name: string, public units: Unit[]) {
    this.units = units;
  }

  static makeTeam(teamValues: TeamFormValues): Team {
    return new Team(
      teamValues.name,
      Array(teamValues.unitsNumber)
        .fill(null)
        .map(
          (_, index) =>
            new Unit(
              `${teamValues.name} #${index + 1}`,
              teamValues.health, // + random(-10, 10),
              teamValues.defence, // + random(-5, 5),
              teamValues.attack, // + random(-5, 5),
              teamValues.damage // + random(-5, 5)
            )
        )
    );
  }

  getUnits(): Unit[] {
    return this.units;
  }

  getAllUnits(): Unit[] {
    return [...this.units, ...this.killedUnits].sort(
      (a, b) => a.initiative - b.initiative
    );
  }

  getRandomUnit(): Unit {
    return this.units[Math.floor(Math.random() * this.units.length)];
  }

  removeUnit(target: Unit) {
    this.units = this.units.filter((unit) => unit !== target);
  }

  addToKilledUnits(unit: Unit) {
    this.killedUnits.push(unit);
  }
}
export default Team;
