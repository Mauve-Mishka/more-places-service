import React from 'react';
import { render, screen } from '@testing-library/react';
import CarouselControls from './CarouselControls';

describe('CarouselControls', () => {

  const props = {
    page: 1,
    pages: 4,
    updatePage: () => {}
  };

  test('should display correct page fraction', () => {

    const { getByText } = render(<CarouselControls {...props} />);
    expect(getByText('1 / 4')).toBeDefined();

  });

});