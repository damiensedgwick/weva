import styles from "./CitySearch.module.css";

interface Props {
  setCity: (city: string) => void;
}

export const CitySearch = ({ setCity }: Props) => {
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
