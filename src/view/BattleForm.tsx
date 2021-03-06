import { Button, Typography } from "@mui/material";
import { useState } from "react";
import BattleController from "../controller/BattleController";
import { TeamFormValues } from "../model/TeamFormValues";
import TeamForm from "./TeamForm";

export type BattleFormProps = { battleController: BattleController };

const initialValues: TeamFormValues = {
  name: "Team",
  unitsNumber: 10,
  attack: 0,
  damage: 12,
  defence: 10,
  health: 20,
};

const BattleForm = (props: BattleFormProps) => {
  const [team1Values, setTeam1Values] = useState<TeamFormValues>({
    ...initialValues,
    name: "♠",
  });
  const [team2Values, setTeam2Values] = useState<TeamFormValues>({
    ...initialValues,
    name: "♦",
  });

  const handleSubmit = () => {
    props.battleController.startBattle(team1Values, team2Values);
  };

  return (
    <div>
      <Typography variant="h3" textAlign="center" mb={4}>
        Battle Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <div className="battle-form">
          <TeamForm onChange={setTeam1Values} initialValues={team1Values} />
          <Typography sx={{ margin: 2 }}>vs</Typography>
          <TeamForm onChange={setTeam2Values} initialValues={team2Values} />
        </div>
        <Button
          onClick={handleSubmit}
          variant="contained"
          fullWidth={true}
          size="large"
        >
          Start Battle
        </Button>
      </form>
    </div>
  );
};

export default BattleForm;
