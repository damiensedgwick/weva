import { useState } from "react";
import { Draw } from "./components/drawer/Draw";
import { Bars } from "./icons";
import styles from "./App.module.css";

export const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.app}>
      {!show && (
        <button
          type="button"
          onClick={() => setShow((prevState) => !prevState)}
          className={styles.button}
        >
          <Bars />
        </button>
      )}

      <div>
        <h1>App</h1>
      </div>

      <Draw show={show} setShow={setShow} />
    </div>
  );
};
