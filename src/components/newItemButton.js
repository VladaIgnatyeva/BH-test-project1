import React, { Component, useState } from 'react';
import NewItemModal from './newItemModal'


function NewItemButton(props) {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    };

    const updateItems = () => {
        props.updateItems();
    }

    return (
        <div className="wrapp-button">
            <button type="button" className=" my-btn btn btn-dark" onClick={handleShow}>Post</button>        
            <NewItemModal {...{ show, handleShow, updateItems}} />
        </div>
    );
}

export default NewItemButton;