import Team from "./Team";
import { TeamFormValues } from "./TeamFormValues";
import Unit from "./Unit";

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
          this.removeUnit(unit.target, true);
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

  getWinner() {
    if (this.team1.units.length === 0) return this.team2;
    if (this.team2.units.length === 0) return this.team1;
    return null;
  }

  removeUnit(unit: Unit, kill = false) {
    // remove unit from team
    if (this.team1.units.includes(unit)) {
      this.team1.removeUnit(unit);
      if (kill) this.team1.addToKilledUnits(unit);
    } else if (this.team2.units.includes(unit)) {
      this.team2.removeUnit(unit);
      if (kill) this.team2.addToKilledUnits(unit);
    }
  }
}

export default Battle;
