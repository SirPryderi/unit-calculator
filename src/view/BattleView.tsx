import { Alert, Typography } from "@mui/material";
import BattleController from "../controller/BattleController";
import TeamView from "./TeamView";

export type BattleViewProps = { battleController: BattleController };

const BattleView = (props: BattleViewProps) => {
  const battle = props.battleController.getBattle();

  if (!battle) return null;

  return (
    <>
      <Typography variant="h3" textAlign="center" mb={4}>
        Turn {battle.turnCount}
      </Typography>
      {battle.isOver() && (
        <Alert severity="success" sx={{ mb: 4}}>
          {battle.getWinner()!.name} won the battle!
        </Alert>
      )}
      <TeamView team={battle.team1} />
      <TeamView team={battle.team2} />
    </>
  );
};

export default BattleView;
