import { random } from "./random";
import { TeamFormValues } from "./TeamFormValues";
import Unit from "./Unit";

class Team {
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

  constructor(public name: string, public units: Unit[]) {
    this.units = units;
  }

  getUnits(): Unit[] {
    return this.units;
  }

  getRandomUnit(): Unit {
    return this.units[Math.floor(Math.random() * this.units.length)];
  }

  removeUnit(target: Unit) {
    this.units = this.units.filter((unit) => unit !== target);
  }
}
export default Team;
