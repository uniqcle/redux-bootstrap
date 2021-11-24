import { addManyCustomerAction } from "../customerReducer"

export const fetchCustomers = () => {
    return (dispatch) => {

        setTimeout(() => {
            dispatch(addManyCustomerAction(123))
        }, 1500)

    }
}