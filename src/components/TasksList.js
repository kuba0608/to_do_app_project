import React from "react";
import Task from "./Task";
const TasksList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  return (
    <React.Fragment>
      <div className="active">
        <h1>Zadania do zrobienia</h1>
        {activeTasks.length === 0 ? "Nie masz żadnych zadań" : activeTasks}
      </div>
      <hr />
      <div className="done">
        <h3>Zadania zrobione({doneTasks.length})</h3>
        {doneTasks}
      </div>
    </React.Fragment>
  );
};
export default TasksList;
