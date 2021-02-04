import React from 'react';
import { render, screen } from '@testing-library/react';
import MorePlacesSection from './MorePlacesSection';

jest.mock('./SectionHeader', () => () => <div data-testid='section-header'></div>);

describe('MorePlacesSection', () => {

  test('should render all child components', () => {

    const { getByTestId } = render(<MorePlacesSection />);
    expect(getByTestId('section-header')).toBeDefined();

  });

});