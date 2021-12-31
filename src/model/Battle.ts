import Team from "./Team";
import { TeamFormValues } from "./TeamFormValues";

class Battle {
  public team1: Team;
  public team2: Team;
  public turnCount = 1;

  constructor(team1Values: TeamFormValues, team2Values: TeamFormValues) {
    this.team1 = Team.makeTeam(team1Values);
    this.team2 = Team.makeTeam(team2Values);
  }

  assignTarget(team: Team, opponentTeam: Team) {
    team.units.forEach((unit) => {
      if (unit.target) return;
      unit.target = opponentTeam.getRandomUnit();
    });
  }

  nextTurn() {
    this.assignTarget(this.team1, this.team2);
    this.assignTarget(this.team2, this.team1);

    const allUnits = [...this.team1.units, ...this.team2.units];

    allUnits
      .sort((a, b) => a.initiative - b.initiative)
      .forEach((unit) => {
        if (unit.health <= 0) return;
        unit.doAttack();
        if (unit.target && unit.target?.health <= 0) {
          // remove unit from team
          this.team1.removeUnit(unit.target);
          this.team2.removeUnit(unit.target);
          unit.target = undefined;
        }
      });

    this.turnCount++;
  }

  clone() {
    const battle = Object.create(Object.getPrototypeOf(this)) as Battle;
    battle.team1 = this.team1;
    battle.team2 = this.team2;
    battle.turnCount = this.turnCount;
    return battle;
  }

  isOver() {
    return this.team1.units.length === 0 || this.team2.units.length === 0;
  }
}

export default Battle;
