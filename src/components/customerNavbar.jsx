import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const CustomerNavbar = () => {
    const customers = useSelector(state => state.customer.customers)
    return (
        <div>
            {customers.length}
        </div>
    )
}

export default CustomerNavbar;