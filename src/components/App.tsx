import { useState } from "react";
import Calendar from "react-calendar";
import { useCity, useSettings, useTodos } from "hooks";
import {
  Button,
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
  const { weather, setCity } = useCity();
  const { settings, setSettings } = useSettings();
  const { todos, handleAddTodo, handleUpdateTodo, handleDeleteTodo } =
    useTodos();

  const [showDraw, setShowDraw] = useState(false);

  return (
    <div className={styles.app}>
      {settings.completedSetupWizard && (
        <Button
          className={styles.open}
          onClick={() => setShowDraw((prevState) => !prevState)}
        >
          <Bars />
        </Button>
      )}

      {!settings.completedSetupWizard ? (
        <Wizard setSettings={setSettings} />
      ) : (
        <Todos
          username={settings.name}
          todos={todos}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      )}
      <Draw show={showDraw}>
        <Button
          className={styles.close}
          onClick={() => setShowDraw((prevState) => !prevState)}
        >
          <XMark />
        </Button>

        <AddTodo handleAddTodo={handleAddTodo} />

        <Weather>
          <WeatherWidget weather={weather} />
          <CitySearch setCity={setCity} />
        </Weather>

        <Schedule>
          <Calendar />
        </Schedule>
      </Draw>
    </div>
  );
};
