import {fireEvent, screen} from "@testing-library/react";
import AddressesList from "../components/AddressesList";
import {renderWithProviders} from "./testUtils";

test('renders validation error when no text is input', () => {
    renderWithProviders(<AddressesList typeOfAddress="origin" />);

    fireEvent.click(screen.getByTestId("add-address-button"));

    expect(screen.getByTestId("error").textContent).toEqual("Type in address");
});

test('renders list item when adding address', () => {
    renderWithProviders(<AddressesList typeOfAddress="origin" />);

    fireEvent.change(screen.getByRole("textbox"), {target: {value: "123 Test Street"}});
    fireEvent.click(screen.getByTestId("add-address-button"));

    expect(screen.getByTestId("address-0").textContent).toMatch("123 Test Street")
});

test('deletes list item', () => {
    renderWithProviders(<AddressesList typeOfAddress="origin" />);

    fireEvent.change(screen.getByRole("textbox"), {target: {value: "123 Test Street"}});
    fireEvent.click(screen.getByTestId("add-address-button"));
    fireEvent.click(screen.getByTestId("delete-0"));

    expect(screen.queryByTestId("address-0")).not.toBeInTheDocument();
});
