import styles from "./stickyNoteComponent.module.scss";

export type Note = {
    text: string;
}

type StickyNoteComponentProp = {
    text: string;
}

export default function StickyNote({text} : StickyNoteComponentProp) {
  return (
    <div className={styles.note}>
      {text}
    </div>
  );
}
