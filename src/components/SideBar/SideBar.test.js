import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import SideBar from './SideBar';

test('renders a div with the role of sidebar', () => {
    const { getByRole } = render(
        <Provider store={store}>
            <Router>
                <SideBar />
            </Router>
            
        </Provider>
    );

    expect(getByRole(/menubar/i)).toBeInTheDocument();
});