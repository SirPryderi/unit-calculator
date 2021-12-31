import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
} from "@mui/material";
import { Formik } from "formik";
import Unit from "../model/Unit";
import Input from "./Input";

const UnitDetailsModal = ({
  openUnit,
  onClose,
}: {
  openUnit: Unit | null;
  onClose: () => void;
}) => {
  return (
    <Dialog
      open={!!openUnit}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Formik<Unit>
        initialValues={openUnit!}
        onSubmit={(values) => {
          if (!openUnit) return;
          openUnit.name = values.name;
          openUnit.health = values.health;
          openUnit.maxHealth = values.maxHealth;
          openUnit.defence = values.defence;
          openUnit.attack = values.attack;
          openUnit.damage = values.damage;
          onClose();
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <DialogTitle id="alert-dialog-title">
              Unit: {openUnit?.name}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Change the unit's properties.
              </DialogContentText>
              <Input fieldName="name" type="text" label="Name" />
              <Input fieldName="initiative" type="text" label="Initiative" />
              <Divider sx={{ my: 2 }} />
              <Input fieldName="health" type="number" label="Health" />
              <Input fieldName="maxHealth" type="number" label="maxHealth" />
              <Divider sx={{ my: 2 }} />
              <Input fieldName="defence" type="number" label="Defence" />
              <Input fieldName="attack" type="number" label="Attack" />
              <Input fieldName="damage" type="number" label="Damage" />
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose}>Cancel</Button>
              <Button onClick={() => handleSubmit()} autoFocus type="submit">
                Accept
              </Button>
            </DialogActions>
          </form>
        )}
      </Formik>
    </Dialog>
  );
};

export default UnitDetailsModal;
