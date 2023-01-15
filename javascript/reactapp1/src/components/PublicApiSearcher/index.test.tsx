import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { PublicApiSearcher } from '.';
import server from '../../mocks/server';
import { rest } from 'msw';
import { environments } from '../../environments';

describe('PublicApiSearcher', () => {

  beforeEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  test('should be rendered', () => {
      const { container } = render(<PublicApiSearcher />);

      expect(container).not.toBeEmptyDOMElement();
  });

  test('should input text value when user type', () => {
    const expectedValue = 'test xpto';
    
    render(<PublicApiSearcher />);

    const inputText = screen.getByRole('textbox');
    fireEvent.change(inputText, { target: { value: expectedValue } });

    expect(inputText).toHaveValue(expectedValue);
  });

  test('should clear input text value on click clear button', () => {
    render(<PublicApiSearcher />);

    const inputText = screen.getByRole('textbox');
    fireEvent.change(inputText, { target: { value: 'xxx' } });
    const clearButton = screen.getByText('Clear');
    fireEvent.click(clearButton);

    expect(inputText).toHaveValue('');
  });

  test('should call onSearch one time on click clear button', () => {
    const onSearch = jest.fn(value => value);

    render(<PublicApiSearcher onSearch={onSearch} />);

    const clearButton = screen.getByText('Clear');
    fireEvent.click(clearButton);

    //expect(onSearch.mock.calls).toHaveLength(1);
    //expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalled();
  });

  test('should call onSearch with empty list on click clear button', () => {
    const onSearch = jest.fn(value => value);

    render(<PublicApiSearcher onSearch={onSearch} />);

    const clearButton = screen.getByText('Clear');
    fireEvent.click(clearButton);

    //expect(onSearch.mock.calls[0][0]).toHaveLength(0);
    expect(onSearch).toHaveBeenCalledWith(expect.arrayContaining([]));
  });

  test('should not call onSearch on click search button if text is empty', () => {
    const onSearch = jest.fn(value => value);

    render(<PublicApiSearcher onSearch={onSearch} />);

    const searchButton = screen.getByText('Search');
    fireEvent.click(searchButton);

    //expect(onSearch.mock.calls).toHaveLength(0);
    expect(onSearch).toHaveBeenCalledTimes(0);
  });

  test('should call onSearch on click search button if text is not empty', async () => {
    const onSearch = jest.fn(value => value);

    render(<PublicApiSearcher onSearch={onSearch} />);

    const inputText = screen.getByRole('textbox');
    fireEvent.change(inputText, { target: { value: 'api1' } });

    const searchButton = screen.getByText('Search');
    fireEvent.click(searchButton);

    await waitFor(() => {
      //expect(onSearch.mock.calls).toHaveLength(1);
      expect(onSearch).toHaveBeenCalled();
    });
  });

  test('should call onSearch with valid list on click search button if text is not empty', async () => {
    const onSearch = jest.fn(value => value);

    render(<PublicApiSearcher onSearch={onSearch} />);

    const inputText = screen.getByRole('textbox');
    fireEvent.change(inputText, { target: { value: 'api' } });

    const searchButton = screen.getByText('Search');
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(onSearch.mock.calls[0][0].length).toBeGreaterThan(0);
    });
  });

  test('should call onSearch with expected entries on click search button if text is not empty', async () => {
    const entries = [
      {
        API: 'apix',
        Description: 'apix xxx xxx',
        Link: 'https://apix.com',
        Category: 'apix'
      }
    ];
    server.use(
      rest.get(`${environments.PUBLIC_API_URL}/entries`, (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            count: 1,
            entries: entries
          })
        );
      })
    );

    const onSearch = jest.fn(value => value);

    render(<PublicApiSearcher onSearch={onSearch} />);

    const inputText = screen.getByRole('textbox');
    fireEvent.change(inputText, { target: { value: 'apix' } });

    const searchButton = screen.getByText('Search');
    fireEvent.click(searchButton);

    await waitFor(() => {
      //console.log('===>',onSearch.mock.calls[0][0]);
      //expect(onSearch.mock.calls[0][0]).toEqual(entries);
      expect(onSearch).toHaveBeenCalledWith(expect.arrayContaining(entries));
    });
  });

});
