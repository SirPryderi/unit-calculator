import Team from "../model/Team";

const TeamView = (props: { team: Team }) => (
  <>
    <h2>{props.team.name} ({props.team.units.length} units)</h2>
    <span>
      {/* {props.team.units.reduce((previous, current) => {
        return previous + current.health;
      }, 0)} */}
    </span>
    <div className="team-view">
      {props.team.units.map((unit) => (
        <div key={unit.id}>{unit.health}</div>
      ))}
    </div>
  </>
);

export default TeamView;
