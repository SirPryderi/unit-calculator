import { Typography } from "@mui/material";
import Team from "../model/Team";
import Unit from "../model/Unit";
import UnitView from "./UnitView";

export type TeamViewProps = {
  team: Team;
  openUnitDetails: (unit: Unit) => void;
};

const TeamView = (props: TeamViewProps) => (
  <>
    <Typography variant="h4">
      {props.team.name} ({props.team.units.length} units)
    </Typography>

    <div className="team-view">
      {props.team.getAllUnits().map((unit) => (
        <UnitView unit={unit} key={unit.id} onClick={props.openUnitDetails} />
      ))}
    </div>
  </>
);

export default TeamView;
