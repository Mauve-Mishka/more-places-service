import React from 'react';
import { render, screen } from '@testing-library/react';
import SectionHeader from './SectionHeader';

jest.mock('./CarouselControls', () => () => <div data-testid='carousel-controls'></div>);

describe('SectionHeader', () => {

  const props = {
    page: 1,
    pages: 4,
    updatePage: () => {}
  };

  test('should render all child components', () => {

    const { getByTestId } = render(<SectionHeader {...props}/>);
    expect(getByTestId('carousel-controls')).toBeDefined();

  });

});