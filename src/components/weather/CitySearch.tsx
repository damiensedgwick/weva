import { useCity } from "hooks";

import styles from "./CitySearch.module.css";

export const CitySearch = () => {
  const { setCity } = useCity();

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter city name"
        onChange={(e) => setCity(e.target.value)}
      />
    </div>
  );
};
