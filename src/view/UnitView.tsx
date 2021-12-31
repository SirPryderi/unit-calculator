import { CircularProgress, Typography, Box } from "@mui/material";
import Unit from "../model/Unit";

export type UnitViewProps = {
  unit: Unit;
};

const UnitView = ({ unit }: UnitViewProps) => {
  return (
    <Box
      key={unit.id}
      sx={{
        position: "relative",
        display: "inline-flex",
        background: "text.secondary",
      }}
    >
      {unit.isAlive() && (
        <CircularProgress
          variant="determinate"
          value={(unit.health / unit.maxHealth) * 100}
          thickness={5}
          color="secondary"
        />
      )}
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {unit.isAlive() ? `${Math.round(unit.health)}` : "💀"}
        </Typography>
      </Box>
    </Box>
  );
};

export default UnitView;
