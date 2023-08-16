import { useState } from "react";
import { Draw } from "./components/drawer/Draw";
import { Bars } from "./icons";
import styles from "./App.module.css";

export const App = () => {
  const [show, setShow] = useState(true);

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

      <Draw show={show} setShow={setShow} />
    </div>
  );
};
