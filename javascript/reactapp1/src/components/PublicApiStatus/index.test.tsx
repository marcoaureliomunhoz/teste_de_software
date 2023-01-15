import React from 'react';
import { render, screen } from '@testing-library/react';
import { PublicApiStatus } from '.';

describe('PublicApiStatus', () => {

  test('should be rendered', () => {
      const { container } = render(<PublicApiStatus />);

      expect(container).not.toBeEmptyDOMElement();
  });

  test('should render "count" items found', () => {
    render(<PublicApiStatus count={3}/>);

    const element = screen.getByRole('status');

    expect(element).toHaveTextContent('3');
  });

  test('should render "none" items found', () => {
    render(<PublicApiStatus count={0}/>);

    const element = screen.getByRole('status');

    expect(element).toHaveTextContent('None');
  });

});
