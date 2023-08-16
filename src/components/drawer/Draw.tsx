import { useTransition, animated } from "@react-spring/web";
import { AddTodo, Weather, Schedule } from "components";
import { XMark } from "icons";
import styles from "./Draw.module.css";

interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
  city: string;
  setTodos: (
    todos: { id: number; title: string; completed: boolean }[]
  ) => void;
}

export const Draw = ({ show, setShow, city, setTodos }: Props) => {
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
          <AddTodo setTodos={setTodos} />
          <Weather location={city} />
          <Schedule />
        </animated.div>
      )
  );
};
