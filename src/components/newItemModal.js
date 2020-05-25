import React from "react";
import { Modal, Button, Container, Form } from "react-bootstrap";
import Wrapper from '../utils/wrapperAxios';


const NewItemModal = (props) => {
    const { show, handleShow, updateItems } = props;

    let parametrs = {};

    const addItem = () => {
        let someElement = document.getElementById("textErrorModal");

        if (parametrs.title === '' || parametrs.description === '') {
            someElement.innerHTML = 'Fill in all fields.';
        } else {
            const newPost = {
                title: parametrs.title,
                description: parametrs.description,
                price: 0,
                cost: 0,
                state: 0,
                incubator: "string",
                investor: "string",
                n_shots: true,
                n_investor: true,
                n_markets: true,
                url_news: "string",
                url: "string",
                creation_time: "string",
                phone: "string",
                author: 1
            }
            const wrapper = new Wrapper();
            wrapper.post('', newPost)
                .then(res => {
                    handleShow();
                    updateItems();
                })
                .catch(err => {
                    handleShow();
                    someElement.innerHTML = err;
                })
        }
    }

    function handleChange(event) {
        parametrs[event.target.name] = event.target.value
    }

    return (
        <>
            <Modal show={show} onHide={handleShow} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title >Add new item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Text id="textErrorModal" > </Form.Text>
                    <Container>
                        <Form.Group >
                            <Form.Label>Title:</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                onChange={(e) => handleChange(e)}
                                defaultValue={parametrs.title}
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="3"
                                name="description"
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleShow}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => addItem()}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
};

export default NewItemModal

