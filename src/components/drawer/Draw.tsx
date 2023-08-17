import { ReactNode } from "react";
import { useTransition, animated } from "@react-spring/web";

import styles from "./Draw.module.css";

interface Props {
  show: boolean;
  children: ReactNode[];
}

export const Draw = ({ show, children }: Props) => {
  const transitions = useTransition(show, {
    from: { transform: "translateX(100%)" },
    enter: { transform: "translateX(0)" },
    leave: { transform: "translateX(100%)" }
  });

  return transitions(
    (props, item) =>
      item && (
        <animated.div className={styles.drawer} style={props}>
          {children}
        </animated.div>
      )
  );
};
