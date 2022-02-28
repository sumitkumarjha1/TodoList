import "./styles.css";
import React, { useState } from "react";
import List from "./List";
export default function App() {
  const [curI, setCI] = useState("");
  const [itemL, setIL] = useState([]);
  const onChangeH = (e) => setCI(e.target.value);
  const addIL = () => {
    setIL([...itemL, { item: curI, key: Date.now() }]);
    setCI("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <div className="input-wrapper">
            <input value={curI} onChange={onChangeH} />
            <button onClick={addIL}>+</button>
          </div>
          <List itemL={itemL} update={setIL} />
        </div>
      </header>
    </div>
  );
}
