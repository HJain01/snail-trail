import {fireEvent, render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../store/store";
import AddressesList from "../components/AddressesList";

test('renders validation error when no text is input', () => {
    render(
        <Provider store={store}>
            <AddressesList typeOfAddress="origin" />
        </Provider>);

    fireEvent.click(screen.getByTestId("add-address-button"));

    expect(screen.getByTestId("error").textContent).toEqual("Type in address");
})
// test('renders popup when no text is input', () => {
//     render(<AddressesInput typeOfAddress="origin" />);
//
//     fireEvent.change(screen.getByTestId("address-input"), {target: {value: "123 Test Street"}});
//     fireEvent.click(screen.getByTestId("add-address-button"));
//
//     expect(screen.getByTestId("address-input").textContent).toMatch("123 ")
// })