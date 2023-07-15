import React, { PureComponent } from "react";
import AddNewTaskModal from "../AddNewTask/AddNewTask";
import Tasks from "../Tasks/Tasks";
import Confirm from "../Confirm";
import { Container, Row, Col, Button } from "react-bootstrap";
import EditModal from "../EditModal";




export default class ToDo extends PureComponent {
    state = {
        toDoList: [],
        editedTask: null,
        checkedTasks: new Set(),
        toggleConfirmModal: false,
        showNewTaskModal: false,
        deleteTasks: false,
    };

    componentDidMount() {
        fetch('http://localhost:3004/tasks', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw response.error
                }
                return response.json()
            })
            .then(tasks => {
                let toDoList = [...this.state.toDoList, ...tasks];
                this.setState({
                    toDoList,
                })
            })
            .catch(error => console.log(error))

    }


    handleAddTask = (neweObj) => {
        let toDoList = [...this.state.toDoList];
        const { deleteTasks } = this.state;
        this.setState({
        deleteTasks: !deleteTasks,})

        fetch('http://localhost:3004/tasks', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(neweObj)
        })
            .then(response => {
              
                if (!response.ok) {
                    throw response.error
                }
                return response.json()
            })
            .then(task => {
                
                toDoList.push(task);
                this.setState({
                    toDoList,
                    showNewTaskModal: false

                })
            })
            .catch(error => console.log(error))

    }

    handleRemoveSingleTask = (taskId) => {
        let toDoList = [...this.state.toDoList];
        toDoList = toDoList.filter(item => taskId !== item.id)
        fetch('http://localhost:3004/tasks/'+ taskId, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify()
        })
            .then(response => {
                
                if (!response.ok) {
                    throw response.error
                }
                return response.json()
            })
            .then(task => {
               
                toDoList.delete(task);
                this.setState({
                    toDoList,
                    showNewTaskModal: false

                })
            })
            .catch(error => console.log(error))

        this.setState({
            toDoList,
        })

            }

    handleCheckedTasks = (taskID) => {
        
        let checkedTasks = new Set(this.state.checkedTasks);
        if (checkedTasks.has(taskID)) {
            checkedTasks.delete(taskID);
        } else {
            checkedTasks.add(taskID);
        }
        
        
        this.setState({
            checkedTasks
        }
        )
     }


    handleRemovedCheckedTasks = () => {
        let toDoList = [...this.state.toDoList];
        let checkedTasks = new Set(this.state.checkedTasks);
        checkedTasks.forEach(itemId => {
            toDoList = toDoList.filter(item => item.id !== itemId)
            fetch('http://localhost:3004/tasks/'+ itemId, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify()
            })
                .then(response => {
                    alert('1')
                    if (!response.ok) {
                        throw response.error
                    }
                    return response.json()
                })
                .then(task => {
                    alert('2')
                    toDoList.delete(task);
                    this.setState({
                        toDoList,
                        showNewTaskModal: false
    
                    })
                })
                .catch(error => console.log(error))
    
         })
        checkedTasks.clear()
        
        this.setState({
            checkedTasks,
            toDoList,
            toggleConfirmModal: false,
       } )
}

    handleToggleShowCofirmModal = () => {
        this.setState({
            toggleConfirmModal: !this.setState.toggleConfirmModal,
        })
    }

    tooggleHide = () => {
        this.setState({
            toggleConfirmModal: false
        })

    }
   

    handleEditTask = (taskObj) => {
        this.setState({
            editedTask: taskObj,
        })
    }

    handleSaveEditedTask = (taskObj) => {
        let toDoList = [...this.state.toDoList];
        let index = toDoList.findIndex((item) => item.id === taskObj.id);
        toDoList[index] = {
            ...toDoList[index],
            ...taskObj
        }
        this.setState({
            toDoList,
            editedTask: null
        })
        fetch('http://localhost:3004/tasks', {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(taskObj)
        })
            .then(response => {
                
                if (!response.ok) {
                    throw response.error
                }
                return response.json()
            })
            .then(task => {
                
                toDoList.push(task);
                this.setState({
                    toDoList,
                    showNewTaskModal: false

                })
            })
            .catch(error => console.log(error))
        }
    toggleNewTaskModal = () => {
        this.setState({
            showNewTaskModal: !this.state.showNewTaskModal,
        })
    }

    render() {
        const { toDoList, checkedTasks, toggleConfirmModal, editedTask, showNewTaskModal, deleteTasks } = this.state;



        return (
            <Container fluid>
                <nav className="nav">
                <Row className="justify-content-center">
                    <Col>
                        <Button id="Add"
                            variant="info"
                            onClick={this.toggleNewTaskModal}
                            disabled={checkedTasks.size}>
                            Add task
                        </Button>
                    </Col>
                </Row>
                </nav>
                <Row className="mt-5">
                    {

                        toDoList.map((item) => {
                            return (
                                <Col key={item.id}>
                                    <Tasks item={item}
                                        handleRemoveSingleTask={this.handleRemoveSingleTask}
                                        handleCheckedTasks={this.handleCheckedTasks}
                                        disabledButton={checkedTasks.size}
                                        handleEditTask={this.handleEditTask}
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
                {
                 deleteTasks && <Row className="justify-content-center" >
                     <Button
                        onClick={this.handleToggleShowCofirmModal}
                        variant="danger"
                        className="w-25 mt-5"
                        disabled={!checkedTasks.size}
                    >Remove checked tasks</Button>

                </Row>
                }
                <Confirm
                    show={toggleConfirmModal}
                    onHide={this.tooggleHide}
                    handleRemovedCheckedTasks={this.handleRemovedCheckedTasks}
                    count={checkedTasks.size}
                />
                {
                    !!editedTask &&
                    <EditModal
                        onClose={() => this.handleEditTask(null)}
                        editTaskData={editedTask}
                        onSave={this.handleSaveEditedTask(this.id)}
                    />
                }
                {
                    showNewTaskModal &&
                    <AddNewTaskModal
                        handleAddTask={this.handleAddTask}
                        onClose={this.toggleNewTaskModal}
                    />
                }
            </Container>
        )
    }
}