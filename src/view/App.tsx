import { useState } from "react";
import "./App.css";
import Battle from "../model/Battle";
import BattleView from "./BattleView";
import BattleController from "../controller/BattleController";
import BattleForm from "./BattleForm";

function App() {
  const [battleController] = useState(
    new BattleController((battle) => {
      setBattle(battle);
    })
  );
  const [battle, setBattle] = useState<Battle | null>(null);

  return (
    <div className="App">
      <header className="App-header">
        {battle ? (
          <BattleView battleController={battleController} />
        ) : (
          <BattleForm battleController={battleController} />
        )}
      </header>
    </div>
  );
}

export default App;
