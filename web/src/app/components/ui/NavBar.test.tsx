import { MockedProvider } from '@apollo/react-testing';
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from './NavBar';
import { StateProvider } from '../../context/Context';


describe("Navbar", () => {
    it("snapshots", () => {
        const tree = renderer.create(
            <StateProvider accountInfo={
             {
                 userName: "testUserName",
                 name: "testName"
             }   
            }>
                <MockedProvider addTypename={false}>
                    <Router>
                        <NavBar />
                    </Router>
                </MockedProvider>
            </StateProvider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
});  