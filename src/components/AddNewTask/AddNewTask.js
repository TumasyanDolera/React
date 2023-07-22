import React, { PureComponent } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { idGenerator } from '../../utils/utils';
import classes from './addNewTask.module.css';
import PropTypes from 'prop-types';
import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';

class AddNewTaskModal extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            toDoList: [],
            title: '',
            description: '',
            importance: '',
            developer: '',
        }
    }


    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })

    }

    handleRadioChange = (event) => {
        this.setState({ importance: event.target.name })
    }

    handleSelectChange = (event) => {
        this.setState({
            developer: event.target.value
        })
    }


    handleAddTask = (event) => {
        event.preventDefault();
        alert('0000')
        console.log(this.state)
        const { title, description, importance, developer} = this.state;
        if (!title || !description || !importance || !developer) {

            return;
        }

        let neweObj = {
            // id: idGenerator(),
            title,
            description,
            importance,
            developer,
            // startData,
            // finishData,
        }

        this.props.handleAddTask(neweObj);

        let toDoList = [...this.state.toDoList];
        toDoList.push(neweObj);
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
        const { title, developer, importance, description } = this.state;
        return (
            <Modal className={classes.Form}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={true}
                onHide={this.props.onClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit task
                    </Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <Form onKeyDown={this.handleAddKeyDown}>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Title
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Title" name="title" value={title} onChange={this.handleInputChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword" >
                            <Form.Label column sm={2}>
                                Description
                            </Form.Label>
                            <Col sm={10}>

                                    <Form.Control
                                        controlId="floatingTextarea"
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        name="description"
                                        value={description} 
                                        onChange={this.handleInputChange}
                                        />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label as="legend" column sm={2}>
                                Developer
                            </Form.Label>

                            <Col sm={10}>
                                <Form.Select aria-label="Default select example" value={developer} onChange={this.handleSelectChange}>
                                    <option value="">Select a developer</option>
                                    <option value="Aksana">Aksana</option>
                                    <option value="Hovo">Hovo</option>
                                    <option value="Vardges">Vardges</option>
                                    <option value="Armen">Armen</option>
                                    <option value="ELizabet">Elizabet</option>
                                    <option value="Dolera">Dolera</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <fieldset>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                    Radios
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label="low"
                                        value="low"
                                        name="low"
                                        id="formHorizontalRadios1"
                                        checked={importance === "low"}
                                        onChange={this.handleRadioChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="medium"
                                        name="medium"
                                        value="medium"
                                        id="formHorizontalRadios2"
                                        checked={importance === "medium"}
                                        onChange={this.handleRadioChange}

                                    />
                                    <Form.Check
                                        type="radio"
                                        label="high"
                                        value="high"
                                        name="high"
                                        id="formHorizontalRadios3"
                                        checked={importance === "high"}
                                        onChange={this.handleRadioChange}

                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='primary' onClick={this.handleAddTask}>Add</Button>
                    <Button variant="secondary" onClick={this.props.onClose}>Cansel</Button>
                </Modal.Footer>
            </Modal>
        );
    }

}



AddNewTaskModal.propTypes = {
    handleAddTask:PropTypes.func,
    onClose:PropTypes.func
}


export default AddNewTaskModal;