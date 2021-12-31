import BattleController from "../controller/BattleController";
import TeamView from "./TeamView";

export type BattleViewProps = { battleController: BattleController };

const BattleView = (props: BattleViewProps) => {
  const battle = props.battleController.getBattle();

  if (!battle) return null;

  return (
    <div>
      {battle.isOver() ? (
        <button onClick={props.battleController.reset}>Reset</button>
      ) : (
        <div>
          <button onClick={props.battleController.nextTurn}>Next Turn</button>
          <button onClick={props.battleController.reset}>Reset</button>
        </div>
      )}
      <h1>Turn {battle.turnCount}</h1>
      <TeamView team={battle.team1} />
      <TeamView team={battle.team2} />
    </div>
  );
};

export default BattleView;
