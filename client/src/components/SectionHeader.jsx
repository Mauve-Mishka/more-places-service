import React from 'react';
import styled from 'styled-components';
import CarouselControls from './CarouselControls';
import { colors, query } from '../utils';

const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
  h2 {
    font-size: 2.2rem;
    font-weight: 500;
  }
  @media (min-width: ${query.medium}) {
    padding: 0 40px;
  }
  @media (min-width: ${query.large}) {
    padding: 0 80px;
  }
`;

const SectionHeader = ({ page, pages, updatePage }) => {
  return (
    <StyledHeaderContainer>
      <h2>More places to stay</h2>
      <CarouselControls page={page} pages={pages} updatePage={updatePage} />
    </StyledHeaderContainer>
  );
};

export default SectionHeader;