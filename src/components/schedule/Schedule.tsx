import { ReactNode } from "react";

import "react-calendar/dist/Calendar.css";
import "./calendar.css";
import styles from "./Schedule.module.css";

interface Props {
  children: ReactNode;
}

export const Schedule = ({ children }: Props) => {
  return <div className={styles.schedule}>{children}</div>;
};
