import { Alert, Typography } from "@mui/material";
import { useState } from "react";
import BattleController from "../controller/BattleController";
import TeamView from "./TeamView";
import UnitDetailsModal from "./UnitDetailsModal";
import Unit from "../model/Unit";

export type BattleViewProps = { battleController: BattleController };

const BattleView = (props: BattleViewProps) => {
  const [openUnit, setOpenUnit] = useState<Unit | null>(null);
  const battle = props.battleController.getBattle();

  const openUnitDetails = (unit: Unit) => {
    setOpenUnit(unit);
  };

  const handleKill = (unit: Unit) => {
    props.battleController.handleKill(unit);
    setOpenUnit(null);
  }

  const handleDelete = (unit: Unit) => {
    props.battleController.handleDelete(unit);
    setOpenUnit(null);
  }

  if (!battle) return null;

  return (
    <>
      <Typography variant="h3" textAlign="center" mb={4}>
        Turn {battle.turnCount}
      </Typography>
      {battle.isOver() && (
        <Alert severity="success" sx={{ mb: 4 }}>
          {battle.getWinner()!.name} won the battle!
        </Alert>
      )}
      <TeamView team={battle.team1} openUnitDetails={openUnitDetails} />
      <TeamView team={battle.team2} openUnitDetails={openUnitDetails} />
      <UnitDetailsModal
        openUnit={openUnit}
        onClose={() => setOpenUnit(null)}
        onKill={handleKill}
        onDelete={handleDelete}
      />
    </>
  );
};

export default BattleView;
