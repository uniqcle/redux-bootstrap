import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const AddCustomer = (props) => {
    const { customer, onAdd } = props;
    const dispatch = useDispatch();

    const addCustomer = customer => {
        dispatch({ type: "ADD_CUSTOMER", payload: customer })
    }

    return (

        <button type="button" className="btn btn-primary btn-sm" onClick={() => addCustomer(customer)}>
            +
        </button>

    )
}

export default AddCustomer;