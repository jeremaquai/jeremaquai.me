import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import { store } from '../../app/store';
import Header from './Header';

test('renders a Header element', () => {
    const { getByRole } = render(
        <Provider store={store}>
            <Router>
                <Header />
            </Router>
        </Provider>
    );

    expect(getByRole(/banner/i)).toBeInTheDocument();
});

test('renders an <h1> element that displays Jeremaquai.me in the header that is also a link', () => {
    const { getByRole } = render(
        <Provider store={store}>
            <Router>
                <Header />
            </Router>
        </Provider>
    );

    console.log(getByRole);

    expect(getByRole('heading', {level: 1, name: /jeremaquai.me/i})).toBeInTheDocument();
    expect(getByRole(/link/i, {name: /jeremaquai.me/i})).toBeInTheDocument();
});
