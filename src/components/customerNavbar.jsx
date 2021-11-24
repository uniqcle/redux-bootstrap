import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCustomers } from '../store/asyncActions/customers'

const CustomerNavbar = () => {
    const dispatch = useDispatch();
    const customers = useSelector(state => state.customer.customers)

    const handleGetManyCustomers = (many) => {
        console.log(many)
        dispatch(fetchCustomers())
    }

    return (
        <div>
            {customers.length}

            <button className="btn btn-primary" onClick={() => handleGetManyCustomers(45)}>get many customers</button>
        </div>
    )
}

export default CustomerNavbar;