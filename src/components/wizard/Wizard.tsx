import { useState } from "react";
import styles from "./Wizard.module.css";

interface Props {
  setSettings: ({
    name,
    city,
    completedSetupWizard
  }: {
    name: string;
    city: string;
    completedSetupWizard: boolean;
  }) => void;
}

export const Wizard = ({ setSettings }: Props) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const handleSavePreferences = () => {
    const ls = window.localStorage;

    const settings = {
      name,
      city,
      completedSetupWizard: true
    };

    ls.setItem("WEVA_SETTINGS", JSON.stringify(settings));

    setSettings(settings);
  };

  return (
    <div className={styles.wizard}>
      <div className={styles.header}>
        <h1 className={styles.title}>WEVA</h1>
      </div>

      <div className={styles.content}>
        <p className={styles.subtitle}>Please enter your details</p>
        <div className={styles.section}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.section}>
          <label className={styles.label} htmlFor="city">
            City
          </label>
          <input
            className={styles.input}
            type="text"
            id="city"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
      </div>

      <button
        className={styles.button}
        type="button"
        onClick={handleSavePreferences}
      >
        Finish
      </button>
    </div>
  );
};
