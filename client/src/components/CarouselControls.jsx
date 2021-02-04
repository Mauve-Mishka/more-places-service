import React from 'react';
import styled from 'styled-components';
import { query } from '../utils';
import PropTypes from 'prop-types';

const CarouselControlsContainer = styled.div`
  align-items: center;
  display: none;
  flex-direction: row;
  justify-content: space-between;
  width: 120px;
  p {
    font-size: 1.4rem;
  }
  @media (min-width: ${query.medium}) {
    display: flex;
  }
`;

const ArrowContainer = styled.div`
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.10), 0 0 4px rgba(0, 0, 0, 0.10), 0 2px 4px rgba(0, 0, 0, 0.10);
  background-color: white;
  display: flex;
  height: 30px;
  justify-content: center;
  width: 30px;
  transition: transform .25s;
  :hover {
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.05), 0 2px 16px rgba(0, 0, 0, 0.05), 0 6px 16px rgba(0, 0, 0, 0.05);
    transform: scale(1.05);
  }
  :active {
    box-shadow: none;
    transform: scale(1);
  }
`;

const CarouselControls = ({ page, pages, updatePage }) => {

  return (
    <CarouselControlsContainer>
      <p>{`${page} / ${pages}`}</p>
      <ArrowContainer onClick={() => updatePage(-1)}>
        <p>{'<'}</p>
      </ArrowContainer>
      <ArrowContainer onClick={() => updatePage(1)}>
        <p>{'>'}</p>
      </ArrowContainer>
    </CarouselControlsContainer>
  );
};

CarouselControls.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  updatePage: PropTypes.function
};

export default CarouselControls;