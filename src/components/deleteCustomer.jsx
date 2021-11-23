import React, { Component } from 'react';

const DeleteCustomer = (props) => {

    const { customer, onDelete } = props;

    return (
        <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(customer)}
        >
            Delete
        </button>
    )
}

export default DeleteCustomer;