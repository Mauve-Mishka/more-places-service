import React from 'react';
const { styled } = window;
import CarouselControls from './CarouselControls';
import { colors, query } from '../utils';
import PropTypes from 'prop-types';

const StyledHeaderContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 24px 0;
  h2 {
    font-size: 22px;
    font-weight: 500;
    margin: 0;
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

SectionHeader.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  updatePage: PropTypes.func
};

export default SectionHeader;