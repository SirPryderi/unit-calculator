import {
  Button,
  ButtonGroup,
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

type UnitDetailsModalProps = {
  openUnit: Unit | null;
  onClose: () => void;
  onDelete: (unit: Unit) => void;
  onKill: (unit: Unit) => void;
};

const UnitDetailsModal = ({
  openUnit,
  onClose,
  onDelete,
  onKill,
}: UnitDetailsModalProps) => (
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
            <DialogContentText>Change the unit's properties.</DialogContentText>
            <Input fieldName="name" type="text" label="Name" />
            <Input fieldName="initiative" type="text" label="Initiative" />
            <Divider sx={{ my: 2 }} />
            <Input fieldName="health" type="number" label="Health" />
            <Input fieldName="maxHealth" type="number" label="maxHealth" />
            <Divider sx={{ my: 2 }} />
            <Input fieldName="defence" type="number" label="Defence" />
            <Input fieldName="attack" type="number" label="Attack" />
            <Input fieldName="damage" type="number" label="Damage" />
            <ButtonGroup fullWidth={true} size="small">
              <Button color="error" onClick={() => onKill(openUnit!)}>
                Kill
              </Button>
              <Button color="error" onClick={() => onDelete(openUnit!)}>
                Remove
              </Button>
            </ButtonGroup>
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

export default UnitDetailsModal;
