import { useEffect, useState } from "react";
import { Draw } from "./components/drawer/Draw";
import { Bars } from "./icons";
import styles from "./App.module.css";
import { Wizard } from "./components/wizard/Wizard";

export const App = () => {
  const [showDraw, setShowDraw] = useState(false);

  const [settings, setSettings] = useState({
    name: "",
    city: "",
    completedSetupWizard: false
  });

  useEffect(() => {
    const ls = window.localStorage;
    const settings = ls.getItem("WEVA_SETTINGS");

    if (settings) {
      setSettings(JSON.parse(settings));
    }
  }, []);

  return (
    <div className={styles.app}>
      {settings.completedSetupWizard && (
        <button
          type="button"
          onClick={() => setShowDraw((prevState) => !prevState)}
          className={styles.button}
        >
          <Bars />
        </button>
      )}

      {!settings.completedSetupWizard ? (
        <Wizard setSettings={setSettings} />
      ) : (
        <p>Welcome To WEVA</p>
      )}

      <Draw show={showDraw} setShow={setShowDraw} city={settings.city} />
    </div>
  );
};
