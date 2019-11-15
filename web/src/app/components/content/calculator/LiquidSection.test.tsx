import { MockedProvider } from '@apollo/react-testing';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ILiquid, LiquidSection } from './LiquidSection';

describe("LiquidSection", () => {
    //loading
    it("snapshots", () => {
        const liquid: ILiquid = {
            nitrogen: 5,
            methane: 5,
            ethane: 5,
            propane: 5,
            iButane: 5,
            nButane: 5,
            iPentane: 5,
            nPentane: 5,
            nHexane: 5,
        };
        const tree = renderer.create(
            <MockedProvider addTypename={false}>
                <LiquidSection
                    liquid={liquid}
                    setLiquid={() => { }}
                />
            </MockedProvider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
}); 