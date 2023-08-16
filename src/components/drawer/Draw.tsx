import { useTransition, animated } from "@react-spring/web";
import { Weather } from "../weather/Weather";
import styles from "./Draw.module.css";
import { XMark } from "../../icons";
import { Schedule } from "../schedule/Schedule";

interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
  city: string;
}

export const Draw = ({ show, setShow, city }: Props) => {
  const transitions = useTransition(show, {
    from: { transform: "translateX(100%)" },
    enter: { transform: "translateX(0)" },
    leave: { transform: "translateX(100%)" }
  });

  return transitions(
    (props, item) =>
      item && (
        <animated.div className={styles.drawer} style={props}>
          <button
            type="button"
            onClick={() => setShow(false)}
            className={styles.button}
          >
            <XMark />
          </button>
          <Weather location={city} />
          <Schedule />
        </animated.div>
      )
  );
};
