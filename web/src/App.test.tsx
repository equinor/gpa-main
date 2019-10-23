import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { MockedProvider } from '@apollo/react-testing';
import { MemoryRouter as Router } from 'react-router-dom';
import { App } from './App';

describe("Application", () => {
  it('renders without crashing', () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(
      <MockedProvider addTypename={true}>
        <Router>
          <App />
        </Router>
      </MockedProvider>,
      document.createElement('div'),
    );
  });
})