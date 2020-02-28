import React from 'react';
import { render, fireEvent, queryByTestId } from '@testing-library/react';
import BoxList from './BoxList';

test('renders without crashing', () => {
  render(<BoxList />)
});

test("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
})

test("can add a new box", function () {
  const { getByLabelText, getByText, queryByText, queryByTestId } = render(<BoxList />);

  // no boxes displayed yet
  expect(queryByText("X")).not.toBeInTheDocument();

  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");
  const backgroundColorInput = getByLabelText("Background Color:");
  const submitBtn = getByText("Add a new box!");


  // fill out input fields and submit form
  fireEvent.change(widthInput, { target: { value: "200"}});
  fireEvent.change(heightInput, { target: { value: "300"}});
  fireEvent.change(backgroundColorInput, { target: { value: "red"}});
  fireEvent.click(submitBtn);

  // new box exists
  expect(queryByText("X")).toBeInTheDocument();

  // Might want to check values of new box
  // const box = queryByTestId("box");
  // console.log(box)
  // expect(box.previousSibling).toHaveStyle(`width : 200`);
})

test("can delete a box", function () {
  const { getByLabelText, getByText, queryByText } = render(<BoxList />);

  // no boxes displayed yet
  expect(queryByText("X")).not.toBeInTheDocument();

  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");
  const backgroundColorInput = getByLabelText("Background Color:");
  const submitBtn = getByText("Add a new box!");


  // fill out input fields and submit form
  fireEvent.change(widthInput, { target: { value: "200"}});
  fireEvent.change(heightInput, { target: { value: "300"}});
  fireEvent.change(backgroundColorInput, { target: { value: "red"}});
  fireEvent.click(submitBtn);

  // new box exists
  expect(queryByText("X")).toBeInTheDocument();

  const deleteBtn = getByText("X");

  // delete the box we just made
  fireEvent.click(deleteBtn);

  // no box should exist anymore
  expect(queryByText("X")).not.toBeInTheDocument();

})