import { ReactNode } from "react";
import styles from "./Weather.module.css";

interface Props {
  children: ReactNode;
}

export const Weather = ({ children }: Props) => {
  return <div className={styles.weather}>{children}</div>;
};
