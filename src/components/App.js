import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TasksList from "./TasksList";

class App extends Component {
  counter = 9;
  state = {
    tasks: [
      {
        id: 0,
        text: "umyć auto",
        date: "2020-08-18",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "umyć auto",
        date: "2020-08-18",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "umyć auto",
        date: "2020-08-18",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "umyć auto",
        date: "2020-08-18",
        important: false,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks,
    });
  };
  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    const done = tasks.map((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().toLocaleString();
      }
      return task;
    });
    this.setState({
      tasks: done,
    });
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null,
    };
    this.counter++;
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
    return true;
  };

  render() {
    return (
      <div>
        <AddTask add={this.addTask} />
        <TasksList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
