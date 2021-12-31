import { Box, Typography } from "@mui/material";
import { Formik } from "formik";
import { TeamFormValues } from "../model/TeamFormValues";
import Input from "./Input";

import Create from "@mui/icons-material/Create";
import Favorite from "@mui/icons-material/Favorite";
import Shield from "@mui/icons-material/Shield";
import Numbers from "@mui/icons-material/Numbers";
import Casino from "@mui/icons-material/Casino";
import Bloodtype from "@mui/icons-material/Bloodtype";

export type TeamFormProps = {
  onChange: (values: TeamFormValues) => void;
  initialValues: TeamFormValues;
};

const TeamForm = (props: TeamFormProps) => {
  const initialValues: TeamFormValues = props.initialValues;

  return (
    <Formik<TeamFormValues>
      initialValues={initialValues}
      onSubmit={() => {}}
      validate={props.onChange}
    >
      <div className="team-form">
        <Typography variant="overline" textAlign="center">
          Team Info
        </Typography>
        <Input
          type="text"
          fieldName="name"
          icon={<Create />}
          label="Team Name"
        />
        <Input
          type="number"
          fieldName="unitsNumber"
          icon={<Numbers />}
          label="Number of units"
        />
        <Box mb={3} />
        <Typography variant="overline" textAlign="center">
          Units Stats
        </Typography>
        <Input
          type="number"
          fieldName="health"
          label="Health"
          icon={<Favorite />}
        />
        <Input
          type="number"
          fieldName="defence"
          label="Defence"
          icon={<Shield />}
        />
        <Input
          type="number"
          fieldName="attack"
          label="Attack (mod)"
          icon={<Casino />}
        />
        <Input
          type="number"
          fieldName="damage"
          label="Damage (max)"
          icon={<Bloodtype />}
        />
        <Box mb={3} />
      </div>
    </Formik>
  );
};

export default TeamForm;
