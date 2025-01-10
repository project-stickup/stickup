import { useState, useEffect } from "react";
import styles from "./stickyBoardComponent.module.scss";
import StickyNote, { Note } from "../stickyNoteComponent/stickyNoteComponent";

type BoardState = {
  note: Note[];
};

type StickyBoardComponentProps = {
  name: string;
};

export default function StickyBoard({ name }: StickyBoardComponentProps) {
  const [state, setState] = useState<BoardState>({ note: [] });

  const onClick = () => {
    console.log("test");
    state.note.push({ text: Date.now().toLocaleString() });
    setState({ ...state });
  };

  useEffect(() => {
    console.log("State change!");
  }, [state]);

  return (
    <div className={styles.board}>
      <h2>{name}</h2>
      <div className={styles.actionPanel}>
        <button onClick={onClick}>New note</button>
      </div>

      <div className={styles.notesContainer}>
        {state.note.map((n) => (
          <StickyNote text={n.text} />
        ))}
      </div>
    </div>
  );
}
