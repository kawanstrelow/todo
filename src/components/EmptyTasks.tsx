import { ClipboardText } from 'phosphor-react';
import styles from './EmptyTasks.module.css';

export function EmptyTasks() {
  return (
    <div className={styles.emptyTasksGroup}>
      <ClipboardText size={56} />
      <div>
        <strong className={styles.title}>
          Você ainda não tem tarefas cadastradas
        </strong>
        <p className={styles.subtitle}>
          Crie tarefas e organize seus items a fazer
        </p>
      </div>
    </div>
  );
}
