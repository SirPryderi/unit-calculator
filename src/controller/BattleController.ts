import Battle from "../model/Battle";
import { TeamFormValues } from "../model/TeamFormValues";

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

  getBattle = () => this.battle;

  private update = () => {
    this.onUpdate(this.battle);
  };
}

export default BattleController;
