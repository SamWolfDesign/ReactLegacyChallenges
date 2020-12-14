import React, { Component } from "react";
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardColumns,
  CardGroup,
} from "reactstrap";

export default class TodoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTask: "",
      taskList: [],
    };
  }
  addTasks() {
    let arr = this.state.taskList;
    let obj = {
      task: this.state.inputTask,
      isComplete: false,
    };
    arr.push(obj);

    this.setState({
      taskList: arr,
    });
    console.log("TaskList:", this.state.taskList);
  }
  checkComplete = (id) => {
    let arr = this.state.taskList;
    for (let i = 0; i < arr.length; i++) {
      if (i === id) {
        console.log("Arry", arr[i]);
        arr[i].isComplete = true;
      }
    }

    this.setState({ taskList: arr });
  };
  displayResults = () => {
    if (this.state.inputTask !== "" && this.state.taskList !== undefined) {
      return (
        <Card>
          {this.state.taskList.map((task, index) => (
            <CardHeader key={index}>
              <CardGroup>
                <CardColumns>
                  <input
                    type="checkbox"
                    id={index}
                    onClick={(e) => {
                      this.checkComplete(e.target.id);
                    }}
                    checked={task.isComplete}
                  />
                </CardColumns>

                <CardColumns>{task.task}</CardColumns>
              </CardGroup>
            </CardHeader>
          ))}
        </Card>
      );
    }
  };

  render() {
    return (
      <div>
        <Input
          id="todoInput"
          onChange={(e) => {
            this.setState({ inputTask: e.target.value });
          }}
        />
        <br />
        <Button onClick={() => this.addTasks()}>Make a new task here!</Button>

        {this.displayResults()}
      </div>
    );
  }
}