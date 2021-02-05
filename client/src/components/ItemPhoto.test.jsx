import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemPhoto from './ItemPhoto';

jest.mock('./SuperhostBadge', () => () => <div data-testid='superhost-badge'></div>);
jest.mock('./SavedBadge', () => () => <div data-testid='saved-badge'></div>);

describe('ItemPhoto', () => {

  test('should render SuperhostBadge if isSuperhost is true', () => {

    const props = {
      isSuperhost: true,
      isSaved: true,
      thumbnailUrl: ''
    };

    const { getByTestId } = render(<ItemPhoto {...props} />);
    expect(getByTestId('superhost-badge')).toBeDefined();

  });

  test('should not render SuperhostBadge if isSuperhost is false', () => {

    const props = {
      isSuperhost: false,
      isSaved: true,
      thumbnailUrl: ''
    };

    const { queryByTestId } = render(<ItemPhoto {...props} />);
    expect(queryByTestId('superhost-badge')).toBe(null);

  });

  test('should render SavedBadge', () => {

    const props = {
      isSuperhost: true,
      isSaved: true,
      thumbnailUrl: ''
    };

    const { getByTestId } = render(<ItemPhoto {...props} />);
    expect(getByTestId('saved-badge')).toBeDefined();

  });

});