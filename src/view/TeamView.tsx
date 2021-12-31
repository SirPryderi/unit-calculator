import { Typography } from "@mui/material";
import Team from "../model/Team";
import UnitView from "./UnitView";

const TeamView = (props: { team: Team }) => (
  <>
    <Typography variant="h4">
      {props.team.name} ({props.team.units.length} units)
    </Typography>

    <div className="team-view">
      {props.team.getAllUnits().map((unit) => (
        <UnitView unit={unit} key={unit.id} />
      ))}
    </div>
  </>
);

export default TeamView;
