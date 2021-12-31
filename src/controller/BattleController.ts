import Battle from "../model/Battle";
import { TeamFormValues } from "../model/TeamFormValues";
import Unit from "../model/Unit";

class BattleController {
  private onUpdate: (battle: Battle | null) => void;
  private battle: Battle | null;

  constructor(onUpdate: (battle: Battle | null) => void) {
    this.onUpdate = onUpdate;
    this.battle = null;
  }

  startBattle = (team1: TeamFormValues, team2: TeamFormValues) => {
    const battle = new Battle(team1, team2);
    this.battle = battle;
    this.update();
  };

  nextTurn = () => {
    if (!this.battle) return;
    const battle = this.battle.clone();
    battle.nextTurn();
    this.battle = battle;
    this.update();
  };

  reset = () => {
    this.battle = null;
    this.update();
  };

  isOngoing = () => {
    return this.battle !== null && !this.battle.isOver();
  };

  getBattle = () => this.battle;

  handleKill(unit: Unit) {
    if (!this.battle) return;
    unit.health = 0;
    const battle = this.battle.clone();
    battle.removeUnit(unit, true);
    this.battle = battle;
    this.update();
  }

  handleDelete(unit: Unit) {
    if (!this.battle) return;
    const battle = this.battle.clone();
    battle.removeUnit(unit);
    this.battle = battle;
    this.update();
  }

  private update = () => {
    this.onUpdate(this.battle);
  };
}

export default BattleController;
