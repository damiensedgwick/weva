import { useState } from "react";
import Calendar from "react-calendar";
import { useSettings } from "hooks";
import {
  Draw,
  Wizard,
  Todos,
  AddTodo,
  Schedule,
  Weather,
  WeatherWidget,
  CitySearch
} from "components";
import { Bars, XMark } from "icons";

import styles from "./App.module.css";

export const App = () => {
  const { settings, setSettings } = useSettings();
  const [showDraw, setShowDraw] = useState(false);

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
        <Todos username={settings.name} />
      )}
      <Draw show={showDraw}>
        <button
          type="button"
          onClick={() => setShowDraw(false)}
          className={styles.button}
        >
          <XMark />
        </button>

        <AddTodo />

        <Weather>
          <WeatherWidget />
          <CitySearch />
        </Weather>

        <Schedule>
          <Calendar />
        </Schedule>
      </Draw>
    </div>
  );
};
