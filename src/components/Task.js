import React from "react";
const Task = (props) => {
  const important = {
    color: "red",
  };
  if (props.task.active) {
    return (
      <div>
        <p>
          <span style={props.task.important ? important : null}>
            <strong>{props.task.text}</strong>
          </span>{" "}
          - do <span>{props.task.date} </span>
          <button onClick={() => props.change(props.task.id)}>
            Zostało zrobione
          </button>
          <button onClick={() => props.delete(props.task.id)}>X</button>
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p>
          <strong>{props.task.text}</strong> (zrobić do
          <span> {props.task.date}</span>)
          <br />- potwierdzenie wykonania <em>{props.task.finishDate}</em>
          <button onClick={() => props.delete(props.task.id)}>X</button>
        </p>
      </div>
    );
  }
};

export default Task;
