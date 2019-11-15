import { MockedProvider } from '@apollo/react-testing';
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import 'jest-styled-components';

import { NavBar } from './NavBar';

describe("Navbar", () => {
    it("snapshots", () => {
        const tree = renderer.create(
            <MockedProvider addTypename={false}>
                <Router>
                    <NavBar />
                </Router>
            </MockedProvider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
}); 