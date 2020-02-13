// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ContactForm from './components/ContactForm';

import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';

test('species, age, notes inputs are rendered', () => {
    const { getByLabelText } = render(<ContactForm />);

    getByLabelText(/First Name/i);
    getByLabelText(/Last Name/i);
    getByLabelText(/Email*/i);
    getByLabelText(/Message/i);

    expect(speciesInput.value).toBe('Test Species');
    expect(ageInput.value).toBe('Test Age');
    expect(notesInput.value).toBe('Test note');

  });