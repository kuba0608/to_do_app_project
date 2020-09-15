import React, { Component } from "react";
class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: this.minDate,
  };

  handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    if (type !== "checkbox") {
      this.setState({
        [name]: e.target.value,
      });
    } else {
      this.setState({
        [name]: e.target.checked,
      });
    }
  };
  handleButton = () => {
    const { text, date, checked } = this.state;
    const add = this.props.add(text, date, checked);
    if (add) {
      this.setState({
        text: "",
        checked: false,
      });
    }
  };
  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    return (
      <React.Fragment>
        <div className="form">
          <input
            type="text"
            placeholder="podaj zadanie"
            value={this.state.text}
            onChange={this.handleChange}
            name="text"
          />
          <label htmlFor="important">
            <input
              type="checkbox"
              checked={this.state.checked}
              id="important"
              onChange={this.handleChange}
              name="checked"
            />
            Priorytet
          </label>
          <br />
          <label htmlFor="date">
            Do kiedy zrobić ?
            <input
              type="date"
              id="date"
              value={this.state.date}
              max={maxDate}
              onChange={this.handleChange}
              name="date"
            />
          </label>
          <button className="addTask" onClick={this.handleButton}>
            Dodaj zadanie
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default AddTask;
