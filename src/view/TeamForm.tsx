import { Formik } from "formik";
import { TeamFormValues } from "../model/TeamFormValues";
import Input from "./Input";

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
        <fieldset>
          <legend>Team Info</legend>
          <Input type="text" fieldName="name" />
          <Input type="number" fieldName="unitsNumber" />
        </fieldset>
        <fieldset>
          <legend>Units Stats</legend>
          <Input type="number" fieldName="health" />
          <Input type="number" fieldName="defence" />
          <Input type="number" fieldName="attack" />
          <Input type="number" fieldName="damage" />
        </fieldset>
      </div>
    </Formik>
  );
};

export default TeamForm;
