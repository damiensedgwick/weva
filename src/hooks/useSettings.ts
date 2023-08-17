import { useState, useEffect } from "react";

const useSettings = () => {
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

  return {
    settings,
    setSettings
  };
};

export { useSettings };
