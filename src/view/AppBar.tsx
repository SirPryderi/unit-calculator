import MenuIcon from "@mui/icons-material/Menu";
import RestartAlt from "@mui/icons-material/RestartAlt";
import Update from "@mui/icons-material/Update";
import {
  AppBar as MuiAppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import BattleController from "../controller/BattleController";
import "./App.css";

type AppBarProps = { battleController: BattleController };

const AppBar = ({ battleController }: AppBarProps) => (
  <MuiAppBar position="static">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Unit Calculator
      </Typography>
      {battleController.getBattle() && (
        <Button
          color="inherit"
          onClick={battleController.reset}
          startIcon={<RestartAlt />}
        >
          Reset
        </Button>
      )}
      {battleController.isOngoing() && (
        <Button
          color="inherit"
          onClick={battleController.nextTurn}
          startIcon={<Update />}
        >
          Next Turn
        </Button>
      )}
    </Toolbar>
  </MuiAppBar>
);

export default AppBar;
