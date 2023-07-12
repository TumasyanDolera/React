import React, { PureComponent } from 'react';
import { idGenerator } from '../../utils/utils';
// import classes from './addNewTask.module.css';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';





export default class AddNewTask extends PureComponent {
    state = {
        toDoList: [],
        title: '',
        description: '',
        importance: '',
        developer: '',
        startData: '',
        finishData: '',
        
    };
   

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })

    }
   
    handleSelectChange = (event) => {
        this.setState({
            developer: event.target.value
        })
    }


    handleAddTask = (event) => {
        event.preventDefault();
        console.log(this.state)
        const { title, description, importance, developer, startData, finishData } = this.state;
        if (!title || !description || !importance || !developer || !startData || !finishData) {

            return;
        }

        let neweObj = {
            id: idGenerator(),
            title,
            description,
            importance,
            developer,
            startData,
            finishData,
        }

        this.props.handleAddTask(neweObj);

        let toDoList = [...this.state.toDoList];
        toDoList.push(neweObj);
        this.setState({
            toDoList,
            title: '',
            description: '',
            importance: '',
            developer: '',
            startData: '',
            finishData: '',
        })
    }

    handleAddKeyDown = (event) => {
        if (event.key === "Enter") {
            this.handleAddTask(event)
        }


    }

    handleRadioChange = (event) => {
        this.setState({ importance: event.target.value })
    }

    render() {
        const { title, developer, importance, description, startData, finishData, } = this.state;
        const { disabledButton } = this.props;

        return ( <Form onSubmit={this.handleAddTask} onKeyDown={this.handleAddKeyDown}id="Form">
                <Form.Group onSubmit={this.handleAddTask} onKeyDown={this.handleAddKeyDown} >
                    <Form.Label htmlFor="textInput">Title</Form.Label>
                    <Form.Control type="text" id="Title" placeholder="Title" name="title" value={title} onChange={this.handleInputChange} />
                </Form.Group>
                <Form.Group >
                    <Form.Label htmlFor="textarea">Description</Form.Label>
                    <Form.Control as="textarea" rows={1} id="TextInput" placeholder="Description" onChange={this.handleInputChange}name={description} />
                </Form.Group>
                <Form.Group >
                    <Form.Label htmlFor="textInput">StartData</Form.Label>
                    <Form.Control type="date" id="Date" placeholder="StartDate" name={startData} onChange={this.handleInputChange} />
                </Form.Group>
                <Form.Group >
                    <Form.Label htmlFor="textInput">FinishData</Form.Label>
                    <Form.Control type="date" id="Date" placeholder="FinishDate" name={finishData} onChange={this.handleInputChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="Select">Choose developer </Form.Label>
                    <Form.Select id="Select" value={developer} onChange={this.handleSelectChange}>
                        <option value="">Select a developer</option>
                        <option value="Aksana">Aksana</option>
                        <option value="Hovo">Hovo</option>
                        <option value="Vardges">Vardges</option>
                        <option value="Armen">Armen</option>
                        <option value="ELizabet">Elizabet</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group >
                    <Form.Group  >
                        <Form.Label >
                            Importance:
                        </Form.Label>

                        <Form.Check

                            label="low"
                            type="radio"
                            name="low"
                            value="low"
                            checked={importance === 'low'}
                            onChange={this.handleRadioChange}
                        />

                        <Form.Check
                            label="medium"
                            type="radio"
                            name="medium"
                            value="medium"
                            checked={importance === 'medium'}
                            onChange={this.handleRadioChange}
                        />

                        <Form.Check
                            label="high"
                            type="radio"
                            name="high"
                            value="high"
                            checked={importance === 'high'}
                            onChange={this.handleRadioChange}
                        />

                    </Form.Group>
                    </Form.Group>
                    <Button variant="primary" onClick={this.props.handleAddTask}type="submit" disabled={disabledButton} id="Submit">Submit</Button>
               
               
            </Form>
        )
    }

}


AddNewTask.propTypes = {
    handleAddTask: PropTypes.func,
    disabledButton: PropTypes.number,
    // disabledButton:PropTypes.number.isRequired,
    // disabledButton:PropTypes.oneOf([1,5,6,'kkk', true])
    // disabledButton:PropTypes.oneOfType([PropTypes.number, PropTypes.array])
}

