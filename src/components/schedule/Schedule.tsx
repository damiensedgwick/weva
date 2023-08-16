import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";
import styles from "./Schedule.module.css";

export const Schedule = () => {
  return (
    <div className={styles.schedule}>
      <Calendar />
    </div>
  );
};
