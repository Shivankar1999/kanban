import React from 'react';
import styles from '../Styles/Main.module.css';
import img1 from '../IMG/img8.jpg';
import img2 from '../IMG/img7.jpg';
import img3 from '../IMG/img5.png';
const TodoList = ({ todo }) => {
  console.log(todo);
  const dragStarted = (e, id) => {
    console.log('Drag has Started');
    e.dataTransfer.setData('todoId', id);
  };
  return (
    <>
      <div className={styles.todowrap}>
        {todo.map((ele) => (
          <div
            draggable
            onDragStart={(e) => dragStarted(e, ele.id)}
            className={styles.todolistC}
          >
            <div className={styles.todoleft}>
              <button>{ele.tag}</button>
              <p>...</p>
            </div>
            <h3>{ele.name}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              delectus inventore voluptate.
            </p>
            <div className={styles.todbottom}>
              <div className={styles.todbottom_left}>
                <img src={img1} alt="name" />
                <img src={img2} alt="name" />
                <img src={img3} alt="name" />
              </div>
              <div className={styles.todbottom_right}>
                <span> {ele.comment} Comments </span>
                <span>{ele.files}Files</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
