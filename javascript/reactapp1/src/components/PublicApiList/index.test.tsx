import React from 'react';
import { render, screen } from '@testing-library/react';
import { PublicApiList } from '.';
import { PublicApi } from '../../models/PublicApi';

describe('PublicApiList', () => {

  const items: PublicApi[] = [
    { API: 'xxx', Category: 'xxx', Description: 'xxx', Link: 'xxx' },
    { API: 'yyy', Category: 'yyy', Description: 'yyy', Link: 'yyy' }
  ];

  test('should be rendered', () => {
      const { container } = render(<PublicApiList />);

      expect(container).not.toBeEmptyDOMElement();
  });

  test('should render the number items', () => {
    render(<PublicApiList items={items} />);

    const elements = screen.getAllByRole('listitem');

    expect(elements).toHaveLength(items.length);
  });

});
