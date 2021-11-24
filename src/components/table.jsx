import React, { Component } from "react";
import InfoModals from "./infoModals";
import DeleteCustomer from './deleteCustomer'
import AddCustomer from './addCustomer'

class Table extends Component {
  state = {
    customers: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => this.setState({ customers: json }));
  }


  render() {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">email</th>
              <th scope="col"></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((customer) => (
              <tr key={customer.id}>
                <th scope="row">{customer.id}</th>
                <td>{customer.name}</td>
                <td>{customer.phone}</td>
                <td>{customer.email}</td>
                <td>
                  <InfoModals
                    address={customer.address}
                    company={customer.company}
                    website={customer.website}
                  />
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm position-relative"
                  >
                    Inbox
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      99+
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                </td>
                <td>
                  <AddCustomer customer={customer} />

                </td>
                <td>
                  <DeleteCustomer customer={customer} />

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Table;
