import { MockedProvider } from '@apollo/react-testing';
import React from 'react';
import renderer from 'react-test-renderer';

import { UserMessage } from './UserMessage';

describe("UserMessage", () => {
    it("snapshots", () => {
        const tree = renderer.create(
            <MockedProvider addTypename={false}>
                <UserMessage text={"text"} type={"loading"} />
            </MockedProvider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
});