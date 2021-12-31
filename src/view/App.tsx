import { Container } from "@mui/material";
import { useState } from "react";
import BattleController from "../controller/BattleController";
import Battle from "../model/Battle";
import "./App.css";
import AppBar from "./AppBar";
import BattleForm from "./BattleForm";
import BattleView from "./BattleView";

const App = () => {
  const [battleController] = useState(
    new BattleController((battle) => {
      setBattle(battle);
    })
  );
  const [battle, setBattle] = useState<Battle | null>(null);

  return (
    <>
      <AppBar battleController={battleController} />
      <Container maxWidth={battle ? undefined : "sm"} sx={{ mt: 5 }}>
        {battle ? (
          <BattleView battleController={battleController} />
        ) : (
          <BattleForm battleController={battleController} />
        )}
      </Container>
    </>
  );
};

export default App;
