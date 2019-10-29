import { MockedProvider } from '@apollo/react-testing';
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { TileLink } from './TileLink';

describe("CalculateFormContainer", () => {
    it("snapshots", () => {
        const tree = renderer.create(
            <MockedProvider addTypename={false}>
                <Router>
                    <TileLink
                        image=""
                        text="text"
                        link="link"
                        description="description"
                    />
                </Router>
            </MockedProvider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
}); 