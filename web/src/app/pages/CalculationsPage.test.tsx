//TESTING DATA, LOADING, ERROR snapshots
import { MockedProvider, wait } from '@apollo/react-testing';
import { createMemoryHistory } from 'history';
import React from 'react';
import renderer, { act } from 'react-test-renderer';

import { CALCULATIONS_QUERY, CalculationsPage } from './CalculationsPage';

describe("CalculationSPage", () => {
    //loading
    it("snapshots to loading", () => {
        const history = createMemoryHistory(undefined);
        //loading
        const tree = renderer.create(
            <MockedProvider mocks={mocks} addTypename={false}>
                <CalculationsPage history={history}></CalculationsPage>
            </MockedProvider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })

    //data
    it("snapshots to data", async () => {
        const history = createMemoryHistory(undefined);
        //loading
        const component = renderer.create(
            <MockedProvider mocks={mocks} addTypename={false}>
                <CalculationsPage history={history}></CalculationsPage>
            </MockedProvider>
        )

        await act(async () => {
            await wait(0);
            expect(component.toJSON()).toMatchSnapshot();
        });
    })

    //error 
    it("snapshots to error", async () => {
        const history = createMemoryHistory(undefined);
        //loading
        const component = renderer.create(
            <MockedProvider mocks={mocksError} addTypename={false}>
                <CalculationsPage history={history}></CalculationsPage>
            </MockedProvider>
        )

        await act(async () => {
            await wait(0);
            expect(component.toJSON()).toMatchSnapshot();
        });
    })
})   

const mocks = [
    {
        request: {
            query: CALCULATIONS_QUERY
        },
        result: {
            data: {
                calculations:
                    [
                        {
                            "id": "103",
                            "ship": {
                                "id": "104",
                                "name": "a",
                                "country": "b",
                                "__typename": "Ship"
                            },
                            "createdDate": "2019-10-17 17:39:42.113",
                            "__typename": "Calculation"
                        },
                        {
                            "id": "1",
                            "ship": {
                                "id": "2",
                                "name": "ShipName",
                                "country": "ShipCountry",
                                "__typename": "Ship"
                            },
                            "createdDate": "2019-10-17 10:13:01.582",
                            "__typename": "Calculation"
                        }
                    ]
            }
        }
    }
]

const mocksError = [{
    request: {
        query: CALCULATIONS_QUERY
    },
    error: new Error()
}]