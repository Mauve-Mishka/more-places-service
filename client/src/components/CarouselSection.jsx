import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CarouselItem from './CarouselItem';

const CarouselSectionContainer = styled.div`
  overflow-x: hidden;
`;

const CarouselContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 0 -10px;
  transition: transform 0.75s;
  transform: translateX(calc((${props => props.page} - 1) * -100%))
`;

const CarouselSection = ({ page, perPage, places }) => {

  const items = places.map(place => {
    return (
      <CarouselItem key={place.stayName} place={place}/>
    );
  });

  return (
    <CarouselSectionContainer>
      <CarouselContainer page={page}>
        { items }
      </CarouselContainer>
    </CarouselSectionContainer>
  );
};

CarouselSection.propTypes = {
  page: PropTypes.number,
  perPage: PropTypes.number,
  places: PropTypes.array
};

export default CarouselSection;