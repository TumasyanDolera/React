import React from "react";
import { Component } from "react";

class Tasks extends Component {
    state = {
        tasks: [

        ],
        ShowAddTaskForm: false,
        taskTitle: '',
        taskDescription: '',
        taskstartDate: '',
        taskfinishDate: '',
        taskImportance: '',
        taskDeveloper: '',
    }

    handleResetForm = () => {
        this.setState({
            taskTitle: '',
            taskDescription: '',
            taskstartDate: '',
            taskfinishDate: '',
            taskImportance: '',
            taskDeveloper: '',
        })
    }

    handleSubmitForm = (event) => {
        event.preventDefault()
        return (
            console.log(this.state),
            alert("FORM SUBMITED !!!"),
            this.setState({
                taskTitle: '',
                taskDescription: '',
                taskstartDate: '',
                taskfinishDate: '',
                taskImportance: '',
                taskDeveloper: '',
            })
        )
    }

    handleShowAddTaskForm = () => {
        const { showAddTaskForm } = this.state;
        this.setState({
            ShowAddTaskForm: !showAddTaskForm,
        })
    }
    handleShowCloseTaskForm = () => {
        const { showAddTaskForm } = this.state;
        this.setState({
            ShowAddTaskForm: showAddTaskForm,
        })
    }
    ChangeTitle = (event) => {
        this.setState({ taskTitle: event.target.value })
    }
    ChangeDescription = (event) => {
        this.setState({ taskDescription: event.target.value })
    }
    ChangestartDate = (event) => {
        this.setState({ taskstartDate: event.target.value })
    }
    ChangefinishDate = (event) => {
        this.setState({ taskfinishDate: event.target.value })
    }
    ChangeImportance = (event) => {
        this.setState({ taskImportance: event.target.value })
    }
    ChangeDeveloper = (event) => {
        this.setState({ taskDeveloper: event.target.value })
    }

    render() {
        const { taskTitle, taskDescription, taskstartDate, taskfinishDate,
            taskImportance, taskDeveloper, ShowAddTaskForm, handleSubmitForm } = this.state
        return (
            <>
                <nav id="nav">
                    <button id="AddTask" onClick={this.handleShowAddTaskForm}><strong>Add  Task</strong></button>
                </nav>
                {
                    ShowAddTaskForm && <form method="post" onSubmit={handleSubmitForm} className="Form">
                        <button id="close" onClick={this.handleShowCloseTaskForm}>Close</button><br />,
                        <input placeholder="Title" id="input1" onChange={this.ChangeTitle} value={taskTitle} /><br /> <br />,
                        <input placeholder="Description" onChange={this.ChangeDescription} value={taskDescription} /><br /><br />,
                        <input type="date" placeholder="StartData" onChange={this.ChangestartDate} value={taskstartDate} /><br /><br />,
                        <input type="date" placeholder="FinishDate" onChange={this.ChangefinishDate} value={taskfinishDate} /><br /><br />,
                        <input placeholder="Importance" onChange={this.ChangeImportance} value={taskImportance} /><br /><br />,
                        <input placeholder="Developer" onChange={this.ChangeDeveloper} value={taskDeveloper} /><br /><br />,
                        <div id="button">
                            <input type="submit" value="SUBMIT" id="submit" onClick={this.handleSubmitForm} /><br />
                            <input type="button" value="Reset" id="reset" onClick={this.handleResetForm} /><br />
                        </div>
                    </form>
                }
            </>
        )
    }
}

export default Tasks

