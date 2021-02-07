import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CarouselItem from './CarouselItem';

const CarouselSectionContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 0 -10px;
  overflow-x: hidden;
`;

const CarouselSection = ({ page, perPage, places }) => {

  const items = places.map(place => {
    return (
      <CarouselItem key={place.stayName} place={place}/>
    );
  });

  return (
    <CarouselSectionContainer>
      { items }
    </CarouselSectionContainer>
  );
};

CarouselSection.propTypes = {
  page: PropTypes.number,
  perPage: PropTypes.number,
  places: PropTypes.array
};

export default CarouselSection;