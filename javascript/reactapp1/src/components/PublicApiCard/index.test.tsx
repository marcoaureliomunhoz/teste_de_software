import React from 'react';
import { render, screen } from '@testing-library/react';
import { PublicApiCard } from '.';

describe('PublicApiCard', () => {

    test('should not be rendered if Title was not informed', () => {
        const { container } = render(<PublicApiCard />);

        expect(container).toBeEmptyDOMElement();
    });

    test('should be rendered if Title was informed', () => {
        const { container } = render(<PublicApiCard title='Test' />);

        expect(container).not.toBeEmptyDOMElement();
    });

    test('should render Title with the same value sent as parameter', () => {
        const expectedValue = 'Test';

        render(<PublicApiCard title={expectedValue} />);

        const element = screen.getByRole('heading');

        expect(element.textContent).toBe(expectedValue);
    });

    test('should not render Link if was not informed', () => {
        render(<PublicApiCard title='Test' />);

        const element = screen.queryByRole('link');

        expect(element).toBeNull();
    });

    test('should render Link if was informed', () => {
        const expectedValue = 'https://hello.com';

        render(<PublicApiCard title='Test' externalLink={expectedValue} />);

        const element = screen.getByRole('link');

        expect(element).toHaveAttribute('href', expectedValue);
    });

});
