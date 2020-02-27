import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';
import BoxList from './BoxList';

test('renders without crashing', () => {
  render(<NewBoxForm />)
});

test("matches snapshot", function () {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
})

test("form input display should update with each key stroke", function () {
  const { getByLabelText, getByTestId } = render(<BoxList />);

  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");
  const backgroundColorInput = getByLabelText("Background Color:");
  const form = getByTestId('NewBoxForm');

  // fill out input fields with mock key strokes
  fireEvent.change(widthInput, { target: { value: "2"}});
  fireEvent.change(heightInput, { target: { value: "3"}});
  fireEvent.change(backgroundColorInput, { target: { value: "red"}});

  // input fields should have updated display values
  expect(form).toHaveFormValues({
    width: 2,
    height: 3,
    backgroundColor: "red"
  });
})

test("form inputs should become empty on form submission", function () {
  const { getByLabelText, queryByText, getByTestId } = render(<BoxList />);

  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");
  const backgroundColorInput = getByLabelText("Background Color:");
  const submitBtn = queryByText("Add a new box!");
  const form = getByTestId('NewBoxForm');
  // console.log("form: ", form)

  // fill out and submit form
  fireEvent.change(widthInput, { target: { value: "200"}});
  fireEvent.change(heightInput, { target: { value: "300"}});
  fireEvent.change(backgroundColorInput, { target: { value: "red"}});
  fireEvent.click(submitBtn);

  // input fields should be empty
  expect(form).toHaveFormValues({
    width: null,
    height: null,
    backgroundColor: ""
  });
})