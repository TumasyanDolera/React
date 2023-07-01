import React, { startTransition } from "react";
import { Component } from "react";


class Tasks extends Component {
    state = {
        tasks: [

        ],

        ShowAddTaskForm: false,
        showDiv: false,
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

    handleShowAddTaskForm = () => {
        const { showAddTaskForm } = this.state;
        this.setState({
            showAddTaskForm: !showAddTaskForm
        })
    }

    handleSubmitForm = (event) => {
        event.preventDefault();
        // console.log(this.state),
        const { showDiv } = this.state;
        this.setState({
            showDiv: !showDiv,
        })
        const { showAddTaskForm } = this.state;
        this.setState({
            ShowAddTaskForm: showAddTaskForm,
        })

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
            taskImportance, taskDeveloper, ShowAddTaskForm, handleSubmitForm, showDiv } = this.state


        return (
            <>

                <nav id="nav">
                    <button id="AddTask" onClick={this.handleShowAddTaskForm}><strong>Add  Task</strong></button>
                </nav>
                {
                    ShowAddTaskForm && <form method="post" onSubmit={handleSubmitForm} className="Form">
                        <button id="close" onClick={this.handleShowCloseTaskForm}>Close</button><br />,
                        <input placeholder="Title" id="input1" onChange={this.ChangeTitle} value={taskTitle} /><br /> <br />,
                        <textarea id="textarea" placeholder="Description" onChange={this.ChangeDescription} value={taskDescription} /><br /><br />,
                        <input type="date" placeholder="StartData" onChange={this.ChangestartDate} value={taskstartDate} /><br /><br />,
                        <input type="date" placeholder="FinishDate" onChange={this.ChangefinishDate} value={taskfinishDate} /><br /><br />,
                        <select placeholder="Developer" onChange={this.ChangeDeveloper} value={taskDeveloper}>
                            <option>Developer</option>
                            <option>Hovhannes</option>
                            <option>Dolera</option>
                            <option>Arman</option>
                            <option>Eliza</option>
                        </select><br />,
                        <div className="Critical">
                            Critical:
                            <input type="radio" id="radio" value="hight" name="critical" onChange={this.ChangeImportance} /> Hight
                            <input type="radio" id="radio" value="middal" name="critical" onChange={this.ChangeImportance} />Middal
                            <input type="radio" id="radio" value="low" name="critical" onChange={this.ChangeImportance} />Low<br />
                        </div><br />
                        <div id="button">
                            <input type="submit" value="SUBMIT" id="submit" onClick={this.handleSubmitForm} /><br />
                            <input type="button" value="Reset" id="reset" onClick={this.handleResetForm} /><br />
                        </div>
                    </form>

                }
                {
                    showDiv && <div className="tasksContainer">
                        <h1 className="show">  {taskTitle} </h1>
                        <h3 className="show1">Developer: {taskDeveloper}</h3>
                        <h3 className="show1">Importance: {taskImportance}</h3>
                        <span className="show2"><b>Start:</b> {taskstartDate}</span><br/><br/>
                        <span className="show2"><b>Finish:</b> {taskfinishDate}</span>
                        <p className="show3"> <b>Description:</b> {taskDescription}</p>
                    </div>

                }
            </>

        )

    }


}


export default Tasks

