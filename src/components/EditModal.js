import React, { PureComponent } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


class EditModal extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            ...props.editTaskData
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

    handleAddEditedTask = (event) => {
        event.preventDefault();

        const { id,title, description, importance, developer } = this.state;
        if (!title || !description || !importance || !developer) {

            return;
        }

        let neweObj = {
            id: id,
            title,
            description,
            importance,
            developer,
        }

        this.props.onSave(neweObj);

        // let toDoList = [...this.state.toDoList];
        // toDoList.push(neweObj);
        // this.setState({
        //     toDoList,
        //     title: '',
        //     description: '',
        //     importance: '',
        //     developer: '',
        // })
    }

    handleAddKeyDown = (event) => {
        if (event.key === "Enter") {
            this.handleAddEditedTask(event)
        }

    }

    render() {
        const { title, developer, importance, description } = this.state;
        return (
            <Modal
                // {...this.props}
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

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword" onChange={this.handleInputChange}>
                            <Form.Label column sm={2}>
                                Description
                            </Form.Label>
                            <Col sm={10}>
                                <FloatingLabel
                                    controlId="floatingTextarea"
                                    label="Description"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        name="description"
                                        value={description} />
                                </FloatingLabel>
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
                                        name="low"
                                        id="formHorizontalRadios1"
                                        checked={importance === "low"}
                                        onChange={this.handleRadioChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="medium"
                                        name="medium"
                                        id="formHorizontalRadios2"
                                        checked={importance === "medium"}
                                        onChange={this.handleRadioChange}

                                    />
                                    <Form.Check
                                        type="radio"
                                        label="high"
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
                    <Button variant='primary' onClick={this.handleAddEditedTask}>Confirm</Button>
                    <Button variant="secondary" onClick={this.props.onClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

}


export default EditModal;