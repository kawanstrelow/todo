import { ChangeEvent, FormEvent, HTMLProps, useState } from 'react';
import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { PlusCircle } from 'phosphor-react';
import { EmptyTasks } from './components/EmptyTasks';
import { Task } from './components/Task';
import { v4 as uuidv4 } from 'uuid';
import { tasksProps } from './components/Task';

function App() {
  const tasksList = [
    {
      id: uuidv4(),
      isChecked: false,
      taskText: 'Primeiro',
    },
    {
      id: uuidv4(),
      isChecked: false,
      taskText: 'Segundo',
    },
  ];

  const [tasks, setTasks] = useState(tasksList);
  const [digitedTask, setDigitedTask] = useState('');

  function deleteTaskApp(id: string) {
    const objFinded = tasks.filter(a => a.id !== id);
    setTasks(objFinded);
  }

  function toggleCheckButtonApp(id: string) {
    const objFinded = tasks.filter(a => a.id === id);

    const newArray = tasks.map(a => {
      if (a === objFinded[0]) {
        a.isChecked = !a.isChecked;
        return a;
      } else {
        return a;
      }
    });
    setTasks(newArray);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([
      ...tasks,
      { id: uuidv4(), isChecked: false, taskText: digitedTask },
    ]);
  }

  function handleDigitingNewTask(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setDigitedTask(event.target.value);
  }

  const completedTasks = tasks.filter(a => a.isChecked === true);

  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <form onSubmit={handleCreateNewTask} className={styles.taskInput}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={digitedTask}
            onChange={handleDigitingNewTask}
          />
          <button className={styles.button} type="submit">
            Criar
            <PlusCircle size={16} />
          </button>
        </form>
        <div className={styles.tasks}>
          <div className={styles.tasksInfoGroup}>
            <div className={styles.tasksInfo}>
              <span className={styles.tasksInfoCreatedText}>
                Tarefas criadas
              </span>
              <span className={styles.counter}>{tasks.length}</span>
            </div>
            <div className={styles.tasksInfo}>
              <span className={styles.tasksInfoCompletedText}>Concluídas</span>
              <span
                className={styles.counter}
              >{`${completedTasks.length} de ${tasks.length} `}</span>
            </div>
          </div>
          <div className={styles.tasksSchedule}>
            {/* <EmptyTasks /> */}
            {tasks.map(task => (
              <Task
                key={task.id}
                id={task.id}
                taskText={task.taskText}
                isChecked={task.isChecked}
                deleteTask={() => deleteTaskApp(task.id)}
                toggleCheckButton={() => toggleCheckButtonApp(task.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
