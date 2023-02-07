import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Login = (modal, toggle, args) => {
  return (
    <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalBody>
            <div className = "form-group">
                <label>Task Name</label>
                <input type="text" className = "form-control" />
            </div>
            <div className = "form-group">
                <label>Description</label>
                <textarea rows = "5" className = "form-control" ></textarea>
            </div>
        </ModalBody>
        
    </Modal>
  )
}

export default Login