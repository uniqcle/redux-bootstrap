import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DeleteCustomer = (props) => {

    const { customer } = props;
    const dispatch = useDispatch();
    //const customers = useSelector(state => state.customer.customers)

    const handleDelete = (customer) => {
        console.log(customer)
        dispatch({ type: "REMOVE_CUSTOMER", payload: customer })
    }

    return (
        <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => handleDelete(customer)}
        >
            Delete
        </button>
    )
}

export default DeleteCustomer;