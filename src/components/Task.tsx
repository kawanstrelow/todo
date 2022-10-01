import styles from './Task.module.css';
import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { useState } from 'react';

export interface tasksProps {
  id: string;
  isChecked: boolean;
  taskText: string;
  deleteTask: () => void;
  toggleCheckButton: () => void;
}

export function Task({
  id,
  isChecked,
  taskText,
  deleteTask,
  toggleCheckButton,
}: tasksProps) {
  return (
    <div className={styles.taskGroup}>
      {isChecked === false ? (
        <button className={styles.checkButton} onClick={toggleCheckButton}>
          <Circle size={24} />
        </button>
      ) : (
        <button className={styles.checkedButton} onClick={toggleCheckButton}>
          <CheckCircle size={24} />
        </button>
      )}

      {isChecked === false ? (
        <p>{taskText}</p>
      ) : (
        <p>
          <s>{taskText}</s>
        </p>
      )}

      <button className={styles.trashButton} onClick={deleteTask}>
        <Trash size={24} />
      </button>
    </div>
  );
}
