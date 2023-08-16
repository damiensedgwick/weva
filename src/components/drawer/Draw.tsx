import { useTransition, animated } from "@react-spring/web";
import { Weather } from "../weather/Weather";
import styles from "./Draw.module.css";

interface Props {
  show: boolean;
}

export const Draw = ({ show }: Props) => {
  const transitions = useTransition(show, {
    from: { transform: "translateX(100%)" },
    enter: { transform: "translateX(0)" },
    leave: { transform: "translateX(100%)" }
  });

  return transitions(
    (props, item) =>
      item && (
        <animated.div className={styles.drawer} style={props}>
          <Weather />
        </animated.div>
      )
  );
};
