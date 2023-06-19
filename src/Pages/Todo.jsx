import React from 'react';
import styles from '../Styles/Main.module.css';
import TodoList from './TodoList';

const Todo = ({ todo }) => {
  return (
    <div className={styles.TodoContainer}>
      <div className={styles.Todo_top}>
        <div className={styles.Todo_top_left}>
          <span className={styles.circle}>.</span>
          <p>
            To Do <span>4</span>
          </p>
        </div>
        <div className={styles.Todo_top_right}>
          <p>...</p>
          <p>+</p>
        </div>
      </div>
      <div className={styles.Todo_bottom}>
        <TodoList todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
