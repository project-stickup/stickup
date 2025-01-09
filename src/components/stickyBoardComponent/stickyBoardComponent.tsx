import styles from "./stickyBoardComponent.module.scss";
import StickyNote from "../stickyNoteComponent/stickyNoteComponent"

type StickyBoardComponentProps = {
    name: string;
}

export default function StickyBoard({name} : StickyBoardComponentProps) {
  return (
    <div className={styles.board}>
      <h1>Sticky Board {name}</h1>
      <div className={styles.actionPanel}>
        <button>Create New Note</button>
      </div>
      <StickyNote />
    </div>
  );
}
